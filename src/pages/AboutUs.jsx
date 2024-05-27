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
import hand from '../images/AboutUs-images/hand.png'
import nextarrow1 from '../images/HomePage-images/nextarrow.png'
import conneckt from '../images/AboutUs-images/connecktlogo.png'
import child from '../images/AboutUs-images/child.png'
import pic from '../images/AboutUs-images/8pic.png'
import dog1 from '../images/AboutUs-images/dogimage.png'
import dog from '../images/HomePage-images/dog.png'
import companydata from '../images/HomePage-images/companydata.png'
import dropdown from '../images/HomePage-images/downarrow.png'
import nextarrow from '../images/HomePage-images/nextarrow.png'
import phone from '../images/HomePage-images/phone.png';
import mail from '../images/HomePage-images/mail.png';
import mape from '../images/HomePage-images/map.png';
import links from '../images/HomePage-images/links.png'
import '../assets/AboutUs.scss';

const AboutUs = () => {
    return (
        <>

        {/* ----------------------------start of (aboutus)hero-section----------------------- */}
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
         {/* ----------------------------end of (aboutus)hero-section------------------------- */}
         
         {/* -----------------------------start of (aboutus)section1--------------------------- */}
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
         {/* -----------------------------end of (aboutus)section1----------------------------- */}

         {/* -------------------------------start of section2-------------------------------  */}
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
         {/* --------------------------------end of section2----------------------------- */}
         
         {/* --------------------------- ----start of section3-------------------------------  */}
         <div className="aboutus-section3">
         <div className="content">
         <div className="left-content">
          <div className="img">
            <img src={hand} alt="" />
          </div>
          <div className="heading">
            <h2><span className="text1">OUR</span> <span className="text2">FOUNDATION</span></h2>
          </div>
          <div className="para">
            <p>At Connekt, we are driven by more than just business success – we are <br /> committed to making a meaningful impact on the world. We firmly believe that <br /> education is a powerful tool for change, particularly for children who might not <br /> otherwise have access to it. This belief is at the heart of our foundation's <br /> mission.</p>
            <p>To turn this vision into reality, we dedicate a portion of our sales to our <br /> foundation, specifically aimed at supporting the education of children in need <br /> in Mexico. Our initiatives focus on not just providing access to education but <br /> also ensuring quality learning experiences that can pave the way for brighter <br /> futures.</p>
            <p>We see this endeavor as an investment in the future generations. By <br /> empowering children through education, we are contributing to building a <br /> world where every child has the opportunity to learn, grow, and contribute <br /> to society. This is our way of extending the ethos of connection and growth that <br /> Connekt stands for, beyond business boundaries and into communities where <br /> it can make a profound difference.</p>
          </div>
          <div className="btn">
            <input type="button" value="DONATE HERE" />
            <div><span className='text'>LEARN MORE</span> <span><a href="/"><img src={nextarrow1} /></a></span></div>
          </div>
         </div>
         <div className="right-content">
          <div className="rectangle">
          <div className="img">
           <img src={child} alt="" />
          </div>
          </div> 
         </div>
         </div>
          </div>
          {/* ------------------------------end of section3----------------------------- */}

         {/* -------------------------------start of section4-------------------------------  */}
         <div className="aboutus-section4">
          <div className="content">
            <div className="heading">
              <h2><span className="text1">BEHIND</span> <span className="text2"> OUR LOGO</span></h2>
            </div>
          </div>
          <div className="bottom-content">
            <div className="img">
              <img src={conneckt} alt="" />
            </div>
            <div className="cards">
              <div className="item1">
                <h4>TALENT:</h4>
                <p>Represents individuals in our community <br /> seeking an opportunity that will boost their <br /> careers and improve their way of living.</p>
                <div className="circle"></div>
              </div>
              <div className="item2">
                <h4>CONNEKT:</h4>
                <p>Positioned at the core, Connekt is the breach <br /> between talent and businesses which creates <br /> career opportunities by being a meaningful <br /> talent resource to businesses in our community.</p>
                <div className="circle"></div>
              </div>
              <div className="item3">
              <h4>CLIENT:</h4>
              <p>A business that seeks to improve operational <br /> and Human Resources procedures through a <br /> strategic talent solution.</p>
              <div className="circle"></div>
              </div>
            </div>
          </div> 
          </div>
          {/* -------------------------------end of section4------------------------------------------- */}

          {/* -------------------- ----------start of section5---------------------------- */}
          <div className="aboutus-section5">
            <div className="content">
              <div className="heading1">
                <h2>MORE THAN</h2>
              </div>
              <div className="heading2">
                <h2>A BUSSINESS, A TEAM</h2>
              </div>
            </div>
            <div className="bottom-content">
             <div className="img">
              <img src={pic} alt="" />
             </div>
            </div>
          </div>
          {/* -------------------------------end of section5------------------------------------------- */}

          {/* ------------------------------start of section6-------------------------------  */}
          <div className="aboutus-section6">
            <div className="content">
              <div className="left-content">
              <div className="heading1">
                <h2>MEET OUR TEAM <br />MASCOT - <span>CONNEKTIN!</span></h2>
              </div>
              <div className="para">
                <p>Meet Connektin, our spirited team mascot. Connektin isn't just any mascot; he's a bright blue, <br /> cute dog who proudly wears a shirt emblazoned with our logo. But Connektin is much more <br /> than a cheerful presence – he embodies the very spirit and values that drive us.</p>
                <p> As a dog, Connektin symbolizes loyalty – a trait we hold in high esteem at Connekt. His <br /> unwavering dedication reflects our commitment to our clients and candidates. Just as a dog is <br /> known for being a faithful companion, Connektin represents our promise to stand by our <br /> partners through every step of their journey.</p>
                  <p> But there's more to Connektin than meets the eye. His vibrant blue color is not just visually <br /> striking but also signifies trust, stability, and depth – characteristics synonymous with the <br /> Connekt brand. He is approachable, friendly, and always ready to lend a helping paw,<br /> embodying our ethos of accessibility and support. </p>
                  <p>Connektin also represents the dynamic and innovative spirit of our team. He's playful and <br /> energetic, symbolizing the creativity and enthusiasm we bring to solving staffing challenges. <br /> With a wag of his tail and a spark in his eyes, Connektin inspires us to approach each day with <br /> positivity and a can-do attitude.</p>
              </div>
              </div>
              <div className="right-content">
                <div className="img">
                  <img src={dog1} alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* -------------------------------end of section6----------------------------- */}

          {/* ---------------------------- --start of section7--------------------------------- */}

          <div className='aboutus-section7 container' id='getquote'>
           <div className="top-content">
           <div className="heading">
            <h1><span className="text1">GET A</span><span className="text2"> QUOTE</span></h1>
           </div>
           </div>
           <div className="bottom-content">
           <div className="form">
            <form>
                <input type="text"placeholder='Johndoe'  className='name'/>
                <input type="text" placeholder='Company' /> <br />
                <input type="text" placeholder='Title' />
                <input type="email" placeholder='Email' /> <br />
                <input type="number" placeholder='Phone' />
                <input type="dropdown"  placeholder='Service Of Interest'/><img src={dropdown} alt="" /> <br />
                <input type="text" placeholder='Message' />
            </form>
            <div className="submit">
                <span>SUBMIT FORM</span> <span><img src={nextarrow} alt="" /></span>
            </div>
           </div>
           <div className="right-content">
            <div className="img">
                <img src={ companydata} alt="" />
            </div>
           </div>
         </div>
        </div>
        {/* ----------------------------------end of section7------------------------------------- */}

        {/* ---------------------------------start of footer---------------------------------- */}
        <footer className='aboutus-section8'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <hr />
            <div className="contact-info">
                <h3 className='heading'>Contact Info:</h3>
                <div className="mail"><img src={mail} alt="" /><span className='text'>INFO@CONNEKTSOLUTIONS.COM</span></div>
                <div className="phone"><img src={phone} alt="" /><span className='text'>(305)-452-6831</span></div>
            </div>
            <div className="address">
                <h3 className='heading'>Address:</h3>
                  <div className="map"><img src={mape} alt="" /><span className="text">1801 NE 123rd Street <br />Suite 314 <br />North Miami, FL 33181</span></div>
            </div>
            <div className="follow-links">
                <h3 className='heading'>Follow us:</h3>
                <div className="links">
                    <img src={links} alt="" />
                </div>
            </div>
            <div className="dogimg">
                <img src={dog} alt="" />
            </div>
        </footer>
        {/* ----------------------------------end of footer------------------------ */}
        </>
    );
};


export default AboutUs;