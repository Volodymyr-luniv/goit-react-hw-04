import { useState } from "react";
import s from "./SearchBar.module.css";
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
	const [query, setQuery] = useState("");

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (query.trim() === "") {
			toast.error("Please enter a search query");
			return;
		}
		onSubmit(query);
		setQuery("");
	};

	return (
		<header className={s.searchBar}>
			<form onSubmit={handleSubmit} className={s.form}>
				<input
					type="text"
					autoComplete="off"
					autoFocus
					placeholder="Search images"
					value={query}
					onChange={handleChange}
					className={s.input}
				/>
				<button type="submit" className={s.button}>
					Search
				</button>
			</form>
		</header>
	);
};

export default SearchBar;
