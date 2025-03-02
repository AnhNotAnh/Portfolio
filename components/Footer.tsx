'use client'
import { useState } from 'react';
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import ContactModal from './ContactModal';

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <footer className="w-full mb-[100px] pb-10 md:mb-5" id="contact">
        <div className="flex flex-col items-center">
            <h1 className="heading lg:max-w-[45vw]">
            Every <span className="text-purple">great product</span> starts with a <span className="text-purple">great developer</span>.
            </h1>
            <p className="text-white-200 md:mt-10 my-5 text-center">
            Let&apos;s talk about how I can help.
            </p>
            <div onClick={() => setIsModalOpen(true)}>
            <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position="right"
            />
            </div>
        </div>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
            <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2025 Duy Quoc Anh Nguyen
            </p>
            <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
                <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 md:mt-0 mt-4"
                >
                <a href={info.profile}>    
                    <img src={info.img} alt="icons" width={20} height={20} />
                </a>
                </div>
            ))}
            </div>
        </div>
        <ContactModal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
        />
        </footer>
    );
};

export default Footer;