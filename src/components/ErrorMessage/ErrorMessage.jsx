import styles from './ErrorMessage.module.css';

function ErrorMessage({ message }) {
    return (
        <div className={styles.errorMessage}>
            <p>{message}</p>
        </div>
    );
}

export default ErrorMessage;