import React from 'react';
import Image from 'next/image';
import right from '../../public/assets/right.png';
import Avatar from '../../public/assets/female-06.jpg'
import CardNews from '../CardNews';
import WatchStocksInformed from '../WatchStocksInformed';
import style from './displayCenter.module.css'
import SelectedFavorites from '../SelectedFavorites';

function index() {
  return (
    <section className='basis-1/3  text-white text-center '>
        <CardNews/>
        <div className='flex flex-row justify-end mt-2'>
            <a href="#" className="text-xs font-medium uppercase  hover:text-white ">
              <p className={style['button-link']}>
                More Market Insights
              </p>
            </a>
            {/* <Image src={right} width={30}  alt='right'/> */}
        </div>
        <WatchStocksInformed/>
        <SelectedFavorites/>
    </section>
  )
}

export default index