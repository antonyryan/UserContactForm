import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
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
  first_name: Yup.string().required('This field is required!'),
  last_name: Yup.string().required('This field is required!'),
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
      console.log({ payload })
      axios
        .post('/api/create_user', payload)
        .then(res => {
          if (res.status === 200) {
            navigate('/user/submission_success')
          }
        })
        .catch(err => {
          console.log({ err })
        })
    },
    [navigate],
  )

  return (
    <Container>
      <Box
        sx={{
          padding: '100px 10%',
        }}>
        <Box>UserContactForm</Box>
        <Formik
          component={UserContactForm}
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          enableReinitialize
        />
      </Box>
    </Container>
  )
}

export default Home
