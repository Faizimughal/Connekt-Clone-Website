import React from 'react';
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/HomePage-images/logo.png';
import vector from '../images/HomePage-images/Vector.png';
import dotes from '../images/HomePage-images/dotes.png';
import bluelogo from '../images/HomePage-images/bluelogo.png';
import nextarrow from '../images/HomePage-images/nextarrow.png';
import section2img from '../images/HomePage-images/section2-img.png';
import image1 from '../images/HomePage-images/image1.png';
import img2 from '../images/HomePage-images/img2.png';
import img3 from '../images/HomePage-images/img3.png';
import card1img from '../images/HomePage-images/card1img.png';
import card2img from '../images/HomePage-images/card2img.png';
import card3img from '../images/HomePage-images/card3img.png';
import card4img from '../images/HomePage-images/card4img.png';
import card5img from '../images/HomePage-images/card5img.png';
import leftquote from '../images/HomePage-images/leftquote.png';
import circles from '../images/HomePage-images/circles.png';
import stars from '../images/HomePage-images/stars.png'
import pic1 from '../images/HomePage-images/pic1.png';
import pic2 from '../images/HomePage-images/pic2.png';
import pic3 from '../images/HomePage-images/pic3.png';
import companydata from '../images/HomePage-images/companydata.png'
import dropdown from '../images/HomePage-images/downarrow.png';
import nextarrow1  from '../images/HomePage-images/nextarrow-white.png';
import phone from '../images/HomePage-images/phone.png';
import mail from '../images/HomePage-images/mail.png';
import mape from '../images/HomePage-images/map.png';
import links from '../images/HomePage-images/links.png'
import dog from '../images/HomePage-images/dog.png'
import section7bg from '../images/HomePage-images/section7bg.png'
import section5 from '../images/HomePage-images/section5-background.png'
import '../assets/HomePage.scss';

const HomePage = () => {
 

    return (
       <>
       {/* --------------------------------start of hero section-------------------- */}
        <div className='hero-section'>
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
            <div className='content'>
                <div className='dots-img'>
                 <img src={dotes} alt="" />
                </div>
                <div className='svg-text'>
                    {/* <img src={text} alt="" /> */}
                    <p><b>Empowering <br /> businesses</b> through <br />talent solutions</p>
                </div>
            </div>
            <div className='bottom-content'>
               <div className="button">
                    <a href="" type='button'>learn more</a>
                </div>
                <div>
                    <p>We are a <b>leading staffing solutions company</b>, dedicated to aligning <br /> businesses with top-tier talent to meet their strategic and operational <br /> needs.  With an emphasis on precision, efficiency, and innovation, we  <br />bridge the gap between <b>organizational</b> requirements and <br /><b>exceptional candidates.</b></p>
                </div>
               </div>
        </div>
        {/* -----------------------------end of hero section------------------------ */}

        {/* ---------------------------start of section 2--------------------------- */}
        <div className='section2'>
           <div className='content'>
             <div className='section2-img'>
             <img src={section2img} alt="" />
             <div className='img-text'>
                <div>COMPETITIVE</div> <div>ADVANTAGE</div>
             </div>
             </div>
             <div className='section2-right-side'>
                <div className='blue-logo'><img src={bluelogo} /></div>
                <p>Boasting over <span>15 years of experience</span>, our expertise spans <br /> various industries, enabling us to cater to a diverse <br /> clientele. At Connekt, we take care of all <span>aspects of our <br /> clients’</span> talent management so they can focus on their <br /> business and its growth.</p>
                <div className='learn-more-link'>
             <span className='learnmore'>LEARN MORE</span> <span><a href="/"><img src={nextarrow} /></a></span>
             </div>
             </div>
           </div>
        </div>
        {/* --------------------------------end of section2---------------------- */}

        {/* ----------------------------------start of section3---------------------------- */}
        <div className='section3'>
         <div className="section3-text">
            <div className='text1'>
                <span className='upper-text'>200</span> <span className='lower-text'>Happy workers</span>
            </div>
            <div className='text2'>
                <span className='upper-text'>15+</span> <span className='lower-text'>Years of experience</span>
            </div>
            <div className='text3'>
                <span className='upper-text'>30</span> <span className='lower-text'>Satisfied clients</span>
            </div>
         </div>
        </div>
        {/* ------------------------------------end of section3------------------------------ */}

        {/* ---------------------------------------start of section4------------------------ */}

        <div className='section4' id='ourservices'>
            <div className='heading'><h2><span>OUR</span> <span className='text2'>SERVICES</span></h2></div>
            <div className='images'>
                <div className="img1"><img src={image1} alt="" />
                 <div className="overlay-content">
                    <p>Our process is deeply rooted in understanding your unique business culture and operational needs, enabling us to source candidates who are not just qualified, but perfectly aligned with your company’s ethos and objectives. From rigorous screening to personalized matchmaking, our aim is to transform your talent pipeline into a strategic asset, driving your business towards sustained growth and success.</p>
                    <div><span>LEARN MORE</span> <span><a href="/"><img src={nextarrow1} /></a></span></div>
                 </div>
                </div>
                <div className="img2"><img src={img2} alt="" /></div>
                <div className="img3"><img src={img3} alt="" /></div>
            </div>
        </div>

        {/* ------------------------------------------end of section4------------------------- */}


        {/* ---------------------------------------start of section5------------------------ */}
        <div className='section5 container' id='ourvalues'>
           <div className="content ">
            <div className="heading">
                <h3><span>OUR</span><span className='text2'>VAlues</span></h3>
            </div>
            <div className="para">
           <span> At Connekt,</span> our work is anchored in <span>a foundation of core values</span> that guide our every <br /> decision, interaction, and partnership. We believe that a steadfast commitment to these <br/>principles elevates our service, ensuring unparalleled <span>excellence for our clients</span>.
            </div>
           </div>
           <div className='bottom-content'>
           <div className='cards'>
            <div className="card-content">
            <div className="img"><img src={card1img} alt="" /></div>
            <div className="heading"><h4>Team work</h4></div>
            <div className="para"><p>We believe that the best results are born from <br /> collaborative efforts, where diverse ideas and <br /> perspectives come together to create innovative <br /> solutions. Our culture encourages open <br /> communication, mutual respect, and a unified <br /> pursuit of common goals. We understand that by <br /> working together, we can achieve greater heights <br /> and provide exceptional service to our clients <br /> and candidates.</p></div>
            </div>
           </div>
           <div className='cards'>
           <div className="card-content">
           <div className="img"><img src={card2img} alt="" /></div>
            <div className="heading"><h4>Professionalism</h4></div>
            <div className="para"><p>Professionalism is at the core of everything we do <br /> at Connekt. It's not just about adhering to <br /> industry standards; it's about setting new <br /> benchmarks. Our interactions with clients, <br /> candidates, and each other are marked by a high <br /> degree of respect, ethics, and integrity. We <br /> uphold a professional demeanor in all situations, <br /> ensuring that we always represent the best <br /> interests of our clients and the people we work <br /> with.</p></div>
           </div>
           </div>
           <div className='cards'>
           <div className="card-content">
           <div className="img"><img src={card3img} alt="" /></div>
            <div className="heading"><h4>Expertise</h4></div>
            <div className="para"><p>With over 15 years in the staffing solutions industry, <br /> we bring a wealth of knowledge and insights to <br /> every challenge. Our expertise spans various <br /> sectors, enabling us to navigate the nuances of <br /> different industries effectively. We're committed to <br /> continuous learning and staying abreast of the latest <br /> trends and best practices, ensuring that our clients <br /> benefit from the most informed and expert solutions <br /> available.</p></div>
           </div>
           </div>
           <div className='cards'>
            <div className="card-content">
            <div className="img"><img src={card4img} alt="" /></div>
            <div className="heading"><h4>Reliability</h4></div>
            <div className="para"><p>Reliability is a promise at Connekt. Our clients <br /> and candidates trust us to deliver on our <br /> commitments, and we take that responsibility <br /> seriously. Whether it's meeting deadlines, <br /> providing quality candidates, or ensuring <br /> seamless service delivery, you can count on us to <br /> be consistent, dependable, and unwavering in our <br /> dedication to your success.</p></div>
            </div>
           </div>
           <div className='cards'>
            <div className="card-content">
            <div className="img"><img src={card5img} alt="" /></div>
            <div className="heading"><h4>Transparency</h4></div>
            <div className="para"><p>Transparency is a fundamental principle at Connekt. <br /> We believe in open, honest communication, <br /> providing clear and accurate information at every <br /> step. From our recruitment processes to our pricing <br /> models, we ensure that our clients and candidates <br /> have a clear understanding of our methods and <br /> expectations. This approach builds trust and fosters <br /> long-term, fruitful relationships.</p></div>
            </div>
           </div>
           </div>
        </div>
        {/* ---------------------------------------end of section5------------------------ */}

        {/* ---------------------------------------start of section6------------------------ */}
        <div className='section6'>
            <div className="content container">
                <div className="right-content">
                <div className='image'>
                    <img src={leftquote} alt="" />
                </div>
                <div className="heading">
                    <h2><span className='text1'>CUSTOMERS</span> <span className='text2'> LOVE</span></h2>
                </div>
                <div className="stars-img">
                    <img src={stars} alt="" />
                </div>
                <div className="para">
                    <p>Since partnering with Connekt for our staffing needs, the difference in our team's performance <br /> has been night and day. Their Talent Acquisition service didn’t just fill positions – they found us <br /> individuals who truly resonate with our hotel's ethos. The level of personalization and <br /> understanding of our unique needs has been exceptional</p>
                </div>
                <div className="bottom-heading">
                    <h3><span className="text1">Hotel General Manager -</span> <span className="text2">Luis Blanco</span></h3>
                </div>
                </div>
                <div className="left-content">
                    <div className='circles'>
                        <img src={circles} alt="" />
                    </div>
                </div>
            </div>
        </div>
        {/* ---------------------------------------end of section6------------------------ */}


         {/* ---------------------------------------start of section7------------------------ */}
        <div className='section7' id='ourblog'>
            <div className="top-content">
                <div className="heading">
                    <h2><span className="text1">OUR</span> <span className="text2"> BLOG</span></h2>
                </div>
            </div>
            <div className="bottom-content">
                <div className="firstpart">
                 <div className="img">
                    <img src={pic1} alt="" />
                 </div>
                 <div className="para">
                    <p>How Staffing Agencies Propel <br /> Business Growth</p>
                 </div>
                 <div className="link">
                    <span>READ MORE</span> <span><img src={nextarrow1} alt="" /></span>
                 </div>
                </div>
                <div className="secondpart">
                    <div className="img">
                        <img src={pic2} alt="" />
                    </div>
                    <div className="para">
                        <p>The Role of Staffing Agencies in <br /> Shaping Guest Experiences</p>
                    </div>
                    <div className="link">
                    <span>READ MORE</span> <span><img src={nextarrow1} alt="" /></span>
                    </div>
                </div>
                <div className="thirdpart">
                    <div className="img">
                        <img src={pic3} alt="" />
                    </div>
                    <div className="para">
                        <p>How Comprehensive Talent <br />Management Fuels Long-term Success</p>
                    </div>
                    <div className="link">
                        <span>READ MORE</span> <span><img src={nextarrow1} alt="" /></span>
                    </div>
                </div>
            </div>
            <hr className='bottom-line-nav' />
            <div className='lastlink'><span>LEARN MORE</span> <span><a href="/"><img src={nextarrow1} /></a></span></div>
        </div>
        {/* ---------------------------------------end of section7------------------------ */}


        {/* ---------------------------------------start of section8------------------------ */}
        
        <div className='section8 container' id='getquote'>
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

        {/* ---------------------------------------end of section8------------------------ */}


        {/* ---------------------------------------start of section9------------------------ */}
        <footer>
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
        {/* ---------------------------------------end of section9------------------------ */}
           
       </>
    );
};

export default HomePage;
