import React, { useMemo } from 'react'
import MaterialReactTable from 'material-react-table'
import { FiEdit } from 'react-icons/fi'
import { FaRegTrashAlt } from 'react-icons/fa'
import { BiMessageDetail } from 'react-icons/bi'
import { AiOutlineProfile } from 'react-icons/ai'
import Circle from 'mdi-material-ui/Circle'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'

const data = [
  {
    id: 1,
    categoria_emissoes: 'Floresta plantada',
    base: 2022,
    unidade_operacional: 'kg',
    setor: 'Setor',
    talhao: '0036-A',
    clone: 'Clone',
    idade: '7 anos',
    area: '200 ha',
    volume: `100.000 m3/ha`,
    conta_op: 'sim'
  },
  {
    id: 2,
    categoria_emissoes: 'Floresta plantada',
    base: 2022,
    unidade_operacional: 'kg',
    setor: 'Setor',
    talhao: '0036-A',
    clone: 'Clone',
    idade: '7 anos',
    area: '200 ha',
    volume: `100.000 m3/ha`,
    conta_op: 'sim'
  },
  {
    id: 3,
    categoria_emissoes: 'Floresta plantada',
    base: 2022,
    unidade_operacional: 'kg',
    setor: 'Setor',
    talhao: '0036-A',
    clone: 'Clone',
    idade: '7 anos',
    area: '200 ha',
    volume: `100.000 m3/ha`,
    conta_op: 'sim'
  },
  {
    id: 4,
    categoria_emissoes: 'Floresta plantada',
    base: 2022,
    unidade_operacional: 'kg',
    setor: 'Setor',
    talhao: '0036-A',
    clone: 'Clone',
    idade: '7 anos',
    area: '200 ha',
    volume: `100.000 m3/ha`,
    conta_op: 'sim'
  }
]

const TestDatagrid = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        enablePinning: false,
        header: 'ID',
        size: 50
      },
      {
        accessorKey: 'categoria_emissoes',
        header: 'Cat. Emissões'
      },
      {
        accessorKey: 'base',
        header: 'Base'
      },
      {
        accessorKey: 'unidade_operacional',
        header: 'Unid. Operacional'
      },
      {
        accessorKey: 'setor',
        header: 'Setor'
      },

      {
        accessorKey: 'talhao',
        header: 'Talhão'
      },
      {
        accessorKey: 'clone',
        header: 'Clone'
      },
      {
        accessorKey: 'idade',
        header: 'Idae'
      },
      {
        accessorKey: 'area',
        header: 'Área'
      },
      {
        accessorKey: 'volume',
        header: 'Volume'
      },
      {
        accessorKey: 'conta_op',
        header: 'Cont. op'
      },
      {
        accessorKey: 'status',
        header: 'Status',
        enableEditing: false,
        Cell: () => {
          return <Circle sx={{ fontSize: '1rem', color: '#16B1FF' }} />
        }
      },
      {
        enablePinning: true,
        accessorKey: 'actions',
        enableEditing: false,
        header: 'Acções',
        size: 100,
        Cell: () => {
          return (
            <div sx={{ display: 'flex', alignItems: 'center' }}>
              <FiEdit style={{ margin: '0 8px 0 0', cursor: 'pointer' }} />
              <FaRegTrashAlt style={{ margin: '0 8px', cursor: 'pointer' }} />
              <BiMessageDetail style={{ margin: '0 8px', cursor: 'pointer' }} />
            </div>
          )
        }
      }
    ],
    []
  )

  return (
    <Box>
      <MaterialReactTable
        columns={columns}
        data={data}
        enablePinning
        initialState={{ columnPinning: { left: ['status', 'actions'] } }}
        enableTopToolbar={false}
        enablePagination={false}
        icons={{
          //change sort icon, connect internal props so that it gets styled correctly
          ArrowDownwardIcon: props => <BiMessageDetail style={{ margin: '0 8px', cursor: 'pointer' }} {...props} />,
          SearchIcon: () => <BiMessageDetail style={{ margin: '0 8px', cursor: 'pointer' }} />,
          SortIcon: props => <BiMessageDetail style={{ margin: '0 8px', cursor: 'pointer' }} {...props} /> //best practice
        }}
        // enableEditing
        // editingMode='modal'
        muiTableBodyProps={{
          sx: {
            '& td': {
              backgroundColor: '#fff',
              border: 'none'
            }
          }
        }}
        muiTableHeadCellProps={{
          sx: {
            '& .MuiSvgIcon-fontSizeMedium': {
              display: 'none'
            }
          }
        }}
        muiTablePaperProps={{
          elevation: 0,
          sx: {
            borderRadius: '0',
            border: '#fff',
            // '& .MuiToolbar-root': { display: 'none' },
            '& ::-webkit-scrollbar': { height: 10, background: 'lightgray' }
          }
        }}
        muiTableBodyCellProps={{
          sx: {
            borderRight: '#fff'
          }
        }}
        renderBottomToolbarCustomActions={({ table }) => {
          return (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: 8 }}>
              <AiOutlineProfile size={22} style={{ marginRight: 8 }} />
              <Button
                variant='outlined'
                color='secondary'
                sx={{
                  borderRadius: 0.5,
                  textTransform: 'capitalize',
                  padding: '5px 10px',
                  fontSize: 12
                }}
              >
                Exportar
              </Button>
              <Button
                variant='outlined'
                color='secondary'
                sx={{
                  borderRadius: 0.5,
                  textTransform: 'capitalize',
                  padding: '5px 10px',
                  fontSize: 12
                }}
              >
                Importar
              </Button>
              <Button
                variant='outlined'
                color='secondary'
                sx={{
                  borderRadius: 0.5,
                  textTransform: 'capitalize',
                  padding: '5px 10px',
                  fontSize: 12
                }}
              >
                Baixar modelo
              </Button>
            </div>
          )
        }}
      />
    </Box>
  )
}

export default TestDatagrid
