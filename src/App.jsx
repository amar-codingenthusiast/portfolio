import { Navbar } from "./Components/Scripts/Navbar";
import { About } from "./Components/Scripts/About";
import { Skills } from "./Components/Scripts/Skills";
import { Experience } from "./Components/Scripts/Experience";
import { Projects } from "./Components/Scripts/Projects";
import { Education } from "./Components/Scripts/Education";
import { Achievements } from "./Components/Scripts/Achievements";
import { Footer } from "./Components/Scripts/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import styles from "./App.module.css";

function App() {
	return (
		<Router basename="portfolio">
			<Navbar />
			<div className={styles.bg}>
				<section id="about">
					<About />
				</section>
				<section id="skills">
					<Skills />
				</section>
			</div>
			<div className={styles.bg}>
				<section id="experience">
					<Experience />
				</section>
				<section id="projects">
					<Projects />
				</section>
			</div>
			<div className={styles.bg}>
				<section id="education">
					<Education />
				</section>
				<section id="achievements">
					<Achievements />
				</section>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
