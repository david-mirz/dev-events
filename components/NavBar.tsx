'use client';
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import posthog from 'posthog-js';

const NavBar = () => {
    const handleNavClick = (linkName: string, destination: string) => {
        // Track navigation link clicks
        posthog.capture('nav_link_clicked', {
            link_name: linkName,
            destination: destination,
        });
    };

    return (
        <header>
            <nav>
                <Link href='/' className="logo" onClick={() => handleNavClick('Logo', '/')}>
                    <Image src="/icons/logo.png" alt="Logo" width={24} height={24} />
                    <p>DevEvents</p>
                </Link>
                <ul>
                    <Link href='/' onClick={() => handleNavClick('Home', '/')}>Home</Link>
                    <Link href='/' onClick={() => handleNavClick('Events', '/')}>Events</Link>
                    <Link href='/' onClick={() => handleNavClick('Create Event', '/')}>Create Event</Link>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;