import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

export default function HomePage() {
  const isConnected = localStorage.getItem("connected");
  const navigate = useNavigate()
  useEffect(() => {
    if (isConnected) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [navigate, isConnected])
  return (
    <div>HomePage</div>
  )
}
