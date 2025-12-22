// /src/components/AppLoader.js

import Spinner from './Spinner';
import { STATUS_MESSAGES } from '../constants'
import '../styles';

const AppLoader = ({ message = STATUS_MESSAGES.LOADING }) => {
    return (
        <div className="fullscreen-loader">
            <Spinner />
            {message && <p className="loader-message">{message}</p>}
        </div>
    );
};

export default AppLoader;