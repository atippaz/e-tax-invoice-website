/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Collapse,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import React, { ReactElement } from "react";
import ShopAndReferences from "../ShopAndReferences";
import data from "../data/shop-and-reference.json";
import {theme} from "@/app/constant/theme";
import { ThemeProvider } from "@mui/material";

type FaqItem = {
  question: ReactElement | string;
  answer: ReactElement | string;
};

const faqItems: FaqItem[] = [
  // {
  //   question: "เว็ปไซต์นี้แก้ปัญหาอะไร",
  //   answer: (
  //     <Typography>
  //       <Link
  //         href="https://etax.rd.go.th/etax_staticpage/app/#/index/registered#top"
  //         target="_blank"
  //         rel="noopener"
  //       >
  //         เว็ปต้นทางของสรรพากร
  //       </Link>
  //       ปล่อยข้อมูลร้านค้าให้สามารถค้นหาได้ด้วยแค่ เลขประจำตัวผู้เสียภาษีอากร
  //       ซึ่งการจะรู้เลขนี้ได้ทำได้ยากและต้องไปเช็คกับระบบอื่น
  //       ทางผู้พัฒนาเว็ปไซต์นี้เล็งเห็นปัญหานี้จึงได้ดึงข้อมูลมาแสดงผลและทำให้ค้นหาได้ด้วยชื่อร้านค้าหรือชื่อผู้เสียภาษีแทน
  //       และต้องการเป็นส่วนหนึ่งที่ช่วยทำให้ process ในการตรวจสอบนี้ง่ายขึ้น
  //       โดยการรวบรวมข้อมูลสำคัญไว้ที่เว็ปไซต์นี้
  //     </Typography>
  //   ),
  // },
  {
    question: "ข้อมูลจากเว็ปไซต์นี้มาจากไหน ข้อมูลอัพเดทไหม",
    answer:
      "เว็ปไซต์นี้ดึงข้อมูลจากเว็ปไซต์สรรพากรจึงมั่นใจได้ว่าข้อมูลมีความถูกต้องระบบจะทำการอัพเดทข้อมูลกับเว็ปไซต์สรรพากรทุกๆ 12 ชม (ประมาณ 7 โมง และ 1 ทุ่ม เวลาไทย)",
  },
  {
    question: "ซื้อของในลาซาด้าและช้อปปี้ยังต้องเช็คกับทางร้านค้าอยู่อีกไหม",
    answer: (
      <>
        ยังต้องตรวจสอบกับทางร้านค้าอีกทีหนึ่งว่าร้านค้าสามารถออกในให้ได้ไหม
        สามารถศึกษาเพิ่มเติมได้ที่{" "}
        <Link
          href="https://www.lazada.co.th/helpcenter/easy-e-receipt-235588.html"
          target="_blank"
          rel="noopener"
        >
          ลิ้งนี้
        </Link>
        <br />
        จุดสังเกต สินค้าที่มี Easy E-Receipt Tag จะเป็นสินค้าที่ร่วมรายการ
        <br />
        Lazada
        <br />
        <img
          src="/Lazada-example-easy-e-receipt.png"
          alt="Lazada-example-easy-e-receipt"
          width="500"
          height="600"
        />
        Shopee
        <br />
        <img
          src="/Shopee-example-easy-e-receipt.png"
          alt="Shopee-example-easy-e-receipt"
          width="500"
          height="600"
        />
      </>
    ),
  },
  {
    question:
      "เมื่อร้านค้าบอกว่าสามารถออกใบกำกับภาษี e-tax ได้ เราจะตรวจสอบได้ใบกำกับภาษีกับสรรพากรได้อย่างไร",
    answer: (
      <>
        ทางสรรพากรได้เตรียมเว็ปไซต์สำหรับการตรวจสอบใบเสร็จได้ โดยเราสามารถ
        upload ใบเสร็จที่
        <Link
          href="https://validation.teda.th/webportal/v2/#/validate"
          target="_blank"
          rel="noopener"
        >
          เว็ปไซต์นี้
        </Link>
        ได้ ดูรายละเอียดเพิ่มเติมในรูปหรือเข้าไปที่{" "}
        <Link
          href="https://etax.rd.go.th/etax_staticpage/app/#/index/webvalidation#top"
          target="_blank"
          rel="noopener"
        >
          ลิ้งนี้
        </Link>{" "}
        <br />
        <Link
          href="https://etax.rd.go.th/etax_staticpage/app/emag/flipbook/flipbook07/#p=1"
          target="_blank"
          rel="noopener"
        >
          คู่มือการใช้งาน
        </Link>
        <img
          src="/etax-receipt-validation.png"
          width={957}
          height={476}
          alt="etax-receipt-validation"
        />
      </>
    ),
  },
  {
    question: "ตัวอย่างใบกำกับภาษี e-tax-invoice",
    answer: (
      <>
        ทางเฟสบุ๊คเพจ TaxBugnoms
        ได้ลงรูปตัวอย่างของใบกำกับภาษีที่ใช้ลดหย่อยภาษีได้
        พร้อมจุดที่ต้องสังเกตุในใบกำกับภาษีครับ{" "}
        <Link
          href="https://www.facebook.com/TaxBugnoms/posts/pfbid02fFfWRgP9i1ec2GvUXrAhu4PaNioKDd7366nTr7gfJXnZmzCGKjECZxDxsxsrxTR6l"
          target="_blank"
          rel="noopener"
        >
          ลิ้งค์ต้นทาง
        </Link>
      </>
    ),
  },
  {
    question: "สินค้า-บริการที่ไม่เข้าร่วม",
    answer: (
      <>
        ข้อมูล ณ​วันที่ 7 ธ.ค. 2566 ที่มา โพสต์จากเฟสบุ้คเพจ{" "}
        <Link
          href="https://www.facebook.com/IAMConsultingTH/posts/pfbid0MaQE8Fq7bxw3ui8Zo4r2Ygs8McXN1ARNr7BGx2exouKkZP3tmmwR6GaqPGrgvF6Bl"
          target="_blank"
          rel="noopener"
        >
          I AM Consulting
        </Link>
        <ul>
          <li>สุรา เบียร์ และไวน์</li>
          <li>ยาสูบ</li>
          <li>รถยนต์ รถจักรยานยนต์ และเรือ</li>
          <li>ค่าน้ำมันและก๊าซสำหรับเติมยานพาหนะ</li>
          <li>ค่าสาธารณูปโภค ค่าน้ำประปา</li>
          <li>
            ค่าไฟฟ้า ค่าบริการสัญญาณโทรศัพท์ ค่าบริการสัญญาณอินเทอร์เน็ต
            ค่าบริการสำหรับบริการที่มีข้อตกลงการให้บริการระยะยาว
            ซึ่งเริ่มต้นก่อน 1 ม.ค. 67 หรืิิอสิ้นสุดหลัง 15 ก.พ. 67
            แม้ว่าจะจ่ายค่าบริการ ระหว่าง 1 ม.ค. 67 ถึง 15 ก.พ. 67 ก็ตาม
          </li>
          <li>ค่าเบี้ยประกันวินาญภัย</li>
        </ul>
      </>
    ),
  },
  // {
  //   question: "สามารถสนับสนุนผู้พัฒนาระบบนี้ได้อย่างไรบ้าง 🥺🥺🥺",
  //   answer: (
  //     <ol>
  //       <li>
  //         - กดไลค์ แชร์ โพสต์ของเพจ Facebook{" "}
  //         <Link href="https://www.facebook.com/HSpotlight/" target="_blank">
  //           HSpotlight
  //         </Link>{" "}
  //         เพื่อเป็นกำลังใจในการทำงาน
  //       </li>
  //       {/* <li>
  //         -{" "}
  //         <Link href="https://www.buymeacoffee.com/hspotlight" target="_blank">
  //           Buy me a coffee
  //         </Link>
  //       </li> */}
  //       <li>
  //         - สนับสนุนผ่าน Promptpay ได้ที่ QR นี้ครับ
  //         <img
  //           src="/QR-receive-money.JPG"
  //           width={440}
  //           height={600}
  //           alt="QR รับเงิน"
  //         />
  //       </li>
  //     </ol>
  //   ),
  // },
];

const FaqItem = ({ item }: { item: FaqItem }) => {
  const [expand, setExpand] = React.useState<boolean>(false);

  const toggle = () => {
    setExpand((e) => !e);
  };

  return (
    <>
      <ListItemButton className="rounded-lg" onClick={toggle}>
        <ListItemText primary={item.question} />
        {expand ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse className="p-5 my-5 ml-10 border-[#fec809] border-2 rounded-lg" in={expand} timeout="auto" unmountOnExit>
        <Typography variant="body2">
          <b>คำตอบ:</b> {item.answer}
        </Typography>
      </Collapse>
    </>
  );
};

const Faq = () => {
  return (
  <ThemeProvider theme={theme}>
    <div className="mt-4 max-w-100">
      <Typography variant="h4" className="mb-4 font-semibold">
        คำถามที่พบบ่อย
      </Typography>
      <List
        className="max-w-100"
        component="nav"
      >
        {faqItems.map((item, index) => {
          return <FaqItem key={index} item={item} />;
        })}
      </List>
    </div>
  </ThemeProvider>
  );
};

export default Faq;
