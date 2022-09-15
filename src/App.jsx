import { Route, Routes, Navigate } from 'react-router-dom'
import { Suspense } from 'react'

import AddProduct from 'containers/addProduct'
import CancelMembership from 'containers/cancelMembership'
import CancellationSurvey from 'containers/cancellationSurvey'
import Home from 'containers/home'

const App = () => (
  <Suspense fallback={<div />}>
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/add-product' element={<AddProduct />} />
      <Route path='/cancel-membership' element={<CancelMembership />} />
      <Route path='/cancellation-survey' element={<CancellationSurvey />} />

      <Route path='*' element={<Navigate replace to='/home' />} />
    </Routes>
  </Suspense>
)

export default App
