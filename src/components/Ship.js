import PropTypes from 'prop-types';

const Ship = ({ title, ship }) => {
    return (
        <>

        <div style={ shipStyles }>
            <h2>{ ship.name }</h2>
            <p>Type: { ship.type }</p>
            <p>Homeport: { ship.home_port }</p>
            <img src={ship.image} alt={ship.name + 'image'} style={shipImgStyles} />


        </div>
        </>
    )
}

// Props
Ship.defaultProps = {
    title: 'Ship',
    ship: '',
}

Ship.propTypes = {
    title: PropTypes.string,
    ship: PropTypes.object,
}

// Styles
const shipStyles = {
    border: 'solid 1px black',
    borderRadius: '10px',
}
const shipImgStyles = {
    height: '150px',
    width: '200px',
}

export default Ship
