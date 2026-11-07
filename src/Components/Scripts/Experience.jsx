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
							<div
								className={styles.text_box}
								data-aos={isLeft ? "fade-right" : "fade-left"}
							>
								<p className={styles.title}>{exp.title}</p>
								<p className={styles.subtitle}>{exp.company}</p>
								<div className={styles.meta_box}>
									<span className={styles.period}>
										<i className="fa-regular fa-calendar-days"></i>{" "}
										{exp.period}
									</span>
									{exp.type && (
										<span className={styles.badge}>
											{exp.type}
										</span>
									)}
								</div>
								<p className={styles.description}>
									{exp.description}
								</p>
								{exp.skills && exp.skills.length > 0 && (
									<div className={styles.tags_box}>
										{exp.skills.map((skill) => (
											<span
												className={styles.tags}
												key={skill}
											>
												{skill}
											</span>
										))}
									</div>
								)}
								{exp.button && (
									<div className={styles.button_box}>
										<a
											href={exp.button.url}
											target="_blank"
											rel="noreferrer"
										>
											<i className="fa-solid fa-arrow-up-right-from-square"></i>
											<span>{exp.button.label}</span>
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
