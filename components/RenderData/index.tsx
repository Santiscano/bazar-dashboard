import React from 'react';
import style from '../TableTops/tableTops.module.css'

function index(props:any) {
    return (
        <>
            <tr className=" bg-transparent transition duration-300 ease-in-out cursor-pointer">
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">
                    <p className={style['stock']}>
                        {props.getDataName}
                        <span className={style['group']}>{props.getDataGroup}</span>
                    </p> 
                </td>
                <td className="text-sm text-green-600 font-light px-4 py-4 whitespace-nowrap">
                    {props.getDataPercentage}
                </td>
            </tr>
        </>
    )
}

export default index