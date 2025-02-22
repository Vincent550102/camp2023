import { motion } from "framer-motion";
export default function Intro() {
  return <>
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center lg:text-xl font-bold mt-16">樂趣之餘，不忘學習</motion.h2>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center text-2xl lg:text-3xl font-bold mt-1 lg:mt-3">由資訊社群所打造，超高知識含量的夏令營</motion.h1>
      <div className="flex justify-center items-center flex-col gap-8 lg:flex-row mt-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          有鑑於資訊領域逐漸成為科技時代的重要學門，社群與開源精神亦持續抬頭，SITCON 團隊認為將資訊教育向下扎根，為在資訊科學領域有興趣的學生提供一個親切而良好的機會入門，並播灑開源種子，是一件相當重要且值得去做的事情。
          <br />
          <br />
          2014 年至今，SITCON 夏令營已將邁入第七屆，在此之前課程內容涵蓋開放原始碼、資訊安全、Maker、Python、後端的 Node.js、前端的資料爬蟲、視覺化、Telegram bot 等。另外更有社群闖關、視界咖啡館、黑客松等活動，讓學員充分吸收新知、動手實作、尋找自己的愛好及興趣，進而加入我們一起推動 Open Source。
          <br />
          <br />
          2023 年度，SITCON 夏令營將於陽明交通大學光復校區舉辦，以「開源文明，源力擴張」為主軸，帶領各位一同進入開源宇宙。傳承歷屆夏令營的概念，今年的夏令營將會有從基礎 Python 程式語言到做出自己的聊天機器人的實作課程，介紹各資訊領域議題的廣度課程，並透過社群闖關讓學員更加了解各個社群的理念與文化。開源宇宙也將更進一步把故事和營隊整合，配合豐富的課程、座談會及社群闖關，絕對能讓學員擁有截然不同的營隊體驗。
        </motion.p>
        <img src="/2023/images/48711198528_e7ac02a80b_k.jpg" className="w-full lg:w-80 object-cover rounded lg:rotate-3 shadow" />
      </div>
    </div>
  </>
}