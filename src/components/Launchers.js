import PropTypes from 'prop-types';

import Launcher from './Launcher';

const Launchers = ({ title, launchers }) => {
    return (
        <div>

            { launchers.map(
                launcher =>
                <Launcher title={title} launchers={launcher} />
            ) }
            
        </div>
    )
}

// Props
Launchers.defaultProps = {
    title: '',
    launchers: '',
}

Launchers.propTypes = {
    title: PropTypes.string,
    launchers: PropTypes.array,
}

export default Launchers
