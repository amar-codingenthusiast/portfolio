import { Navbar } from "./Components/Scripts/Navbar";
import { About } from "./Components/Scripts/About";
import { Skills } from "./Components/Scripts/Skills";
import { Experience } from "./Components/Scripts/Experience";
import { Projects } from "./Components/Scripts/Projects";
import { Achievements } from "./Components/Scripts/Achievements";
import { Education } from "./Components/Scripts/Education";
import { Footer } from "./Components/Scripts/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
	return (
		<Router basename="portfolio">
			<Navbar/>
			<section id="about"><About /></section>
			<section id="skills"><Skills /></section>
			<section id="experience"><Experience /></section>
			<section id="projects"><Projects /></section>
			<section id="education"><Education /></section>
			<section id="achievements"><Achievements /></section>
			<Footer />
		</Router>
	);
}

export default App;
