import "./assets/styles/main.scss";
import SearchForm from "./components/SearchForm";
import UserCard from "./components/UserCard";

const App = () => {

	const handleSearchSubmit = () => {
		console.log("handleSearchSubmit");
	};

	return (
		<main className='main-wrapper'>
			<h1>Search for GitHub Users</h1>
			<SearchForm onSubmit={handleSearchSubmit} />
			<UserCard users={""} />
		</main>
	);
};

export default App;
