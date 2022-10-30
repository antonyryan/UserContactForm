import { Field } from 'formik'
import * as Yup from 'yup'

import FormInput from '../../components/FormInput'

export const validationSchema = Yup.object().shape({
  first_name: Yup.string().required('This field is required!'),
  last_name: Yup.string().required('This field is required!'),
  email: Yup.string().required('This field is required!'),
  us_state: Yup.string().required('This field is required!'),
  zip_code: Yup.string().required('This field is required!'),
})

const UserContactForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field component={FormInput} htmlId="first_name" type="text" name="first_name" label="First Name" />
      <Field component={FormInput} htmlId="last_name" type="text" name="last_name" label="First Name" />
      <Field component={FormInput} htmlId="email" type="email" name="email" label="Email" />
      {/* <Field component={FormInput} htmlId="first_name" type="text" name="first_name" label="First Name" /> */}
      <Field component={FormInput} htmlId="zip_code" type="text" name="zip_code" label="Zip Code" />
    </form>
  )
}

export default UserContactForm
