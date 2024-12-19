// Icons
import { FaHtml5, FaPaintBrush, FaMobileAlt, FaChartBar, FaTachometerAlt, FaRegFileCode, FaRegHandshake } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";
import { BsPencilSquare } from "react-icons/bs";

// Components
import ServicesCard from "../../Common Component/Services_Card";
import Testimonial from "../../Common Component/Testimonial-Slider";

const ser = [
    {
        icon: <FaHtml5 />,
        name: 'WEB DESIGN',
        info: 'There are many variations of passages of but the majority have suffered alteration.'
    },
    {
        icon: <IoCodeSlashOutline />,
        name: 'WEB DEVELOPMENT',
        info: 'There are many variations of passages of but the majority have suffered alteration.'
    },
    {
        icon: <FaPaintBrush />,
        name: 'GRAPHIC DESIGN',
        info: 'There are many variations of passages of but the majority have suffered alteration.'
    },
    {
        icon: <FaMobileAlt />,
        name: 'RESPONSIVE DESIGN',
        info: 'There are many variations of passages of but the majority have suffered alteration.'
    },
    {
        icon: <FaChartBar />,
        name: 'MEDIA MARKETING',
        info: 'There are many variations of passages of but the majority have suffered alteration.'
    },
    {
        icon: <BsPencilSquare />,
        name: 'EASY TO CUSTOMIZE',
        info: 'There are many variations of passages of but the majority have suffered alteration.'
    },
    {
        icon: <FaTachometerAlt />,
        name: 'UNLIMITED COLOR',
        info: 'There are many variations of passages of but the majority have suffered alteration.'
    },
    {
        icon: <FaRegFileCode />,
        name: 'UNIQUE DESIGN',
        info: 'There are many variations of passages of but the majority have suffered alteration.'
    },
    {
        icon: <FaRegHandshake />,
        name: 'LIFE TIME SUPPORT',
        info: 'There are many variations of passages of but the majority have suffered alteration.'
    },

]

const tms = [
    {
        img: require('../../Assets/testimonial-1.jpg'),
        name: 'ANNA STHESIA',
        info: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything."
    },
    {
        img: require('../../Assets/testimonial-2.jpg'),
        name: 'BUSTER HYMAN',
        info: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything."
    },
    {
        img: require('../../Assets/testimonial-3.jpg'),
        name: 'KAMAL ANNA',
        info: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything."
    },
]

const Services = () => {
    return (
        <>
            <section className="services spaceY">
                <div className="container px-3 px-sm-0 h-spacer">

                    {/* My Services */}
                    <div className="my-services content-boxB">
                        <div className="title-part text-center">
                            <h3 className="section-title">MY <span className="body-color">SERVICES</span></h3>
                            <span className="separator"></span>
                        </div>
                        <ServicesCard services={ser}></ServicesCard>
                    </div>

                    {/* TestiMonial */}
                    <div className="testimonial contentB">
                        <h3 className="sub-title text-center">TESTIMONIAL</h3>
                        <Testimonial sliderinfo={tms}></Testimonial>
                    </div>

                </div>
            </section >
        </>
    )
}

export default Services;