import React from 'react'
import styles from '../app/styles.module.css';


export function PreiseTags() {
    return(
        <div className="bg-text w-full text px-10 py-12 xl:px-20">
            <h1 className='font-medium text-2xl md:text:xl sm:text-xl'>Zur Orientierung hier einige Preis-Beispiele:</h1>
            <div className='flex flex-col gap-5 xl:w-4/5 pt-10'>
                <div className='bg-[#303030] py-5 flex flex-col justify-center px-5 shadow-black shadow-lg'>
                    <p>
                        Wohnungen: <span className='text-primary font-medium'>ab 35 €</span>
                    </p>
                </div>
                <div className='bg-[#303030] py-5 flex flex-col justify-center px-5 shadow-black shadow-lg'>
                    <p>
                        Häuser: <span className='text-primary font-medium'>ab 45 €</span>
                    </p>
                </div>
                <div className='bg-[#303030] py-5 flex flex-col justify-center px-5 shadow-black shadow-lg'>
                    <p>
                        Wintergärten: <span className='text-primary font-medium'>ab 50 €</span>
                    </p>
                </div>
            </div>
            <p className='pt-10'>
                (Alle Preise inkl. 19% MwSt.)
            </p>
        </div>
    )
}