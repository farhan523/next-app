import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { getIsAuthenticated, getCurrentUser } from "../store/user.reducer";
import BrandPage from "../components/pageComponents/NewMockup/BrandGuideline";

const BrandGuideline = ({ downloads }) => {
    const isAuthenticated = useSelector(getIsAuthenticated);
    const userInfo = useSelector(getCurrentUser);
    const router = useRouter();
    useEffect(() => {
        if (
            isAuthenticated === false ||
            (typeof window !== "undefined" && !window.localStorage.token)
        ) {
            router.push("/login");
        }

        // if(userInfo && userInfo?.accessLevel && userInfo?.accessLevel === 'student') {
        //   router.push("/login")
        // }
    }, [isAuthenticated]);
    return (
        <div>
            <Head>
                <meta
                    property="og:site_name"
                    content="Fleischer Scholars Program login"
                />
                <meta property="og:title" content="Login" />
                <meta property="og:url" content="https://fleischerscholars.com/" />
                <meta property="og:type" content="website" />
                <title>Fleischer Scholars Training Program</title>
            </Head>

            <BrandPage />

        </div>
    );
};



export default BrandGuideline;
