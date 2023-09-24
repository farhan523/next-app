import React from "react";
import Sidebar from "../../../components/NewMockupComponents/Dashboard/Sidebar";
import ListenPageComponent from "../../../components/pageComponents/NewMockup/ListenPage";
import Head from "next/head";
import axios from "axios";
import { fetchAPI } from "../../../lib/api";

const Listen = ({ audioBookContent }) => {
  return (
    <>
      <Head>
        <meta
          property="og:site_name"
          content="Fleischer Scholars Program login"
        />
        <meta property="og:title" content="Login" />
        <meta property="og:url" content="https://fleischerscholars.com/" />
        <meta property="og:type" content="website" />
        <title>Fleischer Scholars Program Listen</title>
      </Head>
      <ListenPageComponent audioBookContent={audioBookContent} />
    </>
  );
};

export async function getServerSideProps() {
  try {
    const audioBookContent = await fetchAPI("/audio-books", {
      sort: ["audioNumber:asc"],
      populate: "*",
    });
    return {
      props: { audioBookContent },
    };
  } catch (error) {
    console.error("Error fetching audio book content:", error);

    return {
      props: { audioBookContent: null },
    };
  }
}

export default Listen;
