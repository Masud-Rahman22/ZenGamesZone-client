import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className='footer' style={{color: "white"}}>
            <div className='sb_footer section_padding'>
                <div className='sb_footer-links'>
                    <div className='sb_footer-links-div'>
                        <h4>For Business</h4>
                        <a href="/employee">
                            <p>Employer</p>
                        </a>
                        <a href="/healthplan">
                            <p>Health Plan</p>
                        </a>
                        <a href="/individual">
                            <p>Individual</p>
                        </a>
                    </div>
                    <div className='sb_footer-links-div'>
                        <h4>Resources</h4>
                        <a href="/resource">
                            <p>Resource Center</p>
                        </a>
                        <a href="/resource">
                            <p>Testimonials</p>
                        </a>
                        <a href="/resource">
                            <p>STV</p>
                        </a>
                    </div>
                    <div className='sb_footer-links-div'>
                        <h4>Partners</h4>
                        <a href="/employee">
                            <p>Swing tech</p>
                        </a>
                    </div>
                    <div className='sb_footer-links-div'>
                        <h4>Company</h4>
                        <a href="/abouts">
                            <p>About</p>
                        </a>
                        <a href="/resource">
                            <p>Press</p>
                        </a>
                        <a href="/resource">
                            <p>Career</p>
                        </a>
                        <a href="/resource">
                            <p>Contact</p>
                        </a>
                    </div>
                    <div className='sb_footer-links-div'>
                        <h4>Coming Soon On</h4>
                        <div className='socialMedia'>
                        <FaFacebook />
                        <GrInstagram />
                        <FaLinkedin />
                        <FaXTwitter />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;