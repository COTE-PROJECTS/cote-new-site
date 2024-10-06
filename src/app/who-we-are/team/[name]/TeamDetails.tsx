"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface TeamProps {
    title: string;
    image: string | null;
    bio: string;
    createdAt: string;
}

const TeamDetail: React.FC<TeamProps> = ({ title, image, bio, createdAt }) => {
    return (
        <article className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Breadcrumb */}
                {/* <nav className="text-sm mb-6 pt-16" aria-label="Breadcrumb">
                    <ol className="list-none p-0 inline-flex">
                        <li className="flex items-center">
                            <Link href="/" className="text-gray-600 hover:text-gray-900">
                                Home
                            </Link>
                            <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                            </svg>
                        </li>
                        <li className="flex items-center">
                            <Link href="/team" className="text-gray-600 hover:text-gray-900">
                                Team
                            </Link>
                            <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                            </svg>
                        </li>
                        <li>
                            <span className="text-gray-800" aria-current="page">{title}</span>
                        </li>
                    </ol>
                </nav> */}
                {/* Main Content */}
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    {image && (
                        <div className="w-full h-[50em] relative">
                            <Image
                                src={image}
                                alt={title}
                                layout='fill'
                                objectFit="cover"
                                objectPosition="20% 20%"
                            />
                        </div>
                    )}
                    <div className="p-6 sm:p-10">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
                        <div className="flex items-center text-gray-600 text-sm mb-6">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <time dateTime={new Date(createdAt).toISOString().split('T')[0]}>
                                {new Date(createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </time>
                        </div>
                        <div className="prose max-w-none text-gray-800 text-base sm:text-lg leading-relaxed">
                            {bio.split('\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default TeamDetail;