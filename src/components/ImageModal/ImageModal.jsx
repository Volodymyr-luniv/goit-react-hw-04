import { useEffect } from "react";
import s from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onRequestClose, largeImageURL, alt }) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	if (!isOpen) return null;

	return (
		<div className={s.overlay} onClick={onRequestClose}>
			<div className={s.modal} onClick={(e) => e.stopPropagation()}>
				<img src={largeImageURL} alt={alt} className={s.modalImage} />
			</div>
		</div>
	);
};

export default ImageModal;
