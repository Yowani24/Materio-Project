// import * as React from 'react'
// import { DataGrid } from '@mui/x-data-grid'
// import CardContent from '@mui/material/CardContent'
// import Grid from '@mui/material/Grid'

// const other = {
//   autoHeight: true,
//   showCellRightBorder: true,
//   showColumnRightBorder: true
// }

// const rows = [
//   { id: 1, username: '@MUI', age: 20 },
//   { id: 2, username: '@MUI-X', age: 25 }
// ]

// export default function ColumnSpanningNumber() {
//   return (
//     <div style={{ width: '100%' }}>
//       <CardContent>
//         <Grid container spacing={6}>
//           <DataGrid
//             columns={[
//               { field: 'username', rowspan: 2, hideable: false },
//               {
//                 field: 'organization',
//                 sortable: false,
//                 filterable: false,
//                 hideable: false
//               },
//               { field: 'age', hideable: false }
//             ]}
//             rows={rows}
//             {...other}
//           />
//         </Grid>
//         <Grid>
//           <table style={{ width: '100%' }}>
//             <tr>
//               <th>Name</th>
//               <td>Jill</td>
//             </tr>
//             <tr>
//               <th rowspan='2'>Phone</th>
//               <td>555-1234</td>
//             </tr>
//             <tr>
//               <td>555-8745</td>
//             </tr>
//           </table>
//         </Grid>
//       </CardContent>
//     </div>
//   )
// }

import React from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-enterprise'
import '@inovua/reactdatagrid-enterprise/index.css'
import styled from 'styled-components'

// import people from './people'

const people = [
  { id: 1, name: 'Emissões antropogênicas', country: 'Escopo 1', tco2e: 200 },
  { id: 2, name: 'Emissões biogênicas LULUCF', country: 'Escopo 1', tco2e: 200 },
  { id: 3, name: 'Remoções biogênicas LULUCF', country: 'Escopo 1', tco2e: 200 },
  { id: 4, name: 'Total E1', country: 'Escopo 1', tco2e: 200 },
  { id: 5, name: '', country: 'Escopo 2', tco2e: '98,558' },
  { id: 6, name: '', country: 'Sub-total E1+E2 (Balanço entre emissões e remoções)', tco2e: '0' },
  { id: 7, name: '', country: 'Escopo 3', tco2e: '330,025' },
  { id: 6, name: '', country: 'Balanço total - E1+E2+E3', tco2e: '0' }
]

const gridStyle = { minHeight: 360 }

const columns = [
  {
    name: 'country',
    header: '',
    defaultFlex: 1,
    rowspan: ({ value, dataSourceArray, rowIndex, column }) => {
      let rowspan = 1

      const prevData = dataSourceArray[rowIndex - 1]
      if (prevData && prevData[column.name] === value) {
        return rowspan
      }
      let currentRowIndex = rowIndex + 1
      while (dataSourceArray[currentRowIndex] && dataSourceArray[currentRowIndex][column.name] === value) {
        rowspan++
        currentRowIndex++
        if (rowspan > 9) {
          break
        }
      }
      return rowspan
    }
  },
  { name: 'name', header: '', defaultFlex: 1 },
  { name: 'tco2e', defaultFlex: 1 }
]

const App = () => {
  return (
    <div>
      <h3>Rowspan and colspan example</h3>
      <p>
        Try and sort the <b>COUNTRY</b> column to see the cells with same country spanning together.
      </p>
      <Aqui>
        <ReactDataGrid showZebraRows={false} style={gridStyle} columns={columns} dataSource={people} />
      </Aqui>
    </div>
  )
}

export default () => <App />

const Aqui = styled.div`
  .InovuaReactDataGrid__header-wrapper {
    color: #fff;
  }
  .InovuaReactDataGrid__header {
    background-color: #6b1f7c;
    border: none;
    // .InovuaReactDataGrid__column-header__resize-wrapper--first-in-section {
    //   display: none;
    // }
  }
`
