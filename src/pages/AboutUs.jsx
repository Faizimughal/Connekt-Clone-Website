import React from 'react';
import logo from '../images/HomePage-images/logo.png';
import vector from '../images/HomePage-images/Vector.png';
import img1 from '../images/AboutUs-images/section1(img1).png'
import img2 from '../images/AboutUs-images/section1(img2).png'
import targeting from '../images/AboutUs-images/targeting.png'
import eye from '../images/AboutUs-images/eye.png'
import item1 from '../images/AboutUs-images/section2(img1).png'
import item2 from '../images/AboutUs-images/section2(img2).png'
import item3 from '../images/AboutUs-images/section2(img3).png'
import item4 from '../images/AboutUs-images/section2(img4).png'
import '../assets/AboutUs.scss';

const AboutUs = () => {
    return (
        <>

        {/* ----------------------------------start of (aboutus)hero-section----------------------- */}
         <div className="aboutus-herosection">
         <div className='navbar'>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='links'>
                <ul>
                    <li>
                        <a href="/AboutUs">About</a>
                    </li>
                    <li className='dropdown'>
                        <a href="#ourservices">Services</a>
                        <ul className="dropdown-content">
                            <img src={vector} alt="vector" className="vector-img" />
                            <li><a href="#"><b>TALENT</b> ACQUISITION</a></li>
                            <li><a href="#"><b>TALENT</b> MANAGEMENT</a></li>
                            <li><a href="#"><b>JANITORIAL</b> SERVICES</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#ourvalues">Added Value</a>
                    </li>
                    <li>
                        <a href="#ourblog">Blog</a>
                    </li>
                    <li>
                        <a href="">Foundation</a>
                    </li>
                    <li>
                        <a href="">Join Our Team</a>
                    </li>
                    <li>
                        <a href="#getquote">GET A QUOTE</a>
                    </li>
                </ul>
            </div>
            <hr className='bottom-line-nav' />
        </div>
        <div className="herosection-content">
          <div className="aboutus-heading">
            <h1><span className='text1'>ABOUT</span><span className="text2">US</span></h1>
          </div>
          <div className="aboutus-para">
          <span className='text1'>At Connekt,</span> we combine the efficiency and reach of the industry's top players with an <span className='text2'>unparalleled personal <br /> touch.</span> We like to understand the unique desires of our clients. We don't just connect talent to businesses; we <br /> meticulously curate matches that resonate with <span className='text2'>organizational cultures and individual aspirations.</span> In a <br /> marketplace where many offer partnerships, Connekt promises meaningful, tailored alignments.
          </div>
        </div>
         </div>
         {/* ----------------------------------end of (aboutus)hero-section------------------------- */}
         
         {/* ----------------------------------start of (aboutus)section1--------------------------- */}
         <div className="aboutus-section1">
           <div className="content">
           <div className="heading">
            <h1><span className="text1">OUR Mission & </span>  <span className="text2">vision</span></h1>
           </div>
           </div>
           <div className="bottom-content">
            <div className="img1">
              <img src={img1} alt="" />
              <div className="overlayimg1">
                <div className="img">
                  <img src={targeting} alt="" />
                </div>
                <div className="heading">
                  <h2>MISSION</h2>
                </div>
                <div className="para">
                  <p>Provide comprehensive talent management solutions <br /> to businesses in various industries so they can focus <br /> on their core business and growth.</p>
                </div>
              </div>
            </div>
            <div className="img2">
              <img src={img2} alt="" />
              <div className="overlayimg2">
                <div className="img">
                  <img src={eye} alt="" />
                </div>
                <div className="heading">
                  <h2>VISION</h2>
                </div>
                <div className="para">
                  <p>To become a recognized organization that helps people in <br /> our community to find an opportunity to boost their careers <br /> as well as being an important resource to businesses by <br /> providing talent solutions that contribute to their growth <br /> and success.</p>
                </div>
              </div>
            </div>
           </div>
         </div>
         {/* ----------------------------------end of (aboutus)section1----------------------------- */}

         {/* ---------------------------------------start of section2-------------------------------  */}
         <div className="aboutus-section2">
          <div className="top-content">
            <div className="heading">
              <h2><span className="text1">We work</span> <span className="text2"> with</span></h2>
            </div>
          </div>
          <div className="bottom-content">
            <div className="item1">
              <div className="img">
                <img src={item1} alt="" />
              </div>
              <div className="heading">
                <h4>COMMERCIAL BUILDINGS</h4>
              </div>
            </div>
            <div className="item2">
              <div className="img">
                <img src={item2} alt="" />
              </div>
              <div className="heading">
                <h4>RESTAURANTS</h4>
              </div>
            </div>
            <div className="item3">
              <div className="img">
                <img src={item3} alt="" />
              </div>
              <div className="heading">
                <h4>HOTELS</h4>
              </div>
            </div>
            <div className="item4">
              <div className="img">
                <img src={item4} alt="" />
              </div>
              <div className="heading">
                <h4>WAREHOUSE FACILITIES</h4>
              </div>
            </div>
          </div>
         </div>
         {/* --------------------------------------------end of section2----------------------------- */}

        </>
    );
};

export default AboutUs;