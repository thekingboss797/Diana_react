import { Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/mainPage/MainPage'
import { Home } from './pages/home/Home'
import { Settings } from './pages/settings/Settings'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}>
        <Route path='/' element={<MainPage />}/>
        <Route path='/settings' element={<Settings/>}/>
      </Route>
    </Routes>
  )
}

export default App
