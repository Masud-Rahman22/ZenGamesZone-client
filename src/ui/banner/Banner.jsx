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
            <div style={{ position: 'relative', zIndex: 1 }}>
                <h1 style={{text}}>this is gameplay</h1>
            </div>
        </div>
    );
};

export default Banner;