import styles from "../Styles/About.module.css";
import mypic from "./mypic.jpg";
import {useRef, useEffect} from "react";
import VanillaTilt from "vanilla-tilt"
import { useTypewriter, Cursor} from "react-simple-typewriter";

export const About = () => {
	const tiltRef = useRef(null);
	useEffect(() => {
        if (tiltRef.current) {
            VanillaTilt.init(tiltRef.current, {
                max: 25,
                speed: 400,
				reverse: true,
                glare: true,
				scale: 1.1,
                'max-glare': 0.8,
            });
        }
    }, []);
	const [text] = useTypewriter({
		words: [
			"Full Stack Developer",
			"MERN Stack Developer",
			"Java Developer",
			"C++ Developer"
		],
		loop: {},
	});
	return (
		<div className={styles.container}>
			<div className={styles.about}>
				<p className={styles.name}>
					Hi, I am<br />Amar Kumar
				</p>
				<div className={styles.title}>
					I am a <span className={styles.typewriter}>{text}
					<Cursor/>
					</span>
				</div>
				<div className={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis odio porro dolor dolorum vitae. Fugiat sed dolorem dolore obcaecati nemo cum excepturi voluptas consequuntur doloribus. Officiis reiciendis reprehenderit non dignissimos delectus, laborum odit dolorem, enim mollitia optio quaetenetur soluta in eius, harum nulla voluptatibus quas blanditiis incidunt?</div>
				<a href="/resume" target="_blank" className={styles.resume}>Check Resume</a>
			</div>
			<img className={styles.mypic} ref={tiltRef} src={mypic} alt="mypic" />
		</div>
	);
};
