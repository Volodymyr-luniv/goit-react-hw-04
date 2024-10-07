import { Oval } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => {
	return (
		<div className={s.loaderContainer}>
			<Oval
				height={80}
				width={80}
				color="#4fa94d"
				visible={true}
				ariaLabel="oval-loading"
				secondaryColor="#4fa94d"
				strokeWidth={2}
				strokeWidthSecondary={2}
			/>
		</div>
	);
};

export default Loader;
