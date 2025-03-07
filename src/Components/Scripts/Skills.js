import styles from "../Styles/Skills.module.css";
import VanillaTilt from "vanilla-tilt";
import { useEffect } from "react";

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

	return (
		<div className={styles.container}>
			<p className={styles.heading}>Skills</p>
			<p className={styles.desc}>
				Tools and programming languages I utilize to create and develop
				innovative projects.
			</p>
			<div className={styles.cards_container}>
				<div className={styles.row}>
					<div className={`${styles.cards} tilt`}>
						<div>Languages</div>
						<div className={styles.tech_box}>
							<div className={styles.tech}>
								<img
									src={require("../Images/java.png")}
									alt="java"
								/>
								Java
							</div>
							<div className={styles.tech}>
								<img
									src={require("../Images/cpp.png")}
									alt="cpp"
								/>
								C++
							</div>
							<div className={styles.tech}>
								<img
									src={require("../Images/html.png")}
									alt="html"
								/>
								HTML
							</div>
							<div className={styles.tech}>
								<img
									src={require("../Images/css.png")}
									alt="css"
								/>
								CSS
							</div>
							<div className={styles.tech}>
								<img
									src={require("../Images/javascript.png")}
									alt="javascript"
								/>
								JavaScript
							</div>
							<div className={styles.tech}>
								<img
									src={require("../Images/dart.png")}
									alt="dart"
								/>
								Dart
							</div>
							<div className={styles.tech}>
								<img
									src={require("../Images/dsa.png")}
									alt="dsa"
								/>
								DSA
							</div>
							<div className={styles.tech}>
								<img
									src={require("../Images/oops.jpg")}
									alt="oops"
								/>
								OOPs
							</div>
						</div>
					</div>
					<div className={`${styles.cards} tilt`}>
						<div>Frontend</div>
						<div className={styles.tech_box}>
							<div className={styles.tech}>
								<img
									src={require("../Images/reactjs.png")}
									alt="reactjs"
								/>
								React.js
							</div>
							<div className={styles.tech}>
								<img
									src={require("../Images/mern.png")}
									alt="mern"
								/>
								MERN Stack
							</div>
							<div className={styles.tech}>
								<img
									src={require("../Images/restapi.png")}
									alt="restapi"
								/>
								REST API
							</div>
							<div className={styles.tech}>
								<img
									src={require("../Images/tailwind.png")}
									alt="tailwind"
								/>
								Tailwind CSS
							</div>
							<div className={styles.tech}>
								<img
									src={require("../Images/bootstrap.png")}
									alt="bootstrap"
								/>
								Bootstrap
							</div>
							<div className={styles.tech}>
								<img
									src={require("../Images/reactbootstrap.png")}
									alt="reactbootstrap"
								/>
								React Bootstrap
							</div>
						</div>
					</div>
				</div>
				<div className={styles.row}>
					<div className={`${styles.cards} tilt`}>
						<div>Backend & Database</div>
						<div className={styles.tech_box}>
							<div className={styles.tech}>
								<img
									src={require("../Images/nodejs.png")}
									alt="nodejs"
								/>
								Node.js
							</div>
							<div className={styles.tech}>
								<img
									src={require("../Images/expressjs.png")}
									alt="expressjs"
								/>
								Express.js
							</div>
							<div className={styles.tech}>
								<img
									src={require("../Images/mongodb.png")}
									alt="mongodb"
								/>
								MongoDB
							</div>
							<div className={styles.tech}>
								<img
									src={require("../Images/mysql.png")}
									alt="mysql"
								/>
								MySQL
							</div>
							<div className={styles.tech}>
								<img
									src={require("../Images/firebase.png")}
									alt="firebase"
								/>
								Firebase
							</div>
							<div className={styles.tech}>
								<img
									src={require("../Images/maven.png")}
									alt="maven"
								/>
								Maven
							</div>
							<div className={styles.tech}>
								<img
									src={require("../Images/gradle.png")}
									alt="gradle"
								/>
								Gradle
							</div>
							<div className={styles.tech}>
								<img
									src={require("../Images/thunderclient.png")}
									alt="thunderclient"
								/>
								Thunder Client
							</div>
							<div className={styles.tech}>
								<img
									src={require("../Images/glitch.png")}
									alt="glitch"
								/>
								Glitch
							</div>
						</div>
					</div>
					<div className={`${styles.cards} tilt`}>
						<div>Other Tools</div>
						<div className={styles.tech_box}>
							<div className={styles.tech}>
								<img
									src={require("../Images/git.png")}
									alt="git"
								/>
								Git
							</div>
							<div className={styles.tech}>
								<img
									src={require("../Images/github.png")}
									alt="github"
								/>
								GitHub
							</div>
							<div className={styles.tech}>
								<img
									src={require("../Images/hostinger.png")}
									alt="hostinger"
								/>
								Hostinger
							</div>
							<div className={styles.tech}>
								<img
									src={require("../Images/jdbc.jpg")}
									alt="jdbc"
								/>
								JDBC
							</div>
							<div className={styles.tech}>
								<img
									src={require("../Images/vscode.png")}
									alt="vscode"
								/>
								VS Code
							</div>
							<div className={styles.tech}>
								<img
									src={require("../Images/eclipse.png")}
									alt="eclipse"
								/>
								Eclipse
							</div>
							<div className={styles.tech}>
								<img
									src={require("../Images/intellijidea.png")}
									alt="intellijidea"
								/>
								IntelliJ Idea
							</div>
							<div className={styles.tech}>
								<img
									src={require("../Images/chatgpt.png")}
									alt="chatgpt"
								/>
								ChatGPT
							</div>
							<div className={styles.tech}>
								<img
									src={require("../Images/photoshop.png")}
									alt="photoshop"
								/>
								Photoshop
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
