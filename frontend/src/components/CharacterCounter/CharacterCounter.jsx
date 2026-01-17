// frontend / src / components / CharacterCounter / CharacterCounter.jsx

import pluralize from 'pluralize';
import PropTypes from 'prop-types';

import { LENGTHS } from '../../constants';

import styles from './CharacterCounter.jsx';

const CharacterCounter = ({ contentLength, isNearMaxLength = false }) => {

    return (
        <div
            id="character-counter"
            className={`{styles['character-counter']} ${isNearMaxLength ? styles.warningW : ''}`}
            aria-live="polite"
            aria-label="Character count"
        >
            {
                contentLength < LENGTHS.MIN
                ? `Minimum ${LENGTHS.MIN} ${pluralize('character', LENGTHS.MIN)}`
                : contentLength >= LENGTHS.MAX
                ? `Maximum ${LENGTHS.MAX} ${pluralize('character', LENGTHS.MAX)}`
                : `${contentLength}/${LENGTHS.MAX}`
            }        
        </div>
    );
};

CharacterCounter.propTypes = {
    contentLength: PropTypes.number.isRequired,
    isNearMaxLength: PropTypes.bool.isRequired
};

export default CharacterCounter;