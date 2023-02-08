// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Circle from 'mdi-material-ui/Circle'
import MuiAvatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Chip from '@mui/material/Chip'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'

// ** Icons Imports
import Fab from '@mui/material/Fab'
import { BiMenuAltLeft } from 'react-icons/bi'
import { HiLockClosed } from 'react-icons/hi'
import TestDatagrid from 'src/pages/components/test-datagrid'
import TestGrid2 from 'src/pages/components/test-datagrid2'
import DataGrid2 from 'src/pages/components/test-datagrid2'

const TestFormLayout = () => {
  // ** States

  return (
    <Card>
      <CardHeader
        title={
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Circle sx={{ mr: 1.8, fontSize: '1rem', color: '#16B1FF' }} />
              <Typography sx={{ fontSize: 20 }}>Floresta plantada</Typography>{' '}
              <Chip
                size='small'
                label='Preenchimento manual'
                sx={{
                  ml: 4,
                  height: 24,
                  fontSize: '0.875rem',
                  color: 'text.secondary',
                  '& .MuiChip-label': { px: 2.5 }
                }}
              />
            </div>
            {/* <Grid item xs={6}> */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p style={{ marginRight: 20, fontSize: 16 }}>Editores:</p>
              <AvatarGroup max={6}>
                <MuiAvatar src='/images/avatars/1.png' />
                <MuiAvatar src='/images/avatars/2.png' />
                <MuiAvatar src='/images/avatars/3.png' />
                <MuiAvatar src='/images/avatars/4.png' />
                <MuiAvatar src='/images/avatars/5.png' />
                <MuiAvatar src='/images/avatars/6.png' />
                <MuiAvatar src='/images/avatars/7.png' />
              </AvatarGroup>
            </div>
            {/* </Grid> */}
          </Box>
        }
        titleTypographyProps={{ variant: 'h6' }}
      />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={2}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-outlined-label'>Ano base</InputLabel>
                <Select
                  label='Ano base'
                  defaultValue=''
                  id='demo-simple-select-outlined'
                  labelId='demo-simple-select-outlined-label'
                >
                  <MenuItem value={10}>2022</MenuItem>
                  <MenuItem value={20}>2021</MenuItem>
                  <MenuItem value={30}>2020</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={2}>
              <TextField fullWidth label='Categoria de emossões' placeholder='Floresta plantada' />
            </Grid>
            <Grid item xs={2}>
              <TextField fullWidth label='Unidade operacional' placeholder='Unidade operacional' />
            </Grid>
            <Grid item xs={2}>
              <TextField fullWidth label='Setor' placeholder='Setor' />
            </Grid>
            <Grid item xs={2}>
              <TextField fullWidth label='Talhão' placeholder='Talhão' />
            </Grid>
            <Grid item xs={2}>
              <TextField fullWidth label='Clone' placeholder='Clone' />
            </Grid>
            {/* ================================== */}
            <Grid item xs={2}>
              <TextField fullWidth label='Idade' placeholder='Idade' />
            </Grid>
            <Grid item xs={2}>
              <TextField fullWidth label='Área' placeholder='Área' />
            </Grid>
            <Grid item xs={2}>
              <TextField fullWidth label='Volume' placeholder='Volume' />
            </Grid>
            <Grid item xs={2}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-outlined-label'>Controle operacionale</InputLabel>
                <Select
                  label='Controle operacional'
                  defaultValue=''
                  id='demo-simple-select-outlined'
                  labelId='demo-simple-select-outlined-label'
                >
                  <MenuItem value={10}>Sim</MenuItem>
                  <MenuItem value={20}>Não</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-outlined-label'>Confiabilidade dos dados</InputLabel>
                <Select
                  label='Confiabilidade dos dados'
                  defaultValue=''
                  id='demo-simple-select-outlined'
                  labelId='demo-simple-select-outlined-label'
                >
                  <MenuItem value={10}>Primário</MenuItem>
                  <MenuItem value={20}>primário de terceiros</MenuItem>
                  <MenuItem value={30}>Secundário cáculo bases reais</MenuItem>
                  <MenuItem value={40}>Secundário premissas adotadas</MenuItem>
                  <MenuItem value={50}>Secundário extrapolação</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <TextField fullWidth label='Rastreabilidade do dado' placeholder='Rastreabilidade do dado' />
            </Grid>
            {/* ================== */}
            <Grid item xs={2}>
              <TextField fullWidth label='Observações' placeholder='Observações' />
            </Grid>

            <Grid item xs={12}>
              <Box
                sx={{
                  gap: 5,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 6
                }}
              >
                <div>
                  <Fab
                    variant='extended'
                    size='medium'
                    sx={{
                      color: '#fff',
                      textTransform: 'capitalize',
                      backgroundColor: '#56CA00',
                      ':hover': {}
                    }}
                  >
                    {/* <Plus sx={{ mr: 1 }} /> */}
                    <BiMenuAltLeft size={20} />
                    Adicionar
                  </Fab>
                  <Button
                    variant='outlined'
                    color='secondary'
                    style={{
                      borderRadius: 50,
                      marginLeft: 15,
                      textTransform: 'capitalize'
                      // boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.05)'
                    }}
                  >
                    Limpar
                  </Button>
                </div>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Fab
                    variant='extended'
                    size='medium'
                    sx={{ color: '#fff', textTransform: 'capitalize', backgroundColor: 'rgba(26,47,97)' }}
                  >
                    <HiLockClosed size={20} style={{ marginRight: 4 }} />
                    Finalizar
                  </Fab>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </form>
        <TestDatagrid />
        <DataGrid2 />
      </CardContent>
    </Card>
  )
}

export default TestFormLayout
