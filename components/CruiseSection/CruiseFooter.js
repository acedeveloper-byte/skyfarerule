import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faLocationDot, faFacebook, faXTwitter, faInstagram, faLinkedin, faPinterest } from "@fortawesome/free-solid-svg-icons";


const footerContent = [



    {
        title: 'The Company',
        links: [
            { name: 'About Us', url: '/about-us' },
            { name: 'Contact Us', url: '/contact-us' },
            { name: 'Flight', url: '/' },

        ]
    },
    {
        title: 'Legal',
        links: [
            { name: 'Contact Us', url: 'contact-us' },
            { name: 'Privacy Policy', url: 'privacy-policy' },
            { name: 'Terms and Conditions', url: 'terms-conditions' },

        ]
    },
    {
        title: 'Quick Links',
        links: [
            { name: 'Our Service Fees', url: '' },
            { name: 'Post-Ticketing Fees', url: '' },
            { name: 'Taxes & Fees', url: '' },
        ]
    },
];

const CruiseFooter = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="footer-top">
                        <div className="row">
                            <div className="col-md-4 ">
                                <img src="https://www.skyfarerules.com/wp-content/uploads/2024/07/Skyfarerules-logo-1.png" />
                                <p>
                                    At Skyfarerules, we will help you make a flight booking to your destination within your budget. Book as soon as possible!
                                </p>

                                <span className="fw-medium">Address:</span><p> <FontAwesomeIcon icon={faLocationDot} className="text-red-500" /> 7575 KIRBY DR APT 3403, HOUSTON, TX 77030</p>
                                <span className="fw-medium">Contact Us:</span><p><a className="text-decoration-none  text-dark" href="tel: +1-855-550-0986"> <FontAwesomeIcon icon={faPhoneVolume} className="text-blue-500" /> +1-855-550-0986</a></p>

                            </div>
                            {footerContent.map((section, index) => (
                                <div className="col-md-2">
                                    <div className="footer-widget" key={index}>
                                        <h5>{section.title}</h5>
                                        <ul className="footer-menu">
                                            {section.links.map((link, idx) => (
                                                <li key={idx}>
                                                    <a href={link.url} className="text-decoration-none">{link.name}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                </div>
                            ))}
                            {/* Footer bottom with logo */}

                        </div>
                    </div>


                    {/* Footer bottom with copyright and social icons */}
                    <div className="footer-bottom" style={{marginTop: '2rem'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                                        <p className="fs-14">
                                            Copyright &copy; 2025. All Rights Reserved, <a href="" className="text-primary fw-medium text-decoration-none">SkyfareRules</a>
                                        </p>
                                        <div className="d-flex align-items-center">
                                            <ul className="social-icon">
                                                <li><a href="" className="text-decoration-none"><i className="fa-brands fa-facebook"></i></a></li>
                                                <li><a href="" className="text-decoration-none"><i className="fa-brands fa-x-twitter"></i></a></li>
                                                <li><a href="" className="text-decoration-none"><i className="fa-brands fa-instagram"></i></a></li>
                                                <li><a href="" className="text-decoration-none"><i className="fa-brands fa-linkedin"></i></a></li>
                                                <li><a href="" className="text-decoration-none"><i className="fa-brands fa-pinterest"></i></a></li>
                                            </ul>
                                        </div>
                                        <ul className="card-links">
                                            <li><a href="" className="text-decoration-none"><img src="/img/icons/card-01.svg" alt="img" /></a></li>
                                            <li><a href="" className="text-decoration-none"><img src="/img/icons/card-02.svg" alt="img" /></a></li>
                                            <li><a href="" className="text-decoration-none"><img src="/img/icons/card-03.svg" alt="img" /></a></li>
                                            <li><a href="" className="text-decoration-none"><img src="/img/icons/card-04.svg" alt="img" /></a></li>
                                            <li><a href="" className="text-decoration-none"><img src="/img/icons/card-05.svg" alt="img" /></a></li>
                                            <li><a href="" className="text-decoration-none"><img src="/img/icons/card-06.svg" alt="img" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default CruiseFooter;
