import PropTypes from 'prop-types';
import Card from './Card';

const Wrapper = ({ title, contents }) => {
    return (
        <>
        <div style={ wrapperStyles }>

            <h3>{ title }</h3>

            { contents.map(
                content => 
                <Card content={content} />
            ) }
            
        </div>
        </>
    )
}

// Props
Wrapper.defaultProps = {
    title: '',
    contents: '',
}

Wrapper.propTypes = {
    contents: PropTypes.array,
}

// Styles
const wrapperStyles = {
    // display: 'flex',
}


export default Wrapper
