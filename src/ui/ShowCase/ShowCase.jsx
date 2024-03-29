import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import Image from 'next/image';
import image1 from '@/assets/actionGames/image1.jpg'
import image2 from '@/assets/actionGames/image2.jpg'
import image3 from '@/assets/actionGames/image3.jpeg'
import image4 from '@/assets/actionGames/image4.jpeg'
import image5 from "@/assets/fpsGames/image5.jpeg"
import image6 from "@/assets/fpsGames/image6.jpeg"
import image7 from "@/assets/fpsGames/image7.jpeg"
import image8 from "@/assets/fpsGames/image8.jpeg"
import image9 from "@/assets/rpg/image9.jpeg"
import image10 from "@/assets/rpg/image10.jpeg"
import image11 from "@/assets/rpg/image11.jpeg"
import image12 from "@/assets/rpg/image12.png"
import image13 from "@/assets/strategyGames/image13.jpeg"
import image14 from "@/assets/strategyGames/image14.jpg"
import image15 from "@/assets/strategyGames/image15.jpeg"
import image16 from "@/assets/strategyGames/image16.jpeg"
import { Press_Start_2P } from 'next/font/google'
const Press = Press_Start_2P({ subsets: ['latin'],display: 'swap', weight: "400" })
const ShowCase = () => {
    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)', // Creates 4 columns with equal width
    };
    return (
        <div>
            <h1 style={{color:"white", fontSize: "30px", textAlign: "center", margin: "40px 0px", }} className={Press.className}><span style={{ color: 'red', fontSize: "40px"}}>ZenGamesZone</span><br /> Premier Showcase Selection</h1>
            <div style={gridContainerStyle}>
            {/* One */}
            <div>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide><Image src={image1} alt="image1" width={"100%"}></Image></SwiperSlide>
                <SwiperSlide><Image src={image2} alt="image2" width={"100%"}></Image></SwiperSlide>
                <SwiperSlide><Image src={image3} alt="image3" width={"100%"}></Image></SwiperSlide>
                <SwiperSlide><Image src={image4} alt="image4" width={"100%"}></Image></SwiperSlide>
            </Swiper>
            <h1 style={{color: "red", fontSize:"20px", textAlign: "center", margin: "20px 0px"}} className={Press.className}>Action/Adventure Games</h1>
            </div>
            {/* Two */}
            <div>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide><Image src={image5} alt="image5" width={"100%"}></Image></SwiperSlide>
                <SwiperSlide><Image src={image6} alt="image6" width={"100%"}></Image></SwiperSlide>
                <SwiperSlide><Image src={image7} alt="image7" width={"100%"}></Image></SwiperSlide>
                <SwiperSlide><Image src={image8} alt="image8" width={"100%"}></Image></SwiperSlide>
            </Swiper>
            <h1 style={{color: "red", fontSize:"20px", textAlign: "center", margin: "20px 0px"}} className={Press.className}>First-Person Shooters (FPS)</h1>
            </div>
            {/* Three */}
            <div>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide><Image src={image9} alt="image9" width={"100%"}></Image></SwiperSlide>
                <SwiperSlide><Image src={image10} alt="image10" width={"100%"}></Image></SwiperSlide>
                <SwiperSlide><Image src={image11} alt="image11" width={"100%"}></Image></SwiperSlide>
                <SwiperSlide><Image src={image12} alt="image12" width={"100%"}></Image></SwiperSlide>
            </Swiper>
            <h1 style={{color: "red", fontSize:"20px", textAlign: "center", margin: "20px 0px"}} className={Press.className}>Role-Playing Games (RPGs)</h1>
            </div>
            {/* Four */}
            <div>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide><Image src={image13} alt="image13" width={"100%"}></Image></SwiperSlide>
                <SwiperSlide><Image src={image14} alt="image14" width={"100%"}></Image></SwiperSlide>
                <SwiperSlide><Image src={image15} alt="image15" width={"100%"}></Image></SwiperSlide>
                <SwiperSlide><Image src={image16} alt="image16" width={"100%"}></Image></SwiperSlide>
            </Swiper>
            <h1 style={{color: "red", fontSize:"20px", textAlign: "center", margin: "20px 0px"}} className={Press.className}>Strategy Games</h1>
            </div>
        </div>
        </div>
    );
};

export default ShowCase;