import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Field } from 'formik'

import FormInput from '../FormInput'
import FormSelect from '../FormSelect'
import { usStates } from './USStates'

const UserContactForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Field component={FormInput} htmlId="first_name" type="text" name="first_name" label="First Name" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field component={FormInput} htmlId="last_name" type="text" name="last_name" label="Last Name" />
        </Grid>
      </Grid>
      <Field component={FormInput} htmlId="email" type="email" name="email" label="Email" />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Field component={FormSelect} htmlId="us_state" name="us_state" label="US State" options={usStates} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field component={FormInput} htmlId="zip_code" type="text" name="zip_code" label="Zip Code" />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button sx={{ right: 0 }} type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </form>
  )
}

export default UserContactForm
