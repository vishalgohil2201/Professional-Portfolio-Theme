// Icons
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn, FaUser } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";

var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

const Home = () => {
    return (
        <>
            <div className="home-banner">
                <div className="container">
                    <div className="banner-box d-flex align-items-center justify-content-center flex-column flex-xl-row">
                        <div className="img-box">
                            <img src={require('../../Assets/profile.jpg')} alt="" />
                        </div>
                        <div className="text-part text-center text-xl-start">
                            <h2>HI THERE!</h2>
                            <h3>I'M <span className="d-inline-block d-sm-none">KAMAL</span> <span className="typewrite d-none d-sm-inline-block" data-period="2000" data-type='[ "KAMAL", "A WEB DESIGNER", "A LOGO DESIGNER", "A WEB DEVELOPER" ]'>KAMAL</span> </h3>
                            <p>I'M UI/UX Designer and Developer with over 5+ years of experience and beautiful web applications through carefully crafted design.</p>
                            <div className="social-icons">
                                <a href="/"><FaFacebookF></FaFacebookF></a>
                                <a href="/"><FaTwitter></FaTwitter></a>
                                <a href="/"><FaGooglePlusG></FaGooglePlusG></a>
                                <a href="/"><FaInstagram></FaInstagram></a>
                                <a href="/"><FaLinkedinIn></FaLinkedinIn></a>
                            </div>
                            <div className="info-btn d-sm-flex justify-content-center justify-content-xl-start">
                                <a href="/" className="body-btn gray-btn btn-1 mx-auto mx-sm-0 mb-3 mb-sm-0 me-sm-3 d-block d-sm-flex align-items-center justify-content-center"><span><FaUser className="me-2" />MORE ABOUT ME</span></a>
                                <a href="/" className="body-btn btn-2 mx-auto mx-sm-0 d-block d-sm-flex align-items-center justify-content-center"><span><IoIosRocket className="me-2" />MY PORTFOLIO</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;