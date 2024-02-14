import img1 from '@/assets/gallery/img1.jpg';
import img4 from '@/assets/gallery/img4.jpg';
import img7 from '@/assets/gallery/img7.jpg';
import img8 from '@/assets/gallery/img8.jpg';
import img9 from '@/assets/gallery/img9.jpg';
import img10 from '@/assets/gallery/img10.jpg';
import Image from 'next/image';
import './gallery.css'

const GallerySection = () => {
    return (
        <div className='grid-wrap'>
            <ul>
                <li><Image src={img1} alt='img1'></Image></li>
                <li><Image src={img4} alt='img4'></Image></li>
                <li><Image src={img7} alt='img6'></Image></li>
                <li><Image src={img8} alt='img7'></Image></li>
                <li><Image src={img9} alt='img8'></Image></li>
                <li><Image src={img10} alt='img9'></Image></li>
                </ul>
        </div>
    );
};

export default GallerySection;