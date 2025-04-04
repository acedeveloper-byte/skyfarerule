import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faLocationDot, faFacebook, faXTwitter, faInstagram, faLinkedin, faPinterest } from "@fortawesome/free-solid-svg-icons";
import { MdOutlinePhoneInTalk, MdAddLocationAlt } from "react-icons/md";
import Link from "next/link";



const socialLinks = [
    { href: "#", icon: faFacebook },
    { href: "#", icon: faXTwitter },
    { href: "#", icon: faInstagram },
    { href: "#", icon: faLinkedin },
    { href: "#", icon: faPinterest },
];

const footerSections = [
    {
        title: "Quick Links",
        links: [
            { href: "/", text: "Home" },

            { href: "/about-us", text: "About Us" },
            { href: "contact-us", text: "Contact Us" },
            { href: "/blog", text: "Blog" },
            { href: "privacy-policy", text: "Privacy Policy" },
            { href: "termscondition", text: "Terms and Conditions" },
            // { href: "", text: "Pet Policy" },
            // { href: "", text: "Cancellation Policy" },
            // { href: "", text: "Articulous" },
        ],
    },
    {
        title: "Legal",
        links: [
            { href: "contact-us", text: "Contact Us" },
            { href: "privacy-policy", text: "Privacy Policy" },
            { href: "termscondition", text: "Terms and Conditions" },
           
        ],
    },
    {
        title: "Legal Links",
        links: [
            { href: "privacy-policy", text: "Privacy Policy" },
            { href: "terms-conditions", text: "Terms and Conditions" },
            { href: "", text: "Price Match Promise" },
            { href: "", text: "Cookie Policy" },
            { href: "", text: "  Cancellation & Refund" },
            { href: "", text: "    Privacy Policy" },
            { href: "", text: "   Fare Disclosure" },
            { href: "", text: "   Fulfillment Policy" },
            { href: "", text: " Advertiser Disclosure" },
            { href: "", text: " Taxes & Fees" },
            { href: "", text: "   Post Ticketing Service Fees" },
            { href: "", text: " Reservation Desk" },
            { href: "", text: "     Flight Deals" },
            { href: "", text: "      Discounted Cruises" },

        ],
    },


    {
        title: "Top Airlines",
        links: [
            { href: "", text: "United Airlines" },
            { href: "", text: "  Delta Airlines" },
            { href: "", text: " Southwest Airlines" },
            { href: "", text: "   Spirit Airlines" },
            { href: "", text: "  Frontier Airlines" },
            { href: "", text: "   Alaska Airlines  " },
            { href: "", text: "   Allegiant Airlines " },
            { href: "", text: " British Airways  " },
            { href: "", text: "  American Airlines" },
            { href: "", text: " Jetblue Airlines " },



        ],
    },

];

const FlightFooter = () => {
    return (
        <footer className="footer-three footer-six">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="footer-widget">
                                <div className="footer-about">
                                    <div className="mb-4">
                                        <Link href="/" className="d-inline-block mb-1">
                                            <img
                                                src="/logo/logo.webp"
                                                alt="logo"
                                                style={{
                                                    maxWidth: "78%",
                                                    height: "auto",
                                                    background: "#fff",
                                                    padding: "9px",
                                                }}
                                            />
                                        </Link>
                                        <p>
                                            At Skyfarerules, we will help you make a flight booking to your destination within your budget. Book as soon as possible!
                                        </p>

                                        <span className="text-white">Address:</span><p>    <MdAddLocationAlt className="fs-5"/> 7575 KIRBY DR APT 3403, HOUSTON, TX 77030</p>
                                        <span className="text-white">Contact Us:</span><p><Link className="text-decoration-none  " href="tel: +1 (855) 838-5939" style={{color: '#7D828C'}}> <MdOutlinePhoneInTalk className="fs-5"/>  +1 (855) 838-5939</Link></p>

                                    </div>
                                </div>
                                <ul className="social-icon">
                                    {socialLinks.map((link, index) => (
                                        <li key={index}>
                                            <Link href={link.href} className="text-decoration-none">
                                                <FontAwesomeIcon icon={link.icon} className="text-primary" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div>
                                <h5 className="mb-2 text-white">Subscribe to Keep Updated</h5>
                                <div className="footer-input">
                                    <div className="input-group align-items-center justify-content-center">
                                        <span className="input-group-text px-1">
                                            <i className="isax isax-message-favorite5"></i>
                                        </span>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter Email Address"
                                        />
                                        <button type="submit" className="btn btn-primary btn-md">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Sections */}
                    <div className="row">
                        {footerSections.map((section, index) => (
                            <div key={index} className="col-lg-3 col-md-6">
                                <div className="footer-widget">
                                    <h5>{section.title}</h5>
                                    <ul className="footer-menu">
                                        {section.links.map((link, linkIndex) => (
                                            <li key={linkIndex}>
                                                <Link href={link.href} className="text-decoration-none">
                                                    {link.text}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 mx-auto">
                            <p className="text-center">
                                Copyright &copy; 2025. All Rights Reserved,{" "}
                                <Link href="/" className="text-primary fw-medium text-decoration-none text-white">
                                    skyfarerules
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FlightFooter;
