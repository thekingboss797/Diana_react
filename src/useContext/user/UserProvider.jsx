import { useState } from "react"
import PropTypes from 'prop-types';
import { UserContext } from "./UserContext"
import Cookies from "universal-cookie";

export const UserProvider = ({children}) => {
  const cookie = new Cookies();
  const [user, setUser] = useState(cookie.get('roblo')?cookie.get('roblo'):{});
  return (
    <UserContext.Provider value={{setUser,user}}>
        {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes={
  children:PropTypes.node.isRequired,
}
