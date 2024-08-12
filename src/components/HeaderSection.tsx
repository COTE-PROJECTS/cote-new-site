
import React from 'react'
import NavSection from './NavSection'
import HeroComponent from './HeroComponent'
export default function HeaderSection() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* navbar section */}
            <NavSection />
            <main className="flex-grow">
                {/* hero component */}
                <HeroComponent />
                {/* ... */}
            </main>


        </div>
    )
}