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

	const handleContactClick = (e) => {
		const contactSection = document.getElementById("contact");
		if (contactSection) {
			e.preventDefault();
			const top =
				contactSection.getBoundingClientRect().top +
				window.scrollY -
				80;
			window.scrollTo({ top, behavior: "smooth" });
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.about}>
				{aboutData.status && (
					<div className={styles.badge_container}>
						<span className={styles.status_badge}>
							<span className={styles.status_dot}></span>
							{aboutData.status}
						</span>
					</div>
				)}
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
				<div
					className={styles.bio}
					dangerouslySetInnerHTML={{ __html: aboutData.bio }}
				/>
				<div className={styles.cta_container}>
					<a
						href={aboutData.resumeUrl}
						target="_blank"
						rel="noreferrer"
						className={styles.resume}
					>
						Check Resume
					</a>
					<a
						href="#contact"
						onClick={handleContactClick}
						className={styles.contact_btn}
					>
						Get In Touch
					</a>
				</div>
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
