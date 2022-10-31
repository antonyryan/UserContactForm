import React from 'react'
import { Route, Routes as Switch } from 'react-router-dom'

import Home from './Home'
import SubmissionSuccess from './SubmissionSuccess'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Routes() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="user/new" element={<Home />} />
        <Route exact path="user/submission_success" element={<SubmissionSuccess />} />
        <Route path="*" element={<Home />} />
      </Switch>
      <Footer />
    </>
  )
}

export default Routes
