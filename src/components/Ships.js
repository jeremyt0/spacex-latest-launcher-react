import PropTypes from 'prop-types';

import Ship from './Ship';

const Ships = ({ title, shipsData }) => {
    return (
        <>

            <h3>{title}</h3>
        <div style={ shipsStyles }>

            { Object.keys(shipsData).map(
                key => 
                <Ship key={key} title='ship' ship={shipsData[key]} />
            ) }
            
        </div>
        </>
    )
}

// Props
Ships.defaultProps = {
    title: 'Ships',
    shipsData: '',
}

Ships.propTypes = {
    shipsData: PropTypes.array,
}

// Styles
const shipsStyles = {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
}

export default Ships
