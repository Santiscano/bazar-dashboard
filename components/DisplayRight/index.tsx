import React from 'react';
import TableTops from '../TableTops';

// cambiar props:any por props:GetData
function index(props: any) {

  return (
    <section className='basis-1/3  text-white text-center'>
      <TableTops
        title={{
          buttonLeft: 'Top Gainers',
          buttonRight: 'Top Losers',
        }}
      />

        {/* <h3>array stocks</h3>
      {group.map((stock)=>(
        <TableTops
          key={stock.name}
          title={{
            buttonLeft: 'Top Industries',
            buttonRight: 'Worst Industries',
          }}
        />
      ))} */}

      <TableTops 
        title={{
          buttonLeft: 'Top Industries',
          buttonRight: 'Worst Industries',
        }}
      />

      <h3 className='mt-8 py-2'>Recently Viewed</h3>
      <TableTops 
        title={{
          buttonLeft: 'Top Gainers',
          buttonRight: 'Top Losers',
        }}
      />
    </section>
  )
}

export default index