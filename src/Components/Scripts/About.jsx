import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import styles from "../Styles/About.module.css";
import aboutData from "../../data/about.json";
import { getAsset } from "../../utils/assets";

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
		words: aboutData.typewriterWords,
		loop: {},
	});

	return (
		<div className={styles.container}>
			<div className={styles.about}>
				<p className={styles.name}>
					{aboutData.greeting}
					<br />
					{aboutData.name}
				</p>
				<div className={styles.title}>
					I am a{" "}
					<span className={styles.typewriter}>
						{text}
						<Cursor />
					</span>
				</div>
				<div className={styles.bio}>{aboutData.bio}</div>
				<a
					href={aboutData.resumeUrl}
					target="_blank"
					rel="noreferrer"
					className={styles.resume}
				>
					Check Resume
				</a>
			</div>
			<img
				className={`${styles.mypic} tilt`}
				src={getAsset(aboutData.profileImage)}
				alt="mypic"
				loading="eager"
				fetchpriority="high"
			/>
		</div>
	);
};
