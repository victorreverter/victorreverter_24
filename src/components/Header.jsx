import React, { useState, useEffect } from 'react';
// import '../styles/Header.css';
import { Link } from 'react-router-dom';
import '../styles/global.css';
import '../styles/header.css';

const Header = () => {
  // const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const toggleMobileMenu = () => {
  //   setMobileMenuOpen(!isMobileMenuOpen);
  // };

  const [menuOpen, setMenuOpen] = useState(false);
  const [HTMLTag, setHTMLTag] = useState(document.documentElement);
  const [BodyTag, setBodyTag] = useState(document.body);

  useEffect(() => {
    const menuBtn = document.getElementById('menuContainer');
    const menuOptions = document.getElementById('menuOptions');
    const logoHome = document.getElementById('logoHome');

    const handleMenuClick = () => {
      if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOptions.classList.add('menu-mobile-open');
        logoHome.classList.add('svg-menu-open');
        HTMLTag.style.overflow = 'hidden';
        BodyTag.style.overflow = 'hidden';
        setMenuOpen(true);
      } else {
        menuBtn.classList.remove('open');
        menuOptions.classList.remove('menu-mobile-open');
        logoHome.classList.remove('svg-menu-open');
        HTMLTag.style.overflow = 'initial';
        BodyTag.style.overflow = 'initial';
        setMenuOpen(false);
      }
    };

    menuBtn.addEventListener('click', handleMenuClick);

    return () => {
      // Cleanup: Remove the event listener when the component unmounts
      menuBtn.removeEventListener('click', handleMenuClick);
    };
  }, [menuOpen, HTMLTag, BodyTag]);

  return (
    // <header className="header">
    //   <h1>Your Name</h1>
    //   <nav className={`nav ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
    //     <div className="burger-menu" onClick={toggleMobileMenu}>
    //       <div className="bar"></div>
    //       <div className="bar"></div>
    //       <div className="bar"></div>
    //     </div>
    //     <ul>
    //       <li><Link to="/">Home</Link></li>
    //       <li><Link to="/work">Work</Link></li>
    //       <li><Link to="/projects/:id">Projects</Link></li>
    //       <li><Link to="/about">About</Link></li>
    //     </ul>
    //   </nav>
    //   <nav role="navigation">
    //     <div id="menuToggle">
    //       <input type="checkbox" />
          
    //       <span></span>
    //       <span></span>
    //       <span></span>
          
    //       <ul id="menu">
    //         <li><Link to="/">Home</Link></li>
    //         <li><Link to="/work">Work</Link></li>
    //         <li><Link to="/projects/:id">Projects</Link></li>
    //         <li><Link to="/about">About</Link></li>
    //       </ul>
    //     </div>
    //   </nav>
    //   <h1>Your Name</h1>
    // </header>

    <div class="head-container">
        {/* <a href="index.html" id="logoHome" class="logo-home">
            <svg width="30px" height="30px" viewBox="0 0 53 53" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
                <g transform="matrix(1,0,0,1,-3000.63,-14.6824)">
                    <g transform="matrix(0.444829,0,0,0.444829,2985.94,0)">
                        <g id="Logo" transform="matrix(0.339375,0,0,0.339375,-81.1976,-37.7575)">
                            <g id="Elipse" transform="matrix(1,0,0,1,-13.9553,-10.7969)">
                                <circle cx="525.955" cy="394.797" r="165.55" style="fill:transparent;stroke:rgb(233,69,96);stroke-width:19.87px;"/>
                            </g>
                            <g id="Icon" transform="matrix(0.741509,0,0,0.741509,197.862,122.948)">
                                <path d="M339.366,196.997C339.366,195.492 339.964,194.048 341.029,192.983C342.093,191.918 343.537,191.32 345.043,191.32C354.458,191.32 372.876,191.32 379.011,191.32C380.331,191.32 381.61,191.78 382.627,192.622C396,203.676 490.642,281.907 514.859,301.924C516.21,303.041 516.97,304.72 516.916,306.472C516.863,308.224 516.004,309.853 514.587,310.886C490.294,328.605 398.592,395.489 382.799,407.008C381.339,408.073 380.473,409.77 380.467,411.577C380.429,424.234 380.274,475.117 380.221,492.246C380.212,495.375 377.673,497.906 374.544,497.906L345.043,497.906C343.537,497.906 342.093,497.308 341.029,496.243C339.964,495.178 339.366,493.734 339.366,492.229C339.366,472.246 339.366,405.565 339.366,390.745C339.366,388.903 340.259,387.177 341.761,386.112C355.716,376.226 426.644,325.979 447.96,310.878C449.404,309.855 450.288,308.217 450.352,306.449C450.415,304.68 449.65,302.983 448.283,301.86C435.613,291.448 405.173,266.433 389.757,253.764C388.061,252.37 385.713,252.079 383.728,253.017C381.742,253.955 380.476,255.954 380.476,258.15C380.476,277.652 380.476,315.458 380.476,329.771C380.476,331.277 379.878,332.721 378.813,333.785C377.749,334.85 376.305,335.448 374.799,335.448C366.956,335.448 352.886,335.448 345.043,335.448C343.537,335.448 342.093,334.85 341.029,333.785C339.964,332.721 339.366,331.277 339.366,329.771C339.366,306.696 339.366,220.072 339.366,196.997ZM478.846,461.947C480.856,461.947 482.724,460.908 483.783,459.199C484.842,457.491 484.943,455.356 484.048,453.555C475.961,437.271 458.396,401.903 452.272,389.572C451.023,387.056 451.753,384.007 454.006,382.329C459.299,378.388 468.803,371.313 474.859,366.803C476.242,365.774 478.011,365.411 479.688,365.815C481.364,366.219 482.775,367.346 483.537,368.892C494.376,390.862 530.72,464.532 543.051,489.527C543.939,491.328 543.835,493.459 542.775,495.164C541.715,496.869 539.85,497.906 537.842,497.906C510.642,497.906 432.04,497.906 409.998,497.906C406.79,497.906 404.189,495.305 404.189,492.097C404.189,485.399 404.189,474.454 404.189,467.756C404.189,466.216 404.801,464.738 405.891,463.649C406.98,462.559 408.457,461.947 409.998,461.947C424.311,461.947 461.377,461.947 478.846,461.947Z" style="fill:rgb(233,69,96);"/>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </a> */}

        <h1 id="logoHome" class="logo-home">Your Name</h1>

        <div class="menus-container">
            <div id="menuContainer" class="menu-btn">
                <div class="menu-btn-burguer"></div>
            </div>
        </div>

        <div id="menuOptions" class="menu-options">
          <div class="links-container">
              {/* <a href="work.html" id="work-m-link" class="link-menu">Work</a> */}
              {/* <a href="about.html" id="about-m-link" class="link-menu">About</a> */}
              <li class="link-menu"><Link to="/">Home</Link></li>
              <li class="link-menu"><Link to="/work">Work</Link></li>
              <li class="link-menu"><Link to="/projects/:id">Projects</Link></li>
              <li class="link-menu"><Link to="/about">About</Link></li>
          </div>
          <div class="menu-footer">
              <p>© Victor Reverter Devs 2022</p>
              <div class="menu-footer-container-links">
                  <a href="https://www.instagram.com/victorreverter/">Instagram</a>
                  <a href="https://www.behance.net/VictorReverter">Behance</a>
                  <a href="https://www.linkedin.com/in/victor-manuel-herrera-reverter-a9312348/">LinkedIn</a>
              </div>
          </div>
        </div>
    </div>
  );
}

export default Header;