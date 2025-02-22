import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
function Report({
  children,
  avatar,
  name,
  year,
  href,
}: {
  children: React.ReactNode;
  avatar: string;
  name: string;
  year: string;
  href: string;
}) {
  return (
    <div className="flex flex-col items-center bg-[#01405D] rounded">
      <div className="flex items-center justify-center gap-2 p-2 bg-black bg-opacity-10 text-white rounded-t leading-4 w-full">
        <img src={avatar} className="w-12 h-12 rounded" />
        <div className="flex-1">
          <div className="font-bold">{name}</div>
          <div className="opacity-70 text-sm mt-1">SITCON Camp {year} 學員</div>
        </div>
      </div>
      <div className="py-2 px-4 w-full">{children}</div>
      <div className="flex-1"></div>
      <div className="p-4 pt-0 flex justify-end w-full">
        <Link
          href={href}
          target={href.startsWith("http") ? `_blank` : ``}
          className="px-4 py-2 bg-[#013249] bg-opacity-50 hover:bg-opacity-100 rounded-full flex gap-2 items-center leading-4"
        >
          閱讀全文 <i className="bx bx-chevron-right text-xl"></i>
        </Link>
      </div>
    </div>
  );
}
function More({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!show && (
          <motion.div
            initial={{ opacity: 0, height: "auto", scale: 0 }}
            whileInView={{ opacity: 1, height: "auto", scale: 1 }}
            exit={{ opacity: 0, height: 0, scale: 0 }}
            className="flex justify-center items-center w-full mt-4"
          >
            <Button onClick={() => setShow(true)}>
              <i className="bx bx-plus text-xl"></i> 檢視更多學員心得
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
export default function Reports() {
  return (
    <>
      <motion.div className="container mt-16"

        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}>
        <motion.h1 className="text-center text-2xl lg:text-2xl font-bold mt-1 lg:mt-3 scroll-mt-32" id="reports">
          來聽聽學員的回饋
        </motion.h1>
        <motion.h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
            <Report
              avatar="/2023/records-avatar/340069299_243506511573764_1868312350951130034_n.jpg"
              name="吳冠廷"
              year="2021"
              href="https://www.facebook.com/100003479633002/posts/3997020290423919/"
            >
              參加了一個禮拜的 SITCON
              Camp，學到了網頁資安遊戲設計等知識，並從大佬身上學到了寶貴的心得和人生啟發。雖然缺少面對面溝通，但在製作
              Discord bot
              時，我們展現了團結和信任，取得了成就感。營隊讓我們從不同角度認識彼此，並擴展了交友圈和思維模式。這是我們製作的
              Discord bot 的簡報介紹連結，我們做了很多東西，讓我感到開心。
            </Report>
            <Report
              avatar="/2023/records-avatar/avatar.svg"
              name="張家昀"
              year="2021"
              href="https://www.notion.so/2021-SITCON-CAMP-5c0e3e3391294d059c1c84b278d98642"
            >
              <br />
              <h2 className="font-bold text-center">
                儘管在線上舉行，
                <br />
                卻是我見過「最理想」的學習模式
              </h2>
              <br />
              SITCON Camp
              的精緻程度、工作人員們的用心、電的程度遠遠──超乎我的想像。他們在
              Discord 上建立了<span className="line-through">伺服器</span>
              艦艇，依據課程編寫主線劇情，由機器聊天室將對話的情境呈現出來。小組討論基本上會在
              Discord 上進行。
            </Report>
            <Report
              avatar="/2023/records-avatar/309683975_5494046350715307_8476200032565402966_n.jpg"
              name="王威皓"
              year="2021"
              href="https://www.facebook.com/story.php?story_fbid=4235551709898117&id=100003299897396"
            >
              在 SITCON Camp 2021
              中，我學到了新知識並結交了新朋友。小隊中只有我是男性且最小的，但這不是重點。我們幾乎每天都沒有睡飽，尤其最後一天為了趕專案一起熬夜到凌晨三點。感謝我的隊友們的協助，我覺得自己幫不上太多忙。希望下次能再次相遇，這七天過得很充實。
            </Report>
          </div>
        </motion.h1>
        <More>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
            <Report
              avatar="/2023/records-avatar/I7iV7Fo.jpeg"
              name="Vincent55"
              year="2019"
              href="/report/vincent"
            >
              在參加 SITCON
              夏令營前，我只知道資訊中的演算法競賽，參加後，我知道資安、專案開發、人工智慧…等領域，甚至認識到了在這些領域前段的社群朋友們。
              以我自己的經驗，我參加了…
            </Report>
            <Report
              avatar="/2023/records-avatar/rnV72WM.jpeg"
              name="William Mou"
              year="2017"
              href="/report/william-mou"
            >
              常常，我們總覺得拼命的看書與學習，便可以使自己快速成長。
              然而，有所遺漏的是，當我們獨自精進時，常常會忽略了其他更重要的技能…
            </Report>
            <Report
              avatar="/2023/records-avatar/RlcXMX1.png"
              name="陳俊宇"
              year="2019"
              href="https://forum.gamer.com.tw/C.php?bsn=60292&snA=5734&tnum=1"
            >
              Telegram bot 技術門檻不高，只要會一些基本的 Python
              語法就能做出來，這也是這五天 SITCON 夏令營的主要課程之一。
              我們的黑客松題目：猜歌機器人，不知道你有沒有這樣的經驗，和一群動漫迷時，放一首動漫歌曲，看對方由沒有聽過；而這次的黑客松，我們小隊打算在
              Telegram 上做一個猜歌機器人，主要流程如下…
            </Report>
            <Report
              avatar="/2023/records-avatar/SY6Zi2x.jpeg"
              name="李杰穎"
              year="2019"
              href="https://jayin92.github.io/posts/2019-sitcon-camp/"
            >
              這是我參加過課程最硬的營隊，也是唯一一次在營期中熬夜到三點的。
              這次程式開發的經驗真的讓我了解到什麼叫跟時間賽跑，我從來沒有打
              code 打到凌晨 3 點，早上 7
              點起來繼續的經驗。而且做出來的成品是真的可以用的，就真的非常非常有成就感，期望以後還有機會體驗到這種開發的經驗。
              SITCON 2020 我會去的！！！（當工人感覺不錯呢）
            </Report>
            <Report
              avatar="/2023/records-avatar/avatar.svg"
              name="楊芷安"
              year="2019"
              href="https://anjoincamp.blogspot.com/2019/08/sitcon-camp.html"
            >
              “視”界咖啡館使用座談會的形式對講師們問問題，輪到與 PCman
              的訪談，其實一開始我對他比較沒有那麼感興趣，但後來他分享自己如何從學醫回到資工的經驗還挺精彩的，他也將醫生檢查病人的那套
              SOP 運用在 debug 上，強大的 SOP，居然不只可以用在當市長，還可以
              debug 啊~
            </Report>
          </div>
        </More>
      </motion.div>
    </>
  );
}
