import React from "react";
import { getUserFromSessionId } from "../service/api.js";

// React Redux
import { useDispatch } from 'react-redux'
import { logIn } from "../features/user/userSlice";


const SocialAuth = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        let sessionId = decodeURI(window.location.href.split("=")[1]);
        const func = async () => {
            let res = await getUserFromSessionId({ sessionId: sessionId });
            console.log(res);
            dispatch(logIn({ username: res.data.username, email: res.data.email }));
            window.location.href = '/';
        };
        func();
    }, [dispatch]);
};

export default SocialAuth;