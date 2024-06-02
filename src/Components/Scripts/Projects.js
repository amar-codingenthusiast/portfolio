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
								Live App
							</a>
						</div>
						<span className={styles.left_box_arrow}></span>
					</div>
				</div>
				<div className={`${styles.box} ${styles.right_box}`}>
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
								Live App
							</a>
						</div>
						<span className={styles.right_box_arrow}></span>
					</div>
				</div>
				<div className={`${styles.box} ${styles.left_box}`}>
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
								Live App
							</a>
						</div>
						<span className={styles.left_box_arrow}></span>
					</div>
				</div>
				<div className={`${styles.box} ${styles.right_box}`}>
					<img
						className={styles.icons}
						src={require("../Images/amazonclone.jpg")}
						alt="amazonclone"
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
								src={require("../Images/amazonclone.mp4")}
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</video>
						<div className={styles.tags_box}>
							<span className={styles.tags}>html</span>
							<span className={styles.tags}>css</span>
							<span className={styles.tags}>font awesome</span>
						</div>
						<p className={styles.title}>Amazon Clone</p>
						<p className={styles.subtitle}>
							A clone of Amazon.com Home Page
						</p>
						<p>
							Amazon Clone is a replica of the Amazon.com home
							page created with HTML, CSS, and Font Awesome. It
							closely resembles the original, replicating the
							header, navbar, footer, hero section, and shop
							section with over 90% similarity. The project aims
							to mirror the look and feel of the Amazon home page.
							The source code is available on GitHub for review
							and contribution. This clone offers a comprehensive
							example of front-end design and implementation.
						</p>
						<div className={styles.button_box}>
							<a
								href="https://github.com/amar-codingenthusiast/amazon"
								target="_blank"
								rel="noreferrer"
							>
								Source Code
							</a>
							<a
								href="https://amar-codingenthusiast.github.io/amazon"
								target="_blank"
								rel="noreferrer"
							>
								Live App
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
