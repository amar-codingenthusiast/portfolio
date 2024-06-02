import React, { useEffect } from "react";
import styles from "../Styles/Timeline.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

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
				<div className={`${styles.box} ${styles.left_box}`}>
					<img
						className={styles.icons}
						src={require("../Images/leetcode.jpg")}
						alt="leetcode"
						data-aos="zoom-in"
					/>
					<div className={styles.text_box} data-aos="fade-up">
						<img
							src={require("../Images/leetcoderanking.png")}
							alt="leetcoderanking"
							width="100%"
						/>
						<p className={styles.title}>LeetCode Ranking</p>
						<p className={styles.subtitle}>
							Achieved competitive programming excellence
						</p>
						<p className={styles.description}>
							Achieving a ranking of 4525th in the LeetCode weekly
							contest 397 highlights my problem-solving skills.
							Solving 3 out of 4 problems under time constraints
							shows my proficiency and ability to perform under
							pressure. This accomplishment reflects my technical
							expertise and dedication to competitive programming.
							It showcases my capability to tackle complex
							challenges effectively.
						</p>
						<span className={styles.left_box_arrow}></span>
					</div>
				</div>
				<div className={`${styles.box} ${styles.right_box}`}>
					<img
						className={styles.icons}
						src={require("../Images/consistency.jpg")}
						alt="consistency"
						data-aos="zoom-in"
					/>
					<div className={styles.text_box} data-aos="fade-up">
						<img
							src={require("../Images/leetcodeconsistency.png")}
							alt="leetcodeconsistency"
							width="100%"
						/>
						<p className={styles.title}>
							Consistency in Problem Solving
						</p>
						<p className={styles.subtitle}>
							Maintained daily coding practice
						</p>
						<p>
							Solving over 100 LeetCode problems and maintaining a
							streak of 60+ days demonstrates my commitment to
							continuous learning. This daily practice has
							enhanced my analytical skills and efficiency. It
							shows my persistence and ability to master various
							data structures and algorithms. Consistency in
							problem-solving is key to developing a deep
							understanding of programming concepts.
						</p>
						<span className={styles.right_box_arrow}></span>
					</div>
				</div>
				<div className={`${styles.box} ${styles.left_box}`}>
					<img
						className={styles.icons}
						src={require("../Images/certificates.jpg")}
						alt="certificates"
						data-aos="zoom-in"
					/>
					<div className={styles.text_box} data-aos="fade-up">
						<img
							src={require("../Images/certificatesofcompletion.png")}
							alt="certificatesofcompletion"
							width="100%" style={{aspectRatio: 16/9}}
						/>
						<p className={styles.title}>
							Certificates of Completion
						</p>
						<p className={styles.subtitle}>
							Validated proficiency in multiple technologies
						</p>
						<p>
							Earning certificates from the Great Learning Academy
							validates my knowledge in key programming languages
							and technologies. Courses completed include Java,
							C++, Object Oriented Programming, Data Structures &
							Algorithms, MySQL, MongoDB, and Full-stack
							Development. These certifications highlight my
							commitment to learning and staying updated with
							industry-relevant skills. They demonstrate my
							ability to apply new concepts effectively.
						</p>
						<div className={styles.button_box}>
							<a
								href="https://drive.google.com/drive/folders/19dF_J9m7D1azSicfCtqNpzsw33RfOSSU?usp=drive_link"
								target="_blank"
								rel="noreferrer"
							>
								View Certificates
							</a>
						</div>
						<span className={styles.left_box_arrow}></span>
					</div>
				</div>
			</div>
		</div>
	);
};
