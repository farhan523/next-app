import Head from "next/head"
import { GetInvolvedPageComponent } from "../components/pageComponents/NewMockup/GetInvolvedPageComponent/GetInvolvedPageComponent"

const GetInvolovedPage = () => {
  return (
    <>
      <Head>
        <meta
          property="og:site_name"
          content="Fleischer Scholars Get Involved Page"
        />
        <meta property="og:title" content="Get Involved" />
        <meta property="og:url" content="https://fleischerscholars.com/" />
        <meta property="og:type" content="website" />
        <title>Fleischer Scholars Get Involved</title>
      </Head>
      <GetInvolvedPageComponent />
    </>
  )
}

export default GetInvolovedPage
