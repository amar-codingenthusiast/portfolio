import { useEffect } from "react";
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
						loading="lazy"
						src={require("../Images/forked.jpg")}
						alt="forked"
						data-aos="zoom-in"
					/>
					<div className={styles.text_box} data-aos="fade-up">
						<img
							src={require("../Images/gridfs.png")}
							alt="gridfs"
							width="100%"
							loading="lazy"
						/>
						<p className={styles.title}>
							Custom Library Enhancement
						</p>
						<p className={styles.subtitle}>
							Forked and fixed Multer-GridFS-Storage for reliable
							file uploads
						</p>
						<p className={styles.description}>
							Identified and resolved a persistent file upload
							issue in the multer-gridfs-storage library, which
							was no longer maintained by its original creator. By
							forking the repository and implementing a fix, I
							ensured stable and efficient file handling for
							production applications using MongoDB. This solution
							provides developers with a more reliable alternative
							to the outdated version.
						</p>
						<div className={styles.button_box}>
							<a
								href="https://github.com/amar-codingenthusiast/multer-gridfs-storage"
								target="_blank"
								rel="noreferrer"
							>
								View Repository
							</a>
						</div>
						<span className={styles.left_box_arrow}></span>
					</div>
				</div>
				<div className={`${styles.box} ${styles.right_box}`}>
					<img
						className={styles.icons}
						loading="lazy"
						src={require("../Images/fuvion_techsys.jpg")}
						alt="fuvion_techsys"
						data-aos="zoom-in"
					/>
					<div className={styles.text_box} data-aos="fade-up">
						<img
							src={require("../Images/fuvion_techsys.png")}
							alt="fuvion_techsys"
							width="100%"
							loading="lazy"
						/>
						<p className={styles.title}>
							Fuvion Techsys Assignment
						</p>
						<p className={styles.subtitle}>
							From assignment to official company website
						</p>
						<p className={styles.description}>
							As part of the hiring process at Fuvion Techsys, I
							was tasked with building a demo website to showcase
							my skills. The project exceeded expectations and was
							later adopted as the company's main website. This
							experience highlighted my ability to develop
							scalable and professional-grade websites that meet
							business requirements. The transition from an
							assignment to an official platform reinforced the
							impact of my work in a real-world corporate setting.
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
						<span className={styles.right_box_arrow}></span>
					</div>
				</div>
				<div className={`${styles.box} ${styles.left_box}`}>
					<img
						className={styles.icons}
						loading="lazy"
						src={require("../Images/certificates.jpg")}
						alt="certificates"
						data-aos="zoom-in"
					/>
					<div className={styles.text_box} data-aos="fade-up">
						<img
							src={require("../Images/certificatesofcompletion.png")}
							alt="certificatesofcompletion"
							width="100%"
							style={{ aspectRatio: 16 / 9 }}
							loading="lazy"
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
