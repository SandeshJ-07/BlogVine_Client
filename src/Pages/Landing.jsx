import React from "react";

// Theme
import styles from ".././assets/theme.json";
import landingStyles from "../assets/stylesheet/landing.module.css";

// Components
import Navbar from "../Components/Pages/Navbar.jsx";
import Trending from "../Components/Pages/Trending.jsx";

// Images
import medussaHead from "../assets/images/medussaHead.png";
import head from "../assets/images/Head.png";
import head2 from "../assets/images/Head.png";
import Discover from "../Components/Pages/Discover";
import ThinkerStatue from "../assets/images/ThinkerStatue.png";
import Footer from "../Components/Pages/Footer";

const Landing = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div
        className={`flex flex-row items-center dark:bg-[${styles.colors.background}] bg-[${styles.colors.lbackground}] px-3 sm:px-8 sm:py-8 py-20 w-[100vw] flex-col sm:flex-row min-h-screen`}
      >
        <div className="container w-full sm:w-8/12 md:3/4 px-4 text-center sm:text-left p-10 sm:py-0 items-center">
          <img
            src={ThinkerStatue}
            alt=""
            className="absolute opacity-30 z-[10] top-1/4 left-0 block sm:hidden w-1/2"
          />
          <div
            className={`font-light f-cambria text-[${styles.colors.ltextColor}] dark:text-[${styles.colors.textColor}] z-[40]`}
          >
            <p className="lg:text-2xl md:text-2xl sm:text-lg text-lg">Your</p>
            <p
              className={`lg:text-5xl md:text-5xl sm:text-3xl text-4xl leading-14 text-[${styles.colors.green}]`}
            >
              Thoughts
            </p>
            <p className="lg:text-2xl md:text-2xl sm:text-lg text-lg leading-10">
              Are The
            </p>
            <p className={`text-5xl text-[${styles.colors.green}]`}>
              Vines Of Your World.
            </p>
          </div>
          <p
            className={`f-helvetica py-7 text-lg w-full sm:w-3/4  text-[${styles.colors.ltextColor}] dark:text-[${styles.colors.textColor}] z-[40]`}
          >
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
          <button
            className={`z-[40] dark:bg-[${styles.colors.lbackground}] ${landingStyles.button} dark:text-[${styles.colors.ltextColor}] bg-[${styles.colors.background}] text-[${styles.colors.textColor}] rounded-3xl px-8 py-2 font-semibold hover:bg-[${styles.colors.green}]`}
          >
            <a href="/discover"> Discover More</a>
          </button>
        </div>
        <div className="w-full sm:w-4/12 md:w-3/4 px-4 hidden sm:flex rounded-full relative top-0 items-end py-16">
          <img
            src={medussaHead}
            alt="medussaHead"
            className="mx-auto w-1/5 sm:w-full md:w-3/5 z-[50]"
          />
          <img
            src={head}
            alt="Head"
            className="w-1/5 sm:w-10/12 md:w-3/5 z-[10] absolute left-20 md:left-56  opacity-90 dark:opacity-30"
          />
          <img
            src={head2}
            alt="Head2"
            className="w-1/5 sm:w-10/12 md:w-3/5 z-[10] absolute -left-10 sm:-left-10 md:-left-[screem/40] lg:left-10 opacity-90 dark:opacity-30 -scale-x-100"
          />
        </div>
      </div>
      {/* Trending */}
      <Trending />

      {/* Discover More */}
      <Discover />

      <Footer />
    </div>
  );
};

export default Landing;
