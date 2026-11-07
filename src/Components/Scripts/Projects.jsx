import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../Styles/Projects.module.css";
import projectsData from "../../data/projects.json";
import { getAsset } from "../../utils/assets";

export const Projects = () => {
	const [currentPage, setCurrentPage] = useState(0);
	const [cardsPerPage, setCardsPerPage] = useState(3);
	const [isIntersecting, setIsIntersecting] = useState(false);
	const containerRef = useRef(null);
	const touchStartX = useRef(0);
	const touchEndX = useRef(0);

	useEffect(() => {
		const updateCardsPerPage = () => {
			if (window.innerWidth < 700) {
				setCardsPerPage(1);
			} else if (window.innerWidth < 1024) {
				setCardsPerPage(2);
			} else {
				setCardsPerPage(3);
			}
		};

		updateCardsPerPage();
		window.addEventListener("resize", updateCardsPerPage);
		AOS.init({ duration: 1000, offset: 100 });

		return () => window.removeEventListener("resize", updateCardsPerPage);
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsIntersecting(entry.isIntersecting);
			},
			{ threshold: 0.15 }
		);

		const el = containerRef.current;
		if (el) observer.observe(el);

		return () => {
			if (el) observer.unobserve(el);
			observer.disconnect();
		};
	}, []);

	const totalPages = Math.ceil(projectsData.length / cardsPerPage);

	useEffect(() => {
		if (currentPage >= totalPages && totalPages > 0) {
			setCurrentPage(totalPages - 1);
		}
	}, [totalPages, currentPage]);

	useEffect(() => {
		const videos = document.querySelectorAll(`.${styles.video}`);
		videos.forEach((video) => {
			if (!(video instanceof HTMLVideoElement)) return;
			const page = parseInt(video.getAttribute("data-page"), 10);
			if (isIntersecting && page === currentPage) {
				video.play().catch(() => { });
			} else {
				video.pause();
			}
		});
	}, [currentPage, isIntersecting, cardsPerPage]);

	const prevPage = () => {
		setCurrentPage((prev) => Math.max(0, prev - 1));
	};

	const nextPage = () => {
		setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
	};

	const handleTouchStart = (e) => {
		touchStartX.current = e.targetTouches[0].clientX;
	};

	const handleTouchMove = (e) => {
		touchEndX.current = e.targetTouches[0].clientX;
	};

	const handleTouchEnd = () => {
		const diff = touchStartX.current - touchEndX.current;
		if (Math.abs(diff) > 50) {
			if (diff > 0) {
				nextPage();
			} else {
				prevPage();
			}
		}
	};

	const getButtonIcon = (label) => {
		const l = label.toLowerCase();
		if (l.includes("app") || l.includes("play")) {
			return "fa-brands fa-google-play";
		}
		if (l.includes("code") || l.includes("source") || l.includes("github")) {
			return "fa-brands fa-github";
		}
		if (l.includes("video") || l.includes("demo")) {
			return "fa-solid fa-play";
		}
		return "fa-solid fa-arrow-up-right-from-square";
	};

	const isPrimary = (label) => {
		const l = label.toLowerCase();
		if (l.includes("app")) return false;
		if (l.includes("video") || l.includes("demo")) return true;
		return l.includes("visit") || l.includes("website");
	};

	const pages = [];
	for (let i = 0; i < totalPages; i++) {
		pages.push(
			projectsData.slice(i * cardsPerPage, (i + 1) * cardsPerPage)
		);
	}

	return (
		<div id="projects" ref={containerRef} className={styles.container}>
			<p className={styles.heading}>Projects</p>
			<p className={styles.desc}>
				Here are some of the projects I've developed and worked on,
				showcasing my skills and creativity.
			</p>

			<div className={styles.carousel_wrapper} data-aos="fade-up">
				<button
					className={styles.nav_btn}
					onClick={prevPage}
					disabled={currentPage === 0}
					aria-label="Previous projects"
				>
					<i className="fa-solid fa-chevron-left"></i>
				</button>

				<div
					className={styles.carousel_viewport}
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}
				>
					<div
						className={styles.carousel_track}
						style={{
							transform: `translateX(-${currentPage * 100}%)`,
						}}
					>
						{pages.map((pageProjects, pageIndex) => (
							<div
								key={pageIndex}
								className={styles.carousel_page}
							>
								{pageProjects.map((project) => (
									<div
										key={project.title}
										className={styles.card}
									>
										{project.media && (
											<div className={styles.media_box}>
												<video
													className={styles.video}
													data-page={pageIndex}
													preload="metadata"
													playsInline
													controls
													loop
													muted
												>
													<source
														src={getAsset(
															project.media
														)}
														type="video/mp4"
													/>
													Your browser does not
													support the video tag.
												</video>
											</div>
										)}

										<div className={styles.card_body}>
											{project.tags &&
												project.tags.length > 0 && (
													<div
														className={
															styles.tags_box
														}
													>
														{project.tags.map(
															(tag) => (
																<span
																	className={
																		styles.tag
																	}
																	key={tag}
																>
																	{tag}
																</span>
															)
														)}
													</div>
												)}

											<div className={styles.title_row}>
												{project.icon && (
													<img
														className={
															styles.project_icon
														}
														src={getAsset(
															project.icon
														)}
														alt={project.title}
														loading="lazy"
													/>
												)}
												<div
													className={styles.title_col}
												>
													<h3
														className={styles.title}
													>
														{project.title}
													</h3>
													<p
														className={
															styles.subtitle
														}
													>
														{project.subtitle}
													</p>
												</div>
											</div>

											<p className={styles.description}>
												{project.description}
											</p>

											{project.buttons &&
												project.buttons.length > 0 && (
													<div
														className={
															styles.button_box
														}
													>
														{project.buttons.map(
															(btn, btnIdx) => {
																const primary =
																	isPrimary(
																		btn.label
																	);
																return (
																	<a
																		key={
																			btnIdx
																		}
																		href={
																			btn.url
																		}
																		target="_blank"
																		rel="noreferrer"
																		className={
																			primary
																				? styles.btn_primary
																				: styles.btn_secondary
																		}
																	>
																		<i
																			className={getButtonIcon(
																				btn.label
																			)}
																		></i>
																		<span>
																			{
																				btn.label
																			}
																		</span>
																	</a>
																);
															}
														)}
													</div>
												)}
										</div>
									</div>
								))}
							</div>
						))}
					</div>
				</div>

				<button
					className={styles.nav_btn}
					onClick={nextPage}
					disabled={currentPage === totalPages - 1}
					aria-label="Next projects"
				>
					<i className="fa-solid fa-chevron-right"></i>
				</button>
			</div>

			{totalPages > 1 && (
				<div
					className={`${styles.dots_container} ${styles.desktop_dots}`}
				>
					{Array.from({ length: totalPages }).map((_, index) => (
						<button
							key={index}
							className={`${styles.dot} ${currentPage === index ? styles.active_dot : ""
								}`}
							onClick={() => setCurrentPage(index)}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			)}

			{totalPages > 1 && (
				<div className={styles.mobile_controls}>
					<button
						className={styles.mobile_nav_btn}
						onClick={prevPage}
						disabled={currentPage === 0}
						aria-label="Previous project"
					>
						<i className="fa-solid fa-chevron-left"></i>
					</button>

					<div className={styles.dots_container} style={{ margin: 0 }}>
						{Array.from({ length: totalPages }).map((_, index) => (
							<button
								key={index}
								className={`${styles.dot} ${currentPage === index
									? styles.active_dot
									: ""
									}`}
								onClick={() => setCurrentPage(index)}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>

					<button
						className={styles.mobile_nav_btn}
						onClick={nextPage}
						disabled={currentPage === totalPages - 1}
						aria-label="Next project"
					>
						<i className="fa-solid fa-chevron-right"></i>
					</button>
				</div>
			)}
		</div>
	);
};
