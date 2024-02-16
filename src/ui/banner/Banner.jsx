"use client"
import { Press_Start_2P } from 'next/font/google'
import video from '../../assets/banner/671569580.mp4'
import { Button } from '@mui/material';
import { FaBoxOpen } from "react-icons/fa";
const Press = Press_Start_2P({ subsets: ['latin'],display: 'swap', weight: "400" })
const Banner = () => {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <video autoPlay playsInline muted loop style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* You can add additional content over the video if needed */}
            <div style={{marginTop: "40px"}}>
            <div style={{ position: 'relative', zIndex: 1000, display: 'flex',flexDirection:"column", justifyContent: "center", paddingTop: "120px", paddingLeft: "20px" }} className={Press.className}>
                <h1 style={{ "font-size": "30px", "color": "white", width:"80%" , marginLeft:"auto", marginRight:"auto",paddingLeft:"50px"}}>Explore, Compete, Conquer Welcome to </h1>
                <h1 style={{ "color": 'red', "fontSize": "30px", marginLeft:"auto", marginRight:"auto"}}>ZenGamesZone</h1>
            </div>
            <div style={{ position: 'relative', zIndex: 1000, display: 'flex', justifyContent: "center", paddingTop: "15px", paddingLeft: "20px", width: "60%" , marginLeft: 'auto', marginRight: 'auto'}} className={Press.className}>
                <h1 style={{ "font-size": "15px", "color": "white" , textAlign: "center"}}><span style={{ "color": 'red' }}>ZenGamesZone</span>: A tranquil haven for gamers. Find flow in pixelated realms, seeking serenity and excitement in immersive experiences.</h1>
            </div>
            <div style={{paddingLeft: "20px", paddingTop: "20px", textAlign:"center"}}>
            <Button style={{paddingLeft: "60px", paddingRight: "60px", paddingTop: "13px" , paddingBottom: "13px", fontSize: "15px", backgroundColor: "red"}} variant="contained" color="error" endIcon={<FaBoxOpen />}>
            Join the Quest!
            </Button>
            </div>
            </div>
        </div>
    );
};

export default Banner;