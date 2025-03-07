import React, { useEffect } from "react";
import styles from "../Styles/Timeline.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const Projects = () => {
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
			<p className={styles.heading}>Projects</p>
			<p className={styles.desc}>
				Here are some of the projects I've developed and worked on,
				showcasing my skills and creativity.
			</p>
			<div className={styles.timeline}>
				<div className={`${styles.box} ${styles.left_box}`}>
					<img
						className={styles.icons}
						src={require("../Images/jobstock.png")}
						alt="jobstock"
						data-aos="zoom-in"
					/>
					<div className={styles.text_box} data-aos="fade-up">
						<video
							id="video"
							controls
							loop
							muted
							autoPlay
							style={{ width: "100%" }}
						>
							<source
								src={require("../Images/jobstock.mp4")}
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</video>
						<div className={styles.tags_box}>
							<span className={styles.tags}>flutter</span>
							<span className={styles.tags}>firebase</span>
							<span className={styles.tags}>react</span>
							<span className={styles.tags}>node.js</span>
							<span className={styles.tags}>nodemailer</span>
							<span className={styles.tags}>cron job</span>
						</div>
						<p className={styles.title}>Jobstock</p>
						<p className={styles.subtitle}>
							A Job Portal Application and Website
						</p>
						<p className={styles.description}>
							Jobstock offers a seamless hiring experience with a
							Flutter mobile app for job seekers and a React-based
							web platform for employers and admins. Candidates
							can create profiles, search for jobs and apply
							directly through the app, while companies can post
							listings, filter applicants and manage recruitment
							via the web portal. Automated emails and scheduled
							tasks keep users updated, ensuring a smooth,
							efficient and scalable job search and hiring
							process.
						</p>
						<div className={styles.button_box}>
							<a
								href="https://play.google.com/store/apps/details?id=com.fuvion_techsys.jobstock"
								target="_blank"
								rel="noreferrer"
							>
								View App
							</a>
							<a
								href="https://jobstock.fuviontechsys.com"
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
						src={require("../Images/resume.jpg")}
						alt="resume"
						data-aos="zoom-in"
					/>
					<div className={styles.text_box} data-aos="fade-up">
						<video
							id="video"
							controls
							loop
							muted
							autoPlay
							style={{ width: "100%" }}
						>
							<source
								src={require("../Images/resumebuilder.mp4")}
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</video>
						<div className={styles.tags_box}>
							<span className={styles.tags}>mern</span>
							<span className={styles.tags}>tailwind css</span>
							<span className={styles.tags}>jwt</span>
							<span className={styles.tags}>bcrypt.js</span>
							<span className={styles.tags}>google gemini</span>
						</div>
						<p className={styles.title}>AI Resume Builder</p>
						<p className={styles.subtitle}>
							A Dynamic Resume Creation Platform
						</p>
						<p className={styles.description}>
							AI Resume Builder simplifies professional resume
							creation with an intuitive, form-driven workflow for
							freshers and experienced professionals. As backend
							lead, I designed and implemented routes, schemas,
							database and server, ensuring seamless
							integration. I also contributed to frontend bug
							fixes and design improvements, optimizing the user
							experience. The platform allows users to build,
							edit and download polished resume PDFs effortlessly.
						</p>
						<div className={styles.button_box}>
							<a
								href="https://resume.entrepreneurshipnetwork.net"
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
						src={require("../Images/rocket.jpg")}
						alt="rocket"
						data-aos="zoom-in"
					/>
					<div className={styles.text_box} data-aos="fade-up">
						<video
							id="video"
							controls
							loop
							muted
							autoPlay
							style={{ width: "100%" }}
						>
							<source
								src={require("../Images/aiconsulting.mp4")}
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</video>
						<div className={styles.tags_box}>
							<span className={styles.tags}>vite</span>
							<span className={styles.tags}>react</span>
							<span className={styles.tags}>tailwind css</span>
							<span className={styles.tags}>react icons</span>
							<span className={styles.tags}>aos</span>
							<span className={styles.tags}>calendly</span>
						</div>
						<p className={styles.title}>TEN AI Consulting</p>
						<p className={styles.subtitle}>
							A Comprehensive Business Website
						</p>
						<p className={styles.description}>
							TEN AI Consulting is a sleek platform for The
							Entrepreneurship Network, featuring 16 sections,
							including services, testimonials, FAQs and a
							Calendly-powered contact form. As team lead, I
							contributed to development, design refinement and
							functionality integration to enhance user
							experience. I also managed deployment, optimization
							and animations, ensuring fast load times and a
							smooth, responsive interface.
						</p>
						<div className={styles.button_box}>
							<a
								href="https://aiconsulting.entrepreneurshipnetwork.net"
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
						src={require("../Images/inotebook.jpg")}
						alt="inotebook"
						data-aos="zoom-in"
					/>
					<div className={styles.text_box} data-aos="fade-up">
						<video
							id="video"
							controls
							loop
							muted
							autoPlay
							style={{ width: "100%" }}
						>
							<source
								src={require("../Images/inotebook.mp4")}
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</video>
						<div className={styles.tags_box}>
							<span className={styles.tags}>mern</span>
							<span className={styles.tags}>jwt</span>
							<span className={styles.tags}>bcrypt.js</span>
							<span className={styles.tags}>bootstrap</span>
							<span className={styles.tags}>font awesome</span>
						</div>
						<p className={styles.title}>iNoteBook</p>
						<p className={styles.subtitle}>
							A secured notebook on cloud
						</p>
						<p className={styles.description}>
							iNoteBook is a secure cloud-based notebook using the
							MERN stack, JWT, and Bcrypt.js. It ensures user
							privacy with Bcrypt.js authentication and uses JWT
							for reliable user verification. The app allows for
							flexible note creation, each with timestamps for
							organized tracking. Bootstrap and Font Awesome
							enhance its design, ensuring a responsive and
							seamless experience across all device sizes.
							iNoteBook provides a secure, efficient solution for
							managing notes online.
						</p>
						<div className={styles.button_box}>
							<a
								href="https://github.com/amar-codingenthusiast/inotebook"
								target="_blank"
								rel="noreferrer"
							>
								Source Code
							</a>
							<a
								href="https://amar-codingenthusiast.github.io/inotebook"
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
						src={require("../Images/newsmonkey.jpg")}
						alt="newsmonkey"
						data-aos="zoom-in"
					/>
					<div className={styles.text_box} data-aos="fade-up">
						<video
							id="video"
							controls
							loop
							muted
							autoPlay
							style={{ width: "100%" }}
						>
							<source
								src={require("../Images/newsmonkey.mp4")}
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</video>
						<div className={styles.tags_box}>
							<span className={styles.tags}>react.js</span>
							<span className={styles.tags}>bootstrap</span>
							<span className={styles.tags}>fetch api</span>
						</div>
						<p className={styles.title}>News Monkey</p>
						<p className={styles.subtitle}>
							A news app with Fetch-API
						</p>
						<p>
							News Monkey is a React.js-based news app utilizing
							Bootstrap and the Fetch API. It fetches top
							headlines from the GNews API, offering nine news
							categories and a search option. The app features
							Infinite Scroll and a Top Loading Bar for enhanced
							user experience. Bootstrap ensures a responsive
							design, making News Monkey accessible and seamless
							across all device sizes. News Monkey provides a
							streamlined way to stay updated with the latest
							news.
						</p>
						<div className={styles.button_box}>
							<a
								href="https://github.com/amar-codingenthusiast/news-monkey3"
								target="_blank"
								rel="noreferrer"
							>
								Source Code
							</a>
							<a
								href="https://amar-codingenthusiast.github.io/news-monkey3"
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
						src={require("../Images/currencyconverter.jpg")}
						alt="currencyconverter"
						data-aos="zoom-in"
					/>
					<div className={styles.text_box} data-aos="fade-up">
						<video
							id="video"
							controls
							loop
							muted
							autoPlay
							style={{ width: "100%" }}
						>
							<source
								src={require("../Images/currencyconverter.mp4")}
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</video>
						<div className={styles.tags_box}>
							<span className={styles.tags}>html</span>
							<span className={styles.tags}>css</span>
							<span className={styles.tags}>javascript</span>
							<span className={styles.tags}>fetch api</span>
							<span className={styles.tags}>font awesome</span>
						</div>
						<p className={styles.title}>
							Google Currency Converter
						</p>
						<p className={styles.subtitle}>
							A clone of Google Currency Converter
						</p>
						<p>
							Currency Converter is a clone of Google Currency
							Converter built with HTML, CSS, JavaScript, Fetch
							API, and Font Awesome. It uses real-time exchange
							rates from the Open Exchange Rates API to convert
							between over 150 currencies. The app features a
							responsive design, ensuring usability across
							devices. The source code is available on GitHub for
							transparency and collaboration. Currency Converter
							provides an efficient, real-time solution for
							currency conversion needs.
						</p>
						<div className={styles.button_box}>
							<a
								href="https://github.com/amar-codingenthusiast/currency-converter"
								target="_blank"
								rel="noreferrer"
							>
								Source Code
							</a>
							<a
								href="https://amar-codingenthusiast.github.io/currency-converter"
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
						src={require("../Images/bank.jpg")}
						alt="banking"
						data-aos="zoom-in"
					/>
					<div className={styles.text_box} data-aos="fade-up">
						<video
							id="video"
							controls
							loop
							muted
							autoPlay
							style={{ width: "100%" }}
						>
							<source
								src={require("../Images/bank.mp4")}
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</video>
						<div className={styles.tags_box}>
							<span className={styles.tags}>java</span>
							<span className={styles.tags}>oops</span>
							<span className={styles.tags}>jdbc</span>
							<span className={styles.tags}>mysql</span>
						</div>
						<p className={styles.title}>
							Banking Management System
						</p>
						<p className={styles.subtitle}>
							A terminal based CRUD App
						</p>
						<p>
							Banking Management System is a terminal-based CRUD
							application developed using Java, OOP principles,
							JDBC, and MySQL. It features user authentication
							through signup and login. Users can perform banking
							operations like depositing, withdrawing,
							transferring funds, and checking their balance. The
							source code and a demo video are accessible on the
							GitHub repository. This system provides a functional
							and educational example of basic banking operations
							in a terminal interface.
						</p>
						<div className={styles.button_box}>
							<a
								href="https://github.com/amar-codingenthusiast/banking-management-system"
								target="_blank"
								rel="noreferrer"
							>
								Source Code
							</a>
							<a
								href="https://drive.google.com/file/d/1Px-hOQVv_qf2_q06WM8p5STrthN46a5X/view?usp=drive_link"
								target="_blank"
								rel="noreferrer"
							>
								Demo Video
							</a>
						</div>
						<span className={styles.left_box_arrow}></span>
					</div>
				</div>
			</div>
		</div>
	);
};
