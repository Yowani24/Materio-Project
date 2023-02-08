// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Demo Components Imports
import FormLayoutsTabs from 'src/views/forms/form-layouts/FormLayoutsTabs'
import FormLayoutsBasic from 'src/views/forms/form-layouts/FormLayoutsBasic'
import FormLayoutsIcons from 'src/views/forms/form-layouts/FormLayoutsIcons'
import FormLayoutsSeparator from 'src/views/forms/form-layouts/FormLayoutsSeparator'
import FormLayoutsAlignment from 'src/views/forms/form-layouts/FormLayoutsAlignment'
import FormLayoutsCollapsible from 'src/views/forms/form-layouts/FormLayoutsCollapsible'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import TestFormLayout from 'src/pages/forms/TestFormLayout'
import TestVideoCard from 'src/pages/forms/test-video-card'

const InputComponent = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(4)} !important` }}>
          <TestVideoCard />
        </Grid>
        <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(4)} !important` }}>
          <TestFormLayout />
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default InputComponent
