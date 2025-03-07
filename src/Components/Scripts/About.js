import styles from "../Styles/About.module.css";
import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export const About = () => {
	useEffect(() => {
		const isTouchDevice = () => {
			return "ontouchstart" in window || navigator.maxTouchPoints > 0;
		};

		if (!isTouchDevice()) {
			const elements = document.querySelectorAll(".tilt");
			elements.forEach((element) => {
				VanillaTilt.init(element, {
					max: 25,
					speed: 400,
					reverse: true,
					glare: true,
					scale: 1.1,
					"max-glare": 0.3,
				});
			});
		}
	}, []);
	const [text] = useTypewriter({
		words: [
			"Full Stack Developer",
			"MERN Stack Developer",
			"Flutter Developer",
			"Java Developer",
			"C++ Developer",
		],
		loop: {},
	});
	return (
		<div className={styles.container}>
			<div className={styles.about}>
				<p className={styles.name}>
					Hi, I am
					<br />
					Amar Kumar
				</p>
				<div className={styles.title}>
					I am a{" "}
					<span className={styles.typewriter}>
						{text}
						<Cursor />
					</span>
				</div>
				<div className={styles.bio}>
					I specialize in full-stack web development with the MERN
					stack and mobile app development using Flutter and Firebase.
					Passionate about building scalable and efficient
					applications, I enjoy learning new technologies and
					optimizing workflows. With a strong foundation in software
					development principles, I strive to create impactful and
					user friendly solutions.
				</div>
				<a
					href="/portfolio/Amar_Kumar.pdf"
					target="_blank"
					rel="noreferrer"
					className={styles.resume}
				>
					Check Resume
				</a>
			</div>
			<img
				className={`${styles.mypic} tilt`}
				src={require("../Images/mypic.jpg")}
				alt="mypic"
			/>
		</div>
	);
};
