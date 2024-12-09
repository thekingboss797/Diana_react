import { Outlet } from "react-router-dom"
import { Footer } from "../footer/Footer"
import { Topbar } from "../topbar/Topbar"


export const Home = () => {
  return (
    <div className='h-fit bg-zinc-800 font-sans'>
    <Topbar/>
    <main className='flex min-h-screen pt-12 max-md:pt-24 max-md:px-5 px-9 max-2xl:ml-[0px] ml-[162px] flex-row h-fit bg-zinc-800 justify-stretch justify-items-stretch overflow-x-auto'>
        <Outlet />
    </main>
    <Footer main={true}/>
</div>
  )
}
