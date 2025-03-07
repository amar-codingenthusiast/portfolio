import React, { useEffect } from "react";
import styles from "../Styles/Timeline.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const Experience = () => {
	useEffect(() => {
		const elements = document.querySelectorAll("#video");
		elements.forEach((element) => {
			element.play().catch((error) => {
				console.error("Autoplay failed", error);
			});
		});
		AOS.init({ duration: 1000, offset: 200 });
	}, []);

	return (
		<div className={styles.container}>
			<p className={styles.heading}>Experience</p>
			<p className={styles.desc}>
				Bringing ideas to life through code with hands-on experience
				across technologies and roles.
			</p>
			<div className={styles.timeline}>
				<div className={`${styles.box} ${styles.left_box}`}>
					<img
						className={styles.icons}
						src={require("../Images/fuvion_techsys.jpg")}
						alt="fuvion_techsys"
						data-aos="zoom-in"
					/>
					<div className={styles.text_box} data-aos="fade-up">
						<p className={styles.title}>
							Trainee Software Developer
						</p>
						<p className={styles.subtitle}>Fuvion Techsys</p>
						<p className={styles.italic}>
							(Sept 2024 - Present, Full-time, Remote)
						</p>
						<p className={styles.description}>
							I develop mobile apps with Flutter & Firebase and
							build web applications using the MERN stack.
							Collaborating in agile teams, I create scalable,
							optimized solutions that boost performance, enhance
							user experience and consistently drive innovation.
						</p>
						<div className={styles.button_box}>
							<a
								href="https://fuviontechsys.com"
								target="_blank"
								rel="noreferrer"
							>
								Visit Website
							</a>
						</div>
						<span className={styles.left_box_arrow}></span>
					</div>
				</div>
				<div className={`${styles.box} ${styles.right_box}`}>
					<img
						className={styles.icons}
						src={require("../Images/ten.jpg")}
						alt="ten"
						data-aos="zoom-in"
					/>
					<div className={styles.text_box} data-aos="fade-up">
						<p className={styles.title}>MERN Stack Developer</p>
						<p className={styles.subtitle}>
							The Entrepreneurship Network
						</p>
						<p className={styles.italic}>
							(June 2024 - Sept 2024, Internship, Remote)
						</p>
						<p className={styles.description}>
							I led full-stack projects by integrating routes,
							schemas, databases and servers; while enhancing
							frontend components, resolving bugs and optimizing
							designs for smooth deployments. My collaborative
							approach consistently accelerated project success.
						</p>
						<div className={styles.button_box}>
							<a
								href="https://www.entrepreneurshipnetwork.net/"
								target="_blank"
								rel="noreferrer"
							>
								Visit Website
							</a>
						</div>
						<span className={styles.right_box_arrow}></span>
					</div>
				</div>
			</div>
		</div>
	);
};
