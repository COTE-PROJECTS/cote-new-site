
import React from 'react'
import HeroComponent from './HeroComponent'

export default function HeaderSection() {
    return (
        <div className=" min-h-full flex flex-col">
            {/* navbar section */}
            <main className="flex-grow">
                {/* hero component */}
                <HeroComponent />
                {/* ... */}
            </main>
        </div>
    )
}