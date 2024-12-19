import { FaLocationDot } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// Component
import Footer from "../Header & Footer/Footer";

const Contact = () => {
    return (
        <>
            <section className="contact spaceY pb-0">
                <div className="container h-spacer px-3 px-sm-0">
                    <div className="title-part text-center">
                        <h3 className="section-title">CONTACT <span className="body-color">ME</span></h3>
                        <span className="separator"></span>
                    </div>

                    {/* Contact Box */}
                    <div className="contact-me content-boxB">
                        <div className="row">
                            <div className="col-12 col-md-6 mt-30">
                                <div className="box d-flex">
                                    <div className="icon-box">
                                        <FaLocationDot />
                                    </div>
                                    <div className="text-box">
                                        <h3>MY ADDREES</h3>
                                        <p className="m-0">23 Quincy Street, New York, USA, 404 790 KA</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 mt-30">
                                <div className="box d-flex">
                                    <div className="icon-box">
                                        <IoShareSocialSharp />
                                    </div>
                                    <div className="text-box">
                                        <h3>SOCIAL PROFILES </h3>
                                        <div className="social-links">
                                            <a href="/"><FaFacebookF /></a>
                                            <a href="/"><FaTwitter /></a>
                                            <a href="/"><FaGooglePlusG /></a>
                                            <a href="/">< FaInstagram /></a>
                                            <a href="/">< FaLinkedinIn /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 mt-30">
                                <div className="box d-flex">
                                    <div className="icon-box">
                                        <IoMdMail />
                                    </div>
                                    <div className="text-box">
                                        <h3>EMAIL ME</h3>
                                        <a href="/">contact@example.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 mt-30">
                                <div className="box d-flex">
                                    <div className="icon-box">
                                        <MdCall />
                                    </div>
                                    <div className="text-box">
                                        <h3>CALL ME </h3>
                                        <a href="/">(+01) 123 456 7890</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="form-menu content-boxB">
                        <p className="mt-4 mb-3 gray-color">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-12 col-sm-6 mb-3">
                                        <div className="form-box">
                                            <input type="text" placeholder="Name" className="w-100" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 mb-3">
                                        <div className="form-box">
                                            <input type="text" placeholder="Email" className="w-100" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 mb-3">
                                        <div className="form-box">
                                            <input type="text" placeholder="Phone Number" className="w-100" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 mb-3">
                                        <div className="form-box">
                                            <input type="text" placeholder="Subject" className="w-100" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <div className="form-box">
                                    <textarea placeholder="Type Your Message Here..." id="" cols="30" rows="4" className="w-100"></textarea>
                                </div>
                            </div>
                        </div>
                        <a href="/" className="body-btn"><span>SEND MESSAGE</span></a>
                    </div>

                    {/* Map */}
                    <div className="map content-boxB">
                        <div className="col-12">
                            <div className="map-box">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.0360977185!2d-74.30933341658171!3d40.69753995848721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1704399731404!5m2!1sen!2sin"
                                    className="w-100"
                                    loading="lazy"
                                    referrerPolicy="no-referrer"
                                    title="Google Maps Embed - New York City"
                                ></iframe>

                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <Footer></Footer>

                </div>
            </section>
        </>
    )
}

export default Contact;