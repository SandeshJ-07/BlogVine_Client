import React from 'react';
import { useParams } from 'react-router-dom';

// Components
import Navbar from '../Components/Pages/Navbar';
import LoginModal from '../Components/Pages/LoginModal';

// Theme
import styles from "../assets/theme.json";

// API Calls
import { forgotPassword, getUserDetails, getUserFromForgotToken, updateUserPassword } from '../service/api';
import swal from 'sweetalert';

const ForgotPassword = () => {

    const { token } = useParams();

    const [LoginOpenState, setLoginOpenState] = React.useState(false);

    const [newPass, setNewPass] = React.useState("");
    const [confirmPass, setConfirmPass] = React.useState("");
    const [newEmail, setNewEmail] = React.useState("");
    const [tokenValid, setTokenValid] = React.useState(true);
    const [isLoadingPass, setIsLoadingPass] = React.useState(false);
    const [showPass, setShowPass] = React.useState(false);

    React.useEffect(() => {
        let func = async () => {
            if (token) {
                let res = await getUserFromForgotToken(token);
                if (res && res.status === 200) {
                    setNewEmail(res.data.email);
                } else {
                    setTokenValid(false);
                }
            }
        }
        func();
    }, []);

    // Password Handler
    const passwordHandler = (e) => {
        setNewPass(e.target.value);
        if (e.target.value.length > 0) {
            setEnableChangepass(true);
        } else {
            setEnableChangepass(false);
        }
    }

    const confrmPassHandler = (e) => {
        setConfirmPass(e.target.value);
        if (e.target.value.length > 0) {
            setEnableChangepass(true);
        } else {
            setEnableChangepass(false);
        }
    }

    const [enableChangepass, setEnableChangepass] = React.useState(false);
    const [passAlert, setPassAlert] = React.useState(false);

    const changePasswordFunc = async () => {
        try {
            setIsLoadingPass(true);
            if (newPass !== confirmPass) {
                setIsLoadingPass(false);
                setPassAlert("Passwords do not match");
                return;
            }

            // Checking Password Rules
            let validatePass = true;
            if (newPass && newPass.length < 8) {
                console.log("Password must be atleast 8 characters long");
                validatePass = false;
            }
            if (newPass && !newPass.match(/[A-Z]/)) {
                console.log("Password must be atleast 8 characters long");
                validatePass = false;
            }
            if (newPass && !newPass.match(/[a-z]/)) {
                console.log("Password must be atleast 8 characters long");
                validatePass = false;
            }
            if (newPass && !newPass.match(/[0-9]/)) {
                console.log("Password must be atleast 8 characters long");
                validatePass = false;
            }
            if (newPass && !newPass.match(/[!@#$%^&*]/)) {
                console.log("Password must be atleast 8 characters long");
                validatePass = false;
            }
            if (validatePass === false) {
                setIsLoadingPass(false);
                setPassAlert("Password must follow rules");
                return;
            }

            // Update User password
            let res = await updateUserPassword({ email: newEmail, password: newPass });
            if (res.status === 200) {
                swal({
                    title: "Success",
                    description: "Password Changed Successfully",
                    icon: "success",
                    button: "OK",
                }).then(() => {
                    window.location.href = "/discover";
                });
                return;
            }
            else {
                swal({
                    title: "Error",
                    description: "Something went wrong",
                    icon: "error",
                    button: "OK",
                });
                return;
            }
        } catch {
            swal({
                title: "Error",
                description: "Something went wrong",
                icon: "error",
                button: "OK",
            });
            setIsLoadingPass(false);
        }
    }

    // Reset without token
    const [isLoading, setIsLoading] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [emailAlert, setEmailAlert] = React.useState(null);

    // Email Handler
    const emailHandler = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length > 0) {
            setEnableSubmit(true);
        } else {
            setEnableSubmit(false);
        }
    }

    const [enableSubmit, setEnableSubmit] = React.useState(false);

    const [mailSent, setMailSent] = React.useState(null);

    // Function to Call Forgot Password API
    const forgotPasswordFunc = async () => {

        let res1 = await getUserDetails({ detail: email });
        if (res1.status !== 200) {
            setEmailAlert("Email that you have entered is not registered with us");
            return;
        }

        setMailSent(null);
        setIsLoading(true);
        setEmailAlert(null);
        // Check email regex
        if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            setEmailAlert("Please enter a valid email address");
            return;
        }
        let res = await forgotPassword({ email: email });
        if (res.status === 200) {
            swal({
                title: "Email Sent",
                description: "Check your email for the link to reset your password",
                icon: "success",
                button: "OK",
            });
            setIsLoading(false);
            setMailSent(res.data.msg);
            enableSubmit(true);
        } else {
            swal({
                title: "Error",
                description: res.data.message,
                icon: "error",
                button: "OK",
            });
        }
    }


    return (
        <div>
            <Navbar />
            <div
                className={`dark:bg-[${styles.colors.background}] dark:text-[${styles.colors.textColor}] bg-[${styles.colors.lbackground}] text-[${styles.colors.ltextColor}] px-3 sm:px-12 sm:py-8 sm:pt-18 pt-20 min-h-screen`}
            >
                <div className="text-center container">
                    <p className={`sm:mt-24 text-2xl`}>
                        Reset Password
                    </p>
                    <p className='py-3 text-gray-400'>Forgot your password amidst the blogs ? Don't worry we are here for you.</p>
                    {token !== undefined && token !== null ? (<div className={`rounded-md dark:bg-white bg-gray-500 p-5 px-8 w-4/12 mx-auto my-3 text-left dark:text-[${styles.colors.ltextColor}] text-[${styles.colors.textColor}]`}>
                        <div>
                            <p className={`text-lg font-semibold`}>Reset Password</p>
                        </div>

                        {passAlert && <p className="text-sm text-red-500">{passAlert}</p>}
                        {tokenValid ? (
                            <div>
                                <div className='pt-4 '>
                                    <label className='block text-sm text-semibold text-gray-700'>New password </label>
                                    <input type={showPass?"text":"password"} placeholder="Password" className='block rounded-sm mb-3 mt-1 w-full focus:outline-none active:outline-none focus:border-none active:border-none' onChange={passwordHandler} />
                                    <label className='block text-sm text-semibold text-gray-700'>Confirm new password </label>
                                    <input type={showPass?"text":"password"} placeholder="Password" className='block rounded-sm mb-3 mt-1 w-full focus:outline-none active:outline-none focus:border-none active:border-none' onChange={confrmPassHandler} /></div>
<p className='text-xs ml-auto text-right cursor-pointer' onClick={()=>setShowPass(!showPass)}> {showPass ? "Hide ": "Show "}Password</p>
                                <div className="flex flex-col w-10/12 lg:w-3/4 mx-auto lg:mx-0 my-2">
                                    <p className="text-xs text-gray-500 dark:text-gray-500 font-semibold">Password must contain:</p>
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
                                <button
                                    disabled={isLoadingPass}
                                    onClick={changePasswordFunc}
                                    class={`p-2.5 text-sm font-medium mx-auto block w-full text-[${styles.colors.ltextColor}] dark:text-[${styles.colors.textColor}] bg-[${styles.colors.green}] rounded-lg border border-[${styles.colors.green}] hover:bg-[${styles.colors.green}] focus:ring-4 focus:outline-none dark:hover:bg-[${styles.colors.green}]`}>{
                                        isLoading ? "Loading..." : "Change Password"
                                    }</button>
                            </div>) : (
                            <div>
                                <p className="pt-3 text-sm">Token is not valid. One possible reason might be the expiry of token.</p>
                                <p className="py-1 text-sm">The reset link expires in 1 hour.</p>
                                <a href="/account/password/forgot-password/" className={`text-sm text-[${styles.colors.green}]`}>Try Again.</a></div>
                        )}
                        <div>

                        </div>
                        <p className='text-center text-sm py-4'><span className='cursor-pointer mx-1 underline' onClick={() => { setLoginOpenState(true); }}>Login</span></p>
                    </div>) : (
                        <div className={`rounded-md dark:bg-white bg-gray-500 p-5 px-8 w-4/12 mx-auto my-3 text-left dark:text-[${styles.colors.ltextColor}] text-[${styles.colors.textColor}]`}>
                            <div>
                                <p className={`text-lg font-semibold`}>Reset Password</p>
                                <p className='text-sm py-3'>Enter your email address below and we'll send you a link to reset your password.</p>
                            </div>

                            {emailAlert && <p className='text-sm text-red-500'>Please enter a valid email address</p>}
                            {mailSent && <p className='text-sm text-green-500'>{mailSent} Kindly Check Your Mail.</p>}

                            <div className='py-4'>
                                <label className='block text-sm text-semibold text-gray-700'>Email Address</label>
                                <input type="email" placeholder="Email Address" className='block rounded-sm mb-3 mt-1 w-full focus:outline-none active:outline-none focus:border-none active:border-none' onChange={emailHandler} /></div>
                            <button
                                onClick={forgotPasswordFunc}
                                disabled={!enableSubmit && !isLoading}
                                class={`p-2.5 text-sm font-medium mx-auto block w-full text-[${styles.colors.ltextColor}] dark:text-[${styles.colors.textColor}] bg-[${styles.colors.green}] rounded-lg border border-[${styles.colors.green}] hover:bg-[${styles.colors.green}] focus:ring-4 focus:outline-none dark:hover:bg-[${styles.colors.green}]`}>{
                                    isLoading ? "Loading..." : "Reset Password"
                                }</button>
                            <div>

                            </div>
                            <p className='text-center text-sm py-4'><span className='cursor-pointer mx-1 underline' onClick={() => { setLoginOpenState(true); }}>Login</span></p>
                        </div>)}
                    <div className='pt-3 text-sm w-4/12 mx-auto'>
                        <p>Still can't login ? Email <span className='underline mx-1'>account@blogvines@gmail.com</span>if you need additional assistance.</p>
                    </div>
                </div>
            </div>
            <LoginModal isOpen={LoginOpenState} setIsOpen={setLoginOpenState} />
        </div >
    );
};

export default ForgotPassword;