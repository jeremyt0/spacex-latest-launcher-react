import PropTypes from 'prop-types';

const CardContent = ({ content }) => {
    return (
        <>
            {/* { JSON.stringify(content) } */}


            { Object.keys(content).map(
                key =>
                <div key={content.name}> { key }: { content[key] }</div>
            ) }

        </>
    )
}

CardContent.defaultProps = {
    content: {content: 'Some body text'},
}

CardContent.propTypes = {
    content: PropTypes.object,
}

export default CardContent
