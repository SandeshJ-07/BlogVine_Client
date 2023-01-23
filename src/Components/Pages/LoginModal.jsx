import React from "react";
import { Dialog } from "@headlessui/react";

// Image
import HeadPillar from "../../assets/images/PillarHead.png";

// Themes
import styles from "../../assets/theme.json";
import landingStyles from "../../assets/stylesheet/landing.module.css";

// Icons
import { XIcon } from "@heroicons/react/outline";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Google from "../../assets/images/google.svg";
import Microsoft from "../../assets/images/microsoft.svg";

// Login Modal
const LoginModal = (props) => {

  const [login, setLogin] = React.useState({
    username: "",
    password: "",
  });
  const [loginDetail, setLoginDetail] = React.useState({
    usernameError: null,
    passwordError: null,
  })
  const [isPasswordField, setIsPasswordField] = React.useState(true);

  const handleUsernameChange = (e) => {
    setLogin({ ...login, username: e.target.value });
  }

  const handlePasswordChange = (e) => {
    setLogin({ ...login, password: e.target.value });
  }
  return (
    <Dialog
      open={props.isOpen}
      onClose={() => props.setIsOpen(false)}
      className="relative z-[1000]"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      {/* Full-screen scrollable container */}
      <div className="fixed inset-0 overflow-y-auto">
        {/* Container to center the panel */}
        <div className="flex min-h-full items-center justify-center p-4">
          {/* Full-screen container to center the panel */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            {/* The actual dialog panel  */}
            <Dialog.Panel className="mx-auto rounded w-7/12 bg-white text-black">

              <div className="flex justify-center items-center f-helvetica">
                <div className="lg:w-8/12 p-5 pb-4 w-full text-center lg:text-left">
                  <p className="f-cambria text-2xl font-semibold">Login.</p>
                  <p className="text-lg pt-4 sm:pt-8">Login With Email</p>
                  <div>
                    <div class="relative z-0 mt-6 w-10/12 lg:w-3/4 mx-auto lg:mx-0 text-left">
                      <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " onChange={(e) => handleUsernameChange(e)} />
                      <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username, Email or Contact</label>
                    </div>
                    {loginDetail.usernameError && (<p id="standard_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">{loginDetail.usernameError}</p>)}
                  </div>
                  <div>
                    <div class="relative z-0 mt-6 w-10/12 lg:w-3/4 mx-auto lg:mx-0 text-left">
                      <input type={isPasswordField ? "password" : "text"} id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " onChange={(e) => handlePasswordChange(e)} />
                      <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                      <div className="absolute right-0 bottom-2 mt-6 mr-2 cursor-pointer" onClick={() => setIsPasswordField(!isPasswordField)}>
                        {isPasswordField ? <AiFillEye className="w-6 h-6 text-gray-500" /> : <AiFillEyeInvisible className="w-6 h-6 text-gray-500" />}
                      </div>
                    </div>
                    {loginDetail.passwordError && (<p id="standard_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">{loginDetail.passwordError}</p>)}
                  </div>
                  <button
                    className={`text-sm z-[40] dark:bg-[${styles.colors.green}] ${landingStyles.button} dark:text-[${styles.colors.ltextColor}] bg-[${styles.colors.background}] text-[${styles.colors.textColor}] rounded-3xl px-8 py-2 bg-[${styles.colors.green}] mt-8`}
                    onClick={() => {
                      let usernameError = null;
                      let passwordError = null;
                      if (login.username === "") {
                        usernameError = "Username is required";
                      }
                      if (login.password === "") {
                        passwordError = "Password is required";
                      }
                      if (usernameError || passwordError) {
                        setLoginDetail({
                          ...loginDetail,
                          usernameError,
                          passwordError,
                        });
                      } else {
                        setLoginDetail({
                          ...loginDetail,
                          usernameError: null,
                          passwordError: null,
                        });
                        props.setIsOpen(false);
                        props.setIsLoggedIn(true);
                      }
                    }}
                  >Continue</button>
                  <div className="flex space-x-3 justify-center lg:justify-start  py-4">
                    <img src={Google} className="h-8 w-8 border-2 border-gray-300 rounded-full p-1 cursor-pointer" alt="Google" />
                    <img src={Microsoft} className="h-8 w-8 border-2 border-gray-300 rounded-full p-1 cursor-pointer" alt="Google" />
                  </div>
                </div>
                <div className="bg-gray-900 lg:pt-20 pr-8 relative h-full hidden lg:block">
                  <XIcon className="w-6 h-6 text-white absolute z-[10] right-4 top-4 cursor-pointer" onClick={() => props.setIsOpen(false)} />
                  <img src={HeadPillar} className="h-[100%]" alt="Head Pillar" />
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default LoginModal;
