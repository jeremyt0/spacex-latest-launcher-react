import { useState, useEffect } from 'react';

import './App.css';

import Header from './components/Header';
// import Wrapper from './components/Wrapper';
// import Card from './components/Card';
import Ships from './components/Ships';
import Launcher from './components/Launcher';



const App = () => {
  const [launchDetails, setLaunchDetails] = useState({})  // List of launch details 
  // const [shipsID, setShipsID] = useState([])              // List of ship ids
  const [ships, setShips] = useState([])                  // List ships details

  useEffect(() => {
    const getLaunchInfo = async () => {
      const launchInfoFromAPI = await fetchLaunchInfo();
      return launchInfoFromAPI
    }
  
    const getShipsInfo = async (shipsid) => {
      const query = {
        "query": {
          "_id": {
            $in: shipsid
          }
        },
        "options": {}
      }
      // Get each ship infomation
      const shipDataFromAPI = await fetchShipInfo(query);
      return shipDataFromAPI.docs
    }
    
    const main = async () => {
      // Launcher
      const launchInfo = await getLaunchInfo();
      setLaunchDetails(launchInfo)
      // setShipsID(launchInfo.ships)
      console.log(launchInfo)
      // Ships
      const shipsInfo = await getShipsInfo(launchInfo.ships)
      setShips(shipsInfo)
      // console.log(shipsInfo)
    }

    main()
    
  }, [])
  

  const fetchLaunchInfo = async () => {
    console.log("Launch info: Fetching")
    const res = await fetch('https://api.spacexdata.com/v4/launches/latest');
    const data = await res.json();
    return data;
  }

  const fetchShipInfo = async (query) => {
    console.log("Ship: Fetching")
    const res = await fetch('https://api.spacexdata.com/v4/ships/query', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(query)
    })
    const data = await res.json()
    return data
  }

  return (
    <>
      <div className="App">
        <div className="container">
          <Header title='SpaceX Latest' />

          <Launcher title='Latest Launcher' launcher={ launchDetails }  />

          <Ships title='Ships' shipsData={ ships } />

        </div>
      </div>
    </>
  );
}

export default App;
