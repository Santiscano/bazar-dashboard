import Image from 'next/image'
import React from 'react'
import style from './watchStocksInformed.module.css'

function index() {
  return (
    <div className={style['watchContainer']}>
      <div className="flex justify-center ">
        <svg className={style['svg-watch']} width="55" height="55" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path fill-rule="evenodd" clip-rule="evenodd" d="M18 6H6C5.44772 6 5 6.44772 5 7V14C5 14.5523 5.44772 15 6 15H18C18.5523 15 19 14.5523 19 14V7C19 6.44772 18.5523 6 18 6ZM6 5C4.89543 5 4 5.89543 4 7V14C4 15.1046 4.89543 16 6 16H18C19.1046 16 20 15.1046 20 14V7C20 5.89543 19.1046 5 18 5H6ZM3 17.5C3 17.2239 3.22386 17 3.5 17H20.5C20.7761 17 21 17.2239 21 17.5C21 17.7761 20.7761 18 20.5 18H18.1939L18.9745 20.3418C19.0618 20.6038 18.9202 20.8869 18.6582 20.9743C18.3963 21.0616 18.1131 20.92 18.0258 20.658L17.1398 18H6.86049L5.97448 20.658C5.88715 20.92 5.60399 21.0616 5.34202 20.9743C5.08005 20.8869 4.93847 20.6038 5.02579 20.3418L5.80639 18H3.5C3.22386 18 3 17.7761 3 17.5ZM17 8.65292V10C17 10.2761 17.2239 10.5 17.5 10.5C17.7761 10.5 18 10.2761 18 10V7H15C14.7239 7 14.5 7.22386 14.5 7.5C14.5 7.77614 14.7239 8 15 8H16.2288L12.6981 11.149L11.5507 8.28052L9.9381 11.5058L9.07771 10.2152L6.14645 13.1465C5.95118 13.3417 5.95118 13.6583 6.14645 13.8536C6.34171 14.0488 6.65829 14.0488 6.85355 13.8536L8.92229 11.7848L10.0619 13.4942L11.4493 10.7195L12.3019 12.851L17 8.65292Z"></path></svg>
      </div>
        <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white ">Need a help in Claim?</h5>
        </a>
        <p className="mb-3 font-normal text-slate-300 ">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
        <a href="#" className="inline-flex items-center  hover:underline">
        <button
          type="button"
          // className="font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          className={style['button-link']}
        >
            Add Stock

        </button>
            <svg className={style['svg-link']} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
        </a>
    </div>
  )
}

export default index