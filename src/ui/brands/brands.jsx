import Marquee from "react-fast-marquee";
import pic1 from '@/assets/brands/img1.jpg'
import pic2 from '@/assets/brands/img2.jpg'
import pic3 from '@/assets/brands/img3.jpg'
import pic4 from '@/assets/brands/img4.jpg'
import pic5 from '@/assets/brands/img5.jpg'
import Image from "next/image";

const brands = () => {
    return (
        <div>
            <Marquee autoFill={true} pauseOnHover={true}>
                <div>
                    <div>
                        <Image src={pic1} alt="brand1"></Image>
                    </div>
                    <div>
                    <Image src={pic2} alt="brand2"></Image>
                    </div>
                    <div>
                    <Image src={pic3} alt="brand3"></Image>
                    </div>
                    <div>
                    <Image src={pic4} alt="brand4"></Image>
                    </div>
                    <div>
                    <Image src={pic5} alt="brand5"></Image>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default brands;