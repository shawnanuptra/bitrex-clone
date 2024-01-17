import "./App.css";
import Header from "./components/Header";
import { HeaderContextProvider } from "./Contexts";

function App() {
	return (
		<HeaderContextProvider>
			<Header />
		</HeaderContextProvider>
	);
}

export default App;
