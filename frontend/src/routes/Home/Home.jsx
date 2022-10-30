import React, { useCallback } from 'react'
import Box from '@mui/material/Box'
import { Formik } from 'formik'
import * as Yup from 'yup'

import UserContactForm from '../../components/UserContactForm'

const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
  us_state: '',
  zip_code: '',
}

export const validationSchema = Yup.object().shape({
  first_name: Yup.string().required('This field is required!'),
  last_name: Yup.string().required('This field is required!'),
  email: Yup.string().required('This field is required!'),
  us_state: Yup.string().required('This field is required!'),
  zip_code: Yup.string().required('This field is required!'),
})

const Home = () => {
  const handleSubmit = useCallback((a, b, c, d, e) => {
    console.log({ a, b, c, d, e })
  }, [])

  return (
    <Box>
      GGGGGG
      <Formik
        component={UserContactForm}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        enableReinitialize
      />
    </Box>
  )
}

export default Home
