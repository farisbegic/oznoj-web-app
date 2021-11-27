import React from 'react';
import Button from "../partials/Button";
import Image from "next/image";
const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h3 className="hero-heading">Make health your priority</h3>
                <p className="hero-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra accumsan posuere faucibus tincidunt.
                    Mi ultricies tortor a magna nisi. At mi suspendisse ut et, id ornare.</p>
                <Button filled="true"/>
            </div>
            <Image src='/hero.svg' width='687px' height='375px' className="hero-img"/>
        </div>
    );
};

export default Hero;