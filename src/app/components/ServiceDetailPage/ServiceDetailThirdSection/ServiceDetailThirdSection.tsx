import styles from './ServiceDetailThirdSection.module.css';

export default function ServiceDetailThirdSection() {
	return (
		<section className={styles.ServiceDetailThirdSection}>
            <div className={styles.container}>
			<h2 className={`mainHeading ${styles.mainHeading}`}>Body Contouring Treatments</h2>
			<p className={styles.description}>
				Body contouring treatments encompass a range of options, with the choice depending on individual goals, preferences, and specific areas of concern. Common body contouring procedures include:
			</p>
			<div className={styles.columns}>
				<div className={styles.column}>
						<b>1. High-Intensity Focused Ultrasound (HIFU):</b>
						<span> It is a non-invasive technique used for body contouring that utilizes targeted ultrasound energy to heat specific layers of the skin. HIFU helps achieve a more sculpted and contoured appearance by stimulating collagen production and promoting tissue tightening.</span>
					<ul className={styles.bulletList}>
						<li>
							During a HIFU session, ultrasound energy is applied to specific body areas, such as the abdomen, thighs, buttocks, or arms. This energy safely passes through the skin without causing harm and focuses on deeper layers where fat deposits reside. Controlled heating of these targeted tissues triggers a natural healing response, leading to collagen production and skin tightening over time.
						</li>
						<li>
							One of the notable advantages of HIFU is its non-invasive nature, eliminating the need for surgical incisions or downtime. The treatment is generally well-tolerated, allowing patients to resume their normal activities immediately following the procedure.
						</li>
					</ul>
				</div>
				<div className={styles.column}>
						<b>2. Cool Sculpt:</b>
						<span> Cool sculpting is a non-surgical body contouring treatment that uses controlled and focused cooling technology to target and dissolve persistent fat cells in specific areas of the body. Also known as cryolipolysis, this procedure aims to enhance body contours and overall shape.</span>
					<ul className={styles.bulletList}>
						<li>
							During a CoolSculpting session, a specialized device is applied to the targeted areas, such as the abdomen, flanks (love handles), thighs, or arms. The device delivers precise cooling to the fat cells, causing them to freeze without causing harm to surrounding tissues. Through a process called apoptosis, the frozen fat cells gradually break down and are naturally eliminated by the body over time.
						</li>
						<li>
							CoolSculpting primarily focuses on localized areas of fat that are resistant to diet and exercise. It can effectively diminish the appearance of bulges and unwanted fat deposits in specific regions, resulting in a more sculpted and contoured physique.
						</li>
					</ul>
				</div>
			  </div>
            </div>
		</section>
	);
}
