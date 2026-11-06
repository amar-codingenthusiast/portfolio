import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../Styles/Timeline.module.css";
import projectsData from "../../data/projects.json";
import { getAsset } from "../../utils/assets";

export const Projects = () => {
	useEffect(() => {
		const videos = document.querySelectorAll(".project-video");
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const video = entry.target;
					if (!(video instanceof HTMLVideoElement)) return;
					if (entry.isIntersecting) {
						video.play().catch(() => {});
					} else {
						video.pause();
					}
				});
			},
			{ root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.2 }
		);
		videos.forEach((v) => observer.observe(v));
		AOS.init({ duration: 1000, offset: 200 });
		return () => {
			videos.forEach((v) => observer.unobserve(v));
			observer.disconnect();
		};
	}, []);

	return (
		<div className={styles.container}>
			<p className={styles.heading}>Projects</p>
			<p className={styles.desc}>
				Here are some of the projects I've developed and worked on,
				showcasing my skills and creativity.
			</p>
			<div className={styles.timeline}>
				{projectsData.map((project, index) => {
					const isLeft = index % 2 === 0;
					return (
						<div
							key={index}
							className={`${styles.box} ${
								isLeft ? styles.left_box : styles.right_box
							}`}
						>
							<img
								className={styles.icons}
								loading="lazy"
								src={getAsset(project.icon)}
								alt={project.title}
								data-aos="zoom-in"
							/>
							<div className={styles.text_box} data-aos="fade-up">
								{project.media && (
									<video
										className="project-video"
										preload="none"
										playsInline
										controls
										loop
										muted
										style={{ width: "100%" }}
									>
										<source
											src={getAsset(project.media)}
											type="video/mp4"
										/>
										Your browser does not support the video
										tag.
									</video>
								)}
								<div className={styles.tags_box}>
									{project.tags.map((tag) => (
										<span className={styles.tags} key={tag}>
											{tag}
										</span>
									))}
								</div>
								<p className={styles.title}>{project.title}</p>
								<p className={styles.subtitle}>
									{project.subtitle}
								</p>
								<p className={styles.description}>
									{project.description}
								</p>
								{project.buttons && project.buttons.length > 0 && (
									<div className={styles.button_box}>
										{project.buttons.map((btn, btnIndex) => (
											<a
												key={btnIndex}
												href={btn.url}
												target="_blank"
												rel="noreferrer"
											>
												{btn.label}
											</a>
										))}
									</div>
								)}
								<span
									className={
										isLeft
											? styles.left_box_arrow
											: styles.right_box_arrow
									}
								></span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
