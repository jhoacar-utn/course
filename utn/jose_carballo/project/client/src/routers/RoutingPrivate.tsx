import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { getTokenCredencial } from '../services';


interface Props {
  children: JSX.Element | JSX.Element[];
}
const RoutingPrivate = ({ children }: Props )=> {
  const { isLogin } = useContext(AuthContext)

  const isLoggedIn = () => getTokenCredencial() || isLogin;
  return (
      <>
      {(!isLoggedIn() && <Navigate to='/' />) ||
        children}
      </>
  )
}

export default RoutingPrivate
