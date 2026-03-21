
import styles from './TechSixethSection.module.css';

const areas = [
	{
		text: 'Ultherapy face lift (full face tightening)',
		  borderType: "left",
	},
	{
		text: 'Ultherapy neck tightening',
		borderType: "bottom",
	},
	{
		text: 'Jawline & double chin',
		borderType: "top",
	},
	{
		text: 'Under-eye & brow lifting',
		borderType: "bottom",
	},
	{
		text: 'Décolletage (chest lines & wrinkles)',
		borderType: "top",
	},
];

const TechSixethSection = () => {
	return (
		<section className={styles.TechSixethSection}>
			<div className={styles.container}>
                <div className={`mainHeading ${styles.mainHeading}`}>
				AREAS TREATED WITH ULTHERAPY
			</div>
			<div className={styles.sixethSubheading}>
				Lorem ipsum dolor sit amet consectetur adipiscing elit sed nec mollis libero.<br/> Fusce augue turpis sollicitudin sed ultrices ut scelerisque.
			</div>
			<div className={styles.sixethGrid}>
				{areas.map((item)  => (
                    <div
             key={item.text}
              className={`${styles.sixethCard} ${
                item.borderType === "left"
                  ? styles.leftBorder
                  : item.borderType === "top"
                  ? styles.topBorder
                  : styles.bottomBorder}`}>
					<div className={styles.desc}>{item.text}</div>
					<div className={styles.sixethCardBottomBar}></div>
				</div>
				))}
			</div>
            </div>
		</section>
	);
};

export default TechSixethSection;
