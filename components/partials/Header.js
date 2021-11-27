import React from 'react';
import Link from "next/link";
import Button from "./Button";
const Header = () => {
    return (
        <header>
            <Link href="/">
                <a className="logo">Sweat</a>
            </Link>
            <nav className="main-menu">
                <Link href="/"><a className="nav-link">Home</a></Link>
                <Link href="/about"><a className="nav-link">About</a></Link>
                <Link href="/contact"><a className="nav-link">Contact</a></Link>
                <Link href="/recipes"><a className="nav-link">Recipes</a></Link>
                <Button filled='false' />
            </nav>
        </header>
    );
};

export default Header;