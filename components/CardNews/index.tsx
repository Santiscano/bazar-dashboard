import React from 'react';
import Image from 'next/image';
import style from './cardNews.module.css'
import Coffee from '../../public/assets/coffee.jpg';
import Avatar from '../../public/assets/female-06.jpg'

function index() {
  return (
    <>
        <div className="w-full overflow-hidden rounded-lg shadow-md ">
            <Image className="object-cover w-full h-64" src={Coffee} alt="Article"/>

            <div className={style['backgroudCard']}>
                <div>
                    <h1 className="block mt-2 text-2xl font-semibold text-white transition-colors duration-300 transform dark:text-white "  role="link">The Global Economiec Outlook for 2023</h1>
                    <p className="mt-2 text-sm text-white dark:text-gray-400">Equity markets hit the ground running in 2023, with the US Telecom , US Consumer Discretionary and US Real Estate sectors leading the way in the first week of the year...</p>
                    <a href="#" className=" text-xs font-medium text-blue-600 uppercase dark:text-blue-400 hover:text-white hover:underline">
                        <p className={style['link']}>
                            Continue reading
                        </p>
                    </a>
                </div>
        
                <div className="mt-4">
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <Image width={50} height={50} className="object-cover rounded-full" src={Avatar} alt="Avatar" />
                            <a href="#" className="mx-2 font-semibold text-slate-300 " role="link">Jone Doe</a>
                        </div>
                        <span className="mx-1 text-xs text-slate-300 ">21 SEP 2015</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default index