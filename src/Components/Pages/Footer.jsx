import React from "react";

// Theme
import styles from "../../assets/theme.json";

const Footer = () => {
  return (
    <div className="block sm:hidden py-8 px-8 bg-black">
      <p className="text-lg f-cambria">
        <span
        >
          Blog
        </span>
        <span className={`text-[${styles.colors.green}]`}>Vines</span>
      </p>
      <div className="flex flex-wrap text-xs space-x-4 my-2 mb-4">
        <a href="/about">About</a>
        <a href="/">Help</a>
        <a href="/terms">Terms</a>
        <a href="/">Privacy</a>
      </div>
      <hr />    
      <p className="text-xs my-4">Get The BlogVines App</p>
    </div>
  );
};

export default Footer;
