import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../Styles/Timeline.module.css";
import experienceData from "../../data/experience.json";
import { getAsset } from "../../utils/assets";

export const Experience = () => {
	useEffect(() => {
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
				{experienceData.map((exp, index) => {
					const isLeft = index % 2 === 0;
					return (
						<div
							key={index}
							className={`${styles.box} ${
								isLeft ? styles.left_box : styles.right_box
							}`}
						>
							<img
								className={styles.icons}
								loading="lazy"
								src={getAsset(exp.icon)}
								alt={exp.company}
								data-aos="zoom-in"
							/>
							<div className={styles.text_box} data-aos="fade-up">
								<p className={styles.title}>{exp.title}</p>
								<p className={styles.subtitle}>{exp.company}</p>
								<p className={styles.italic}>{exp.period}</p>
								<p className={styles.description}>
									{exp.description}
								</p>
								{exp.button && (
									<div className={styles.button_box}>
										<a
											href={exp.button.url}
											target="_blank"
											rel="noreferrer"
										>
											{exp.button.label}
										</a>
									</div>
								)}
								<span
									className={
										isLeft
											? styles.left_box_arrow
											: styles.right_box_arrow
									}
								></span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
