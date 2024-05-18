import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "../Styles/Navbar.module.css";

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleIsOpen = () => {
		setIsOpen(!isOpen);
	};
	const navigate = useNavigate();

	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
			navigate(`#${sectionId}`, { replace: true });
		}
		if (isOpen) {
			handleIsOpen();
		}
	};

	const [activeLink, setActiveLink] = useState("");

	useEffect(() => {
		const handleInitialNavigation = () => {
			const hash = window.location.hash.substring(1);
			if (hash) {
				const section = document.getElementById(hash);
				if (section) {
					section.scrollIntoView({ behavior: "smooth", block: "start" });
					setActiveLink(hash);
				}
			} else {
				// Default to 'about' section on initial load
				navigate(`#about`, { replace: true });
				setActiveLink("about");
			}
		};

		handleInitialNavigation();

		const sections = document.querySelectorAll("div[id]");
		const options = {
			root: null,
			rootMargin: "0px",
			threshold: 0.3,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const sectionId = entry.target.id;
					setActiveLink(sectionId);
					navigate(`#${sectionId}`, { replace: true });
				}
			});
		}, options);

		sections.forEach((section) => {
			observer.observe(section);
		});

		return () => {
			sections.forEach((section) => {
				observer.unobserve(section);
			});
		};
	}, [navigate]);

	return (
		<nav className={styles.navbar}>
			<div className={styles.container}>
				<div>
					<Link
						to="#about"
						className={styles.name}
						onClick={() => scrollToSection("about")}
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
							to="#about"
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
							to="#skills"
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
							to="#projects"
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
							to="#experience"
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
							to="#education"
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
							to="#contacts"
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
							to="#about"
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
							to="#skills"
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
							to="#projects"
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
							to="#experience"
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
							to="#education"
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
							to="#contacts"
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
