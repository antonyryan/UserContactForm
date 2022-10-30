import React from 'react'
import { Route, Routes as Switch } from 'react-router-dom'

import Home from './Home'
import SubmissionSuccess from "./SubmissionSuccess"

function Routes() {
  return (
    <Switch>
      <Route exact path="user/new" element={<Home />} />
      <Route exact path="user/submission_success" element={<SubmissionSuccess />} />
    </Switch>
  )
}

export default Routes
