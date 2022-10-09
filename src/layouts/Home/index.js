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
              <h2 className="h2-subtitle wow fadeInUp animated" data-wow-delay=".4s">Welcome To Online Coaching</h2>
              <h1 className="h1-title wow fadeInUp animated" data-wow-delay=".5s">Get Class From Top <span>Instructor <img src="assets2/images/banner-line.png" alt="line" /></span></h1>
              <p className="wow fadeInUp animated" data-wow-delay=".6s">Integer in magna in est ultrices bibendum eget enim et dui imperdiet faucibus. Fusce eu tristique felis.</p>
              <div className="banner-btn wow fadeInUp animated" data-wow-delay=".7s">
                <a href="about-us.html" className="sec-btn">Explore Courses</a>
                <a href="contact-us.html" className="sec-btn btn-2">Contact Us</a>
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
                  <h3 className="h3-title">Congratulations</h3>
                  <p>Your admission completed</p>
                </div>
              </div>
              <div className="aliment-2">
                <div className="aliment-icon-purple">
                  <img src="assets2/images/banner-aliment-icon-2.png" alt="icon" />
                </div>
                <div className="aliment-content">
                  <h3 className="h3-title">User Experience Class</h3>
                  <p>Tomorrow is our</p>
                </div>
              </div>
              <div className="aliment-3">
                <div className="aliment-icon-green">
                  <img src="assets2/images/banner-aliment-icon-3.png" alt="icon" />
                </div>
                <div className="aliment-content">
                  <h3 className="h3-title">578k</h3>
                  <p>Assisted Student</p>
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
              <h2 className="h2-subtitle">Course Category</h2>
              <h2 className="h2-title">Explore Popular Courses</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="course-category-box">
              <div className="course-category-icon">
                <img className="dis-yes" src="assets2/images/course-category-icon-1.png" alt="icon" />
                <img className="dis-no" src="assets2/images/course-category-icon-1-w.png" alt="icon" />
              </div>
              <div className="course-category-content">
                <a href="courses.html"><h3 className="h3-title">Learn Data Science</h3></a>
                <p>Data is Everything</p>
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
                <a href="courses.html"><h3 className="h3-title">Business Strategy</h3></a>
                <p>Improve your business</p>
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
                <a href="courses.html"><h3 className="h3-title">Learn Art &amp; Design</h3></a>
                <p>Fun &amp; Challenging</p>
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
                <a href="courses.html"><h3 className="h3-title">Learn Lifestyle</h3></a>
                <p>New Skills, New You</p>
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
                <a href="courses.html"><h3 className="h3-title">Learn Marketing</h3></a>
                <p>Improve your business</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="course-category-box">
              <div className="course-category-icon">
                <img className="dis-yes" src="assets2/images/course-category-icon-6.png" alt="icon" />
                <img className="dis-no" src="assets2/images/course-category-icon-6-w.png" alt="icon" />
              </div>
              <div className="course-category-content">
                <a href="courses.html"><h3 className="h3-title">Learn Finance</h3></a>
                <p>Fun &amp; Challenging</p>
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
                  <h3 className="h3-title">Congratulations</h3>
                  <p>Your admission completed</p>
                </div>
              </div>
              <div className="aliment-3">
                <div className="aliment-icon-green">
                  <img src="assets2/images/banner-aliment-icon-3.png" alt="icon" />
                </div>
                <div className="aliment-content">
                  <h3 className="h3-title">578k</h3>
                  <p>Assisted Student</p>
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
                <h2 className="h2-title">We Have Best Online Education</h2>
              </div>
              <p>Morbi porttitor ligula id varius consectetur. Integer ipsum justo, congue sit amet massa vel, porttitor semper magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
              <ul>
                <li><i className="fa fa-check-circle" aria-hidden="true" /><p>Suspendisse nunc massa, pellentesque eu nibh eget.</p></li>
                <li><i className="fa fa-check-circle" aria-hidden="true" /><p>Suspendisse nunc massa, pellentesque eu nibh eget.</p></li>
                <li><i className="fa fa-check-circle" aria-hidden="true" /><p>Suspendisse nunc massa, pellentesque eu nibh eget.</p></li>
              </ul>
              <a href="about-us.html" className="sec-btn">Explore More</a>
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
                  <a href="https://www.youtube.com/watch?v=-lQ1dNicM3k" className="event-play-icon popup-youtube" title="Play Video"><span><i className="fa fa-play" aria-hidden="true" /></span></a>
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
                    <p>30</p>
                  </div>
                  <div className="event-day">
                    <p>Dec, 2021</p>
                  </div>
                </div>
                <div className="event-text-line" />
                <div className="event-content-text">
                  <div className="event-time-place">
                    <div className="event-time">
                      <p>10:30am To 2:30pm</p>
                    </div>
                    <div className="event-text-line" />
                    <div className="event-place">
                      <p>Poland</p>
                    </div>
                  </div>
                  <a href="event-detaill.html"><h3 className="h3-title">Business creativity workshops</h3></a>
                </div>
              </div>
              <div className="event-box">
                <div className="event-date-day">
                  <div className="event-date">
                    <p>15</p>
                  </div>
                  <div className="event-day">
                    <p>Jan, 2022</p>
                  </div>
                </div>
                <div className="event-text-line" />
                <div className="event-content-text">
                  <div className="event-time-place">
                    <div className="event-time">
                      <p>10:30am To 2:30pm</p>
                    </div>
                    <div className="event-text-line" />
                    <div className="event-place">
                      <p>Poland</p>
                    </div>
                  </div>
                  <a href="event-detaill.html"><h3 className="h3-title">Street Performance: Call for Art.</h3></a>
                </div>
              </div>
              <div className="event-box mb-0">
                <div className="event-date-day">
                  <div className="event-date">
                    <p>28</p>
                  </div>
                  <div className="event-day">
                    <p>Fab, 2022</p>
                  </div>
                </div>
                <div className="event-text-line" />
                <div className="event-content-text">
                  <div className="event-time-place">
                    <div className="event-time">
                      <p>10:30am To 2:30pm</p>
                    </div>
                    <div className="event-text-line" />
                    <div className="event-place">
                      <p>Poland</p>
                    </div>
                  </div>
                  <a href="event-detaill.html"><h3 className="h3-title">Digital transformation conference</h3></a>
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
                <h2 className="h2-title">See What Our Mission Are</h2>
              </div>
              <div className="core-features-box">
                <div className="core-feature-icon feature-blue">
                  <img src="assets2/images/feature-icon-1.png" alt="icon" />
                </div>
                <div className="core-feature-text">
                  <h3 className="h3-title">Student Life</h3>
                  <p>Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula consectetur dignissim dictum.</p>
                </div>
              </div>
              <div className="core-features-box">
                <div className="core-feature-icon feature-pink">
                  <img src="assets2/images/feature-icon-2.png" alt="icon" />
                </div>
                <div className="core-feature-text">
                  <h3 className="h3-title">Best Online Class</h3>
                  <p>Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula consectetur dignissim dictum.</p>
                </div>
              </div>
              <div className="core-features-box mb-0">
                <div className="core-feature-icon feature-purple">
                  <img src="assets2/images/feature-icon-3.png" alt="icon" />
                </div>
                <div className="core-feature-text">
                  <h3 className="h3-title">24x7 Program</h3>
                  <p>Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula consectetur dignissim dictum.</p>
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
              <h2 className="h2-title">What Our Client Says About Us</h2>
              <p>Proin et lacus eu odio tempor porttitor id vel augue. Vivamus volutpat vehicula sem, et imperdiet enim tempor id. Phasellus lobortis efficitur nisl eget vehicula. Donec viverra blandit nunc, nec tempor ligula ullamcorper venenatis.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="testimonial-slider">
              <div className="testimonial-box">
                <p>"Proin feugiat tortor non neque eleifend, at fermentum est elementum. Ut mollis leo odio vulputate rutrum. Nunc sagittis sit amet ligula ut eleifend. Mauris consequat mauris sit amet turpis commodo fermentum. Quisque consequat tortor ut nisl finibus".</p>
                <div className="testimonial-client">
                  <div className="testimonial-client-img-box">
                    <div className="testimonial-img">
                      <img src="assets2/images/client-1.jpg" alt="client" />
                    </div>
                  </div>
                  <div className="testimonial-client-name">
                    <h3 className="h3-title">Christine Rose</h3>
                    <span>Customer</span>
                  </div>
                </div>
                <div className="testimonial-quote">
                  <img src="assets2/images/quote.png" alt="quote" />
                </div>
              </div>
              <div className="testimonial-box">
                <p>"Proin feugiat tortor non neque eleifend, at fermentum est elementum. Ut mollis leo odio vulputate rutrum. Nunc sagittis sit amet ligula ut eleifend. Mauris consequat mauris sit amet turpis commodo fermentum. Quisque consequat tortor ut nisl finibus".</p>
                <div className="testimonial-client">
                  <div className="testimonial-client-img-box">
                    <div className="testimonial-img">
                      <img src="assets2/images/client-2.jpg" alt="client" />
                    </div>
                  </div>
                  <div className="testimonial-client-name">
                    <h3 className="h3-title">Christine Rose</h3>
                    <span>Customer</span>
                  </div>
                </div>
                <div className="testimonial-quote">
                  <img src="assets2/images/quote.png" alt="quote" />
                </div>
              </div>
              <div className="testimonial-box">
                <p>"Proin feugiat tortor non neque eleifend, at fermentum est elementum. Ut mollis leo odio vulputate rutrum. Nunc sagittis sit amet ligula ut eleifend. Mauris consequat mauris sit amet turpis commodo fermentum. Quisque consequat tortor ut nisl finibus".</p>
                <div className="testimonial-client">
                  <div className="testimonial-client-img-box">
                    <div className="testimonial-img">
                      <img src="assets2/images/client-3.jpg" alt="client" />
                    </div>
                  </div>
                  <div className="testimonial-client-name">
                    <h3 className="h3-title">Christine Rose</h3>
                    <span>Customer</span>
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




    {/* Jquery JS Link */}
    {/* Bootstrap JS Link */}
    {/* Custom JS Link */}
    {/* Slick Slider JS Link */}
    {/* Wow Animation JS */}
    {/*Banner Bg Animation JS*/}
    {/*Magnific Popup JS*/}
  </div>
    </MDBox>
    <Footer />
  </DashboardLayout>
  );
}

export default Home;
