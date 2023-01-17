import React from "react";

// Theme
import styles from "../assets/theme.json";

// Components
import Navbar from "../Components/Pages/Navbar.jsx";

// Images
import ErrorImg from "../assets/images/ErrorImg.svg";

const ErrorPage = () => {
  return (
    <div
      className={`dark:bg-[${styles.colors.background}] dark:text-[${styles.colors.textColor}] bg-[${styles.colors.lbackground}] text-[${styles.colors.ltextColor}] h-screen`}
    >
      <Navbar />
      <div className="pt-28 items-center pl-16 min-h-screen flex justify-center">
        <div className="text-xl text-center f-cambria">
          <img src={ErrorImg} alt="ErrorImg" className="mx-auto w-3/4 md:w-5/12 mb-10" />
          <a href="/">Go Back To Home</a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
