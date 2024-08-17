"use client"
import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation'; // Import for route handling
import Image from "next/image";
interface MenuItem {
    name: string;
    href?: string;
    children?: MenuItem[];
}

const menuItems: MenuItem[] = [
    { name: 'HOME', href: '/' },
    {
        name: 'Our Core Team',
        href: '/team',
    },
    {
        name: "Who we are",
        href: "/about",
    },
    {
        name: "What we do",
        href: "/whatwedo",
    },
    { name: 'Showcase', href: '/showcase' },
    // { name: 'Blogs & News', href: '/blogs' },
    { name: 'Contact Us', href: '/contact' }
];

const DropdownMenu: React.FC<{ items: MenuItem[], depth?: number }> = ({ items, depth = 0 }) => {
    const dropdownRef = useRef<HTMLUListElement>(null);
    const [dropdownDirection, setDropdownDirection] = useState<'right' | 'left'>('right');

    useEffect(() => {
        const updateDirection = () => {
            if (dropdownRef.current) {
                const rect = dropdownRef.current.getBoundingClientRect();
                const viewportWidth = window.innerWidth;
                if (rect.right > viewportWidth) {
                    setDropdownDirection('left');
                } else {
                    setDropdownDirection('right');
                }
            }
        };

        updateDirection();
        window.addEventListener('resize', updateDirection);
        return () => window.removeEventListener('resize', updateDirection);
    }, []);

    return (
        <ul
            ref={dropdownRef}
            className={`absolute mt-0 space-y-1 bg-white shadow-lg rounded-md p-2 min-w-[200px] ${depth > 0
                ? `top-0 ${dropdownDirection === 'right' ? 'left-full' : 'right-full'}`
                : 'top-full left-0'
                }`}
        >
            {items.map((item, index) => (
                <li key={index} className="relative group/subitem">
                    <a href={item.href} className="block px-4 uppercase py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md whitespace-nowrap">
                        {item.name}
                        {item.children && (
                            <span className={`float-${dropdownDirection === 'right' ? 'right' : 'left'} transform ${dropdownDirection === 'left' ? 'rotate-180' : ''}`}>
                                &#9656;
                            </span>
                        )}
                    </a>
                    {item.children && (
                        <div className="hidden group-hover/subitem:block">
                            <DropdownMenu items={item.children} depth={depth + 1} />
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
};

const NavItem: React.FC<{ item: MenuItem }> = ({ item }) => {
    const pathname = usePathname();
    const isActive = pathname === item.href;

    return (
        <li className="relative group">
            <a
                href={item.href}
                className={`text-sm font-medium uppercase px-3 py-2 rounded-md transition-all duration-300 ${isActive ? 'text-[#ff4c19] border-b-4 border-[#ff4c19]' : 'text-gray-700 hover:text-[#ff4c19]'}`}
            >
                {item.name}
            </a>
            {item.children && (
                <div className="hidden group-hover:block absolute left-0 mt-2 w-max">
                    <DropdownMenu items={item.children} />
                </div>
            )}
        </li>
    );
};

const NavSection: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDrawer = (): void => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white' : 'bg-opacity-90'}`}>
                <nav className="container mx-auto px-4 py-0">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <Image src="/assets/logo/cote_top.png" alt="Logo" width={70} height={70} className='w-full object-cover' />
                            {/* <span className="ml-2 text-xl font-extrabold text-black">COTE TECHNOLOGIES</span> */}
                        </div>
                        {/* Desktop Menu */}
                        <ul className="hidden md:flex space-x-1">
                            {menuItems.map((item, index) => (
                                <NavItem key={index} item={item} />
                            ))}
                        </ul>
                        {/* Mobile Menu Button */}
                        <button className="md:hidden text-gray-500 focus:outline-none" onClick={toggleDrawer}>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </header>
            {/* Mobile Drawer */}
            <div
                className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                <div
                    className={`fixed inset-y-0 left-0 w-64 bg-white transform transition-transform duration-300 ease-in-out overflow-y-auto ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}
                >
                    <div className="p-6">
                        <button className="absolute top-4 right-4 text-gray-500" onClick={toggleDrawer}>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <ul className="space-y-4 mt-8">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="block text-gray-700 hover:text-[#ff4c19] py-2">
                                        {item.name}
                                    </a>
                                    {item.children && (
                                        <ul className="pl-4 mt-2 space-y-2">
                                            {item.children.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <a href={subItem.href} className="block text-gray-600 hover:text-[#ff4c19] py-1">
                                                        {subItem.name}
                                                    </a>
                                                    {subItem.children && (
                                                        <ul className="pl-4 mt-1 space-y-1">
                                                            {subItem.children.map((grandChild, grandChildIndex) => (
                                                                <li key={grandChildIndex}>
                                                                    <a href={grandChild.href} className="block text-gray-500 hover:text-[#ff4c19] py-1">
                                                                        {grandChild.name}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavSection;
