/* eslint-disable @next/next/no-img-element */
'use client'
import {List, Typography} from "@mui/material";
import React from "react";
import {theme} from "@/app/constant/theme";
import { ThemeProvider } from "@mui/material";
import { Link }from "@mui/material";
const Contact = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="mt-4 max-w-100">
                <Typography variant="h4" className="mb-4 font-semibold">
                    เกี่ยวกับเรา
                </Typography>
            </div>
            <div className="mt-6 max-w-100">
                <Typography variant="h6" className="mb-4">
                    เว็ปไซต์นี้แก้ปัญหาอะไร
                </Typography>
                <Typography>
                    <Link
                        href="https://etax.rd.go.th/etax_staticpage/app/#/index/registered#top"
                        target="_blank"
                        rel="noopener"
                    >
                        เว็ปต้นทางของสรรพากร
                    </Link>
                        ปล่อยข้อมูลร้านค้าให้สามารถค้นหาได้ด้วยแค่ เลขประจำตัวผู้เสียภาษีอากร
                        ซึ่งการจะรู้เลขนี้ได้ทำได้ยากและต้องไปเช็คกับระบบอื่น
                        ทางผู้พัฒนาเว็ปไซต์นี้เล็งเห็นปัญหานี้จึงได้ดึงข้อมูลมาแสดงผลและทำให้ค้นหาได้ด้วยชื่อร้านค้าหรือชื่อผู้เสียภาษีแทน
                        และต้องการเป็นส่วนหนึ่งที่ช่วยทำให้ process ในการตรวจสอบนี้ง่ายขึ้น
                        โดยการรวบรวมข้อมูลสำคัญไว้ที่เว็ปไซต์นี้
                </Typography>
            </div>
            <div className="mt-6 max-w-100">
                <Typography variant="h6" className="mb-4">
                    สามารถสนับสนุนผู้พัฒนาระบบนี้ผ่านช่องทางข้างล่าง 🥺🥺🥺
                </Typography>
                <ol>
                    <li>
                        - กดไลค์ แชร์ โพสต์ของเพจ Facebook{" "}
                        <Link href="https://www.facebook.com/HSpotlight/" target="_blank">
                            HSpotlight
                        </Link>{" "}
                        เพื่อเป็นกำลังใจในการทำงาน
                    </li>
                    <li>
                        - สนับสนุนผ่าน Promptpay ภควัต อเนกวิโรจน์ ได้ที่ QR นี้ครับ
                        <img
                            className="mt-4"
                            src="/QR-receive-money.JPG"
                            width={220}
                            height={300}
                            alt="QR รับเงิน"
                        />
                    </li>
                </ol>
            </div>
        </ThemeProvider>
    );
};

export default Contact;

