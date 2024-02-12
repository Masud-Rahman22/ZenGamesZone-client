"use client"
import { Press_Start_2P } from 'next/font/google'
import video from '../../assets/banner/671569580.mp4'
import { Button } from '@mui/material';
import { FaBoxOpen } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
const Press = Press_Start_2P({ subsets: ['latin'], display: 'swap', weight: "400" })
const Banner = () => {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <video autoPlay playsInline muted loop style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* You can add additional content over the video if needed */}
            <div style={{ position: 'relative', zIndex: 1000, display: 'flex', justifyContent: "start", paddingTop: "120px", paddingLeft: "20px" }} className={Press.className}>
                <h1 style={{ "font-size": "30px", "color": "white" }}>Explore, Compete, Conquer <br />Welcome to <span style={{ "color": 'red', "fontSize": "30px" }}>ZenGamesZone</span></h1>
            </div>
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'We produce food for Mice',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'We produce food for Hamsters',
                    1000,
                    'We produce food for Guinea Pigs',
                    1000,
                    'We produce food for Chinchillas',
                    1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
            />
            <div style={{ position: 'relative', zIndex: 1000, display: 'flex', justifyContent: "start", paddingTop: "15px", paddingLeft: "20px", width: "60%" }} className={Press.className}>
                <h1 style={{ "font-size": "15px", "color": "white" }}><span style={{ "color": 'red' }}>ZenGamesZone</span>: A tranquil haven for gamers. Find flow in pixelated realms, seeking serenity and excitement in immersive experiences.</h1>
            </div>
            <div style={{ paddingLeft: "20px", paddingTop: "20px" }}>
                <Button style={{ paddingLeft: "60px", paddingRight: "60px", paddingTop: "13px", paddingBottom: "13px", fontSize: "15px", backgroundColor: "red" }} variant="contained" color="error" endIcon={<FaBoxOpen />}>
                    Join the Quest!
                </Button>
            </div>
        </div>
    );
};

export default Banner;