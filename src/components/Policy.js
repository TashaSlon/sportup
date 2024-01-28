import { Link } from "react-router-dom";

export default function Terms() {

  return (
    <div>
        <p>MAD REDIS Lab LLC built the SportUp app as a Free app. This SOFTWARE is provided by MAD REDIS Lab LLC at no cost and is intended for use as is.</p>
        <p>This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Software.</p>
        <p>If you choose to use our Software, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Software. We will not use or share your information with anyone except as described in this Privacy Policy.</p>
        <p>The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at <Link className="document__link" href="https://sportup.io/terms-conditions" title="SportUp">this link</Link> unless otherwise defined in this Privacy Policy.</p>
        <p><strong>Information Collection and Use</strong></p>
        <p>For a better experience, while using our Software, we may require you to provide us with certain personally identifiable information. The information that we request will be retained by us and used as described in this privacy policy.</p>
        <p>The app does use third party Softwares that may collect information used to identify you.</p>
        <p>Link to privacy policy of third party Software providers used by the app</p>
        <ul className="document__list">
            <li>
                <Link className="document__link" href="https://policies.google.com/privacy">Google Play Softwares</Link>
            </li>
            <li>
                <Link className="document__link" href="https://firebase.google.com/policies/analytics">Google Analytics for Firebase</Link>
            </li>
        </ul>
        <p><strong>Log Data</strong></p>
        <p>We want to inform you that whenever you use our Software, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Software, the time and date of your use of the Software, and other statistics.</p>
        <p><strong>Software Providers</strong></p>
        <p>We may employ third-party companies and individuals due to the following reasons:</p>
        <ul>
            <li>To facilitate our Software;</li>
            <li>To provide the Software on our behalf;</li>
            <li>To perform Software-related Softwares; or</li>
            <li>To assist us in analyzing how our Software is used.</li>
        </ul>
        <p>We want to inform users of this Software that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>
        <p><strong>Security</strong></p>
        <p>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>
        <p><strong>Personal and Sensitive Information</strong></p>
        <p>This app collects location data to enable collecting athlete parameters only during the event in which the user participates, even when the app is closed or not in use.</p>
        <p><strong>Links to Other Sites</strong></p>
        <p>This Software may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or Softwares.</p>
        <p><strong>Children’s Privacy</strong></p>
        <p>These Softwares do not address anyone under the age of 12. We do not knowingly collect personally identifiable information from children under 12. In the case we discover that a child under 12 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.</p>
        <p><strong>Changes to This Privacy Policy</strong></p>
        <p>We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy</p>
        <p>Policy on this page.</p>
        <p>This policy is effective as of 2023-05-12</p>
    </div>
  );
};