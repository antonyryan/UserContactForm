import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

import UserContactForm from '../../components/UserContactForm'

const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
  us_state: '',
  zip_code: '',
}

export const validationSchema = Yup.object().shape({
  first_name: Yup.string()
    .required('This field is required!')
    .matches(/[A-Z][a-z]*/, 'Invalid first name given'),
  last_name: Yup.string()
    .required('This field is required!')
    .matches(/[a-z ,.'-]+$/i, 'Invalid last name given'),
  email: Yup.string().required('This field is required!').email(),
  us_state: Yup.string().required('This field is required!'),
  zip_code: Yup.string()
    .required('This field is required!')
    .matches(/^\d{5}(-\d{4})?$/, 'Is not in correct format'),
})

const Home = () => {
  const navigate = useNavigate()
  const handleSubmit = useCallback(
    (payload, formActions) => {
      console.log({ formActions })
      formActions.setSubmitting(true)
      axios
        .post('/api/create_user', payload)
        .then(res => {
          formActions.setSubmitting(false)
          if (res.status === 200) {
            navigate('/user/submission_success')
          }
        })
        .catch(err => {
          formActions.setSubmitting(false)
          if (err.response.status === 403 && err.response.data === 'This email already exists') {
            formActions.setFieldError('email', err.response.data)
          }
          console.log({ err })
        })
    },
    [navigate],
  )

  return (
    <Container>
      <Paper elevation={5}>
        <Box
          sx={{
            padding: '100px 10%',
            margin: '50px 0 150px',
          }}>
          <Typography variant="h4" sx={{ marginBottom: '30px' }}>
            User Contact Form
          </Typography>
          <Formik
            component={UserContactForm}
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            enableReinitialize
          />
        </Box>
      </Paper>
    </Container>
  )
}

export default Home
