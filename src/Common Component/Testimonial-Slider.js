import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonial = ({ sliderinfo }) => {
    const sd = {
        nav: true,
        navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    }
    return (
        <>
            <OwlCarousel className='owl-theme' items={1} loop={true} margin={10} dots={true} {...sd} id='tms-1'>
                {
                    sliderinfo.map((data,i) => {
                        return (
                            
                                <div className="box text-center" key={i}>
                                    <div className="img-box">
                                        <img src={data.img} className='mx-auto' alt="" />
                                    </div>
                                    <p>{data.info}</p>
                                    <div className="name-box">{data.name}</div>
                                </div>
                            
                        )
                    })
                }
            </OwlCarousel>
        </>
    )
}

export default Testimonial;