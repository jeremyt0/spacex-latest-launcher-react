import PropTypes from 'prop-types';

import CardContent from './CardContent';

const Card = ({ title, content }) => {
    return (
        <>
        <div style={ cardStyle }>
            <div className="title">
                { title }
            </div>
            
            <CardContent content={content} />
        </div>

        </>
    )
}


// Props
Card.defaultProps = {
    title: 'Card title',
    content: '',
}

Card.propTypes = {
    title: PropTypes.string,
    content: PropTypes.object,
}

// Styles
const cardStyle = {
    background: 'lightblue',
    border: 'solid 1px black',
}



export default Card
