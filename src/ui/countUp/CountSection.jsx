"use client"

import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CountSection = () => {
    const [counterState, setCounterState] = useState(false)
    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)', // Creates 4 columns with equal width
        gap: '20px', // Adjust the gap between grid items
        border: '1px solid red',
        padding: "25px 30px" 
    };
    return (
        <div style={{ padding:"100px 40px",color: "white" }}>
            <ScrollTrigger onEnter={()=>setCounterState(true)} onExit={()=>setCounterState(false)} >
            <div style={ gridContainerStyle }>
                <div style={{textAlign:"center"}}>
                    <h2 style={{fontSize:"60px", fontWeight:"bold"}}>{
                        counterState && <CountUp start={0} end={45} duration={3.40}></CountUp>
                    }%</h2>
                    <p style={{fontSize: "20px", color: "red"}}>Action/Adventure Games</p>
                </div>
                <div style={{textAlign:"center"}}>
                    <h2 style={{fontSize:"60px", fontWeight:"bold"}}>{
                        counterState && <CountUp start={0} end={25} duration={3.40}></CountUp>
                    }%</h2>
                    <p style={{fontSize: "20px", color: "red"}}>First-Person Shooters (FPS)</p>
                </div>
                <div style={{textAlign:"center"}}>
                    <h2 style={{fontSize:"60px", fontWeight:"bold"}}>{
                        counterState && <CountUp start={0} end={13} duration={3.40}></CountUp>
                    }%</h2>
                    <p style={{fontSize: "20px", color: "red"}}>Role-Playing Games (RPGs)</p>
                </div>
                <div style={{textAlign:"center"}}>
                    <h2 style={{fontSize:"60px", fontWeight:"bold"}}>{
                        counterState && <CountUp start={0} end={17} duration={3.40}></CountUp>
                    }%</h2>
                    <p style={{fontSize: "20px", color: "red"}}>Strategy Games</p>
                </div>
            </div>
            </ScrollTrigger>
        </div >
    );
};

export default CountSection;