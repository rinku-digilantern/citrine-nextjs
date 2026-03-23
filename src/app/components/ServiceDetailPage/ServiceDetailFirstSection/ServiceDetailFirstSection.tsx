import { DiResponsive } from 'react-icons/di';
import styles from './ServiceDetailFirstSection.module.css';

export default function ServiceDetailFirstSection() {
	return (
		<section className={styles.ServiceDetailFirstSection}>
            <div className={styles.container}>
                <h1 className={`mainHeading ${styles.mainHeading}`}>Laser Toning in Gurgaon</h1>
                <div className={styles.costBox}>
                    <em>Laser Toning Cost in Gurgaon ranges from <b>Rs. 5,000 - Rs. 25,000.</b></em>
                </div>
                <p className={styles.description}>
                    Aging, and environmental stresses such as UV radiation, pollution, chemical smoke, alcohol, and smoking all cause the skin to lose its shine, volume, and texture. Laser toning is a wonderful treatment for eliminating various types of pigmentation issues such as freckles, melasma, blemishes, sunspots, and age spots. This technology utilizes a short, concentrated beam of light that penetrates deeper or in the defined layer of the skin. It helps in the production of elastin, and collagen, and also restores the skin’s ability to heal. Laser toning is a popular method as it provides significant improvement in the skin tone as well as the texture with the subsequent sessions. The procedure of <b>laser toning in Gurgaon</b> is a relatively simple, safe, and reliable treatment for skin lightening.
                </p>
                <ul>
                    <li>Collagen and elastin protein helps in providing volume, radiance, elasticity, and strength to the skin.</li>
                    <li>The results are long-lasting, and there is little to no downtime.</li>
                    <li>Swelling, redness, and warm sensation may occur after the session, but it disappears within a few hours after the procedure.</li>
                    <li>This method stimulates the blood vessels to constrict, and this makes the skin smooth and wrinkle-free.</li>
                    <li>Laser toning methods deliver a specific wavelength of light that reaches in the deeper dermis layers of the skin and treats difficult pigmentation problems such as birthmarks and under-eyes dark circles. This method does not leave scabs behind because the treatment is provided in the deep layers within the skin.</li>
                </ul>

                <table className={styles.table}>
                    <tbody>
                        <tr>
                            <th>Phase</th>
                            <th>What to Expect</th>
                        </tr>
                        {/* ...existing rows... */}
                    </tbody>
                  <tbody>
                    <tr>
                        <td>Immediately after treatment</td>
                        <td>Mild redness may appear</td>
                    </tr>
                    <tr>
                        <td>IWithin few hours to one day</td>
                        <td>The skin usually settles and the redness subsides</td>
                    </tr>
                    <tr>
                        <td>After a few days</td>
                        <td>Skin looks natural like before</td>
                    </tr>
                   </tbody>
                </table>
            </div>
		</section>
	);
}
