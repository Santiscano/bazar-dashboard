import React, {useState, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import { useDemoData } from '@mui/x-data-grid';



const index = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState([])
  
  // cambiar esta constante por la futura peticion
  const response = [
    {id: 1, name:'cafe'}, 
    {id: 2, name:'trigo'}, 
    {id: 3, name: 'maiz'}, 
    {id: 4, name: 'soya'}, 
    {id: 5, name: 'ganado a pie'}
  ];

  const columns = [
    // {field: "id", headerName: "ID", width: 50},
    {field: "name" , headerName: "Commodities", width: 350,},
    {field: "button" , headerName: "Add Favorites", width: 350 }
  ]

  const row = response.map((row) => ({
    id: row.id,
    name: row.name,
    button: '✨ addCommodities'
  }))

  
  return (
    <div>
      <DataGrid style={{height: 500, width: "100%", color: "#fff", marginTop: 65}}
        rows={row}
        columns={columns}
        pageSize={5}
        // rowsPerPageOptions={[1]}
      />
    </div>
  )
};
    // const { data } = useDemoData({
    //     dataSet: 'Commodity',
    //     rowLength: 5,
    //     maxColumns: 6,
    // });

//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <div style={{ display: 'flex', height: '100%' }}>
//         <div style={{ flexGrow: 1 }}>
//           <DataGrid {...data} />
//         </div>
//       </div>
//     </div>
//   );
//   };
// }
export default index;