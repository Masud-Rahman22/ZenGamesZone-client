"use client"


import video from '../../assets/banner/background.mp4'

const Banner = () => {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <video autoPlay muted loop style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* You can add additional content over the video if needed */}
            <div style={{ position: 'relative', zIndex: 1000, display: 'flex', justifyContent: "center", paddingTop: "80px" }}>
                <h1 style={{"font-size": "30px" ,"color": "white"}}>Explore, Compete, Conquer: Welcome to <span style={{"color": 'red', "fontSize": "40px" }} className='backdrop-blur-md'>ZenGamesZone</span></h1>
            </div>
        </div>
    );
};

export default Banner;