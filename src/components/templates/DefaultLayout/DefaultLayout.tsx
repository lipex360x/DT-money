import { Outlet } from 'react-router-dom'
import { Container } from '@/components/bosons/Container'

const DefaultLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  )
}

export default DefaultLayout
