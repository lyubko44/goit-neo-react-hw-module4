import ImageCard from '../ImageCard/ImageCard';

function ImageGallery({ images, onImageClick }) {
    return (
        <div className="image-gallery">
            {images.map((image) => (
                <div key={image.id} onClick={() => onImageClick(image)}>
                    <ImageCard src={image.urls.small} alt={image.alt_description} />
                </div>
            ))}
        </div>
    );
}

export default ImageGallery;