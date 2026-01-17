// frontend / src / components / AppLoader / AppLoader.jsx

import Spinner from '../Spinner/Spinner.jsx';
import { STATUS_MESSAGES } from '../../constants'
import styles from './AppLoader.module.css';

const AppLoader = ({ message = STATUS_MESSAGES.LOADING }) => {
    return (
        <div className={styles['fullscreen-loader']}>
            <Spinner />
            {message && <p className={styles['loader-message']}>{message}</p>}
        </div>
    );
};

export default AppLoader;