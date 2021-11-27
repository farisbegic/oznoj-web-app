import React from 'react';
import Image from "next/image";
import Link from 'next/link'
const Products = () => {
    return (
        <div className="products">
             <div className="product-card">
                 <Image src="/vitamin-d.png" width="192px" height="171px"/>
                 <h5 className="product-card-heading">VITAMIN D</h5>
                 <p className="product-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eget aenean sed odio interdum.
                     Lectus suspendisse arcu augue pellentesque at in mollis lacus eu.</p>
                 <Link href="/"><a className="supplement-link">Read More</a></Link>
             </div>
            <div className="product-card">
                <Image src="/vitamin-d.png" width="192px" height="171px"/>
                <h5 className="product-card-heading">VITAMIN D</h5>
                <p className="product-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eget aenean sed odio interdum.
                    Lectus suspendisse arcu augue pellentesque at in mollis lacus eu.</p>
                <Link href="/"><a className="supplement-link">Read More</a></Link>
            </div>
            <div className="product-card">
                <Image src="/vitamin-d.png" width="192px" height="171px"/>
                <h5 className="product-card-heading">VITAMIN D</h5>
                <p className="product-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eget aenean sed odio interdum.
                    Lectus suspendisse arcu augue pellentesque at in mollis lacus eu.</p>
                <Link href="/"><a className="supplement-link">Read More</a></Link>
            </div>
            <div className="product-card">
                <Image src="/vitamin-d.png" width="192px" height="171px"/>
                <h5 className="product-card-heading">VITAMIN D</h5>
                <p className="product-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eget aenean sed odio interdum.
                    Lectus suspendisse arcu augue pellentesque at in mollis lacus eu.</p>
                <Link href="/"><a className="supplement-link">Read More</a></Link>
            </div>
            <div className="product-card">
                <Image src="/vitamin-d.png" width="192px" height="171px"/>
                <h5 className="product-card-heading">VITAMIN D</h5>
                <p className="product-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eget aenean sed odio interdum.
                    Lectus suspendisse arcu augue pellentesque at in mollis lacus eu.</p>
                <Link href="/"><a className="supplement-link">Read More</a></Link>
            </div>
            <div className="product-card">
                <Image src="/vitamin-d.png" width="192px" height="171px"/>
                <h5 className="product-card-heading">VITAMIN D</h5>
                <p className="product-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eget aenean sed odio interdum.
                    Lectus suspendisse arcu augue pellentesque at in mollis lacus eu.</p>
                <Link href="/"><a className="supplement-link">Read More</a></Link>
            </div>
        </div>
    );
};

export default Products;