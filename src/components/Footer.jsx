import React from "react";

import whats from "../assets/whatsapp.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram (2).png";
import facebook from "../assets/facebook (1).png";

function Footer() {
    const socialLinks = [
        { src: whats, alt: "WhatsApp" },
        { src: twitter, alt: "Twitter" },
        { src: instagram, alt: "Instagram" },
        { src: facebook, alt: "Facebook" },
    ];

    const accountLinks = [
        { name: "Privacy", href: "#" },
        { name: "Terms of condition", href: "#" },
        { name: "Manage", href: "#" },
        { name: "Cart", href: "#" },
        { name: "WishList", href: "#" },
    ];

    const helpLinks = [
        { name: "New York 104, Avenue Juan Pablo Duarte", href: "#" },
        { name: "809-xxx-xxx", href: "#" },
        { name: "Mshop@support.com", href: "#" },
        { name: "Working always 24/7", href: "#" },
    ];

    return (
        <div className="w-full h-72 mt-8 bg-[#292828] text-white shadow-[inset_0_6px_10px_rgba(0,0,0,0.5)] pt-8">
            <div className="flex justify-around h-full">
                <div className="Left flex flex-col">
                    <h3 className="text-xl font-semibold">Join Our NewsLetter</h3>
                    <input
                        type="text"
                        placeholder="Your email"
                        className="p-3 pr-15 my-2 border-2 rounded-md border-[#303030] shadow-xl outline-0 focus:bg-white focus:text-black ease-in-out duration-700"
                    />
                    <h3 className="text-xl font-semibold">Our Social Media</h3>
                    <div className="flex gap-3">
                        {socialLinks.map((social, index) => (
                            <img
                                key={index}
                                src={social.src}
                                alt={social.alt}
                                className="size-6 hover:scale-110 ease-in-out duration-300 hover:cursor-pointer"
                            />
                        ))}
                    </div>
                </div>

                <div className="Middle flex flex-col">
                    <h3 className="text-xl font-semibold">My Account</h3>
                    <div className="flex flex-col gap-2">
                        {accountLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="border-b-2 border-transparent ease-in-out duration-300 w-fit hover:border-white"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="Right flex flex-col pl-4">
                    <h3 className="text-xl font-semibold">Let us help you</h3>
                    {helpLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="border-b-2 border-transparent ease-in-out duration-300 w-fit hover:border-white"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>

            {/* Línea de separación y copyright */}
            <div className="border-t border-[#303030] bg-[#292828] py-2 text-center text-sm">
                <p>© 2025 NeoDev. Todos los derechos reservados.</p>
            </div>
        </div>
    );
}

export default Footer;
