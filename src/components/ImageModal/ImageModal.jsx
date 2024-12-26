import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root');

function ImageModal({ isOpen, onRequestClose, image }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className={styles.imageModal}
            overlayClassName={styles.imageModalOverlay}
        >
            <div className={styles.imageModalContent}>
                <img src={image.src} alt={image.alt} />
            </div>
        </Modal>
    );
}

export default ImageModal;