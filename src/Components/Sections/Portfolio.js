import React from 'react'

// Icons
import { AiOutlinePicture } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { FaYoutube, FaVimeoV } from "react-icons/fa";
import { IoIosMusicalNotes } from "react-icons/io";

const Portfolio = () => {
  return (
    <>
      <section className='portfolio spaceY'>
        <div className="container h-spacer px-3 px-sm-0">
          <div className="title-part text-center">
            <h3 className='section-title'>MY <span className='body-color'>PORTFOLIO</span></h3>
            <span className='separator'></span>
          </div>
          {/* Routes */}
          <div className="row mb-4">
            <ul className='top-menu d-flex justify-content-center flex-wrap'>
              <li className='px-2 pb-3'><a className='bg-body' href='/'>ALL WORK</a></li>
              <li className='px-2 pb-3'><a href='/'>DESIGN</a></li>
              <li className='px-2 pb-3'><a href='/'>MUSIC</a></li>
              <li className='px-2 pb-3'><a href='/'>VIDEOS</a></li>
            </ul>
          </div>

          <div className="row p-menu">
            <div className="col-12 col-sm-6 col-lg-4 px-3 mt-30">
              <div className="box">
                <div className="img-box">
                  <img src={require('../../Assets/portfolio-1.jpg')} className='w-100' alt="" />
                </div>
                <div className="dashed-border"></div>
                <div className="text-box">
                  <h5>IMAGE PROJECT</h5>
                  <p>Design</p>
                  <div className="icon-list d-flex justify-content-center">
                    <a href="/"><AiOutlinePicture /></a>
                    <a href="/"><BsLink45Deg /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 px-3 mt-30">
              <div className="box">
                <div className="img-box">
                  <img src={require('../../Assets/portfolio-2.jpg')} className='w-100' alt="" />
                </div>
                <div className="dashed-border"></div>
                <div className="text-box">
                  <h5>PROJECT DETAIL</h5>
                  <p>Design Slider</p>
                  <div className="icon-list d-flex justify-content-center">
                    <a href="/"><AiOutlinePicture /></a>
                    <a href="/"><BsLink45Deg /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 px-3 mt-30">
              <div className="box">
                <div className="img-box">
                  <img src={require('../../Assets/portfolio-3.jpg')} className='w-100' alt="" />
                </div>
                <div className="dashed-border"></div>
                <div className="text-box">
                  <h5>YOUTUBE VIDEO</h5>
                  <p>Videos</p>
                  <div className="icon-list d-flex justify-content-center">
                    <a href="/"><FaYoutube /></a>
                    <a href="/"><BsLink45Deg /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 px-3 mt-30">
              <div className="box">
                <div className="img-box">
                  <img src={require('../../Assets/portfolio-4.jpg')} className='w-100' alt="" />
                </div>
                <div className="dashed-border"></div>
                <div className="text-box">
                  <h5>VIMEO VIDEO</h5>
                  <p>Videos</p>
                  <div className="icon-list d-flex justify-content-center">
                    <a href="/"><FaVimeoV /></a>
                    <a href="/"><BsLink45Deg /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 px-3 mt-30">
              <div className="box">
                <div className="img-box">
                  <img src={require('../../Assets/portfolio-5.jpg')} className='w-100' alt="" />
                </div>
                <div className="dashed-border"></div>
                <div className="text-box">
                  <h5>SOUNDCLOUD AUDIO</h5>
                  <p>Music</p>
                  <div className="icon-list d-flex justify-content-center">
                    <a href="/"><IoIosMusicalNotes /></a>
                    <a href="/"><BsLink45Deg /></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4 px-3 mt-30">
              <div className="box">
                <div className="img-box">
                  <img src={require('../../Assets/portfolio-6.jpg')} className='w-100' alt="" />
                </div>
                <div className="dashed-border"></div>
                <div className="text-box">
                  <h5>PROJECT DETAIL</h5>
                  <p>Design</p>
                  <div className="icon-list d-flex justify-content-center">
                    <a href="/"><AiOutlinePicture /></a>
                    <a href="/"><BsLink45Deg /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 px-3 mt-30">
              <div className="box">
                <div className="img-box">
                  <img src={require('../../Assets/portfolio-7.jpg')} className='w-100' alt="" />
                </div>
                <div className="dashed-border"></div>
                <div className="text-box">
                  <h5>IMAGE PROJECT</h5>
                  <p>Design</p>
                  <div className="icon-list d-flex justify-content-center">
                    <a href="/"><AiOutlinePicture /></a>
                    <a href="/"><BsLink45Deg /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 px-3 mt-30">
              <div className="box">
                <div className="img-box">
                  <img src={require('../../Assets/portfolio-8.jpg')} className='w-100' alt="" />
                </div>
                <div className="dashed-border"></div>
                <div className="text-box">
                  <h5>PROJECT DETAIL</h5>
                  <p>Design</p>
                  <div className="icon-list d-flex justify-content-center">
                    <a href="/"><AiOutlinePicture /></a>
                    <a href="/"><BsLink45Deg /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 px-3 mt-30">
              <div className="box">
                <div className="img-box">
                  <img src={require('../../Assets/portfolio-9.jpg')} className='w-100' alt="" />
                </div>
                <div className="dashed-border"></div>
                <div className="text-box">
                  <h5>IMAGE PROJECT</h5>
                  <p>Design Slider</p>
                  <div className="icon-list d-flex justify-content-center">
                    <a href="/"><AiOutlinePicture /></a>
                    <a href="/"><BsLink45Deg /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>
    </>
  )
}

export default Portfolio;

