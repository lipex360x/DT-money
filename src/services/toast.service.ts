import { toast } from 'react-hot-toast'

const success = (content: string) => {
  return toast.success(content)
}

const error = (content: string) => {
  return toast.error(content)
}

const loading = () => {
  return toast.loading('Aguarde...')
}

export default {
  success,
  error,
  loading
}
