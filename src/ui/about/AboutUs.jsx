import aboutAnimation from '@/assets/lottie/about.json'
import { Button } from '@mui/material';
import Lottie from 'lottie-react';
import { GiCrenelCrown } from "react-icons/gi";
const AboutUs = () => {
    return (
        <div style={{ backgroundColor: "red" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ width: "700px", flex: "1" }}>
                    <Lottie animationData={aboutAnimation}></Lottie>
                </div>
                <div style={{ flex: "1" }}>
                    <h1 style={{ color: "white", fontSize: "45px", fontWeight:"bold", marginBottom:"30px" }}>We are ZenGamesZone</h1>
                    <p style={{ color: "white", fontSize: "20px" , marginBottom:"30px" }}>Welcome to ZenGamesZone, your ultimate destination for immersive gaming experiences. We are dedicated to providing a diverse range of games that captivate and inspire players of all levels. Whether you are seeking relaxation or thrills, our carefully curated selection ensures there is something for everyone. Join us on this journey of discovery and fun!</p>
                    <Button style={{ paddingLeft: "60px", paddingRight: "60px", paddingTop: "13px", paddingBottom: "13px", fontSize: "17px", backgroundColor: "black" , marginBottom:"20px"}} variant="contained" endIcon={<GiCrenelCrown />}>
                    Forge Your Legend
                    </Button>
                    <p style={{color: "white", fontSize: "20px"}}>Our purpose…</p>
                    <p style={{color: "white", fontSize:"35px"}}>“unleash the gamer in everyone”</p>
                </div>  
            </div>
        </div>
    );
};

export default AboutUs;