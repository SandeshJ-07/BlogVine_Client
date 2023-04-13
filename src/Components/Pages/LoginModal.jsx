import React from "react";
import { Dialog } from "@headlessui/react";
import swal from 'sweetalert';

// React Redux
import { useDispatch } from 'react-redux'
import { logIn } from "../../features/user/userSlice";

// Image
import HeadPillar from "../../assets/images/PillarHead.png";

// Themes
import styles from "../../assets/theme.json";
import landingStyles from "../../assets/stylesheet/landing.module.css";

// Icons
import { XIcon } from "@heroicons/react/outline";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Google from "../../assets/images/google.svg";

// API Calls
import { sendOTP, verifyUserDetails, UserRegister, UserLogin, getUserDetails, server_url } from "../../service/api";

// Login Modal
const LoginModal = (props) => {

  // Password Rules
  const [showPasswordRules, setShowPasswordRules] = React.useState({
    minLength: false,
    oneUpperCase: false,
    oneLowerCase: false,
    oneNumber: false,
    oneSpecialChar: false,
  });

  // Used to show password rules in signup form
  const [showPasswordRulesSignUp, setShowPasswordRulesSignUp] = React.useState(false);

  // Used to maintain user in the redux store
  // const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // Login Form or Signup Form  
  const [isLogin, setIsLogin] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);

  // Login Form States
  const [login, setLogin] = React.useState({
    username: "",
    password: "",
  });

  const closeBtn = React.useRef();

  const [loginDetail, setLoginDetail] = React.useState({
    usernameError: null,
    passwordError: null,
  });

  const [isPasswordField, setIsPasswordField] = React.useState(true);

  //  Function to handle Login form username
  const handleLoginUsernameChange = (e) => {
    setLoginDetail({ ...login, usernameError: null });
    setLogin({ ...login, username: e.target.value });
  }

  //  Function to handle Login form password
  const handleLoginPasswordChange = (e) => {
    setLoginDetail({ ...login, passwordError: null });
    setLogin({ ...login, password: e.target.value });
  }

  // Signup Form States
  const [signup, setSignup] = React.useState({
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
  });

  //  Referecne to password and confirm password fields in signup form
  const signupPasswordRef = React.useRef();
  const signupConfirmPasswordRef = React.useRef();

  // Email OTP
  const [emailOTP, setEmailOTP] = React.useState(null);
  // User input OTP
  const [otpValue, setOtpValue] = React.useState("");

  // Signup Form Error States
  const [signupDetail, setSignupDetail] = React.useState({
    emailError: null,
    passwordError: null,
    confirmPasswordError: null,
    otpError: null,
    usernameError: null,
  });

  // Function to handle Signup form username
  const handleUserNameChange = (e) => {
    setSignupDetail({ ...signup, usernameError: null });
    setSignup({ ...signup, username: e.target.value });
  }

  // Function to handle Signup form email
  const handleSignupEmailChange = (e) => {
    setSignupDetail({ ...signup, emailError: null });
    setSignup({ ...signup, email: e.target.value });
  }

  // Function to handle Signup form password
  const handleSignupPasswordChange = (e) => {
    setSignupDetail({ ...signup, passwordError: null });
    setSignup({ ...signup, password: e.target.value });
  }

  // Function to handle Signup form confirm password
  const handleSignupConfirmPasswordChange = (e) => {
    setSignupDetail({ ...signup, confirmPasswordError: null });
    setSignup({ ...signup, confirmPassword: e.target.value });
  }

  // Function to handle Signup form OTP
  const handleOtpValue = (e) => {
    setSignupDetail({ ...signup, otpError: null });
    setOtpValue(e.target.value);
  }


  // Function to handle Login form submit
  const [isSignUpPasswordField, setIsSignUpPasswordField] = React.useState(true);
  const [isSignUpConfirmPasswordField, setIsSignUpConfirmPasswordField] = React.useState(true);


  // Function to send OTP to given email vaildating the signup form details
  const sendOTPFunc = async () => {
    setIsLoading(true);
    setShowPasswordRulesSignUp(false);
    let emailError = null;
    let passwordError = null;
    let confirmPasswordError = null;
    let password = signupPasswordRef.current.value;
    let confirmPassword = signupConfirmPasswordRef.current.value;
    let usernameError = null;
    let validatePass = true;

    if (!signup.username) {
      usernameError = "Username is required";
    }
    if (!signupDetail.email) {
      emailError = "Email is required";
    }
    else if (!signupDetail.email.includes("@") || !signupDetail.email.includes(".")) {
      emailError = "Email is not valid";
    }
    if (!password) {
      passwordError = "Password is required";
    }
    if (!confirmPassword) {
      confirmPasswordError = "Confirm Password is required";
    }
    if (password !== confirmPassword) {

      confirmPasswordError = "Password and Confirm Password should be same";
    }


    // Checking if password is valid    
    if (password && password.length < 8) {
      setShowPasswordRules({ ...showPasswordRules, minLength: true });
      validatePass = false;
    }
    if (password && !password.match(/[A-Z]/)) {
      setShowPasswordRules({ ...showPasswordRules, oneUpperCase: true });
      validatePass = false;
    }
    if (password && !password.match(/[a-z]/)) {
      setShowPasswordRules({ ...showPasswordRules, oneLowerCase: true });
      validatePass = false;
    }
    if (password && !password.match(/[0-9]/)) {
      setShowPasswordRules({ ...showPasswordRules, oneNumber: true });
      validatePass = false;
    }
    if (password && !password.match(/[!@#$%^&*]/)) {
      setShowPasswordRules({ ...showPasswordRules, oneSpecialChar: true });
      validatePass = false;
    }



    // Checking if username or email is already registered
    let userE = await verifyUserDetails({ username: signup.username, email: signup.email });
    if (userE.data && userE.data.username && usernameError == null) {
      usernameError = "Username already reigstered";
    }
    if (userE.data && userE.data.email && emailError == null) {
      emailError = "Email already reigstered";
    }


    if (emailError || passwordError || confirmPasswordError || usernameError || validatePass === false) {
      if (validatePass === false) {
        setShowPasswordRulesSignUp(true);
      }
      setSignupDetail({
        ...signupDetail,
        emailError,
        passwordError,
        confirmPasswordError,
        usernameError
      });
      setIsLoading(false);
      return;
    }
    let res = await sendOTP(signupDetail.email);
    console.log(res);
    if (res.data && res.data.otp) {
      setIsLoading(false);
      setEmailOTP(res.data.otp);
    }
  }


  // Function to verify OTP
  const verifyOTPFunc = async () => {
    try {
      if (Number(otpValue) === Number(emailOTP)) {
        setIsLoading(true);
        let res = await UserRegister({ username: signup.username, email: signup.email, password: signup.password });
        console.log(res);
        if (res.data && res.status === 201) {
          setIsLoading(false);
          swal({
            title: "Success",
            text: "User Registered Successfully",
            icon: "success",
            button: "Ok",
          });
          setIsLogin(true);
        }
        else {
          setIsLoading(false);
          swal({
            title: "Error",
            text: "Something went wrong",
            icon: "error",
            button: "Ok",
          });
        }
      }
      else {
        alert(otpValue);
        alert(emailOTP);
        setSignupDetail({ ...signupDetail, otpError: "OTP is not valid" });
      }
    } catch {
      swal({
        title: "Error",
        text: "Something went wrong",
        icon: "error",
        button: "Ok",
      });
    }
  }

  // Login Function to handle login form submit
  const loginFunc = async () => {

    setIsLoading(true);

    let usernameError = null;
    let passwordError = null;

    if (!login.username) {
      usernameError = "Username is required";
    }
    if (!login.password) {
      passwordError = "Password is required";
    }
    if (usernameError || passwordError) {
      setLoginDetail({
        ...loginDetail,
        usernameError,
        passwordError
      });
      setIsLoading(false);
      return;
    }
    let res = await UserLogin({ username: login.username, password: login.password });
    console.log(res);
    if (res.data && res.data.success) {
      setIsLoading(false);
      props.setIsOpen(false);
      swal({
        title: "Success",
        text: "User Logged In Successfully",
        icon: "success",
        button: "Ok",
      });
      let res2 = await getUserDetails({ detail: login.username });
      dispatch(logIn({ username: res2.data.username, email: res2.data.email }));

    } else {
      setIsLoading(false);
      swal({
        title: "Error",
        text: res.data.message,
        icon: "error",
        button: "Ok",
      });
    }
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

              <div className="flex justify-center items-center f-helvetica relative">
                <XIcon className={`w-6 h-6 ${isLogin ? "text-white" : "text-black"} absolute z-[10] right-4 top-4 cursor-pointer`} onClick={() => props.setIsOpen(false)} ref={closeBtn} />
                <div className={`lg:w-8/12 p-5 pb-4 w-full text-center lg:text-left ${isLogin ? "block" : "hidden"}`}>
                  <p className="f-cambria text-2xl font-semibold">Login.</p>
                  <p className="text-lg pt-4 sm:pt-8">Login With Email</p>

                  <div>
                    <div class="relative z-0 mt-6 w-10/12 lg:w-3/4 mx-auto lg:mx-0 text-left">
                      <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " onChange={(e) => handleLoginUsernameChange(e)} />
                      <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username, Email or Contact</label>
                    </div>
                    {loginDetail.usernameError && (<p id="standard_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">{loginDetail.usernameError}</p>)}
                  </div>

                  <div>
                    <div class="relative z-0 mt-6 w-10/12 lg:w-3/4 mx-auto lg:mx-0 text-left">
                      <input type={isPasswordField ? "password" : "text"} id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " onChange={(e) => handleLoginPasswordChange(e)} />
                      <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                      <div className="absolute right-0 bottom-2 mt-6 mr-2 cursor-pointer" onClick={() => setIsPasswordField(!isPasswordField)}>
                        {isPasswordField ? <AiFillEye className="w-6 h-6 text-gray-500" /> : <AiFillEyeInvisible className="w-6 h-6 text-gray-500" />}
                      </div>
                    </div>
                    {loginDetail.passwordError && (<p id="standard_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">{loginDetail.passwordError}</p>)}
                  </div>
                  <a href="/account/password/forgot-password" className={`text-xs block pt-4 hover:text-[${styles.colors.green}] cursor-pointer`}>Forgot Password ?</a>
                  <button
                    className={`text-sm z-[40] dark:bg-[${styles.colors.green}] ${landingStyles.button} dark:text-[${styles.colors.ltextColor}] bg-[${styles.colors.background}] text-[${styles.colors.textColor}] rounded-3xl px-8 py-2 bg-[${styles.colors.green}] mt-8 ${login.password && login.username ? "cursor-pointer" : "cursor-not-allowed"}`}
                    onClick={() => loginFunc()}
                  >
                    {isLoading ? (<svg aria-hidden="true" role="status" class="mx-auto inline w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                    </svg>) : "Continue"}
                  </button>
                  <div className="flex space-x-3 justify-center lg:justify-start  py-4">
                    <a href={`${server_url}/social/auth/google`}><img src={Google} className="h-8 w-8 border-2 border-gray-300 rounded-md p-1 cursor-pointer" alt="Google" /></a>
                  </div>
                  <div className="text-sm">
                    Don't yet have an account yet? <span className="text-green-600 cursor-pointer" onClick={() => setIsLogin(false)}>Sign Up</span>
                  </div>
                </div>
                <div className="bg-gray-900 lg:pt-20 pr-8 relative h-full hidden lg:block">
                  <img src={HeadPillar} className={`${isLogin ? "h-[100%]" : "transform -scale-x-100 h-[75vh]"}`} alt="Head Pillar" />
                </div>

                <div className={`lg:w-8/12 p-5 pb-4 w-full text-center lg:text-left ${!isLogin ? "block" : "hidden"} max-h-[80vh] overflow-y-scroll`}>
                  <p className="f-cambria text-2xl font-semibold">Sign Up.</p>
                  <p className="text-lg pt-4 sm:pt-8">Sign Up With Email</p>
                  {emailOTP == null && (
                    <div>
                      <div>
                        <div class="relative z-0 mt-6 w-10/12 lg:w-3/4 mx-auto lg:mx-0 text-left">
                          <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " onChange={(e) => handleUserNameChange(e)} value={signup.username} />
                          <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
                        </div>
                        {signupDetail.usernameError && (<p id="standard_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">{signupDetail.usernameError}</p>)}
                      </div>

                      <div>
                        <div class="relative z-0 mt-6 w-10/12 lg:w-3/4 mx-auto lg:mx-0 text-left">
                          <input type="email" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " onChange={(e) => handleSignupEmailChange(e)} value={signup.email} />
                          <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                        </div>
                        {signupDetail.emailError && (<p id="standard_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">{signupDetail.emailError}</p>)}
                      </div>

                      <div>
                        <div class="relative z-0 mt-6 w-10/12 lg:w-3/4 mx-auto lg:mx-0 text-left">
                          <input type={isSignUpPasswordField ? "password" : "text"} id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " onChange={(e) => handleSignupPasswordChange(e)} ref={signupPasswordRef} value={signup.password} />
                          <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                          <div className="absolute right-0 bottom-2 mt-6 mr-2 cursor-pointer" onClick={() => setIsSignUpPasswordField(!isSignUpPasswordField)}>
                            {isSignUpPasswordField ? <AiFillEye className="w-6 h-6 text-gray-500" /> : <AiFillEyeInvisible className="w-6 h-6 text-gray-500" />}
                          </div>
                        </div>
                        {signupDetail.passwordError && (<p id="standard_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">{signupDetail.passwordError}</p>)}
                      </div>

                      <div>
                        <div class="relative z-0 mt-6 w-10/12 lg:w-3/4 mx-auto lg:mx-0 text-left">
                          <input type={isSignUpConfirmPasswordField ? "password" : "text"} id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " onChange={(e) => handleSignupConfirmPasswordChange(e)} ref={signupConfirmPasswordRef} value={signup.confirmPassword} />
                          <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
                          <div className="absolute right-0 bottom-2 mt-6 mr-2 cursor-pointer" onClick={() => setIsSignUpConfirmPasswordField(!isSignUpConfirmPasswordField)}>
                            {isSignUpConfirmPasswordField ? <AiFillEye className="w-6 h-6 text-gray-500" /> : <AiFillEyeInvisible className="w-6 h-6 text-gray-500" />}
                          </div>
                        </div>
                        {signupDetail.confirmPasswordError && (<p id="standard_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">{signupDetail.confirmPasswordError}</p>)}
                      </div>

                      {showPasswordRulesSignUp && (
                        <div className="flex flex-col w-10/12 lg:w-3/4 mx-auto lg:mx-0 mt-4">
                          <p className="text-xs text-gray-500 dark:text-gray-400">Password must contain:</p>
                          <div className="flex flex-row items-center mt-2">
                            <p className="text-xs text-gray-500 dark:text-gray-400 ml-2">At least 8 characters</p>
                          </div>
                          <div className="flex flex-row items-center mt-2">
                            <p className="text-xs text-gray-500 dark:text-gray-400 ml-2">At least 1 uppercase letter</p>
                          </div>
                          <div className="flex flex-row items-center mt-2">
                            <p className="text-xs text-gray-500 dark:text-gray-400 ml-2">At least 1 lowercase letter</p>
                          </div>
                          <div className="flex flex-row items-center mt-2">
                            <p className="text-xs text-gray-500 dark:text-gray-400 ml-2">At least 1 number</p>
                          </div>
                          <div className="flex flex-row items-center mt-2">
                            <p className="text-xs text-gray-500 dark:text-gray-400 ml-2">At least 1 special character</p>
                          </div>
                        </div>
                      )}

                      <button
                        className={`text-sm z-[40] dark:bg-[${styles.colors.green}] ${landingStyles.button} dark:text-[${styles.colors.ltextColor}] bg-[${styles.colors.background}] text-[${styles.colors.textColor}] rounded-3xl px-8 py-2 bg-[${styles.colors.green}] mt-8`}
                        onClick={() => sendOTPFunc()}
                        disabled={isLoading}
                      >
                        {isLoading ? (<svg aria-hidden="true" role="status" class="mx-auto inline w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                        </svg>) : "Send OTP"}
                      </button>

                      <div className="flex space-x-3 justify-center lg:justify-start  py-4">
                        <img src={Google} className="h-8 w-8 border-2 border-gray-300 rounded-md p-1 cursor-pointer" alt="Google" />
                      </div>
                    </div>
                  )}
                  {emailOTP && (
                    <div className="space-y-4">
                      <p className="w-10/12 lg:w-3/4 mx-auto lg:mx-0 text-left text-sm">OTP send to <span className="underline"> {signup.email}</span></p>

                      <div>
                        <div class="relative z-0 my-6 w-10/12 lg:w-3/4 mx-auto lg:mx-0 text-left">
                          <input type="text" maxLength={6} id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " onChange={(e) => handleOtpValue(e)} />
                          <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">OTP</label>
                        </div>
                        {signupDetail.otpError && (<p id="standard_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">{signupDetail.otpError}</p>)}
                      </div>

                      <p className="text-sm">
                        Registered Wrong Email ? <span className={`hover:text-[${styles.colors.green}] hover:cursor-pointer`} onClick={() => { setEmailOTP(null); }}>Change here</span>
                      </p>

                      <button
                        className={`text-sm z-[40] dark:bg-[${styles.colors.green}] ${landingStyles.button} dark:text-[${styles.colors.ltextColor}] bg-[${styles.colors.background}] text-[${styles.colors.textColor}] rounded-3xl px-8 py-2 bg-[${styles.colors.green}] my-8`}
                        disabled={isLoading}
                        onClick={() => verifyOTPFunc()}>
                        {isLoading ? (<svg aria-hidden="true" role="status" class="mx-auto inline w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                        </svg>) : "Sign Up"}
                      </button>

                    </div>
                  )}
                  <div className="text-sm my-4">
                    Already have an account? <span className="text-green-600 cursor-pointer" onClick={() => setIsLogin(true)}>Sign In</span>
                  </div>

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
