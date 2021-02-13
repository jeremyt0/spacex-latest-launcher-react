import PropTypes from 'prop-types';

const Launcher = ({ title, launcher }) => {
    return (
        <>
        <div className={ launcherStyles }>
            <h3>{ title }</h3>
            
            <div style={ titleStyles }>
                <h1>{ launcher.name } </h1>
                <img src={ launcher.links.patch.small } alt={ launcher.name + 'logo'} style={ logoStyle } />
            </div>
                
            <h5>{ launcher.date_local }</h5>
            <div> { launcher.details } </div>  
        </div>
        </>
    )
}

// Props
Launcher.defaultProps = {
    title: 'Launcher',
    launcher: '',
}

Launcher.propTypes = {
    title: PropTypes.string,
    launcher: PropTypes.object,
}

// Styles
const launcherStyles = {

}

const titleStyles = {
    display: 'flex',
    justifyContent: 'center'
}

const logoStyle = {
    maxHeight: '100px',
    maxWidth: '100px'
}

export default Launcher
