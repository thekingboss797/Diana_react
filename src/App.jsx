import { Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/mainPage/MainPage'
import { Home } from './pages/home/Home'
import { Settings } from './pages/settings/Settings'
import { Login } from './pages/login/Login'
import { UserProvider } from './useContext/user/UserProvider'


function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='/' element={<MainPage />}/>
          <Route path='/settings' element={<Settings/>}/>
        </Route>
        <Route path='login' element={<Login />}/>
      </Routes>
      </UserProvider>
  )
}

export default App
