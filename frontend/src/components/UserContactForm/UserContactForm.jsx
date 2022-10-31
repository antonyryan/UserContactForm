import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { Field } from 'formik'
import * as Yup from 'yup'

import FormInput from '../../components/FormInput'

export const validationSchema = Yup.object().shape({
  first_name: Yup.string().required('This field is required!'),
  last_name: Yup.string().required('This field is required!'),
  email: Yup.string().required('This field is required!'),
  // us_state: Yup.string().required('This field is required!'),
  zip_code: Yup.string().required('This field is required!'),
})

const UserContactForm = ({ handleSubmit }) => {
  // console.log({handleSubmit})
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
      {/* <Field component={FormInput} htmlId="first_name" type="text" name="first_name" label="First Name" /> */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Field component={FormInput} htmlId="us_state" type="text" name="us_state" label="US State" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field component={FormInput} htmlId="zip_code" type="text" name="zip_code" label="Zip Code" />
        </Grid>
      </Grid>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  )
}

export default UserContactForm
