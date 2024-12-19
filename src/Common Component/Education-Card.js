import React from 'react'
import { SlCalender } from "react-icons/sl";
import { GiNotebook } from "react-icons/gi";

const Education = ({ education, experience }) => {
    return (
        <>

            <div className="row">
                <div className="col-12 col-xl-6 px-3">
                    <h4 className="mb-4 text-center">EDUCATION</h4>
                    <div className="boxes">
                        {
                            education.map((data1,i) => {
                                return (
                                    
                                        <div className="box mb-4" key={i}>
                                            <h5 className="box-title">{data1.course}</h5>
                                            <div className="items-details mb-1 d-sm-flex">
                                                <span className="me-3"><GiNotebook className="me-2" />{data1.place}</span>
                                                <span className=""><SlCalender className="me-2" />{data1.date}</span>
                                            </div>
                                            <p className="m-0">{data1.detail}</p>
                                        </div>
                                    
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col-12 col-xl-6 px-3">
                    <h4 className="mb-4 text-center">EXPERIENCE</h4>
                    <div className="boxes">
                        {
                            experience.map((data2,i) => {
                                return (
                                    
                                        <div className="box mb-4" key={i}>
                                            <h5 className="box-title">{data2.course}</h5>
                                            <div className="items-details mb-1 d-sm-flex">
                                                <span className="me-3"><GiNotebook className="me-2" />{data2.place}</span>
                                                <span className=""><SlCalender className="me-2" />{data2.date}</span>
                                            </div>
                                            <p className="m-0">{data2.detail}</p>
                                        </div>
                                    
                                )
                            })
                        }
                    </div>
                </div>
            </div>


        </>
    )
}

export default Education;
