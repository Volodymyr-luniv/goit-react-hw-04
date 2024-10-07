import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import toast, { Toaster } from "react-hot-toast";
import s from "./App.module.css";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

const ACCESS_KEY = "5FLNRlMgRVkS030QHA3CFbrKCR9kvcIQARjnfZr6dv8";

const App = () => {
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [page, setPage] = useState(1);
	const [query, setQuery] = useState("");
	const [selectedImage, setSelectedImage] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedDescription, setSelectedDescription] = useState("");

	const fetchImages = useCallback(
		async (page = 1) => {
			try {
				setLoading(true);
				setError(null);
				const response = await axios.get(
					`https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=${ACCESS_KEY}`
				);

				if (page === 1) {
					setImages(response.data.results);
				} else {
					setImages((prevImages) => [
						...prevImages,
						...response.data.results,
					]);
				}

				if (response.data.results.length === 0) {
					toast.error("No images found. Try a different query.");
				}
			} catch {
				setError("Something went wrong. Please try again later.");
			} finally {
				setLoading(false);
			}
		},
		[query]
	);

	useEffect(() => {
		if (query) {
			fetchImages(page);
		}
	}, [page, query, fetchImages]);

	const handleSearchSubmit = (newQuery) => {
		setQuery(newQuery);
		setPage(1);
	};

	const handleLoadMore = () => {
		setPage((prevPage) => prevPage + 1);
	};

	const openModal = (largeImageURL, description) => {
		setSelectedImage(largeImageURL);
		setSelectedDescription(description);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedImage(null);
		setSelectedDescription("");
	};

	return (
		<div className={s.app}>
			<Toaster />
			<SearchBar onSubmit={handleSearchSubmit} />
			{loading && <Loader />}
			{error ? (
				<ErrorMessage message={error} />
			) : (
				<ImageGallery images={images} onImageClick={openModal} />
			)}
			{images.length > 0 && !loading && (
				<LoadMoreBtn onClick={handleLoadMore} />
			)}
			{isModalOpen && (
				<ImageModal
					isOpen={isModalOpen}
					onRequestClose={closeModal}
					largeImageURL={selectedImage}
					alt={selectedDescription}
				/>
			)}
		</div>
	);
};

export default App;
