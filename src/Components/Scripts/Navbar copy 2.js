import { useState, useEffect } from "react";
import styles from "../Styles/Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleIsOpen = () => {
		setIsOpen(!isOpen);
	};
	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({
				behavior: "smooth",
				block: "start",
				inline: "nearest",
				top: section.getBoundingClientRect().top - 80,
			});
		}
		if (isOpen) {
			handleIsOpen();
		}
	};

	const [activeLink, setActiveLink] = useState("");
	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll("div[id]");
			const scrollPosition = window.scrollY;

			sections.forEach((section) => {
				const top = section.offsetTop;
				const height = section.offsetHeight;

				if (scrollPosition >= top && scrollPosition < top + height) {
					setActiveLink(section.id);
				}
			});
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return (
		<nav className={styles.navbar}>
			<div className={styles.container}>
				<div>
					<Link
						to="/"
						className={styles.name}
						onClick={() =>
							window.scrollTo({ top: 0, behavior: "smooth" })
						}
					>
						<span className={styles.brackets}>&lt;</span>Amar
						<span className={styles.slash}>/</span>Kumar
						<span className={styles.brackets}>&gt;</span>
					</Link>
				</div>
				<div className={styles.menu_icon} onClick={handleIsOpen}>
					{!isOpen ? "\u2630" : "\u2716"}
				</div>
				<ul className={styles.collapse}>
					<li>
						<NavLink
							to="/about"
							className={
								activeLink === "about"
									? styles.active
									: styles.anchor
							}
							onClick={() => scrollToSection("about")}
						>
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/skills"
							className={
								activeLink === "skills"
									? styles.active
									: styles.anchor
							}
							onClick={() => scrollToSection("skills")}
						>
							Skills
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/projects"
							className={
								activeLink === "projects"
									? styles.active
									: styles.anchor
							}
							onClick={() => scrollToSection("projects")}
						>
							Projects
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/experience"
							className={
								activeLink === "experience"
									? styles.active
									: styles.anchor
							}
							onClick={() => scrollToSection("experience")}
						>
							Experience
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/education"
							className={
								activeLink === "education"
									? styles.active
									: styles.anchor
							}
							onClick={() => scrollToSection("education")}
						>
							Education
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/contacts"
							className={
								activeLink === "contacts"
									? styles.active
									: styles.anchor
							}
							onClick={() => scrollToSection("contacts")}
						>
							Contacts
						</NavLink>
					</li>
				</ul>
				<div className={styles.collapse}>
					<a
						className={styles.github}
						href="https://www.github.com/amar-codingenthusiast"
						target="_blank"
						rel="noreferrer"
					>
						GitHub Profile
					</a>
				</div>
			</div>
			{isOpen && (
				<div className={styles.dropdown}>
					<li>
						<NavLink
							to="/about"
							className={
								activeLink === "about"
									? styles.active
									: styles.anchor
							}
							onClick={() => scrollToSection("about")}
						>
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/skills"
							className={
								activeLink === "skills"
									? styles.active
									: styles.anchor
							}
							onClick={() => scrollToSection("skills")}
						>
							Skills
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/projects"
							className={
								activeLink === "projects"
									? styles.active
									: styles.anchor
							}
							onClick={() => scrollToSection("projects")}
						>
							Projects
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/experience"
							className={
								activeLink === "experience"
									? styles.active
									: styles.anchor
							}
							onClick={() => scrollToSection("experience")}
						>
							Experience
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/education"
							className={
								activeLink === "education"
									? styles.active
									: styles.anchor
							}
							onClick={() => scrollToSection("education")}
						>
							Education
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/contacts"
							className={
								activeLink === "contacts"
									? styles.active
									: styles.anchor
							}
							onClick={() => scrollToSection("contacts")}
						>
							Contacts
						</NavLink>
					</li>
					<li>
						<a
							className={styles.github}
							href="https://www.github.com/amar-codingenthusiast"
							target="_blank"
							rel="noreferrer"
						>
							GitHub Profile
						</a>
					</li>
				</div>
			)}
		</nav>
	);
};
