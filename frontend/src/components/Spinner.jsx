// /src/components/Spinner.js

import { useEffect, useState } from 'react';
import '../styles';

const Spinner = () => {
    const [showSpinner, setShowSpinner] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSpinner(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return showSpinner ? <div className="spinner"></div> : null;
};

export default Spinner;
