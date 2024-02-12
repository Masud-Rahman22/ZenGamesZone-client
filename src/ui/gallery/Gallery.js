"use client"
import img1 from '@/assets/gallery/img1.jpg';
import img2 from '@/assets/gallery/img2.jpg';
import img3 from '@/assets/gallery/img3.jpg';
import img4 from '@/assets/gallery/img4.jpg';
import img6 from '@/assets/gallery/img6.jpg';
import img7 from '@/assets/gallery/img7.jpg';
import img8 from '@/assets/gallery/img8.jpg';
import img9 from '@/assets/gallery/img9.jpg';
import img10 from '@/assets/gallery/img10.jpg';
import img11 from '@/assets/gallery/img11.jpg';
import img12 from '@/assets/gallery/img12.jpg';
import img13 from '@/assets/gallery/img13.jpg';
import Image from 'next/image';
import './gallery.css'
import { useState } from 'react';
const Gallery = () => {
    let data = [
        {
            id: '1',
            imgSrc: img1,
        },
        {
            id: '2',
            imgSrc: img2,
        },
        {
            id: '3',
            imgSrc: img3,
        },
        {
            id: '4',
            imgSrc: img4,
        },
        {
            id: '6',
            imgSrc: img6,
        },
        {
            id: '7',
            imgSrc: img7,
        },
        {
            id: '8',
            imgSrc: img8,
        },
        {
            id: '9',
            imgSrc: img9,
        },
        {
            id: '10',
            imgSrc: img10,
        },
        {
            id: '11',
            imgSrc: img11,
        },
        {
            id: '12',
            imgSrc: img12,
        },
        {
            id: '13',
            imgSrc: img13,
        },
    ]
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const getItem = (imgSrc) => {
        setTempImgSrc(imgSrc)
        setModel(true)
    }
    return (
        <>
            <div className={model ? 'model-open' : 'model'}>
                <Image className='img' src={tempImgSrc} alt='gallery image'></Image>
            </div>
            <div className='gallery'>
                {
                    data.map((item, i) => {
                        return (
                            <div key={i} className='pics' onClick={() => getItem(item.imgSrc)}>
                                <Image src={item.imgSrc} alt='gallery images' width={"100%"}></Image>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Gallery;