import { useState } from 'react';
import styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import ImageModal from '../ImageModal/ImageModal';

function ImageGallery({ images }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <div className={styles.imageGallery}>
            {images.map((image) => (
                <div key={image.id} onClick={() => handleImageClick(image)} className={styles.imageGalleryItem}>
                    <ImageCard src={image.urls.small} alt={image.alt_description} />
                </div>
            ))}
            {selectedImage && (
                <ImageModal
                    isOpen={isModalOpen}
                    onRequestClose={handleCloseModal}
                    image={{ src: selectedImage.urls.full, alt: selectedImage.alt_description }}
                />
            )}
        </div>
    );
}

export default ImageGallery;