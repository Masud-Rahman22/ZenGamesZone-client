"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                        'background-image':
                            'url(https://i.ibb.co/HNCKMm7/view-illuminated-neon-gaming-keyboard-setup-controller.jpg)',
                    }}
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                    Elevate Your Play, <span style={{color: "red"}}>Unleash Your Power</span>
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Game on, Level up!🎮
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                        Welcome to [Your Gaming Website Name], where every click sparks new adventures, every win fuels triumph, and every gamer finds their epic tale. Join our community of thrill-seekers, explorers, and champions, and let us rewrite the rules of gaming together. Get ready to dominate, to conquer, and to reign supreme. Your quest begins now.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        Slide 2
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Subtitle
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                            tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        Slide 3
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Subtitle
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                            tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
