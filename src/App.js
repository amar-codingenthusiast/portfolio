import { Navbar } from "./Components/Scripts/Navbar";
import { About } from "./Components/Scripts/About";
import { Skills } from "./Components/Scripts/Skills";
import { Projects } from "./Components/Scripts/Projects";
import { Experience } from "./Components/Scripts/Experience";
import { Education } from "./Components/Scripts/Education";
import { Contacts } from "./Components/Scripts/Contacts";
import { Footer } from "./Components/Scripts/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
	return (
		<Router>
			<Navbar basename="portfolio" />
			<div id="about"><About /></div>
			<div id="skills"><Skills /></div>
			<div id="projects"><Projects /></div>
			<div id="experience"><Experience /></div>
			<div id="education"><Education /></div>
			<div id="contacts"><Contacts /></div>
			<Footer />
		</Router>
	);
}

export default App;
