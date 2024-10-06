"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { IoLogoFacebook } from 'react-icons/io';
import { IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5';

interface NavItem {
    name: string;
    href: string;
    dropdown: boolean;
    items?: NavItem[];
}

interface SocialLink {
    name: string;
    href: string;
    icon: React.ReactNode;
}

const navLinks: NavItem[] = [
    { name: 'Home', href: '/', dropdown: false },
    {
        name: 'Who We Are',
        href: '#',
        dropdown: true,
        items: [
            { name: 'Our Team', href: '/who-we-are/team', dropdown: false },
            // { name: 'Our Values', href: '/who-we-are/values', dropdown: false },
            // { name: 'Our History', href: '/who-we-are/history', dropdown: false },
        ],
    },
    { name: 'WhatWeDo', href: '/whatwedo', dropdown: false },
    { name: 'Projects', href: '/projects', dropdown: false },
    // { name: 'News & Stories', href: '/news', dropdown: false },
    { name: 'Contact', href: '/contact', dropdown: false },
];

const socialLinks: SocialLink[] = [
    { name: 'Facebook', href: '#', icon: <IoLogoFacebook className='text-2xl' /> },
    { name: 'Twitter', href: '#', icon: <IoLogoTwitter className='text-2xl' /> },
    { name: 'Instagram', href: '#', icon: <IoLogoInstagram className='text-2xl' /> },
];

const NavSection: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const router = usePathname();

    useEffect(() => {
        const handleScroll = (): void => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpen]);

    const handleEscape = (e: KeyboardEvent): void => {
        if (e.key === 'Escape') {
            setIsOpen(false);
            setActiveDropdown(null);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    return (
        <div className="relative">
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${scrolled ? 'bg-white text-black shadow-md' : 'bg-gray-200 text-black'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 lg:h-20">
                        <div className="flex-shrink-0 flex items-center">
                            <Image src="/assets/logo/cote_top.png" alt="Logo" width={70} height={70} className='w-full object-cover' />
                        </div>
                        <div className="hidden lg:ml-6 lg:flex lg:items-center lg:space-x-8">
                            {navLinks.map((link) => (
                                link.dropdown ? (
                                    <div key={link.name} className="relative">
                                        <button
                                            onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                                            className={`inline-flex items-center px-1 pt-1 text-lg font-medium transition-all duration-300 ease-in-out hover:text-red-500 focus:outline-none ${scrolled ? 'text-gray-700' : 'text-black'
                                                }`}
                                        >
                                            {link.name}
                                            <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        {activeDropdown === link.name && link.items && (
                                            <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                    {link.items.map((item) => (
                                                        <Link key={item.name} href={item.href}>
                                                            <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">{item.name}</span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link key={link.name} href={link.href}>
                                        <span className={`inline-flex items-center px-1 pt-1 text-lg font-medium transition-all duration-300 ease-in-out 
                                            hover:text-[#ff4c19] border-b-2 border-transparent hover:border-[#ff4c19]
                                            relative group ${router === link.href ? 'text-[#ff4c19] border-[#ff4c19]' : ''} ${scrolled ? 'text-gray-700' : 'text-black'
                                            }`}>
                                            {link.name}
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg- transition-all duration-300 ease-in-out group-hover:w-full"></span>
                                        </span>
                                    </Link>
                                )
                            ))}
                        </div>
                        <div className="hidden lg:flex lg:items-center lg:space-x-4">
                            {socialLinks.map((link) => (
                                <Link key={link.name} href={link.href} className="hover:text-[#ff4c19] transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                        <div className="flex items-center lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 ${scrolled ? 'text-gray-700 hover:text-red-500 hover:bg-gray-100' : 'text-gray-300 hover:text-red-500 hover:bg-gray-900'
                                    }`}
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                ) : (
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            {isOpen && (
                <div className="lg:hidden fixed inset-0 z-50 overflow-y-auto bg-white" style={{ clipPath: 'circle(150% at 100% 0)' }}>
                    <div className="flex flex-col h-full justify-between pt-16 pb-6">
                        <div className="space-y-1 relative">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-2 right-4 text-gray-500 hover:text-red-500 focus:outline-none"
                            >
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            {navLinks.map((link) => (
                                link.dropdown ? (
                                    <div key={link.name}>
                                        <button
                                            onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                                            className="w-full flex items-center justify-between px-4 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50"
                                        >
                                            {link.name}
                                            <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        {activeDropdown === link.name && link.items && (
                                            <div className="pl-4">
                                                {link.items.map((item) => (
                                                    <Link key={item.name} href={item.href}>
                                                        <span
                                                            onClick={() => setIsOpen(false)}
                                                            className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-red-500 hover:bg-gray-50"
                                                        >
                                                            {item.name}
                                                        </span>
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link key={link.name} href={link.href}>
                                        <span
                                            onClick={() => setIsOpen(false)}
                                            className={`block px-4 py-2 text-base font-medium ${router === link.href ? 'text-red-500 bg-gray-50' : 'text-gray-700 hover:text-red-500 hover:bg-gray-50'
                                                }`}
                                        >
                                            {link.name}
                                        </span>
                                    </Link>
                                )
                            ))}
                        </div>
                        <div className="mt-auto">
                            <div className="flex justify-center space-x-6 pb-6">
                                {socialLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {link.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavSection;