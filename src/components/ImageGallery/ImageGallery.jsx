import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
	return (
		<ul className={s.gallery}>
			{images.length > 0 &&
				images.map((image) => (
					<li
						key={image.id}
						onClick={() =>
							onImageClick(image.urls.full, image.alt_description)
						}
					>
						<ImageCard
							imageUrl={image.urls.small}
							alt={image.alt_description || "Image"}
							description={image.alt_description}
						/>
					</li>
				))}
		</ul>
	);
};

export default ImageGallery;
