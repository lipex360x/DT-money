import { Outlet } from 'react-router-dom'
import { Header } from '@/components/organisms/Header'

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default DefaultLayout
