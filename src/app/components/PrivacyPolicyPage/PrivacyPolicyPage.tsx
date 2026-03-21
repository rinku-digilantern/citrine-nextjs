import React from 'react';
import styles from './PrivacyPolicyPage.module.css';

const PrivacyPolicyPage = () => {
  return (
    <section className={styles.PrivacyPolicyPage}>
      <div className={styles.container}>
       <div className={styles.commonheader}>
            <h1 className={`mainHeading ${styles.mainHeading}`}>Privacy Policy</h1>
        </div> 
      <p>
        Your privacy is important to us. To better protect it, we provide this declaration explaining our online information practices.
        <br /><br />
        We recognize the importance of privacy. We value and protect your right to keep your personal information confidential. Our goal is for you to get the most out of this site and trust that we make every effort to safeguard your confidentiality.
        <br /><br />
        Please make a note that we at <a href="https://www.citrineclinic.com/">https://www.citrineclinic.com/</a> can make changes to this private policy from time to time. Keep checking this page to know more about the updated policies.
      </p>
      
      <h2>PERSONAL INFORMATION</h2>
      <p>
        Because of the nature of this site, a certain amount of personal information is necessary to provide you with the information you have requested. It is collected to respond to your requests for this information and add you to communications regarding our education. This can include but is not limited to:
      </p>
      <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
      </ul>
      <p>This information is collected solely to respond to your inquiries and provide relevant updates.</p>
      
      <h2>WHAT WE DO WITH YOUR PERSONAL INFORMATION</h2>
      <ul>
        <li>
          <a href="https://www.citrineclinic.com/">https://www.citrineclinic.com/</a> will not sell, distribute, or lease your personal information to third parties unless we have your permission or are required by law to do so.
        </li>
        <li>
          We take appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure, or destruction of data.
        </li>
        <li>
          We restrict access to personal information to our employees and agents who need to know that information in order to operate, develop, or improve our services, treatments, and related standard operational procedures.
        </li>
        <li>
          These individuals are bound by confidentiality obligations and may be subject to discipline, including termination and criminal prosecution if they fail to meet these obligations.
        </li>
      </ul>
      
      <h2>LINKS TO OTHER WEBSITES</h2>
      <ul>
        <li>Our website may contain links to other websites of interest.</li>
        <li>
          However, once you have used these links to leave our site, you should note that we do not have any control over that other website.
        </li>
        <li>
          We are not responsible for the protection and privacy of any information that you provide whilst visiting such sites and if such sites are not governed by this privacy statement.
        </li>
      </ul>

      <h3>OTHER INFORMATION COLLECTED</h3>
      <p>When you visit our website, we collect non-personal information about your visit. We collect you:</p>
      <ul>
        <li>IP address</li>
        <li>browser type</li>
        <li>domain name</li>
        <li>the length of time of your visit</li>
        <li>the number of times you visit</li>
      </ul>
      <p>
        We use this information to gather aggregate demographic information about our visitors, and we use it to personalize the information you see on our website and the emails you receive from us.
        <br /><br />
        We keep this information for our internal use; we do not share it with others. This information is in no way tied to your personal information.
      </p>

      <h3>COOKIES AND ONLINE ADVERTISING</h3>
      <ul>
        <li>
          This information is only used to see how people are navigating the site. It enables us to improve the overall site, makes it easier to navigate, and allows us to provide additional, updated information in the most popular areas.
        </li>
        <li>
          To learn more about our third-party ad-serving partner, cookies, and how to opt out of customized Google Display Network ads or adjust your settings, please visit Google Ads Preferences Manager to adjust your settings.
        </li>
      </ul>
    </div>
    </section>
  );
};

export default PrivacyPolicyPage;