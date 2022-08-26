import { Routes, Route } from 'react-router-dom'
import DefaultLayout from '@/components/templates/DefaultLayout'
import { TransactionsPage } from '@/pages/TransactionsPage'

export const Public = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<TransactionsPage />} />
      </Route>
    </Routes>
  )
}
