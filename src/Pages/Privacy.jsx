import React from "react";

// Theme
import styles from ".././assets/theme.json";

//Components
import Navbar from "../Components/Pages/Navbar";
import Footer from "../Components/Pages/Footer";
import Trending from "../Components/Pages/Trending";

const Privacy = () => {
  return (
    <div>
      <Navbar />
      <div
        className={`dark:bg-[${styles.colors.background}] dark:text-[${styles.colors.textColor}] bg-[${styles.colors.lbackground}] text-[${styles.colors.ltextColor}] px-3 sm:px-12 sm:py-8 sm:pt-18 pt-20`}
      >
        <p className={`sm:mt-24 capitalize f-helvetica text-3xl font-semibold`}>
          BlogVines Privacy Policy
        </p>
        <p className={`my-1 dark:text-gray-300 text-gray-600`}>
          Effective : August 5,2024
        </p>
        <p className="pt-4 w-3/4">
          This Privacy Policy explains how A BlogVines Corporation (“BlogVines,”
          “we,” or “us”) collects, uses, and discloses information about you.
          This Privacy Policy applies when you use our websites, mobile
          applications, and other online products and services that link to this
          Privacy Policy (collectively, our “Services”), contact our customer
          service team, engage with us on social media, or otherwise interact
          with us.
        </p>
        <br />
        <p className="w-3/4">
          We may change this Privacy Policy from time to time. If we make
          changes, we will notify you by revising the date at the top of this
          policy and, in some cases, we may provide you with additional notice
          (such as adding a statement to our website or providing you with a
          notification). We encourage you to review this Privacy Policy
          regularly to stay informed about our information practices and the
          choices available to you.
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
                <a href="#collectionOfInformation">
                  1. Collection of Information
                </a>
              </li>
              <li>
                <a href="#useOfInformation">2. Use of Information</a>
              </li>
              <li>
                <a href="#sharingOfInformation">3. Sharing of Information</a>
              </li>
              <li>
                <a href="#thirdPartyUsage">4. Third-Party Embeds</a>
              </li>
              <li>
                <a href="#yourChoices">5. Your Choices</a>
              </li>
              <li>
                <a href="#contact">6. Contact Us</a>
              </li>
            </ol>
          </div>
        </div>
        <div className="sm:w-4/5 w-full pb-4">
          <div id="collectionOfInformation" className="my-4">
            <p
              className={` text-xl font-bold py-4 text-[${styles.colors.green}]`}
            >
              Collection of Information
            </p>
            <p className="font-bold">Information You Provide to Us</p>
            <p>
              We collect information you provide directly to us. For example,
              you share information directly with us when you create an account,
              fill out a form, submit or post content through our Services,
              purchase a membership, communicate with us via third-party
              platforms, request customer support, or otherwise communicate with
              us. The types of personal information we may collect include your
              name, display name, username, bio, email address, business
              information, your content, including your avatar image, photos,
              posts, responses, and series published by you, and any other
              information you choose to provide.
            </p>
            <br />
            <p>
              In some cases, we may also collect information you provide about
              others, such as when you purchase a Medium membership as a gift
              for someone. We will use this information to fulfill your request
              and will not send communications to your contacts unrelated to
              your request, unless they separately consent to receive
              communications from us or otherwise engage with us.
            </p>
            <br />
            <p>
              We do not collect payment information through our Services. We
              rely on third parties to process payments in connection with our
              Services. Any information you provide to facilitate such a payment
              is subject to the third-party payment processor’s privacy policy,
              and we encourage you to review this policy before you provide any
              information to the payment processor.
            </p>
            <br />
            <p className="font-bold">
              Information We Collect from Other Sources
            </p>
            <p>
              We obtain information from third-party sources. For example, we
              may collect information about you from social networks, accounting
              services providers and data analytics providers. Additionally, if
              you create or log into your Medium account through a third-party
              platform (such as Apple, Facebook, Google, or Twitter), we will
              have access to certain information from that platform, such as
              your name, lists of friends or followers, birthday, and profile
              picture, in accordance with the authorization procedures
              determined by such platform.
            </p>
          </div>
          <div className="my-4" id="useOfInformation">
            <p
              className={` text-xl font-bold py-4 text-[${styles.colors.green}]`}
            >
              Use of Information
            </p>
            <p>
              We use the information we collect to provide, maintain, and
              improve our Services, which includes publishing and distributing
              user-generated content, personalizing the posts you see and
              operating our metered paywall. We also use the information we
              collect to:
            </p>
            <br />
            <ul className="list-disc">
              <li>Create and maintain your BlogVines account;</li>
              <li>
                Process transactions and send related information, such as
                confirmations, receipts, and user experience surveys;
              </li>
              <li>
                Send you technical notices, security alerts, and support and
                administrative messages;
              </li>
              <li>
                Respond to your comments and questions and provide customer
                service; and
              </li>
              <li>
                Carry out any other purpose described to you at the time the
                information was collected.
              </li>
            </ul>
          </div>
          <div id="sharingOfInformation" className="my-4">
            <p
              className={` text-xl font-bold py-4 text-[${styles.colors.green}]`}
            >
              Sharing of Information
            </p>
            <p>
              We share personal information in the following circumstances or as
              otherwise described in this policy:
            </p>
            <br />
            <ul className="list-disc">
              <li>
                We share personal information with other users of the Services.
                For example, if you use our Services to publish content, post
                comments or send private notes, certain information about you
                will be visible to others, such as your name, photo, bio, other
                account information you may provide, and information about your
                activities on our Services (e.g., your followers and who you
                follow, recent posts, claps, highlights, and responses).
              </li>
              <li>
                We may share personal information in connection with, or during
                negotiations concerning, any merger, sale of company assets,
                financing, or acquisition of all or a portion of our business by
                another company.
              </li>
              <li>
                We share personal information with vendors, service providers,
                and consultants that need access to personal information in
                order to perform services for us, such as companies that assist
                us with web hosting, storage, and other infrastructure,
                analytics, payment processing, fraud prevention and security,
                customer service, communications, and marketing.
              </li>
              <li>
                We may disclose personal information if we believe that
                disclosure is in accordance with, or required by, any applicable
                law or legal process, including lawful requests by public
                authorities to meet national security or law enforcement
                requirements. If we are going to disclose your personal
                information in response to legal process, we will give you
                notice so you can challenge it (for example by seeking court
                intervention), unless we are prohibited by law or believe doing
                so may endanger others or cause illegal conduct. We will object
                to legal requests for information about users of our Services
                that we believe are improper.
              </li>
              <li>
                We share personal information with our lawyers and other
                professional advisors where necessary to obtain advice or
                otherwise protect and manage our business interests.
              </li>
            </ul>
          </div>
          <div id="thirdParty" className="my-4">
            <p
              className={` text-xl font-bold py-4 text-[${styles.colors.green}]`}
            >
              Third Party Embeds
            </p>
            <p>
              BlogVines does not host some of the content displayed on our
              Services. Users have the ability to post content that is actually
              hosted by a third party, but is embedded in our pages (an
              “Embed”). When you interact with an Embed, it can send information
              about your interaction to the hosting third party just as if you
              were visiting the third party’s site directly. For example, when
              you load a Medium post page with a YouTube video Embed and watch
              the video, YouTube receives information about your activity, such
              as your IP address and how much of the video you watch. BlogVines
              does not control what information third parties collect through
              Embeds or what they do with the information. This Privacy Policy
              does not apply to information collected through Embeds. The
              privacy policy belonging to the third party hosting the Embed
              applies to any information the Embed collects, and we recommend
              you review that policy before interacting with the Embed.
            </p>
          </div>
          <div id="yourChoices">
            <p
              className={` text-xl font-bold py-4 text-[${styles.colors.green}]`}
            >
                Your Choices
            </p>
            <p>
<p className="font-bold">            Account Information</p>
You may access, correct, delete and export your account information at any time by logging into the Services and navigating to the Settings page. Please note that if you choose to delete your account, we may continue to retain certain information about you as required by law or for our legitimate business purposes.
            </p>
            <p className="font-bold">Cookies</p><p>
Most web browsers are set to accept cookies by default. If you prefer, you can usually adjust your browser settings to remove or reject browser cookies. Please note that removing or rejecting cookies could affect the availability and functionality of our Services.</p>
          </div>
          <div id="contact">
            <p
              className={` text-xl font-bold py-4 text-[${styles.colors.green}]`}
            >
              Contact Us
            </p>
            <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@blogVines.com.
            </p>
          </div>
        </div>
      </div>
      <Trending/>
      <Footer />
    </div>
  );
};

export default Privacy;
