import { useContext } from 'react'
import { SundayContext } from './Management'

const Student = () => {
  let data = useContext(SundayContext)
  return (
    <div>{data}</div>
  )
}

export default Student