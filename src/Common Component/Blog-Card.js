import { FaComments } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { RiArrowRightDoubleLine } from "react-icons/ri";

const BlogCard = ({ blogitems }) => {
    return (
        <>
            {blogitems.map((data, i) => (
                <div className="col-12 col-sm-6 col-xl-4 px-3 mt-30" key={i}>
                    <div className="box">
                        <div className="img-part">
                            <a href="/">
                                <img src={data.img} alt="" className="w-100" />
                            </a>
                        </div>
                        <div className="text-part p-4">
                            <h5>{data.head}</h5>
                            <div className="item-details mb-1 d-sm-flex">
                                <span className="me-3">
                                    <SlCalender className="me-2 body-color" />
                                    {data.date}
                                </span>
                                <span>
                                    <FaComments className="me-2 body-color" />
                                    comments
                                </span>
                            </div>
                            <p className="my-1">{data.info}</p>
                            <a href="/">
                                READ MORE <RiArrowRightDoubleLine />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default BlogCard;
