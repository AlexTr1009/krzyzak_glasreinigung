import React from 'react'
import styles from '../app/styles.module.css';
import { FaLocationDot, FaEnvelope, FaPhone } from 'react-icons/fa6';


export function Infos() {
    return(
        <div className="bg-text w-full text-lg text-white sm:px-7 md:px-5 py-10 mdl:px-10 lg:px-10 xl:px-20 mdl:py-12 lg:py-12 xl:py-12">
            <h1 className='header pl-10'>INFO</h1>
            <div className='flex flex-col gap-5 pt-10 md:pt-7 sm:pt-7'>

                <div className="flex flex-row sm:flex-col bg-[#303030] shadow-black shadow-lg items-center">
                    <div className="xl:p-8 lg:p-5 mdl:p-5 p-3">
                        <FaLocationDot size={50} color="#599B41" className='md:h-10'/>
                    </div>   
                    <div className="flex flex-col gap-1 py-3 pr-5 sm:pr-0">
                        <div>
                            <p className='sm:text-center'>Adresse</p>
                        </div>
                        <div>
                            <p className="text-base text-textGray font-light sm:text-center">Herdestr. 66,<br className='mdl:hidden lg:hidden'/> 46045 Oberhausen</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row sm:flex-col bg-[#303030] shadow-black shadow-lg items-center">
                    <div className="xl:p-8 lg:p-5 mdl:p-5 p-3">
                        <FaEnvelope size={50} color="#599B41" className='md:h-10'/>
                    </div>   
                    <div className="flex flex-col gap-1 py-2 pr-5 sm:pr-0">
                        <div>
                            <p className='sm:text-center'>Email</p>
                        </div>
                        <div>
                            <p className="text-base text-textGray font-light sm:text-center">mail@fensterreinigung-ob.de</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row sm:flex-col bg-[#303030] shadow-black shadow-lg items-center">
                    <div className="xl:p-8 lg:p-5 mdl:p-5 p-3">
                        <FaPhone size={48} color="#599B41" className='md:h-10'/>
                    </div>   
                    <div className="flex flex-col gap-1 py-2">
                        <div>
                            <p className='sm:text-center'>Telefon</p>
                        </div>
                        <div>
                            <p className="text-base text-textGray font-light sm:text-center">0177 31 33 857 </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}