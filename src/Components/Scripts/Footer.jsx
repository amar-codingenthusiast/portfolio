import { Link } from "react-router-dom";
import styles from "../Styles/Footer.module.css";
import socialLinks from "../../data/socialLinks.json";

export const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer className={styles.container}>
			<div className={styles.inner_container}>
				<button
					type="button"
					className={styles.back_to_top}
					onClick={scrollToTop}
					title="Back to Top"
					aria-label="Back to top"
				>
					<i className="fa-solid fa-arrow-up"></i>
				</button>

				<Link to="/" className={styles.brand} onClick={scrollToTop}>
					<span className={styles.brackets}>&lt;</span>
					<span>Amar Kumar</span>
					<span className={styles.brackets}>/&gt;</span>
				</Link>

				<p className={styles.tagline}>
					Full Stack & Mobile Developer • Building scalable digital solutions
				</p>

				<div className={styles.links}>
					{socialLinks.map((link) => (
						<a
							key={link.title}
							href={link.url}
							target="_blank"
							rel="noreferrer"
							title={link.title}
							className={styles.social_link}
							aria-label={link.title}
						>
							{link.isLeetCodeSvg ? (
								<svg
									className="leetcode-icon"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="20"
									height="20"
								>
									<path
										d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z"
										fill="currentColor"
									/>
									<path
										d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z"
										fill="currentColor"
									/>
								</svg>
							) : (
								<i className={link.iconClass}></i>
							)}
						</a>
					))}
				</div>

				<p className={styles.copyright}>
					&copy; {new Date().getFullYear()} Amar Kumar. All rights reserved.
				</p>
			</div>
		</footer>
	);
};
