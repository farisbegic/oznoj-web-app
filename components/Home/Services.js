import React from 'react';
import Image from "next/image";
const Services = () => {
    return (
        <div className="services">
            <div className="services-header">
                <h3 className="services-heading">Our services</h3>
                <p className="services-header-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra accumsan posuere faucibus tincidunt.</p>
            </div>
            <div className="services-cards">
                <div className="service-card">
                    <Image src="/services.svg" height="138px" width="94px" />
                    <h5 className="service-card-heading">CALORIE CALCULATOR</h5>
                    <p className="service-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eget aenean sed odio interdum.
                        Lectus suspendisse arcu augue pellentesque at in mollis lacus eu.</p>
                </div>
                <div className="service-card">
                    <Image src="/services.svg" height="138px" width="94px" />
                    <h5 className="service-card-heading">RECIPES</h5>
                    <p className="service-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eget aenean sed odio interdum.
                        Lectus suspendisse arcu augue pellentesque at in mollis lacus eu.</p>
                </div>
                <div className="service-card">
                    <Image src="/services.svg" height="138px" width="94px" />
                    <h5 className="service-card-heading">WORKOUT PLAN</h5>
                    <p className="service-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eget aenean sed odio interdum.
                        Lectus suspendisse arcu augue pellentesque at in mollis lacus eu.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;