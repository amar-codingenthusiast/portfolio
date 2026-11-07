import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import styles from "../Styles/Skills.module.css";
import skillsData from "../../data/skills.json";
import { getAsset } from "../../utils/assets";

export const Skills = () => {
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

	const rows = [];
	for (let i = 0; i < skillsData.length; i += 2) {
		rows.push(skillsData.slice(i, i + 2));
	}

	return (
		<div className={styles.container}>
			<p className={styles.heading}>Skills</p>
			<p className={styles.desc}>
				Tools and programming languages I utilize to create and develop
				innovative projects.
			</p>
			<div className={styles.cards_container}>
				{rows.map((row, rowIndex) => (
					<div className={styles.row} key={rowIndex}>
						{row.map((category) => (
							<div
								className={`${styles.cards} tilt`}
								key={category.category}
							>
								<h3 className={styles.category_title}>
									{category.category}
								</h3>
								<div className={styles.tech_box}>
									{category.skills.map((skill) => (
										<div
											className={styles.tech}
											key={skill.name}
										>
											<img
												loading="lazy"
												src={getAsset(skill.icon)}
												alt={skill.name.toLowerCase()}
											/>
											{skill.name}
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
};
