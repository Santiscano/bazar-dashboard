import React, { useState } from 'react'
import style from './displayLeft.module.css'

function index() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [earningRelease, setEarningRelease] = useState(true);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [exDividend, setExDividend] = useState(false);


  const handleClickEarningRelease = () => {setEarningRelease(true); setExDividend(false) ;console.log(earningRelease, exDividend)};
  const handleClickExDividend = () => { setExDividend(true); setEarningRelease(false); console.log(earningRelease, exDividend)};

  return (
    <section className='basis-1/3 text-white text-center'>

      <h3>My Portfolios</h3>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 px-6 inline-block min-w-full sm:px-4 lg:px-8">
            <div className="overflow-hidden">
              <table className={style['table']}>
                <thead className={style['thead']}>
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-4 text-left">
                      
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-4 py-4 text-right">
                      7D
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-4 py-4 text-right">
                      1Y
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-transparent transition duration-300 ease-in-out cursor-pointer">
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">
                      My Portfolio
                    </td>
                    <td className="text-sm text-gray-400 font-light px-4 py-4 whitespace-nowrap">
                      Jacob
                    </td>
                    <td className="text-sm text-gray-400 font-light px-4 py-4 whitespace-nowrap">
                      Thornton
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>


      <h3 className='mt-8'>My Markets & Industries</h3>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-4 lg:px-8">
            <div className="overflow-hidden">
              <table className={style['table']}>
                <thead className={style['thead']}>
                  <tr>
                    <th scope="col" className="text-sm font-medium text-white px-4 py-4 text-left">
                      
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-4 py-4 text-right">
                      7D
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-4 py-4 text-right">
                      1Y
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-4 py-4 text-right">
                      PE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-transparent transition duration-300 ease-in-out cursor-pointer">
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">
                      CO Market
                    </td>
                    <td className="text-sm text-green-600 font-light px-4 py-4 whitespace-nowrap">
                      1.4%
                    </td>
                    <td className="text-sm text-red-600 font-light px-4 py-4 whitespace-nowrap">
                      -8.4%
                    </td>
                    <td className="text-sm text-white font-light px-4 py-4 whitespace-nowrap">
                      -5.8x
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <h3 className='mt-8 py-2'>Recently Viewed</h3>
      <div className='grid grid-cols-2 w-4/5 mx-auto sm:px-4 lg:px-8'>
        <button onClick={handleClickEarningRelease} className={ earningRelease ? style['buttonSelected'] : style['button'] }>
          Earning Release
        </button>
        <button onClick={handleClickExDividend} className={ exDividend ? style['buttonSelected'] : style['button'] }>
          Ex-dividend
        </button>
      </div>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className=" inline-block min-w-full sm:px-4 lg:px-8">
            <div className="overflow-hidden">
              <table className={style['table']}>
                <tbody>
                  <tr className="bg-transparent transition duration-300 ease-in-out cursor-pointer">
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">
                      <span className={style['span']}> No upcoming event</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>



      <h3 className='mt-8'>Recently Viewed</h3>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-4 lg:px-8">
            <div className="overflow-hidden">
              <table className={style['table']}>
                <thead className={style['thead']}>
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-4 py-4 text-left">
                      symbol
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-4 py-4 text-right">
                      7D
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-4 py-4 text-right">
                      1Y
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-transparent transition duration-300 ease-in-out cursor-pointer">
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">
                      <p className={style['stock']}>NUTRESA</p> <br />
                      <p className={style['price']}>Col $44,500.00</p> <br />
                      <p className={style['group']}>Grupo Nutresa S.A</p>
                    </td>
                    <td className="text-sm text-green-600 font-light px-4 py-4 whitespace-nowrap">
                      1.4%
                    </td>
                    <td className="text-sm text-red-600 font-light px-4 py-4 whitespace-nowrap">
                      -8.4%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default index