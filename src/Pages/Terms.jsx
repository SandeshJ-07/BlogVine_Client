import React, { useEffect, useState } from "react";

// Theme
import styles from ".././assets/theme.json";

//Components
import Navbar from "../Components/Pages/Navbar";
import Footer from "../Components/Pages/Footer";
import Trending from "../Components/Pages/Trending";

const Terms = () => {
  return (
    <div>
      <Navbar />
      <div
        className={`dark:bg-[${styles.colors.background}] dark:text-[${styles.colors.textColor}] bg-[${styles.colors.lbackground}] text-[${styles.colors.ltextColor}] px-3 sm:px-12 sm:py-8 sm:pt-18 pt-20`}
      >
        <p className={`sm:mt-24 capitalize f-helvetica text-3xl font-semibold`}>
          Terms Of Services
        </p>
        <p className={`my-1 dark:text-gray-300 text-gray-600 `}>
          Effective : August 5,2024
        </p>

        <div className="my-8">
          <p
            className={`text-[${styles.colors.green}] pt-4 pb-2 capitalize font-bold text-xl`}
          >
            Table of Content
          </p>
          <div>
            <ol>
              <li>
                <a href="#agreementToTerms">1. Agreement to terms</a>
              </li>
              <li>
                <a href="#accountAndResponsibilities">
                  2. Your account and responsibilities
                </a>
              </li>
              <li>
                <a href="#userContent">3. User Content On The Services</a>
              </li>
              <li>
                <a href="#rights">4. Rights And ownerrship</a>
              </li>
              <li>
                <a href="#termination">5. Termination</a>
              </li>
              <li>
                <a href="#transfer">6. Transfer and Processing Data</a>
              </li>
              <li>
                <a href="#disclaimer">7. Disclaimers</a>
              </li>
            </ol>
          </div>
        </div>
        <div className="sm:w-4/5 w-full pb-4">
          <div id="agreementToTerms" className="my-4">
            <p
              className={` text-xl font-bold py-4 text-[${styles.colors.green}]`}
            >
              Agreement To Terms
            </p>
            <p>
              These Terms of Service (“Terms”) apply to your access to and use
              of the websites, mobile applications and other online products and
              services (collectively, the “Services”) provided by A BlogVines
              Corporation (“BlogVines” or “we”). By clicking your consent (e.g.
              “Continue,” “Sign-in,” or “Sign-up,”) or by using our Services,
              you agree to these Terms, including the mandatory arbitration
              provision and class action waiver in the Resolving Disputes;
              Binding Arbitration Section.
            </p>
            <br />
            <p>
              {" "}
              Our{" "}
              <a href="/" className="underline">
                {" "}
                Privacy Policy
              </a>{" "}
              explains how we collect and use your information while our Rules
              outline your responsibilities when using our Services. By using
              our Services, you’re agreeing to be bound by these Terms and our
              Rules. Please see our{" "}
              <a href="/" className="underline">
                {" "}
                Privacy Policy
              </a>{" "}
              for information about how we collect, use, share and otherwise
              process information about you.
            </p>
            <br />
            <p>
              {" "}
              If you have any questions about these Terms or our Services,
              please contact us at{" "}
              <a href="mailto:" className="underline">
                legal@blogvines.com
              </a>
              .
            </p>
          </div>
          <div className="my-4" id="accountAndResponsibilities">
            <p
              className={` text-xl font-bold py-4 text-[${styles.colors.green}]`}
            >
              Your Account and Responsibilities
            </p>
            <p>
              You’re responsible for your use of the Services and any content
              you provide, including compliance with applicable laws. Content on
              the Services may be protected by others’ intellectual property
              rights. Please don’t copy, upload, download, or share content
              unless you have the right to do so.
            </p>
            <br />
            <p>Your use of the Services must comply with our Rules.</p>
            <br />
            <p>
              You may need to register for an account to access some or all of
              our Services. Help us keep your account protected. Safeguard your
              password to the account, and keep your account information
              current. We recommend that you do not share your password with
              others.
            </p>
            <br />
            <p>
              If you’re accepting these Terms and using the Services on behalf
              of someone else (such as another person or entity), you represent
              that you’re authorized to do so, and in that case the words “you”
              or “your” in these Terms include that other person or entity.
            </p>
            <br />
            <p>To use our Services, you must be at least 13 years old.</p>
            <br />
            <p>
              If you use the Services to access, collect, or use personal
              information about other BlogVines users (“Personal Information”),
              you agree to do so in compliance with applicable laws. You further
              agree not to sell any Personal Information, where the term “sell”
              has the meaning given to it under applicable laws.
            </p>
            <br />
            <p>
              For Personal Information you provide to us (e.g. as a Newsletter
              Editor), you represent and warrant that you have lawfully
              collected the Personal Information and that you or a third party
              has provided all required notices and collected all required
              consents before collecting the Personal Information. You further
              represent and warrant that BlogVines’s use of such Personal
              Information in accordance with the purposes for which you provided
              us the Personal Information will not violate, misappropriate or
              infringe any rights of another (including intellectual property
              rights or privacy rights) and will not cause us to violate any
              applicable laws.
            </p>
          </div>
          <div id="userContent" className="my-4">
            <p
              className={` text-xl font-bold py-4 text-[${styles.colors.green}]`}
            >
              User Content on the Services
            </p>
            <p>
              BlogVines may review your conduct and content for compliance with
              these Terms and our Rules, and reserves the right to remove any
              violating content.
            </p>
            <br />
            <p>
              BlogVines reserves the right to delete or disable content alleged
              to be infringing the intellectual property rights of others, and
              to terminate accounts of repeat infringers. We respond to notices
              of alleged copyright infringement if they comply with the law;
              please report such notices using our Copyright Policy.
            </p>
          </div>
          <div id="rights" className="my-4">
            <p
              className={` text-xl font-bold py-4 text-[${styles.colors.green}]`}
            >
              Rights and Ownership
            </p>
            <p>
              You retain your rights to any content you submit, post or display
              on or through the Services.
            </p>
            <br />
            <p>
              Unless otherwise agreed in writing, by submitting, posting, or
              displaying content on or through the Services, you grant BlogVines
              a nonexclusive, royalty-free, worldwide, fully paid, and
              sublicensable license to use, reproduce, modify, adapt, publish,
              translate, create derivative works from, distribute, publicly
              perform and display your content and any name, username or
              likeness provided in connection with your content in all media
              formats and distribution methods now known or later developed on
              the Services.
            </p>
            <br />
            <p>
              BlogVines needs this license because you own your content and
              BlogVines therefore can’t display it across its various surfaces
              (i.e., mobile, web) without your permission.
            </p>
            <br />
            <p>
              This type of license also is needed to distribute your content
              across our Services. For example, you post a story on BlogVines.
              It is reproduced as versions on both our website and app, and
              distributed to multiple places within BlogVines, such as the
              homepage or reading lists. A modification might be that we show a
              snippet of your work (and not the full post) in a preview, with
              attribution to you. A derivative work might be a list of top
              authors or quotes on BlogVines that uses portions of your content,
              again with full attribution. This license applies to our Services
              only, and does not grant us any permissions outside of our
              Services.
            </p>
            <br />
            <p>
              So long as you comply with these Terms, BlogVines gives you a
              limited, personal, non-exclusive, and non-assignable license to
              access and use our Services.
            </p>
            <br />
            <p>
              The Services are protected by copyright, trademark, and other US
              and foreign laws. These Terms don’t grant you any right, title or
              interest in the Services, other users’ content on the Services, or
              BlogVines trademarks, logos or other brand features.
            </p>
            <br />
            <p>
              Separate and apart from the content you submit, post or display on
              our Services, we welcome feedback, including any comments, ideas
              and suggestions you have about our Services. We may use this
              feedback for any purpose, in our sole discretion, without any
              obligation to you. We may treat feedback as nonconfidential.
            </p>
            <br />
            <p>
              We may stop providing the Services or any of its features within
              our sole discretion. We also retain the right to create limits on
              use and storage and may remove or limit content distribution on
              the Services.
            </p>
          </div>
          <div id="termination">
            <p
              className={` text-xl font-bold py-4 text-[${styles.colors.green}]`}
            >
              Termination
            </p>
            <p>
              You’re free to stop using our Services at any time. We reserve the
              right to suspend or terminate your access to the Services with or
              without notice.
            </p>
          </div>
          <div id="transfer">
            <p
              className={` text-xl font-bold py-4 text-[${styles.colors.green}]`}
            >
              Transfer and Processing Data
            </p>
            <p>
              In order for us to provide our Services, you agree that we may
              process, transfer and store information about you in the US and
              other countries, where you may not have the same rights and
              protections as you do under local law.
            </p>
          </div>
          <div id="disclaimer">
            <p
              className={` text-xl font-bold py-4 text-[${styles.colors.green}]`}
            >
              Disclaimer
            </p>
            <p>
              BlogVines aims to give you great Services but there are some things
              we can’t guarantee. Your use of our Services is at your sole risk.
              You understand that our Services and any content posted or shared
              by users on the Services are provided “as is” and “as available”
              without warranties of any kind, either express or implied,
              including implied warranties of merchantability, fitness for a
              particular purpose, title, and non-infringement. In addition,
              Medium doesn’t represent or warrant that our Services are
              accurate, complete, reliable, current or error-free. No advice or
              information obtained from Medium or through the Services will
              create any warranty or representation not expressly made in this
              paragraph. Medium may provide information about third-party
              products, services, activities or events, or we may allow third
              parties to make their content and information available on or
              through our Services (collectively, “Third-Party Content”). We do
              not control or endorse, and we make no representations or
              warranties regarding, any Third-Party Content. You access and use
              Third-Party Content at your own risk. Some locations don’t allow
              the disclaimers in this paragraph and so they might not apply to
              you.
            </p>
          </div>
        </div>
      </div>
      <Trending/>
      <Footer />
    </div>
  );
};

export default Terms;
