import { BounceLoader } from 'react-spinners'
import './Loading.css'

export default function Loading() {
  return (
    <div id="loading" data-testid="loading">
      <BounceLoader color="#92817a" />
    </div>
  )
}
