'use strict'

import React, { useCallback, useMemo, useRef, useState } from 'react'
import { render } from 'react-dom'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
// import './styles.css'

const _optionalChain = ops => {
  let lastAccessLHS = undefined
  let value = ops[0]
  let i = 1
  while (i < ops.length) {
    const op = ops[i]
    const fn = ops[i + 1]
    i += 2
    if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
      return undefined
    }
    if (op === 'access' || op === 'optionalAccess') {
      lastAccessLHS = value
      value = fn(value)
    } else if (op === 'call' || op === 'optionalCall') {
      value = fn((...args) => value.call(lastAccessLHS, ...args))
      lastAccessLHS = undefined
    }
  }
  return value
}

const rowSpan = params => {
  var athlete = _optionalChain([params, 'access', _ => _.data, 'optionalAccess', _2 => _2.athlete])
  if (athlete === 'Aleksey Nemov') {
    // have all Russia age columns width 2
    return 2
  } else if (athlete === 'Ryan Lochte') {
    // have all United States column width 4
    return 4
  } else {
    // all other rows should be just normal
    return 1
  }
}

const people = [
  { id: 1, type: 'Emissões antropogênicas', category: 'Escopo 1', tco2e: 200 },
  { id: 2, type: 'Emissões biogênicas LULUCF', category: 'Escopo 1', tco2e: 200 },
  { id: 3, type: 'Remoções biogênicas LULUCF', category: 'Escopo 1', tco2e: 200 },
  { id: 4, type: 'Total E1', category: 'Escopo 1', tco2e: 200 },
  { id: 5, type: '', category: 'Escopo 2', tco2e: '98,558' },
  { id: 6, type: '', category: 'Sub-total E1+E2 (Balanço entre emissões e remoções)', tco2e: '0' },
  { id: 7, type: '', category: 'Escopo 3', tco2e: '330,025' },
  { id: 6, type: '', category: 'Balanço total - E1+E2+E3', tco2e: '0' }
]

export default function GridExample() {
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), [])
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), [])
  const [rowData, setRowData] = useState()
  const [columnDefs, setColumnDefs] = useState([
    // {
    //   field: 'athlete',
    //   rowSpan: rowSpan,
    //   cellClassRules: {
    //     'cell-span': "value==='Aleksey Nemov' || value==='Ryan Lochte'"
    //   },
    //   width: 200
    // },
    {
      field: 'category',
      width: 400,
      rowSpan: rowSpan
      //   cellClassRules: {
      //     'cell-span': "value==='Aleksey Nemov' || value==='Ryan Lochte'"
      //   }
    },
    { field: 'type', width: 400 },
    { field: 'tco2e', width: 100 }
  ])
  const defaultColDef = useMemo(() => {
    return {
      width: 170,
      resizable: true
    }
  }, [])

  const onGridReady = useCallback(params => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then(resp => resp.json())
      .then(data => setRowData(data))
  }, [])

  return (
    <div style={containerStyle}>
      <div style={gridStyle} className='ag-theme-alpine'>
        <AgGridReact
          rowData={people}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          suppressRowTransform={true}
          onGridReady={onGridReady}
        ></AgGridReact>
      </div>
    </div>
  )
}
