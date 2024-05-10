import React from 'react'


export function Reviews() {
    return(
        <div className="relative pt-40 w-full">
            <div className="h-[250px] md bg-[#232323] px-20 pt-10 md:px-10 sm:px-10 mdl:px-10">
                <h1 className='header pl-10 pb-5'>BEWERTUNGEN</h1>
                <p className='text-white font-medium text-3xl  md:text-2xl sm:text-xl'>Was unsere Kunden sagen:</p>
            </div>
            <div className='w-full'>
                <div className='relative w-full px-10 grid grid-cols-3 grid-flow-row mdl:grid-cols-2 mdl:grid:rows-2  sm:grid-cols-1 md:grid-cols-1 justify-center items-center gap-16 mt-[-80px]'>
                    <div className='bg-[#303030] py-5 flex flex-col justify-center px-7 shadow-black shadow-lg'>
                        <span className='text'>Preis - Leistung ist unschlagbar. Sehr empfehlenswertes Unternehmen. Pünktlichkeit, Sauberkeit und zufriedene Kunden werden hier groß geschrieben.<br/>
                                                <br/>
                        </span>
                        <p className='text text-[#959595]'>Agnes R.</p>
                    </div>
                    <div className='bg-[#303030] py-5 flex flex-col justify-center px-7 shadow-black shadow-lg'>
                        <span className='text'>Saubere Arbeit! Die Jungs waren jetzt mehrfach bei uns, kommen immer mindestens zu zweit und fallen wie ein Bienenschwarm über die Fenster her.
                                                 Innerhalb kürzester Zeit sind alle sauber. Nett und höflich sind sie auch immer!<br/>
                                                <br/>
                        </span>
                        <p className='text text-[#959595]'>B. Fischer</p>
                    </div>
                    <div className='bg-[#303030] py-5 flex flex-col justify-center px-7 shadow-black shadow-lg mdl:col-span-2 mdl:ml-40 mdl:mr-40'>
                        <span className='text'>Sehr gründliche Reinigung unserer Fenster. Zuverlässige und freundliche Mitarbeiter. Super Preis- und Leistungsverhältnis!<br/>
                                                <br/>
                        </span>
                        <p className='text text-[#959595]'>Moritz W.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
