import { useState } from "react";
import MDBox from "../../components1/MDBox";
import MDTypography from "../../components1/MDTypography";

import MDSnackbar from "../../components1/MDSnackbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Footer from "../../examples/Footer";

function Home() {
  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openInfoSB = () => setInfoSB(true);
  const closeInfoSB = () => setInfoSB(false);
  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);

  const alertContent = (name) => (
    <MDTypography variant="body2" color="white">
      A simple {name} alert with{" "}
      <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
        an example link
      </MDTypography>
      . Give it a click if you like.
    </MDTypography>
  );

  const renderSuccessSB = (
    <MDSnackbar
      color="success"
      icon="check"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );

  const renderInfoSB = (
    <MDSnackbar
      icon="notifications"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={infoSB}
      onClose={closeInfoSB}
      close={closeInfoSB}
    />
  );

  const renderWarningSB = (
    <MDSnackbar
      color="warning"
      icon="star"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={warningSB}
      onClose={closeWarningSB}
      close={closeWarningSB}
      bgWhite
    />
  );

  const renderErrorSB = (
    <MDSnackbar
      color="error"
      icon="warning"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
      bgWhite
    />
  );

  return (
    <DashboardLayout>
    <DashboardNavbar />
    <MDBox py={3}>
    <div>
    {/* Loader Start 
    <div className="loader-box">
      <div className="loader">
        <div className="loader__figure" />
        <p className="loader__label">Loading...</p>
      </div>
    </div>
    */}
    {/* Loader End */}

    {/*Banner Start*/}
  <section style={{marginTop:-150}} className="main-banner">
      <span className="shape-1 animate-this">
        <img src="assets2/images/shape-1.png" alt="shape" />
      </span>
      <span className="shape-2 animate-this">
        <img src="assets2/images/shape-2.png" alt="shape" />
      </span>
      <span className="shape-3 animate-this">
        <img src="assets2/images/shape-3.png" alt="shape" />
      </span>
      <span className="shape-4 animate-this">
        <img src="assets2/images/shape-4.png" alt="shape" />
      </span>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner-content">
              <h2 className="h2-subtitle wow fadeInUp animated" data-wow-delay=".4s">Welcome To Education-JAB (E-JAB)</h2>
              <MDTypography variant="h6" fontWeight="medium" className="h1-title wow fadeInUp animated" data-wow-delay=".5s">
              <span style={{fontSize:28}}><i>Get Every Materials From The Top E-Web</i></span>
            </MDTypography>

              <div className="banner-btn wow fadeInUp animated" data-wow-delay=".7s">
                <a href="#" className="sec-btn">About Us</a>
                <a href="#" className="sec-btn btn-2">Contact Us</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-img-box wow fadeInRight animated" data-wow-delay=".4s">
              <div className="aliment-1">
                <div className="aliment-icon-red">
                  <img src="assets2/images/banner-aliment-icon-1.png" alt="icon" />
                </div>
                <div className="aliment-content">
                  <h3 className="h3-title">Past Papers</h3>
                  <p>With Solutions within!!!</p>
                </div>
              </div>
              <div className="aliment-2">
                <div className="aliment-icon-purple">
                  <img src="assets2/images/banner-aliment-icon-2.png" alt="icon" />
                </div>
                <div className="aliment-content">
                  <h3 className="h3-title">Final Year Projects</h3>
                  <p>With Solutions within!!!</p>
                </div>
              </div>
              <div className="aliment-4">
                <img src="assets2/images/banner-aliment-icon-4.png" alt="icon" />
              </div>
              <div className="banner-img">
                <img src="assets2/images/banner-img.png" alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Banner End*/}
    {/*Course Category Start*/}
    <section className="main-course-category">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="course-category-title">
              <h2 className="h2-subtitle">Engineering Categories</h2>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="course-category-box">
              <div className="course-category-icon">
                <img className="dis-yes" src="assets2/images/course-category-icon-1.png" alt="icon" />
                <img className="dis-no" src="assets2/images/course-category-icon-1-w.png" alt="icon" />
              </div>
              <div className="course-category-content">
                <a href="#"><h3 className="h3-title">Civil & Construction</h3></a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="course-category-box">
              <div className="course-category-icon">
                <img className="dis-yes" src="assets2/images/course-category-icon-2.png" alt="icon" />
                <img className="dis-no" src="assets2/images/course-category-icon-2-w.png" alt="icon" />
              </div>
              <div className="course-category-content">
                <a href="#"><h3 className="h3-title">Electrical & Information</h3></a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="course-category-box">
              <div className="course-category-icon">
                <img className="dis-yes" src="assets2/images/course-category-icon-3.png" alt="icon" />
                <img className="dis-no" src="assets2/images/course-category-icon-3-w.png" alt="icon" />
              </div>
              <div className="course-category-content">
                <a href="#"><h3 className="h3-title">Geospatial & Space Technology</h3></a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="course-category-box">
              <div className="course-category-icon">
                <img className="dis-yes" src="assets2/images/course-category-icon-4.png" alt="icon" />
                <img className="dis-no" src="assets2/images/course-category-icon-4-w.png" alt="icon" />
              </div>
              <div className="course-category-content">
                <a href="#"><h3 className="h3-title">Mechanical & Manufacturing</h3></a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="course-category-box">
              <div className="course-category-icon">
                <img className="dis-yes" src="assets2/images/course-category-icon-5.png" alt="icon" />
                <img className="dis-no" src="assets2/images/course-category-icon-5-w.png" alt="icon" />
              </div>
              <div className="course-category-content">
                <a href="#"><h3 className="h3-title">Environmental & Biosystems</h3></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Course Category End*/}
    {/*About Us Start*/}
    <section className="main-about-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img-box wow fadeInLeft animated" data-wow-delay=".4s">
            <div className="aliment-1">
            <div className="aliment-icon-red">
              <img src="assets2/images/banner-aliment-icon-1.png" alt="icon" />
            </div>
            <div className="aliment-content">
              <h3 className="h3-title">Past Papers</h3>
              <p>With Solutions within!!!</p>
            </div>
          </div>
              <div className="aliment-2">
                <div className="aliment-icon-purple">
                  <img src="assets2/images/banner-aliment-icon-2.png" alt="icon" />
                </div>
                <div className="aliment-content">
                  <h3 className="h3-title">Final Year Projects</h3>
                  <p>With Solutions within!!!</p>
                </div>
              </div>
              <div className="about-img">
                <img src="assets2/images/about-img.png" alt="about us" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-us-content">
              <div className="about-us-title">
                <h2 className="h2-subtitle">About Us</h2>
                <h2 className="h2-title">We Have E-Pastpapers and E-Projects</h2>
              </div>
              <p>We provide best online past papers across all engineering departments plus online final year projects with solutions.</p>
              <ul>
                <li><i className="fa fa-check-circle" aria-hidden="true" /><p>Civil & Construction Engineering.</p></li>
                <li><i className="fa fa-check-circle" aria-hidden="true" /><p>Electrical & Information Engineering.</p></li>
                <li><i className="fa fa-check-circle" aria-hidden="true" /><p>Geospatial & Space Technology Engineering.</p></li>
                <li><i className="fa fa-check-circle" aria-hidden="true" /><p>Mechanical & Manufacturing Engineering.</p></li>
                <li><i className="fa fa-check-circle" aria-hidden="true" /><p>Environmental & Biosystems Engineering.</p></li>
              </ul>
              <a href="#" className="sec-btn">Explore More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*About Us End*/}
    {/*Partner Logo Start*/}
    <div className="main-partner-logo">
      <div className="container">
        <div className="row partner-bg partner-slider">
          <div className="col-lg-3">
            <div className="partners-box">
            </div>
          </div>
          <div className="col-lg-3">
            <div className="partners-box">
            </div>
          </div>
          <div className="col-lg-3">
            <div className="partners-box">
            </div>
          </div>
          <div className="col-lg-3">
            <div className="partners-box">
            </div>
          </div>
          <div className="col-lg-3">
            <div className="partners-box">
            </div>
          </div>
          <div className="col-lg-3">
            <div className="partners-box">
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*Partner Logo End*/}

    {/*Event Start*/}
    <section className="main-event">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-5">
            <div className="event-img-box wow fadeInLeft animated" data-wow-delay=".4s">
              <div className="event-img">
                <img src="assets2/images/event-img.jpg" alt="event" />
              </div>
              <div className="event-video-play-box">
                <div className="event-play-btn">
                  <a href="#" className="event-play-icon popup-youtube" title="Play Video"><span><i className="fa fa-play" aria-hidden="true" /></span></a>
                </div>
                <div className="event-video-content">
                  <h3 className="h3-title">Watch Us !</h3>
                </div>  
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7">
            <div className="event-content-box">
              <div className="event-title">
                <h2 className="h2-subtitle">Our Events</h2>
                <h2 className="h2-title">Join Our Upcoming Events</h2>
              </div>
              <div className="event-box">
                <div className="event-date-day">
                  <div className="event-date">
                    <p>No</p>
                  </div>
                  <div className="event-day">
                    <p>Event</p>
                  </div>
                </div>
                <div className="event-text-line" />
                <div className="event-content-text">
                  <div className="event-time-place">
                    <div className="event-time">
                      <p>--:-- To --:--</p>
                    </div>
                    <div className="event-text-line" />
                    <div className="event-place">
                      <p>Kenya</p>
                    </div>
                  </div>
                  <a href="#"><h3 className="h3-title">Engineering workshops</h3></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Event End*/}

    {/*Core Features Start*/}
    <section className="main-core-features">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="core-features-content">
              <div className="core-features-title">
                <h2 className="h2-subtitle">Core Features</h2>
                <h2 className="h2-title">See What Our Missions Are</h2>
              </div>
              <div className="core-features-box">
                <div className="core-feature-icon feature-blue">
                  <img src="assets2/images/feature-icon-1.png" alt="icon" />
                </div>
                <div className="core-feature-text">
                  <h3 className="h3-title">Student Life</h3>
                  <p>Providing platform of enteracting with other students.</p>
                </div>
              </div>
              <div className="core-features-box">
                <div className="core-feature-icon feature-pink">
                  <img src="assets2/images/feature-icon-2.png" alt="icon" />
                </div>
                <div className="core-feature-text">
                  <h3 className="h3-title">Available Online Past-papers & E-Projects</h3>
                  <p>Providing platform where engineering students can access almost all the past papers & projects across all the engineering departments.</p>
                </div>
              </div>
              <div className="core-features-box mb-0">
                <div className="core-feature-icon feature-purple">
                  <img src="assets2/images/feature-icon-3.png" alt="icon" />
                </div>
                <div className="core-feature-text">
                  <h3 className="h3-title">Available Solutions to Online Past-papers & E-Projects</h3>
                  <p>Providing platform where engineering students can access solutions to almost all the past papers & projects across all the engineering departments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="core-features-img" style={{backgroundImage: 'url(assets2/images/coure-features-img.jpg)'}} />
    </section>
    {/*Core Features End*/}

    {/*Testimonial Start*/}
    <section className="main-testimonial">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="testimonial-title">
              <h2 className="h2-subtitle">Testimonial</h2>
              <h2 className="h2-title">What Some Studnts Says About Us</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="testimonial-slider">
              <div className="testimonial-box">
              <p>"I've obtained all the past papers with ease access, Thank you!"</p>
                <div className="testimonial-client">
                  <div className="testimonial-client-img-box">
                    <div className="testimonial-img">
                      <img style={{height:50, borderRadius:50/2}} src="https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236__340.png" alt="client" />
                    </div>
                  </div>
                  <div className="testimonial-client-name">
                    <h3 className="h3-title">Jessy Bandya</h3>
                    <span>Student</span>
                  </div>
                </div>
                <div className="testimonial-quote">
                  <img src="assets2/images/quote.png" alt="quote" />
                </div>
              </div>
              <div className="testimonial-box">
              <p>"I've obtained all the past papers with ease access, Thank you!"</p>
                <div className="testimonial-client">
                  <div className="testimonial-client-img-box">
                    <div className="testimonial-img">
                    <img style={{height:50, borderRadius:50/2}} src="https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236__340.png" alt="client" />
                    </div>
                  </div>
                  <div className="testimonial-client-name">
                  <h3 className="h3-title">Arnold Sanga</h3>
                  <span>Student</span>
                  </div>
                </div>
                <div className="testimonial-quote">
                  <img src="assets2/images/quote.png" alt="quote" />
                </div>
              </div>
              <div className="testimonial-box">
              <p>"I've obtained all the past papers with ease access, Thank you!"</p>
                <div className="testimonial-client">
                  <div className="testimonial-client-img-box">
                    <div className="testimonial-img">
                    <img style={{height:50, borderRadius:50/2}} src="https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236__340.png" alt="client" />
                    </div>
                  </div>
                  <div className="testimonial-client-name">
                  <h3 className="h3-title">Odero Phelix</h3>
                  <span>Student</span>
                  </div>
                </div>
                <div className="testimonial-quote">
                  <img src="assets2/images/quote.png" alt="quote" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Testimonial End*/}

  </div>
    </MDBox>
    <Footer />
  </DashboardLayout>
  );
}

export default Home;
