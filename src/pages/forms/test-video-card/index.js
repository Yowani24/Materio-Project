// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// ** Icons Imports

import CardHeader from '@mui/material/CardHeader'
import Chip from '@mui/material/Chip'

import ReactPlayer from 'react-player'

// Styled Grid component
const StyledGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  [theme.breakpoints.up('md')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

const TestVideoCard = () => {
  return (
    <Card>
      <CardHeader
        title={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ fontSize: 20 }}>Observações para Preenchimento</Typography>{' '}
            <Chip
              size='small'
              label='Ocultar'
              sx={{
                ml: 4,
                height: 24,
                fontSize: '0.875rem',
                color: 'text.secondary',
                '& .MuiChip-label': { px: 2.5 }
              }}
            />
          </Box>
        }
        titleTypographyProps={{ variant: 'h6' }}
      />
      <Box sx={{ display: 'flex', padding: 4, paddingTop: 0 }}>
        <Box
          sx={{
            background: 'lightgray',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 400,
            height: 250,
            borderRadius: 2,
            marginRight: 5,
            overflow: 'hidden'
          }}
        >
          <ReactPlayer url='https://youtu.be/uD4izuDMUQA' playing />
        </Box>

        <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', flexDirection: 'column' }}>
          <div>
            <Typography variant='h6'>Estoque de carbono</Typography>
            <p style={{ marginBottom: '-12px', fontSize: 14 }}>
              (A) O primeiro passo para a utilização da ferramenta é a escolha do ano inventariado. Esta escolha é
              essencial, pois há fatores emissão que variam com base no ano escolhido.
            </p>
            <p style={{ marginBottom: '-12px', fontSize: 14 }}>
              (B) Preencha somente as células LARANJA CLARO das abas da Ferramenta.
            </p>
            <p style={{ marginBottom: '-12px', fontSize: 14 }}>
              (C) Atente-se para a utilização das unidades corretas nos dados inseridos. Se necessário, converta as
              unidades utilizando a aba 'Fatores de Conversão' antes de preencher a planilha.
            </p>
            <p style={{ marginBottom: '-12px', fontSize: 14 }}>
              (D) Utilize a notação do sistema brasileiro de unidades de medidas, utilizando "." para designar milhares
              e seus múltiplos e "," para designar decimais.
            </p>
            <p style={{ marginBottom: '-12px', fontSize: 14 }}>
              (E) O menu Navugação, presente na parte superior de todas as abas da ferramenta, pode ser utilizado para
              facilitar a navegação do usuário.
            </p>
            <p style={{ marginBottom: '-12px', fontSize: 14 }}>
              (F) Orientações para cada método de cálculo estão inclusas no cabeçalho de cada aba.
            </p>
          </div>
          <Button
            sx={{
              color: '#fff',
              textTransform: 'capitalize',
              ':hover': { backgroundColor: 'rgba(26,47,80)' },
              backgroundColor: 'rgba(26,47,97)',
              marginBottom: '16px'
            }}
          >
            Saiba mais
          </Button>
        </div>
      </Box>
    </Card>
  )
}

export default TestVideoCard
