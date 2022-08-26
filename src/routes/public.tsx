import { Routes, Route } from 'react-router-dom'
import DefaultLayout from '@/components/templates/DefaultLayout'
import { HomePage } from '@/pages/HomePage'

export const Public = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  )
}
