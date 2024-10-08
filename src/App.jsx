import { Footer } from './pages/footer/Footer'
import { MainPage } from './pages/mainPage/MainPage'
import { Topbar } from './pages/topbar/Topbar'

function App() {
  return (
    <div className='h-fit bg-zinc-800 font-sans'>
        <Topbar/>
        <main className='flex pt-12 max-md:pt-24 max-md:px-5 px-9 max-2xl:ml-[0px] ml-[162px] flex-row h-fit bg-zinc-800 justify-stretch justify-items-stretch overflow-x-auto'>
          <MainPage />
        </main>
        <Footer/>
    </div>
  )
}

export default App
