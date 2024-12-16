import Modal from 'react-modal';

Modal.setAppElement('#root');

function ImageModal({ isOpen, onRequestClose, image }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="image-modal"
            overlayClassName="image-modal-overlay"
        >
            <div className="image-modal-content">
                <img src={image.src} alt={image.alt} />
            </div>
        </Modal>
    );
}

export default ImageModal;