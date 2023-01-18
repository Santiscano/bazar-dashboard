import React, { useState } from 'react';
import style from './tableTops.module.css';
import RenderData from '../RenderData/index'


function index(props:any) {

    const group = [
        {
            name:'wheat',
            group: 'Commodities',
            percentage:'10%'
        },{
            name:'Coffee',
            group: 'Commodities',
            percentage:'9%'
        },{
            name:'soy',
            group: 'Commodities',
            percentage:'7%'
        },{
            name:'corn',
            group: 'Commodities',
            percentage:'6%'
        },{
            name:'rise',
            group: 'Commodities',
            percentage:'4%'
        }
    ]

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [left, setLeft] = useState(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [right, setRight] = useState(false);

    const handleClickSelectLeft = () => {setLeft(true); setRight(false);  console.log(left) };
    const handleClickSelectRight = () => {setRight(true); setLeft(false); console.log(right) };

    return (
    <>
        <div className='grid grid-cols-2 w-4/5 mx-auto pt-6 sm:px-4 lg:px-8'>
            <button onClick={ ()=> handleClickSelectLeft() }  className={left ? style['buttonSelected'] :style['button'] }> {props.title.buttonLeft}  </button>
            <button onClick={ ()=> handleClickSelectRight() } className={right ? style['buttonSelected']:style['button'] }> {props.title.buttonRight} </button>
        </div>
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                <div className=" inline-block min-w-full sm:px-4 lg:px-8">
                    <div className="overflow-hidden">
                        <table className={style['table']}>
                            <thead className={style['thead']}>
                                <tr>
                                    <th colSpan={2} className='flex flex-row sm:px-4 lg:px-8'>
                                        <button className='px-2'>7D</button>
                                        <button className='px-2'>1M</button>
                                        <button className='px-2'>3M</button>
                                        <button className='px-2'>1Y</button>
                                        <button className='px-2'>3Y</button>
                                        <button className='px-2'>5Y</button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <tr className=" bg-transparent transition duration-300 ease-in-out cursor-pointer"> */}
                                    {group.map((stock) => (
                                        <RenderData
                                        key={stock.name}
                                        getDataName= {stock.name}
                                        getDataGroup= {stock.group}
                                        getDataPercentage= {stock.percentage}
                                        />
                                    ))}
                                    {/* <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">
                                        <p className={style['stock']}>
                                            {props.getDataName}
                                            <span className={style['group']}>{props.getDataGroup}</span>
                                        </p> 
                                    </td>
                                    <td className="text-sm text-green-600 font-light px-4 py-4 whitespace-nowrap">
                                        {props.getDataPercentage}
                                    </td> */}
                                {/* </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default index