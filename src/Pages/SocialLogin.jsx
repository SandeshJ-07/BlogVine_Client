import React from "react";
import {getUserDetails} from "../service/api.js";

// React Redux
import { useDispatch, useSelector } from 'react-redux'
import { logOut, logIn } from "../features/user/userSlice";


const SocialAuth = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        let email = decodeURI(window.location.href.split("?")[1].split("=")[1]).replace('%40', "@");
        console.log(email);
        const func = async() =>{
            let res = await getUserDetails({ detail: email });
            console.log(res);
            dispatch(logIn({ username: res.data.username, email: res.data.email }));
            window.location.href='/';
        };
        func();
    }, []);
};

export default SocialAuth;