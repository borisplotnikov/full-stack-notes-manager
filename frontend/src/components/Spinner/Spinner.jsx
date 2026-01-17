// frontend / src / components / Spinner / Spinner.jsx

import { useEffect, useState } from 'react';
import styles from './Spinner.module.css';

const Spinner = () => {
    const [showSpinner, setShowSpinner] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSpinner(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return showSpinner ? <div className={styles.spinner}></div> : null;
};

export default Spinner;