import s from "./ErrorMassage.module.css";

const ErrorMessage = ({ message }) => {
	return <div className={s.errorMessage}>{message}</div>;
};

export default ErrorMessage;
