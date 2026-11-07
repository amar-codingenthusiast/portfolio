import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../Styles/Achievements.module.css";
import achievementsData from "../../data/achievements.json";
import { getAsset } from "../../utils/assets";

export const Achievements = () => {
	const [currentPage, setCurrentPage] = useState(0);
	const [cardsPerPage, setCardsPerPage] = useState(3);
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

	const totalPages = Math.ceil(achievementsData.length / cardsPerPage);

	useEffect(() => {
		if (currentPage >= totalPages && totalPages > 0) {
			setCurrentPage(totalPages - 1);
		}
	}, [totalPages, currentPage]);

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
		if (l.includes("repo") || l.includes("code") || l.includes("github")) {
			return "fa-brands fa-github";
		}
		if (l.includes("cert") || l.includes("pdf") || l.includes("award") || l.includes("verify")) {
			return "fa-solid fa-award";
		}
		return "fa-solid fa-arrow-up-right-from-square";
	};

	const isPrimary = (label) => {
		const l = label.toLowerCase();
		// if (l.includes("repo") || l.includes("code") || l.includes("source")) {
		if (l.includes("code") || l.includes("source")) {
			return false;
		}
		return true;
	};

	const pages = [];
	for (let i = 0; i < totalPages; i++) {
		pages.push(
			achievementsData.slice(i * cardsPerPage, (i + 1) * cardsPerPage)
		);
	}

	return (
		<div id="achievements" className={styles.container}>
			<p className={styles.heading}>Achievements</p>
			<p className={styles.desc}>
				Recognitions, milestones, and certified proficiencies that highlight
				my accomplishments and continuous learning.
			</p>

			<div className={styles.carousel_wrapper} data-aos="fade-up">
				{totalPages > 1 && (
					<button
						className={styles.nav_btn}
						onClick={prevPage}
						disabled={currentPage === 0}
						aria-label="Previous achievements"
					>
						<i className="fa-solid fa-chevron-left"></i>
					</button>
				)}

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
						{pages.map((pageItems, pageIndex) => (
							<div key={pageIndex} className={styles.carousel_page}>
								{pageItems.map((item) => {
									const buttons = item.buttons || (item.button ? [item.button] : []);

									return (
										<div key={item.title} className={styles.card}>
											{item.image && (
												<div className={styles.media_box}>
													<img
														className={styles.image}
														src={getAsset(item.image)}
														alt={item.title}
														loading="lazy"
													/>
												</div>
											)}

											<div className={styles.card_body}>
												{item.tags && item.tags.length > 0 && (
													<div className={styles.tags_box}>
														{item.tags.map((tag) => (
															<span
																className={styles.tag}
																key={tag}
															>
																{tag}
															</span>
														))}
													</div>
												)}

												<div className={styles.title_row}>
													{item.icon && (
														<img
															className={styles.icon}
															src={getAsset(item.icon)}
															alt={item.title}
															loading="lazy"
														/>
													)}
													<div className={styles.title_col}>
														<h3 className={styles.title}>
															{item.title}
														</h3>
														<p className={styles.subtitle}>
															{item.subtitle}
														</p>
													</div>
												</div>

												<p
													className={styles.description}
													dangerouslySetInnerHTML={{
														__html: item.description,
													}}
												/>

												{buttons.length > 0 && (
													<div className={styles.button_box}>
														{buttons.map((btn, btnIdx) => {
															const primary = isPrimary(btn.label);
															return (
																<a
																	key={btnIdx}
																	href={btn.url}
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
																		{btn.label}
																	</span>
																</a>
															);
														})}
													</div>
												)}
											</div>
										</div>
									);
								})}
							</div>
						))}
					</div>
				</div>

				{totalPages > 1 && (
					<button
						className={styles.nav_btn}
						onClick={nextPage}
						disabled={currentPage === totalPages - 1}
						aria-label="Next achievements"
					>
						<i className="fa-solid fa-chevron-right"></i>
					</button>
				)}
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
						aria-label="Previous achievement"
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
						aria-label="Next achievement"
					>
						<i className="fa-solid fa-chevron-right"></i>
					</button>
				</div>
			)}
		</div>
	);
};
