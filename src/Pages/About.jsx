import React from "react";

// Components
import Navbar from "../Components/Pages/Navbar";
import Footer from "../Components/Pages/Footer";

//Images
import Thumbprint from "../assets/images/thumbprint.png";
import Unlimited from "../assets/images/UnlimitedReading.svg";
import Suport from "../assets/images/SupportWriters.svg";

// Theme
import styles from "../assets/theme.json";
import landingStyles from "../assets/stylesheet/landing.module.css";

const AboutPage = () => {
  const testimonials = [
    {
      name: "Sheldon Hofstinger",
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      text: "BlogVines is a great place to read and learn from a wide range of authors. It’s not muddied up by ads. It feels like one of the few pure places to go online.",
    },
    {
      name: "Penny",
      image:
        "https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
      text: "Medium is trying to shift the paradigm. They’re catering to those looking for fresh, new, authentic voices. I believe wholeheartedly in their mission.",
    },
  ];

  const [testimonialsState, setTestimonialsState] = React.useState(0);
  const testimonialRef = React.useRef();

  setTimeout(() => {
    setTestimonialsState((testimonialsState + 1) % testimonials.length);
  }, 5000);

  return (
    <div>
      <Navbar />
      <div
        className={`dark:bg-[${styles.colors.background}] dark:text-[${styles.colors.textColor}] bg-[${styles.colors.lbackground}] text-[${styles.colors.ltextColor}] px-3 sm:px-12 sm:py-8 sm:pt-18 py-20`}
      >
        <div>
          <p
            className={`sm:mt-24 mb-6 capitalize f-cambria text-2xl sm:text-4xl text-[${styles.colors.green}]`}
          >
            About
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            suscipit blanditiis, sit veritatis quos quas ad magni, totam
            laboriosam exercitationem doloremque placeat cumque consequatur
            quaerat hic ducimus, labore animi qui voluptatibus deleniti nemo
            soluta. Quia vitae laboriosam at autem voluptatum.
          </p>
        </div>
        <div className="flex my-12 border-y-[0.5px] border-black dark:border-white items-center  flex-col lg:flex-row">
          <div className="w-full lg:w-7/12 py-4 pr-4">
            <p>
              The best ideas can change who we are. BligVines is where those
              ideas take shape, take off, and spark powerful conversations.
              We’re an open platform where over 100 million readers come to find
              insightful and dynamic thinking. Here, expert and undiscovered
              voices alike dive into the heart of any topic and bring new ideas
              to the surface. Our purpose is to spread these ideas and deepen
              understanding of the world.
            </p>
            <br />
            <p>
              We’re creating a new model for digital publishing. One that
              supports nuance, complexity, and vital storytelling without giving
              in to the incentives of advertising. It’s an environment that’s
              open to everyone but promotes substance and authenticity. And it’s
              where deeper connections forged between readers and writers can
              lead to discovery and growth. Together with millions of
              collaborators, we’re building a trusted and vibrant ecosystem
              fueled by important ideas and the people who think about them.
            </p>
          </div>
          <div className="hideen md:block w-5/12 lg:border-l border-0 border-black dark:border-white py-4">
            <img
              src={Thumbprint}
              className="w-1/2 dark:invert invert-0 dark:opacity-30 mx-auto"
              alt=""
            />
          </div>
        </div>
        <div className="text-center">
          <p className="f-cambria lg:w-1/2 w-3/4 mx-auto text-4xl md:text-7xl">
            A living network of curious minds.
          </p>
          <p className="lg:w-5/12 w-1/2 mx-auto py-4">
            Anyone can write on BlogVines. Thought-leaders, journalists,
            experts, and individuals with unique perspectives share their
            thinking here. You’ll find pieces by independent writers from around
            the globe, stories we feature and leading authors, and smart takes
            on our own suite of blogs and publications.
          </p>
        </div>
        <div className="flex my-12 border-y-[0.5px] py-0 border-black dark:border-white flex-col lg:flex-row">
          <div className="w-full text-center lg:text-left lg:w-1/2 lg:border-r border-black dark:border-white border-0 text-4xl md:text-7xl py-8">
            <p className="w-full lg:w-8/12 f-cambria">
              Over 100 million readers and growing.
            </p>
          </div>
          <div
            className="w-full lg:w-1/2 pl-8 py-16  transition-all duration-[5000]"
            ref={testimonialRef}
          >
            <div className="flex flex-col my-auto text-center lg:text-left">
              <img
                src={testimonials[testimonialsState].image}
                className="h-24 w-24 rounded-full mx-auto lg:mx-0"
                alt=""
              />
              <p className="my-4 w-full lg:w-3/4 font-semibold">
                "{testimonials[testimonialsState].text}"
              </p>
              <p className="">{testimonials[testimonialsState].name}</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="f-cambria w-1/2 mx-auto text-4xl md:text-7xl">
            Get more with membership.
          </p>
          <p className="w-6/12 mx-auto py-4">
            Become a BlogVines member to enjoy unlimited access and directly
            support the writers you read most.
          </p>
          <button
            className={`z-[40] my-8 dark:bg-[${styles.colors.lbackground}] ${landingStyles.button} dark:text-[${styles.colors.ltextColor}] bg-[${styles.colors.background}] text-[${styles.colors.textColor}] rounded-3xl px-8 py-2 font-semibold hover:bg-[${styles.colors.green}]`}
          >
            Discover More
          </button>
        </div>
        <div className="flex my-12 border-y-[0.5px] items-center border-black dark:border-white py-0  flex-col lg:flex-row">
          <div className="w-full md:w-6/12 py-8 pr-4">
            <p className="text-3xl font-semibold">Read as much as you want.</p>
            <img
              src={Unlimited}
              className="w-1/2 my-12 invert dark:invert-0"
              alt=""
            />
            <p className="text-lg">
              Enjoy unlimited access to every story across all of your devices.
            </p>
          </div>
          <div className="w-full md:w-6/12 md:border-l border-0 py-4 pl-0 lg:pl-8 border-black dark:border-white">
            <p className="text-3xl font-semibold">Reward quality content.</p>
            <img
              src={Suport}
              className="w-1/2 my-12 invert dark:invert-0"
              alt=""
            />
            <p className="text-lg">
              Your membership helps us pay writers, and keeps your experience
              ad-free.
            </p>
          </div>
        </div>
        <a href="/" className="text-center mx-auto block">
          <span class="self-center text-4xl whitespace-nowrap dark:text-white f-cambria">
            <span
              className={` text-[${styles.colors.ltextColor}] dark:text-[${styles.colors.textColor}]`}
            >
              Blog
            </span>
            <span className={`text-[${styles.colors.green}]`}>Vines</span>
          </span>
        </a>
        <div className="sm:flex hidden justify-center space-x-8 mt-4">
          <a href="/terms">Terms</a>
          <a href="/Priavacy">Privacy</a>
          <a href="/">Help</a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
