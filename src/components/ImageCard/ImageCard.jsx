import s from "./ImageCard.module.css";

const ImageCard = ({ imageUrl, alt, description }) => {
	return (
		<div className={s.imageCard}>
			<img src={imageUrl} alt={alt} />
			<p className={s.imageDescription}>{description}</p>
		</div>
	);
};

export default ImageCard;
