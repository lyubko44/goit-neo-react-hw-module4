import styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

function ImageGallery({ images, onImageClick }) {
    return (
        <div className={styles.imageGallery}>
            {images.map((image) => (
                <div key={image.id} onClick={() => onImageClick(image)} className={styles.imageGalleryItem}>
                    <ImageCard src={image.urls.small} alt={image.alt_description} />
                </div>
            ))}
        </div>
    );
}

export default ImageGallery;