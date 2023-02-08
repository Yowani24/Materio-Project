import React, { useState } from 'react'

import { ObjectSchema } from 'yup'

import MaterialReactTable, { MaterialReactTableProps } from 'material-react-table'

import { MRT_Localization_PT } from 'material-react-table/locales/pt'

import { Box, Chip, IconButton, Stack, SxProps, createTheme, ThemeProvider } from '@mui/material'

import { Delete, Edit, ExpandLess, ExpandMore } from '@mui/icons-material'

const defaultTheme = createTheme({
  palette: {
    background: {
      default: '#f5f5f5'
    }
  }
})

const chipStyle = {
  width: '1.2rem',

  height: '1.2rem'
}

const colors = {
  success: { backgroundColor: '#6ad01f' },

  warning: { backgroundColor: '#ffca64' },

  error: { backgroundColor: '#ff6166' }
}

// export type TableProps<TData extends Record<string, any> = {}> = {

//   errors: Partial<Record<keyof TData, string>>;

//   validator: ObjectSchema<TData>;

//   initialPageSize?: number;

//   onRowSave?: (value: TData) => void;

//   onEditRowCancel?: () => void;

//   onRowDelete?: (value: TData) => void;

// } & Omit<MaterialReactTableProps<TData>, 'renderRowActions'>;

export default function Table({
  renderDetailPanel,

  enableRowActions,

  initialPageSize = 10,

  onEditRowCancel,

  onRowDelete,

  onRowSave,

  validator,

  columns,

  errors,

  data
}) {
  const [expanded, setExpanded] = useState({})

  const handleValidate = value => {
    try {
      validator.validateSync(value)

      return colors.success
    } catch (error) {
      return colors.error
    }
  }

  const handleEditRowSave = ({ exitEditingMode, values, row }) => {
    if (!Object.keys(errors).length) {
      exitEditingMode()

      if (!onRowSave) return

      const newValue = { ...data[row.index], ...values }

      onRowSave(newValue)
    }
  }

  const handleEditRowCancel = () => {
    onEditRowCancel && onEditRowCancel()
  }

  const handleRowDelete = data => {
    onRowDelete && onRowDelete(data)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <MaterialReactTable
        localization={MRT_Localization_PT}
        enableDensityToggle={false}
        columns={columns}
        data={data}
        enableHiding={false}
        enableEditing={enableRowActions}
        enableRowActions={enableRowActions}
        renderDetailPanel={renderDetailPanel}
        onEditingRowSave={handleEditRowSave}
        onEditingRowCancel={handleEditRowCancel}
        initialState={{
          pagination: {
            pageIndex: 0,

            pageSize: initialPageSize
          },

          columnVisibility: {
            'mrt-row-expand': false
          },

          columnPinning: {
            left: ['mrt-row-actions']
          }
        }}
        state={{
          expanded
        }}
        displayColumnDefOptions={{
          'mrt-row-actions': {
            muiTableHeadCellProps: {
              align: 'center'
            }
          }
        }}
        renderRowActions={({ row, table }) => {
          const color = handleValidate(data[row.index])

          return (
            <>
              <Stack direction='row' justifyContent='center'>
                <Box padding='0.6rem 0.5rem'>
                  <Chip sx={chipStyle} style={color} />
                </Box>

                <IconButton onClick={() => table.setEditingRow(row)}>
                  <Edit />
                </IconButton>

                <IconButton onClick={() => handleRowDelete(data[row.index])}>
                  <Delete />
                </IconButton>

                {renderDetailPanel && (
                  <IconButton onClick={() => setExpanded({ [row.index]: !expanded[row.index] })}>
                    {expanded[row.index] ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                )}
              </Stack>
            </>
          )
        }}
      />
    </ThemeProvider>
  )
}
