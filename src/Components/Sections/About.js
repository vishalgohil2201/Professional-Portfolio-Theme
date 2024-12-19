// Icon
import { IoMdDownload } from "react-icons/io";

import Education from "../../Common Component/Education-Card";

const aboutDetails = {
    bigName1: "HELLO! I'M",
    bigName2: " KAMAL",
    myabout: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley book.',
    name: 'Kamal',
    birthdate: '21 May 1995',
    address: '23 Quincy, New York, USA',
    experience: ' 4+ years',
    freelance: 'Available',
    phone: '(+01) 123 456 7890',
    email: 'email@example.com',
    skype: 'your_name',
    language: 'English',
    website: 'www.example.com'
}

const edu = [
    {
        course: 'COMPUTER SCIENCE',
        place: 'Nirma University',
        date: 'Mar 2003 - Nov 2012',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo repudiandae. the majority have suffered alteration in some form.'
    },
    {
        course: 'BACHELOR DEGREE',
        place: 'University of Tokyo',
        date: 'Jun 2012 - Oct 2015',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo repudiandae. the majority have suffered alteration in some form.'
    },
    {
        course: 'MASTER DEGREE',
        place: 'Ganpat University',
        date: 'Sept 2015 - Feb 2017',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo repudiandae. the majority have suffered alteration in some form.'
    }
]
const exp = [
    {
        course: 'WEB DESIGNER',
        place: 'Discord',
        date: 'April',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo repudiandae. the majority have suffered alteration in some form.'
    },
    {
        course: 'BACK-END DEVELOPER',
        place: 'Google',
        date: 'Feb 2017 - May 2018',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo repudiandae. the majority have suffered alteration in some form.'
    },
    {
        course: 'UI/UX DESIGNER',
        place: 'Adobe',
        date: 'Sept 2016 - Nov 2017',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo repudiandae. the majority have suffered alteration in some form.'
    }
]

const skill = [
    {
        language: 'HTML',
        rasio: 95,
    },
    {
        language: 'CSS',
        rasio: 90,
    },
    {
        language: 'JavaScript',
        rasio: 65,
    },
    {
        language: 'JQuery',
        rasio: 75,
    },
    {
        language: 'WordPress',
        rasio: 95,
    },
    {
        language: 'Web Design',
        rasio: 90,
    },
    {
        language: 'PHP',
        rasio: 65,
    },
    {
        language: 'Web Development',
        rasio: 75,
    },

]

const counter = [
    {
        countno: 299,
        countname: 'HAPPY STUDENTS'
    },
    {
        countno: 45,
        countname: 'AWARDS WIN'
    },
    {
        countno: 99,
        countname: 'HOUR OF SUPPORTS'
    },
    {
        countno: 36,
        countname: 'HARD WORKERS'
    },
]

const About = () => {
    return (
        <>
            <section className="about spaceY">
                <div className="container px-3 px-sm-0 h-spacer">

                    {/* About Me */}
                    <div className="about-me content-boxB">
                        <div className="title-part">
                            <h3 className="section-title text-center">ABOUT <span className="body-color">ME</span></h3>
                            <span className="separator"></span>
                        </div>
                        <div className="row">
                            <div className="col-12 col-xl-6 px-3">
                                <div className="about-text mb-4 mb-xl-0">
                                    <h4>{aboutDetails.bigName1}<span className="body-color"> {aboutDetails.bigName2}</span></h4>
                                    <p>{aboutDetails.myabout}</p>
                                    <a href="/" className="body-btn"><span><IoMdDownload className="me-2" />DOWNLOAD MY CV</span></a>
                                </div>
                            </div>
                            <div className="col-12 col-xl-6 px-3 d-sm-flex">
                                <div className="col-12 col-sm-6 px-1">
                                    <div className="about-left-right">
                                        <ul>
                                            <li className="mb-1"><span>Name :</span><span> {aboutDetails.name}</span></li>
                                            <li className="mb-1"><span>BirthDate :</span><span> {aboutDetails.birthdate}</span></li>
                                            <li className="mb-1"><span>Address :</span><span> {aboutDetails.address}</span></li>
                                            <li className="mb-1"><span>Experience :</span><span> {aboutDetails.experience}</span></li>
                                            <li className="mb-1"><span>Freelance :</span><span> {aboutDetails.freelance}</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 px-1">
                                    <div className="about-left-right">
                                        <ul>
                                            <li className="mb-1"><span>Phone :</span><span> {aboutDetails.phone}</span></li>
                                            <li className="mb-1"><span>E-mail : </span><span> {aboutDetails.email}</span></li>
                                            <li className="mb-1"><span>Skype :</span><span> {aboutDetails.skype}</span></li>
                                            <li className="mb-1"><span>Language :</span><span> {aboutDetails.language}</span></li>
                                            <li className="mb-1"><span>Website :</span><span> {aboutDetails.website}</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Experience and Education */}
                    <div className="edu-exp content-boxB">
                        <h3 className="sub-title text-center">
                            EXPERIENCE & EDUCATION
                        </h3>
                        <Education education={edu} experience={exp} />
                    </div>

                    {/* Skills */}
                    <div className="skills content-boxB">
                        <h4 className="sub-title text-center">SKILLS</h4>
                        <div className="row">
                            {
                                skill.map((data,i) => {
                                    return (
                                        
                                            <div className="col-12 col-xl-6 px-3" key={i}>

                                                <div className="box">
                                                    <div className="skill-item mb-4">
                                                        <div className="skill-name d-flex justify-content-between">
                                                            <span>{data.language}</span>
                                                            <span>{data.rasio}%</span>
                                                        </div>  
                                                        <div className="line">
                                                            <div className="progress-bar" style={{ '--pb':`${data.rasio}%` }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                    )
                                })
                            }

                        </div >
                    </div>
                    
                    {/* Counter */}
                    <div className="counter content-boxB">
                        <div className="row">
                            {
                                counter.map((data,i) => {
                                    return (
                                        
                                            <div className="col-12 col-sm-6 col-xl-3 px-3" key={i}>
                                                <div className="counter-box">
                                                    <h4 className="count-num">{data.countno}</h4>
                                                    <h5 className="count-name">{data.countname}</h5>
                                                </div>
                                            </div>
                                        
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>


            </section >
        </>
    )
}

export default About;