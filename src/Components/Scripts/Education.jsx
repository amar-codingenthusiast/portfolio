import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../Styles/Timeline.module.css";
import educationData from "../../data/education.json";
import { getAsset } from "../../utils/assets";

export const Education = () => {
	useEffect(() => {
		AOS.init({ duration: 1000, offset: 200 });
	}, []);

	return (
		<div className={styles.container}>
			<p className={styles.heading}>Education</p>
			<p className={styles.desc}>
				The academic institutions and programs that have contributed to
				my knowledge and growth.
			</p>
			<div className={styles.timeline}>
				{educationData.map((edu, index) => {
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
								src={getAsset(edu.icon)}
								alt={edu.title}
								data-aos="zoom-in"
							/>
							<div className={styles.text_box} data-aos="fade-up">
								<p className={styles.title}>{edu.title}</p>
								<p className={styles.subtitle}>
									{edu.subtitle}
								</p>
								<p className={styles.description}>
									{edu.description}
								</p>
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
