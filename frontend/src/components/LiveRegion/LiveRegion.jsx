// frontend > src > components > LiveRegion > LiveRegion.jsx

import PropTypes from 'prop-types';
import { STATUS_MESSAGES } from '../../constants';
import styles from './LiveRegion.module.css';

const LiveRegion = ({ loading }) => { // Check where this loading comes from
    return (
        <div
            className={styles['sr-only']}
            aria-live="polite"
            aria-relevant="additions text"
        >
            {loading && STATUS_MESSAGES.LOADING}
        </div>
    );
};

LiveRegion.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default LiveRegion;