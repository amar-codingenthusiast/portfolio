import React, { useEffect } from "react";
import styles from "../Styles/Timeline.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

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
				<div className={`${styles.box} ${styles.left_box}`}>
					<img
						className={styles.icons}
						src={require("../Images/brabu.jpg")}
						alt="brabu"
						data-aos="zoom-in"
					/>
					<div className={styles.text_box} data-aos="fade-up">
						<p className={styles.title}>
							Bachelor of Commerce
						</p>
						<p className={styles.subtitle}>
							University: BRABU, Muzaffarpur
						</p>
						<p className={styles.description}>
							Graduated with 71.13% marks in 2020 from MS College,
							Motihari. This degree provided a strong foundation
							in business principles and practices, enhancing my
							analytical and financial skills.
						</p>
						<span className={styles.left_box_arrow}></span>
					</div>
				</div>
				<div className={`${styles.box} ${styles.right_box}`}>
					<img
						className={styles.icons}
						src={require("../Images/bseb.jpg")}
						alt="bseb"
						data-aos="zoom-in"
					/>
					<div className={styles.text_box} data-aos="fade-up">
						<p className={styles.title}>
							Intermediate of Commerce
						</p>
						<p className={styles.subtitle}>Board: BSEB, Patna</p>
						<p>
							Completed with 69.20% marks in 2017 from MHK
							College, Motihari. Focused on advanced commerce
							subjects, preparing me for higher education and a
							career in business and finance.
						</p>
						<span className={styles.right_box_arrow}></span>
					</div>
				</div>
				<div className={`${styles.box} ${styles.left_box}`}>
					<img
						className={styles.icons}
						src={require("../Images/bseb.jpg")}
						alt="bseb"
						data-aos="zoom-in"
					/>
					<div className={styles.text_box} data-aos="fade-up">
						<p className={styles.title}>Matriculation</p>
						<p className={styles.subtitle}>Board: BSEB, Patna</p>
						<p>
							Achieved 75.20% marks in 2015 from Gopal Sah School,
							Motihari. This stage of education laid the
							groundwork for my academic journey, emphasizing core
							subjects and essential skills.
						</p>
						<span className={styles.left_box_arrow}></span>
					</div>
				</div>
			</div>
		</div>
	);
};
