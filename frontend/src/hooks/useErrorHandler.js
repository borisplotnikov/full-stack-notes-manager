// frontend / src / hooks / useErrorHandler.js

import { useCallback } from 'react';
import errorHandler from '../utils/errorHandler';

function useErrorHandler() {
    return useCallback((error, errorInfo = null) => {
            errorHandler(error, errorInfo);
        }, []);
}

export default useErrorHandler;