import { useEffect } from "react";
import ReactModal from "react-modal";
import s from "./ImageModal.module.css";

ReactModal.setAppElement("#root");

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

	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			className={s.modal}
			overlayClassName={s.overlay}
			closeTimeoutMS={300}
		>
			<div onClick={(e) => e.stopPropagation()}>
				<img src={largeImageURL} alt={alt} className={s.modalImage} />
			</div>
		</ReactModal>
	);
};

export default ImageModal;
