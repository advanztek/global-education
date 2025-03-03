import { Routes, Route } from 'react-router-dom'
import { Layout } from '../Layout'
import { HomePage, LoginPage, RecoveryEmailPage, ResetPage, ResetPasswordPage } from '../Pages/Public'

export default function PublicRoutes () {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/reset' element={<ResetPage />}></Route>
          <Route path='/recovery-email' element={<RecoveryEmailPage />}></Route>
          <Route path='/reset-password' element={<ResetPasswordPage />}></Route>
        </Routes>
      </Layout>
    </>
  )
}
