// src/components/Loader/Loader.jsx
import { TailSpin } from 'react-loader-spinner';
import styles from './Loader.module.css';

function Loader() {
    return (
        <div className={styles.loader}>
            <TailSpin
                height="80"
                width="80"
                color="#00BFFF"
                ariaLabel="loading"
            />
        </div>
    );
}

export default Loader;