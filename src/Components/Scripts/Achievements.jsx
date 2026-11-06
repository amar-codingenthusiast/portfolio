import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../Styles/Timeline.module.css";
import achievementsData from "../../data/achievements.json";
import { getAsset } from "../../utils/assets";

export const Achievements = () => {
	useEffect(() => {
		AOS.init({ duration: 1000, offset: 200 });
	}, []);

	return (
		<div className={styles.container}>
			<p className={styles.heading}>Achievements</p>
			<p className={styles.desc}>
				Recognitions and milestones that highlight my accomplishments
				and contributions throughout my journey.
			</p>
			<div className={styles.timeline}>
				{achievementsData.map((item, index) => {
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
								src={getAsset(item.icon)}
								alt={item.title}
								data-aos="zoom-in"
							/>
							<div className={styles.text_box} data-aos="fade-up">
								{item.image && (
									<img
										src={getAsset(item.image)}
										alt={item.title}
										width="100%"
										style={
											item.aspectRatio
												? { aspectRatio: item.aspectRatio }
												: undefined
										}
										loading="lazy"
									/>
								)}
								<p className={styles.title}>{item.title}</p>
								<p className={styles.subtitle}>
									{item.subtitle}
								</p>
								<p className={styles.description}>
									{item.description}
								</p>
								{item.button && (
									<div className={styles.button_box}>
										<a
											href={item.button.url}
											target="_blank"
											rel="noreferrer"
										>
											{item.button.label}
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
