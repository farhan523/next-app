import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer', 'GTM-M2Z6WNT');
                    `,
            }}
          />
          <link rel="shortcut icon" href="/static/img/favicon.png" />
          <base href="/" />
          <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
          <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        </Head>
        <body>
          <noscript>
            <iframe src={`https://www.googletagmanager.com/ns.html?id=GTM-M2Z6WNT`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
