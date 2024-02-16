import React from 'react'
import './TermsAndConditions.css';
import { Link } from 'react-router-dom';
import * as AiIcons from "react-icons/ai";

export default function TermsAndConditions() {
  return (
    <div className="termsAndCondition">
      <div className="carrybox">
        <Link to="/Advertise">
          <AiIcons.AiFillCloseCircle />
        </Link>
        <p className="heading01">Terms and Conditions for Advertising on ShikshakPro App</p>
        <p className="ptag">
          <p className="spantag">&#8226; Introduction:</p>
          <ol>
            <li className="ptagli"> Welcome to ShikshakPro. By using this App, you agree to comply with and be bound by the following terms and
              conditions.</li>
          </ol>
          <span className="spantag">&#8226;  Advertisement Submission</span>
          <ol>
            <li className="ptagli">
             <span className="bold">Approval:</span>All advertisements are subject to approval by Care 4 Edu Solutions Pvt. Ltd. We reserve the right
              to reject or remove any advertisement that does not meet our guidelines or is deemed inappropriate.
            </li>
            <li className="ptagli">
            <span className="bold"> Content Guidelines:</span> Advertisements must comply with our content guidelines, which prohibit, but are not
              limited to, content that is misleading, offensive, infringing, or violates any applicable laws or regulations.
              Refer article no. 11for content guidelines mentioned in the same document.
            </li>
          </ol>
          <span className="spantag">&#8226; Geo-Location Advertising</span>
          <ol>
            <li className="ptagli">
              The App utilizes geo-location services to deliver personalized advertisements based on the user's location within
              the given radius. By using the App, you consent to the collection, use, and sharing of your location data for
              advertising purposes. The radius limit for advertising would be equal to or lesser than 5 kms (This limit will be
              subjected to change as per the company policies)
            </li>
          </ol>
          
          <span className="spantag">&#8226;Ad Placement and Display</span>
          <ol>
            <li className="ptagli"> <span className="bold">Home Page Placement:</span> Advertisements may be displayed on the App's home page based on various
              factors, including but not limited to user targeting, relevance, and available ad space</li>
            <li className="ptagli">
            <span className="bold"> Rotation and Frequency:</span> Advertisements may rotate with other ads, and the frequency of display is at the
              discretion of Care 4 Edu Solutions Pvt. Ltd
            </li>
          </ol> 
          <span className="spantag">&#8226; User Consent </span>
          <ol>
            <li className="ptagli"> <span className="bold">Voluntary Participation:</span> The use of geo-location services is voluntary, and you may disable location
              services in your device settings at any time. </li>
            <li className="ptagli">
            <span className="bold"> Opt-Out:</span> You have the option to opt-out of geo-location based advertising by writing an email to us on
              customer service as mentioned in section 17.
            </li>
          </ol>
          <span className="spantag">&#8226;Data Privacy </span>
          <ol>
            <li className="ptagli"> <span className="bold">Data Collection:</span> We collect and process your location data in accordance with our Privacy Policy. Please
              review our Privacy Policy for details on the types of data collected, how it is used, and with whom it may be
              shared.</li>
            <li className="ptagli">
            <span className="bold"> Anonymization:</span> We take measures to anonymize and aggregate location data to protect your privacy.
            </li>
          </ol>
          
          <span className="spantag">&#8226; Advertisement Specifications</span>
          
          <ol>
            <li className="ptagli"> <span className="bold">Geo Location Specific Ads:</span> Ads displayed on the App are geo-location specific and are tailored to your
              location.</li>
            <li className="ptagli">
            <span className="bold"> Image Specifications:</span> The recommended image resolution size is 300 x 900 pixels. However, the image
              quality depends on the quality of the image provided by the customer. Also Care 4 Edu Solutions Pvt. Ltd. is
              not responsible if the images are of low quality or distorted etc.
            </li>
            <li className="ptagli"> <span className="bold">Copyright images:</span> Care 4 Edu Solutions Pvt. Ltd is not responsible for any distorted images or copyright
              images provided by the customer/advertiser, it is purely based on the customer/advertiser’s discretion</li>
            <li className="ptagli">
            <span className="bold">Image Display:</span> Images sent by customers via their registered email or our app's account will be displayed
              on our mobile app based on the mobile-to-image aspect ratio. Refer to point 2 for image quality.
            </li>
          </ol>
          <span className="spantag">&#8226;  Payment and Ad Charges</span>
          
          <ol>
            <li className="ptagli"> <span className="bold">Priority Display:</span> Ad charges apply based on priority display, from top to bottom</li>
            <li className="ptagli">
            <span className="bold">Commodities:</span> Ad charges vary based on the nature of commodities advertised.
            </li>
            <li className="ptagli"> <span className="bold">User-Generated Ads:</span> Ad charges apply only if the ads are sent by customers/users. If users want us to
              design customized ads for their entity/organization/business, additional charges for ad creation will apply
              (Ad charges + Design charges).
            </li>
            <li className="ptagli">
            <span className="bold">Rate Changes:</span> Ad charges are subject to change, and any modifications will be effective immediately upon
              posting.
            </li>
            <li className="ptagli"> <span className="bold">Ad Charges:</span> Advertisers are responsible for the payment of agreed-upon charges for displaying ads on the
              App.</li>
            <li className="ptagli">
            <span className="bold">Payment Terms:</span> Payment terms are outlined in the advertising agreement and must be adhered to by the
              advertiser.
            </li>
          </ol>
          
          <span className="spantag"> &#8226;  Duration and Termination</span>
          
          <ol>
            <li className="ptagli"> <span className="bold">Ad Duration:</span> The duration of advertisement display is specified in the advertising agreement. After the
              agreed-upon period, the ad will be automatically removed unless renewed.</li>
            <li className="ptagli">
            <span className="bold"> Termination:</span> Care 4 Edu Solutions Pvt. Ltd. reserves the right to terminate any advertising agreement at
              any time for any reason, including but not limited to violation of these terms.</li>
          </ol>
         
          <span className="spantag"> &#8226; Content Ownership and Rights </span>
        
          <ol>
            <li className="ptagli"> <span className="bold">Intellectual Property:</span> Advertisers retain ownership of the intellectual property in their advertisements.</li>
            <li className="ptagli">
            <span className="bold"> License:</span> By submitting an advertisement, advertisers grant Care 4 Edu Solutions Pvt. Ltd a non-exclusive,
              worldwide, royalty-free license to use, reproduce, and display the advertisement on the App.</li>
          </ol>
         
          <span className="spantag"> &#8226; Content Ownership and Rights </span>
          
          <ol>
            <li className="ptagli">  <span className="bold">Illegal Content:</span>
              Adspromoting any illegal activities, including but not limited to drug trafficking, hacking, or any other
              criminal behavior, are strictly prohibited.</li>
            <li className="ptagli">
            <span className="bold"> Inappropriate Content:</span>
              Ads containing explicit or adult content, nudity, sexual content, or any material that may be considered
              offensive or inappropriate for an educational platform are not allowed.</li>
            <li className="ptagli"> <span className="bold">Misleading Claims:</span>
              Ads making false or misleading claims about educational outcomes, certifications, or job opportunities are
              prohibited. All educational claims must be substantiated and accurate.</li>
            <li className="ptagli">
            <span className="bold">Discrimination and Hate Speech:</span>
              Ads promoting discrimination, hate speech, or any content that marginalizes or targets individuals or
              groups based on race, ethnicity, religion, gender, sexual orientation, disability, or other protected
              characteristics are strictly forbidden.
            </li>
            <li className="ptagli"> <span className="bold">Violence and Harassment:</span>
              Ads containing violent content, promoting violence, or engaging in any form of harassment are not
              permitted.</li>
            <li className="ptagli">  <span className="bold">Offensive Language:</span>
              Ads containing offensive language, profanity, or any content that may create a hostile environment are
              prohibited.</li>
            <li className="ptagli">
            <span className="bold"> Malware and Spyware:</span>
              Ads containing malware, spyware, or any malicious software that can harm users' devices or compromise
              their security are strictly forbidden.
            </li>
            <li className="ptagli">  <span className="bold">Personal Information Collection:</span>
              Ads that request or collect sensitive personal information without proper consent are not allowed. This
              includes, but is not limited to, financial information, login credentials, or other private data.</li>
            <li className="ptagli">
            <span className="bold"> License: </span>By submitting an advertisement, advertisers grant Care 4 Edu Solutions Pvt. Ltd a non-exclusive,
              worldwide, royalty-free license to use, reproduce, and display the advertisement on the App.</li>
            <li className="ptagli"> <span className="bold">Political and Religious Advocacy:</span>
              Ads promoting political or religious advocacy are not permitted to maintain a neutral and inclusive
              educational environment.</li>
            <li className="ptagli"> <span className="bold"> Gambling and Betting:</span>
              Ads related to gambling, betting, or online casinos are not allowed to ensure a focus on educational content.
            </li>
            <li className="ptagli"> <span className="bold">Controversial Issues:</span>
              Ads related to controversial issues that may cause disruption or discomfort within the educational
              community should be carefully evaluated and restricted as needed.
            </li>
            <li className="ptagli"> <span className="bold">Third-Party Verification:</span>
              Consider implementing a process for third-party verification of ad content to ensure compliance with these
              guidelines
            </li>
            <li className="ptagli">  <span className="bold"> Reporting Mechanism:</span>
              Provide users with a clear mechanism to report ads that they find inappropriate or in violation of these
              guidelines.
            </li>
            <li className="ptagli"> <span className="bold">Periodic Review:</span>
              Regularly review and update these guidelines to adapt to changing standards and user expectations.
            </li>
            <li className="ptagli">  <span className="bold">Legal Compliance:</span>
              Ensuring that all ads comply with applicable laws and regulations related to advertising.
            </li>
          </ol>
          
          <span className="spantag"> &#8226; Content Ownership and Rights </span>
          
          <ol>
            <li className="ptagli"> <span className="bold"> Content Approval:</span>
              All ads must be subject to approval by Care 4 Edu Solutions Pvt. Ltd. We reserve the right to reject or
              remove any ad that does not meet our guidelines or is deemed inappropriate.
            </li>
            <li className="ptagli">  <span className="bold">Non-Discrimination:</span>
              Ads must not discriminate or promote hate speech based on race, ethnicity, religion, gender, sexual
              orientation, disability, or other protected characteristics.

            </li>
            <li className="ptagli"> <span className="bold">Privacy and Data Security:</span>
              Ads should comply with data privacy laws and should not request or collect sensitive personal information
              without proper consent.
            </li>
            <li className="ptagli"> <span className="bold">Non-Disruptive:</span>
              Ads should not disrupt the user experience or detract from the educational focus of the app.

            </li>
            <li className="ptagli">  <span className="bold">Termination Clause:</span>
               Care 4 Edu Solutions Pvt. Ltd. reserves the right to terminate any advertising contract at any time
              with or without cause. Such termination may be communicated or occur without prior notice.
               In the event of termination, advertisers are not entitled to a refund for any remaining duration of
              the advertising contract.
            </li>
            <li className="ptagli"> <span className="bold">Compliance with Laws:</span>
              Advertisers must comply with all applicable laws and regulations related to advertising
            </li>
            <li className="ptagli"> <span className="bold"> Quality Assurance:</span>
              Advertisers are responsible for the quality and relevance of their ads. Care 4 Edu Solutions Pvt. Ltd. may
              periodically review and assess the quality of displayed ads.
            </li>
            <li className="ptagli"> <span className="bold">Reporting Mechanism:</span>
              Users should be provided with a clear mechanism to report ads that they find inappropriate or in violation
              of these guidelines.
            </li>
          </ol>
          <span className="spantag"> &#8226;  Advertising Compliance Laws</span>
         
          <ol>
            <li className="ptagli"> <span className="bold"> Advertising Standards Council of India (ASCI):</span>
              Advertisers should adhere to the guidelines set by the Advertising Standards Council of India (ASCI). ASCI
              have a code of self-regulation for advertising content, which includes principles of truthfulness and
              fairness.
            </li>
            <li className="ptagli"> <span className="bold">Consumer Protection Act, 2019:</span>
              Advertisers must comply with the Consumer Protection Act, 2019, which aims to protect the rights of
              consumers. Advertisements should not engage in unfair trade practices, deceptive advertising, or false
              claims
            </li>
            <li className="ptagli"> <span className="bold">Intellectual Property Laws:</span>
              Advertisers should respect intellectual property rights. Using copyrighted material without permission or
              making false claims about proprietary products can lead to legal consequences.
            </li>
            <li className="ptagli"> <span className="bold">VAT and Service Tax Compliance:</span>
              Advertisers should ensure compliance with tax laws, including the payment of Goods and Services Tax
              (GST) on advertising services. Understanding and adhering to tax regulations is crucial.
            </li>
            <li className="ptagli"> <span className="bold"></span>Prohibition of Unfair Trade Practices:
              Advertisers should refrain from engaging in unfair trade practices as defined under the Consumer
              Protection Act. Misleading advertisements, false claims, and deceptive practices can be challenged under
              this legislation.
            </li>
            <li className="ptagli">  <span className="bold">Content Censorship Laws:</span>
              Advertisers should be mindful of content censorship laws, and ensure that their advertisements do not
              violate any laws related to obscenity, indecency, or morality.
            </li>
            <li className="ptagli"> <span className="bold">Periodic Compliance Audits:</span>
              Periodic compliance audits will be conducted to ensure that advertisements continue to comply with
              evolving laws and regulations.
            </li>
          </ol>
          <span className="spantag"> &#8226;   Changes in Terms:</span>
          <ol>
            <li className="ptagli"> Care 4 Edu Solutions Pvt. Ltd. reserves the right to modify these advertising guidelines at any time.  </li>
            <li className="ptagli"> Advertisers will be bound by the most recent version of the guidelines. </li>
          </ol>
          <span className="spantag"> &#8226;   Dispute Resolution:</span>
        
          <ol>
            <li className="ptagli">Any disputes arising from or related to advertising contracts will be resolved through negotiation, and if
              necessary, through legal processes in accordance with the laws of India and or under the jurisdiction of
              respective state government. </li>
          </ol>
          <span className="spantag"> &#8226;    Governing Law:</span>
         
          <ol>
            <li className="ptagli">These advertising compliance guidelines are governed by and construed in accordance with the laws of
              Government of India and local jurisdiction laws of Government of Karnataka.
            </li>
          </ol>
          <span className="spantag"> &#8226;    Contact Information:</span>
         
          <ol>
            <li className="ptagli"> If you have any questions or concerns regarding these guidelines, please contact us at our email ID:
              info@care4edu.com
            </li>
          </ol>
          <span className="spantag"> &#8226;    Effective Date:</span>
         
          <ol>
            <li className="ptagli">These advertising compliance guidelines are effective as of 18-September-2023.
            </li>
          </ol>
        </p>
      </div>
    </div>
  )
}
