import { useState } from 'react';
import { Avatar, Drawer, IconButton, Paper, Stack} from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import RobloxIcon from './assets/robloxIcon.svg';
import RobuxIcon from './assets/robux_gold.svg';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonDropdown from '../../components/ButtonDropdown';
import avatarPrincipal from '../../img/avatar-principal.jpg';
import './topbar.css';
import { Sidebar } from '../sidebar/Sidebar';


export const Topbar = () => {
    const [isSidebar, setIsSidebar] = useState(false)
    const [isSidebarMobile, setIsSidebarMobile] = useState(false)

    const toggleSidebarClose=()=>{
        setIsSidebar(true)
        setIsSidebarMobile(false)
    }

    const handleSideBarTransitionEnd = () => {
        setIsSidebar(false);
      };
    
      const handleDrawerToggle = () => {
        if (!isSidebar) {
            setIsSidebarMobile(!isSidebarMobile);
        }
      };


  return (
    <header className="topbar h-10 max-md:h-20 w-full z-50 bg-neutral-900 flex flex-row flex-wrap items-center justify-between text-base text-white font-semibold fixed">
        {/* logo */}
        <div className="item-topbar-logo w-1/12 pl-5 h-full items-center flex flex-row max-md:justify-start justify-stretch">
            <div>
                <IconButton onClick={()=>handleDrawerToggle(true)} edge='start' sx={{color:'#ffffff', display: { xl: 'none' } }}><MenuIcon/></IconButton>
                <Drawer 
                variant="temporary"
                open={isSidebarMobile}
                onTransitionEnd={handleSideBarTransitionEnd}
                onClose={toggleSidebarClose}
                ModalProps={{
                keepMounted: true,
                }}
                sx={{
                display: { xs:'fixed',sm: 'fixed', xl: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box',width: 160, backgroundColor:'transparent', overflow:'hidden'},
                '& .MuiModal-backdrop':{backgroundColor:'transparent',zIndex:30},
                zIndex:30,
                backgroundColor:'transparent'
                }}
                >
                    <Sidebar/>
                </Drawer>
                <Drawer
                variant="permanent"
                sx={{
                    display: {xs:'none', sm: 'none', xl: 'fixed' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 160, backgroundColor:'transparent', overflow:'hidden'},
                    backgroundColor:'transparent'
                }}
                open
                >
                    <Sidebar/>
                </Drawer>
            </div>
            <img className='logo h-3/4 fill cursor-pointer' src={RobloxIcon} alt="Roblox logo"/>
        </div>
        {/* nav */}
        <Stack direction='row' className="item-topbar-nav w-4/12 h-full leading-10 items-stretch justify-center">
            {['Charts','Marketplace','Create','Robux'].map((data)=>(
                <Paper key={data}  sx={{borderRadius:0,backgroundColor:'transparent',color:'#fff'}} className='w-1/4 hover:border-b-2 cursor-pointer text-center'>
                    <a href='#' className=''>{data}</a>
                </Paper>  
            ))}
        </Stack>

        <div className="item-topbar-util flex flex-row max-md:w-full w-6/12 h-full justify-items-end justify-end items-center">
            {/* search */}
            <div className="max-md:w-full w-3/5 h-full">
                <div className='hidden max-md:flex max-md:flex-row-reverse max-md:items-center max-md:h-full'>
                    <SearchIcon />
                </div>
                <div className='relative visible py-2 w-full max-md:hidden'>
                    <input type="search" placeholder="Search" 
                    className="block h-3/4 max-md:w-3/5 w-2/3 pb-1 rounded-md border border-zinc-700 pl-10 text-white text-sm shadow-sm bg-zinc-950
                    placeholder:text-zinc-400 placeholder:font-extralight sm:text-sm sm:leading-6"/>
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="while">
                            <path fill="white" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip="evenodd"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="flex flex-row max-md:w-full w-fit p-0 justify-end justify-items-end h-full">
                {/* avatar */}
                <div id="avatarTopBar" className='flex h-full w-fit flex-row items-center'>
                    <Avatar
                    sx={{ width: 28, height: 28, fontSize:"14px"}}
                    src={avatarPrincipal}
                    ></Avatar>
                    <div className='flex flex-row items-center'>
                        <p className="font-medium text-white text-xs pl-2 hover:underline max-lg:hidden">SV_HPPY </p>
                        <span style={{fontSize:'10px'}} className='text-xsmall font-medium text-stone-500 ml-[4px]'>+13</span>
                    </div>
                   
                </div>
                {/* notificaciones */}
                <div className=' w-1/4'>
                    <ButtonDropdown
                    menuItems={[]}
                    style={{paddingRight:0,paddingLeft:0}}
                    transparent
                    >
                        <NotificationsIcon sx={{width:'28px',height:"28px"}}/>
                    </ButtonDropdown>
                    
                </div>
                {/* robux */}
                <div className='h-full flex flex-row items-center w-1/4 text-xl font-medium'>
                    <ButtonDropdown
                    menuItems={['Buy Robux','My Transactions','Redeem Roblox Codes']}
                    style={{paddingRight:0,paddingLeft:0}}
                    transparent
                    >
                        <img src={RobuxIcon} alt="Robux Coin" className='w-7 h-7'/>
                        <p className='text-lg font-medium max-md:hidden'>270</p>
                    </ButtonDropdown>
                </div>
                {/* setting */}
                <div id="settings" className=' w-1/4'>
                    <ButtonDropdown
                    style={{paddingRight:0,paddingLeft:0}}
                    menuItems={['Settings','Quick Sign In','Help & Safety','Switch Account','Logout']}
                    transparent
                    >
                        <SettingsOutlinedIcon sx={{width:'28px',height:"28px"}}/>
                    </ButtonDropdown>
                </div>
            </div>
        </div>
    </header>
  )
}