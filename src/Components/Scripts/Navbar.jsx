import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import styles from "../Styles/Navbar.module.css";
import navLinks from "../../data/navLinks.json";

export const Navbar = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [isOpen, setIsOpen] = useState(false);
	const [activeLink, setActiveLink] = useState("about");

	const handleIsOpen = () => {
		setIsOpen(!isOpen);
	};

	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			const sectionPosition =
				section.getBoundingClientRect().top + window.scrollY;
			const offsetPosition = sectionPosition - 80; // 80 for navbar
			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
		if (isOpen) {
			handleIsOpen();
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll("section[id]");
			const scrollPosition = window.scrollY;
			const windowHeight = window.innerHeight;
			sections.forEach((section) => {
				const top =
					section.getBoundingClientRect().top + scrollPosition;
				const height = section.offsetHeight;
				if (
					scrollPosition >= top - windowHeight * 0.5 &&
					scrollPosition < top + height - windowHeight * 0.5
				) {
					setActiveLink(section.id);
				}
			});
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (activeLink === "about" && location.pathname !== "/") {
			navigate("/");
		} else if (activeLink && activeLink !== "about") {
			navigate(`/${activeLink}`);
		}
	}, [activeLink, navigate, location.pathname]);

	const renderNavItems = () =>
		navLinks.map((item) => (
			<li key={item.id}>
				<NavLink
					to={item.path}
					className={
						activeLink === item.id ? styles.active : styles.anchor
					}
					onClick={() => {
						scrollToSection(item.id);
						setActiveLink(item.id);
					}}
				>
					{item.label}
				</NavLink>
			</li>
		));

	return (
		<nav className={styles.navbar}>
			<div className={styles.container}>
				<div>
					<Link
						to="/"
						className={styles.name}
						onClick={() => {
							window.scrollTo({ top: 0, behavior: "smooth" });
							setIsOpen(false);
						}}
					>
						<span className={styles.brackets}>&lt;</span>Amar
						<span className={styles.slash}>/</span>Kumar
						<span className={styles.brackets}>&gt;</span>
					</Link>
				</div>
				<div className={styles.menu_icon} onClick={handleIsOpen}>
					{!isOpen ? "\u2630" : "\u2716"}
				</div>
				<ul className={styles.collapse}>{renderNavItems()}</ul>
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
				<div className={styles.overlay} onClick={handleIsOpen}></div>
			)}
			<div className={`${styles.dropdown} ${isOpen ? styles.open : ""}`}>
				{renderNavItems()}
			</div>
		</nav>
	);
};
