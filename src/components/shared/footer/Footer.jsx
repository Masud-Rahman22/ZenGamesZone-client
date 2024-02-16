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
                        <p style={{width:"80%"}}><FaFacebook /></p>
                        <p style={{width:"80%"}}><GrInstagram /></p>
                        <p style={{width:"80%"}}><FaLinkedin /></p>
                        <p style={{width:"80%"}}><FaXTwitter /></p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='sb_footer-below'>
                    <div className='sb_footer-copyright'>
                        <p>
                            @2024 Masud Rahman. All right reserved.
                        </p>
                    </div>
                    <div className='sb_footer-below-links'>
                        <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                        <a href="/privacy"><div><p>Privacy</p></div></a>
                        <a href="/security"><div><p>Security</p></div></a>
                        <a href="/cookie"><div><p>Cookie declaration</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;