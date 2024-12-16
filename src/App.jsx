import { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { fetchImages } from './services/unsplashService';
import './App.css';

function App() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleSearchSubmit = async (searchQuery) => {
        setLoading(true);
        setError(null);
        setPage(1);
        setQuery(searchQuery);
        try {
            const data = await fetchImages(searchQuery);
            setImages(data.results);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch images. Please try again.');
            setLoading(false);
        }
    };

    const handleLoadMore = async () => {
        setLoading(true);
        try {
            const data = await fetchImages(query, page + 1);
            setImages((prevImages) => [...prevImages, ...data.results]);
            setPage((prevPage) => prevPage + 1);
            setLoading(false);
        } catch (err) {
            setError('Failed to load more images. Please try again.');
            setLoading(false);
        }
    };

    const openModal = (image) => {
        setSelectedImage(image);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedImage(null);
    };

    return (
        <div className="App">
            <SearchBar onSubmit={handleSearchSubmit} />
            {error ? (
                <ErrorMessage message={error} />
            ) : (
                <>
                    <ImageGallery images={images} onImageClick={openModal} />
                    {loading && <Loader />}
                    {images.length > 0 && !loading && <LoadMoreBtn onClick={handleLoadMore} />}
                </>
            )}
            {selectedImage && (
                <ImageModal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    image={selectedImage}
                />
            )}
        </div>
    );
}

export default App;