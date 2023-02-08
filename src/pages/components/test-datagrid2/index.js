// import React, { FC, useCallback, useMemo, useState } from 'react'
// import MaterialReactTable from 'material-react-table'
// import {
//   Typography,
//   Box,
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   IconButton,
//   MenuItem,
//   Stack,
//   TextField,
//   Tooltip
// } from '@mui/material'
// import { Delete, Edit } from '@mui/icons-material'

// const data = [
//   {
//     id: 1,
//     categoria_emissoes: 'Floresta plantada',
//     base: 2022,
//     unidade_operacional: 'kg'
//   },
//   {
//     id: 2,
//     categoria_emissoes: 'Floresta plantada',
//     base: 2022,
//     unidade_operacional: 'kg'
//   }
// ]

// const DataGrid2 = () => {
//   const [tableData, setTableData] = useState(() => data)
//   const [validationErrors, setValidationErrors] = useState({})

//   const columns = useMemo(
//     () => [
//       {
//         accessorKey: 'id',
//         header: 'ID',
//         size: 50
//       },
//       {
//         accessorKey: 'categoria_emissoes',
//         header: 'Categoria de emissoes'
//       },
//       {
//         accessorKey: 'base',
//         header: 'Base'
//       },
//       {
//         accessorKey: 'unidade_operacional',
//         header: 'Unidade operacional'
//       }
//     ],
//     []
//   )

//   const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
//     if (!Object.keys(validationErrors).length) {
//       tableData[row.index] = values
//       //send/receive api updates here, then refetch or update local table data for re-render
//       setTableData([...tableData])
//       exitEditingMode() //required to exit editing mode and close modal
//     }
//   }

//   const handleCancelRowEdits = () => {
//     setValidationErrors({})
//   }

//   const handleDeleteRow = useCallback(
//     row => {
//       if (!confirm(`Are you sure you want to delete ${row.getValue('firstName')}`)) {
//         return
//       }
//       //send api delete request here, then refetch or update local table data for re-render
//       tableData.splice(row.index, 1)
//       setTableData([...tableData])
//     },
//     [tableData]
//   )

//   return (
//     <div style={{ marginTop: 40 }}>
//       <MaterialReactTable
//         columns={columns}
//         data={data}
//         enableTopToolbar={false}
//         enablePagination={false}
// renderDetailPanel={({ row }) => (
//   <Box
//     sx={{
//       display: 'grid',
//       margin: 'auto',
//       gridTemplateColumns: '1fr 1fr',
//       width: '100%'
//     }}
//   >
//     <Typography>Address: {row.original.address}</Typography>
//     <Typography>City: {row.original.city}</Typography>
//     <Typography>State: {row.original.state}</Typography>
//     <Typography>Country: {row.original.country}</Typography>
//   </Box>
// )}
//         displayColumnDefOptions={{
//           'mrt-row-actions': {
//             muiTableHeadCellProps: {
//               align: 'center'
//             },
//             size: 120
//           }
//         }}
//         //   data={tableData}
//         editingMode='modal' //default
//         enableColumnOrdering
//         enableEditing
//         onEditingRowSave={handleSaveRowEdits}
//         onEditingRowCancel={handleCancelRowEdits}
//         renderRowActions={({ row, table }) => (
//           <Box sx={{ display: 'flex', gap: '1rem' }}>
//             <Tooltip arrow placement='left' title='Edit'>
//               <IconButton>
//                 <Edit />
//               </IconButton>
//             </Tooltip>
//             <Tooltip arrow placement='right' title='Delete'>
//               <IconButton color='error'>
//                 <Delete />
//               </IconButton>
//             </Tooltip>
//           </Box>
//         )}
//       />
//     </div>
//   )
// }

// export default DataGrid2

import React, { useMemo, useRef, useState } from 'react'

import { object } from 'yup'
import Table from '../table-componentz'
// import Table, { TableProps } from '..'

// import { currencyFmt } from 'library/src/masks'

// import { ageValidator, nameValidator } from 'library/src/validators'

// const validator = object({
//   firstName: nameValidator,

//   middleName: nameValidator,

//   lastName: nameValidator,

//   age: ageValidator
// })

export default function ExampleTable({ ...rest }) {
  const refBackspace = useRef(false)

  const [errors, setErrors] = useState({})

  const data = [
    {
      id: 1,
      categoria_emissoes: 'Floresta plantada',
      base: 2022,
      unidade_operacional: 'kg'
    },
    {
      id: 2,
      categoria_emissoes: 'Floresta plantada',
      base: 2022,
      unidade_operacional: 'kg'
    }
  ]

  const columns =
    (() => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 50
      },
      {
        accessorKey: 'categoria_emissoes',
        header: 'Categoria de emissoes'
      },
      {
        accessorKey: 'base',
        header: 'Base'
      },
      {
        accessorKey: 'unidade_operacional',
        header: 'Unidade operacional'
      }
    ],
    [])

  //   const columns =
  //     (() => [
  //       {
  //         accessorKey: 'firstName',

  //         header: 'Name'

  //         // muiTableBodyCellEditTextFieldProps: {
  //         //   error: !!errors?.firstName,

  //         //   helperText: errors?.firstName,

  //         //   onBlur: async e => {
  //         //     try {
  //         //       await nameValidator.validate(e.target.value)

  //         //       delete errors.firstName

  //         //       setErrors({ ...errors })
  //         //     } catch (error) {
  //         //       setErrors(prev => ({ ...prev, firstName: error.message }))
  //         //     }
  //         //   }
  //         // }
  //       },

  //       {
  //         accessorKey: 'middleName',

  //         header: 'Middle Name'

  //         // muiTableBodyCellEditTextFieldProps: {
  //         //   error: !!errors?.middleName,

  //         //   helperText: errors?.middleName,

  //         //   onBlur: async e => {
  //         //     try {
  //         //       await nameValidator.validate(e.target.value)

  //         //       delete errors.middleName

  //         //       setErrors({ ...errors })
  //         //     } catch (error) {
  //         //       setErrors(prev => ({ ...prev, middleName: error.message }))
  //         //     }
  //         //   }
  //         // }
  //       },

  //       {
  //         accessorKey: 'lastName',

  //         header: 'Last Name'

  //         // muiTableBodyCellEditTextFieldProps: {
  //         //   error: !!errors?.lastName,

  //         //   helperText: errors?.lastName,

  //         //   onBlur: async e => {
  //         //     try {
  //         //       await nameValidator.validate(e.target.value)

  //         //       delete errors.lastName

  //         //       setErrors({ ...errors })
  //         //     } catch (error) {
  //         //       setErrors(prev => ({ ...prev, lastName: error.message }))
  //         //     }
  //         //   }
  //         // }
  //       },

  //       {
  //         accessorKey: 'age',

  //         header: 'Age'
  //       },

  //       {
  //         accessorKey: 'price',

  //         header: 'Price'

  //         // muiTableBodyCellEditTextFieldProps: {
  //         //   onKeyDown: e => (refBackspace.current = e.key === 'Backspace'),

  //         //   onChange: e => {
  //         //     if (!refBackspace.current) e.target.value = currencyFmt(e.target.value)
  //         //   }
  //         // }
  //       },

  //       {
  //         accessorKey: 'progress',

  //         header: 'Progress'
  //       }
  //     ],
  //     [errors])

  return (
    <Table
      columns={columns}
      errors={errors}
      data={data}
      initialPageSize={10}
      onEditRowCancel={() => setErrors({})}
      {...rest}
    />
    // <p>AQUI</p>
  )
}
