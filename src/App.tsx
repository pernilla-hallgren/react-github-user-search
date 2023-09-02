import "./assets/styles/main.scss";
import SearchForm from "./components/SearchForm";

const App = () => {

	return (
		<main className='main-wrapper'>
			<h1>Search for GitHub Users</h1>
			<SearchForm  />
		</main>
	);
};

export default App;
