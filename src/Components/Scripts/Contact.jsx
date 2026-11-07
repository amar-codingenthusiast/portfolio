import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../Styles/Contact.module.css";

export const Contact = () => {
	const formRef = useRef(null);
	const [status, setStatus] = useState("idle"); // idle | sending | success | error
	const [errorMessage, setErrorMessage] = useState("");
	const [copied, setCopied] = useState(false);

	const handleCopyEmail = (e) => {
		e.preventDefault();
		e.stopPropagation();
		navigator.clipboard.writeText("amar.codingenthusiast@gmail.com");
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
		const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
		const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

		try {
			setStatus("sending");
			setErrorMessage("");

			await emailjs.sendForm(
				serviceId,
				templateId,
				formRef.current,
				publicKey
			);

			setStatus("success");
			formRef.current.reset();
			setTimeout(() => setStatus("idle"), 6000);
		} catch (error) {
			console.error("EmailJS Error:", error);
			setStatus("error");
			setErrorMessage(
				"Failed to send message. Please reach out directly at amar.codingenthusiast@gmail.com."
			);
		}
	};

	return (
		<div id="contact" className={styles.container}>
			<p className={styles.heading}>Contact</p>
			<p className={styles.desc}>
				Feel free to reach out for project collaboration, job inquiries,
				or just to say hello. I'll get back to you as soon as possible!
			</p>

			<div className={styles.contact_wrapper} data-aos="fade-up">
				<div className={styles.info_box}>
					<div>
						<h3 className={styles.info_title}>Get in Touch</h3>
						<p className={styles.info_text}>
							Have an opportunity or an interesting project in mind?
							Reach out via direct contact or fill out the message form.
						</p>
					</div>

					<div className={styles.info_cards}>
						<a
							href="mailto:amar.codingenthusiast@gmail.com"
							className={styles.info_card}
						>
							<div className={styles.icon_circle}>
								<i className="fa-solid fa-envelope"></i>
							</div>
							<div className={styles.info_content}>
								<p className={styles.info_label}>Email Me</p>
								<p className={styles.info_val}>
									amar.codingenthusiast@gmail.com
								</p>
							</div>
							<button
								type="button"
								className={styles.copy_btn}
								onClick={handleCopyEmail}
								title="Copy email to clipboard"
							>
								<i
									className={
										copied
											? "fa-solid fa-check"
											: "fa-regular fa-copy"
									}
								></i>
								<span>{copied ? "Copied" : "Copy"}</span>
							</button>
						</a>

						<a
							href="tel:+916200110130"
							className={styles.info_card}
						>
							<div className={styles.icon_circle}>
								<i className="fa-solid fa-phone"></i>
							</div>
							<div className={styles.info_content}>
								<p className={styles.info_label}>Call / WhatsApp</p>
								<p className={styles.info_val}>+91 62001 10130</p>
							</div>
						</a>

						<div className={styles.info_card}>
							<div className={styles.icon_circle}>
								<i className="fa-solid fa-location-dot"></i>
							</div>
							<div className={styles.info_content}>
								<p className={styles.info_label}>Current Location</p>
								<p className={styles.info_val}>Patna, Bihar, India</p>
							</div>
						</div>
					</div>

					<div className={styles.social_section}>
						<p className={styles.social_heading}>Connect Socially</p>
						<div className={styles.social_grid}>
							<a
								href="https://www.github.com/amar-codingenthusiast"
								target="_blank"
								rel="noreferrer"
								className={styles.social_pill}
							>
								<i
									className={`fa-brands fa-github ${styles.social_pill_icon}`}
								></i>
								<div className={styles.social_pill_info}>
									<span className={styles.social_platform}>
										GitHub
									</span>
									<span className={styles.social_handle}>
										@amar-codingenthusiast
									</span>
								</div>
							</a>

							<a
								href="https://www.linkedin.com/in/amar-codingenthusiast"
								target="_blank"
								rel="noreferrer"
								className={styles.social_pill}
							>
								<i
									className={`fa-brands fa-linkedin ${styles.social_pill_icon}`}
								></i>
								<div className={styles.social_pill_info}>
									<span className={styles.social_platform}>
										LinkedIn
									</span>
									<span className={styles.social_handle}>
										Amar Kumar
									</span>
								</div>
							</a>
						</div>
					</div>
				</div>

				{/* Right Column: Glassmorphic Message Form */}
				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className={styles.form_card}
				>
					<h3 className={styles.form_title}>Send a Message</h3>

					{status === "success" && (
						<div className={styles.alert_success}>
							<i className="fa-solid fa-circle-check"></i>
							<span>
								Thank you! Your message has been sent successfully.
								I will get back to you shortly.
							</span>
						</div>
					)}

					{status === "error" && (
						<div className={styles.alert_error}>
							<i className="fa-solid fa-circle-exclamation"></i>
							<span>{errorMessage}</span>
						</div>
					)}

					<div className={styles.form_group}>
						<label htmlFor="user_name" className={styles.form_label}>
							Your Name
						</label>
						<input
							type="text"
							id="user_name"
							name="user_name"
							className={styles.input}
							placeholder="Enter your name"
							required
						/>
					</div>

					<div className={styles.form_group}>
						<label htmlFor="user_email" className={styles.form_label}>
							Your Email Address
						</label>
						<input
							type="email"
							id="user_email"
							name="user_email"
							className={styles.input}
							placeholder="Enter your email"
							required
						/>
					</div>

					<div className={styles.form_group}>
						<label htmlFor="subject" className={styles.form_label}>
							Subject
						</label>
						<input
							type="text"
							id="subject"
							name="subject"
							className={styles.input}
							placeholder="e.g. Project Inquiry / Job Opportunity"
							required
						/>
					</div>

					<div className={styles.form_group}>
						<label htmlFor="message" className={styles.form_label}>
							Your Message
						</label>
						<textarea
							id="message"
							name="message"
							rows={5}
							className={styles.textarea}
							placeholder="Type your message details here..."
							required
						></textarea>
					</div>

					<button
						type="submit"
						disabled={status === "sending"}
						className={styles.submit_btn}
					>
						{status === "sending" ? (
							<>
								<i className="fa-solid fa-spinner fa-spin"></i>
								<span>Sending...</span>
							</>
						) : (
							<>
								<i className="fa-solid fa-paper-plane"></i>
								<span>Send Message</span>
							</>
						)}
					</button>
				</form>
			</div>
		</div>
	);
};

