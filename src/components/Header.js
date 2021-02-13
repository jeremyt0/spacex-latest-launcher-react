// import React from 'react'
import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return (
        <>
        <header className="header" style={headerStyles}> 
            <h1>{ title }</h1>
        </header>  
        </>
    )
}


Header.defaultProps = {
    title: 'Title of application',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// Styles
const headerStyles = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Header
