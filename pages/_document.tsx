import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="zh-TW" className="scroll-smooth">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="/2023/anicons/anicons-regular.css"
          rel="stylesheet"
        />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <link rel="icon" href="/2023/images/icon.png" />
      </Head>
      <body className="bg-[#012637] text-white leading-7">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
