import "./assets/styles/main.scss";
import SearchForm from "./components/SearchForm";

const App = () => {

	const handleSearchSubmit = () => {
		console.log("handleSearchSubmit");
	};

	return (
		<main>
			<h1>Search for GitHub Users</h1>
			<SearchForm onSubmit={handleSearchSubmit} />
		</main>
	);
};

export default App;
