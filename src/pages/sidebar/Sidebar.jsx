import { useEffect, useState } from "react";
import { Avatar, List, ListItem, ListItemAvatar } from "@mui/material"
//icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import BackpackOutlinedIcon from '@mui/icons-material/BackpackOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AdUnitsOutlinedIcon from '@mui/icons-material/AdUnitsOutlined';
import AvatarIcon from './assets/avatar.svg';
import BlogIcon from './assets/blog.svg';
import TradeIcon from './assets/trade.svg';
import {fetchUser} from '../../helpers/fetchUser';



export const Sidebar = () => {

  const [dataFetch, setDataFetch] = useState({
    user:[],
  })
  const {user}= dataFetch;
  const getFetch= async()=>{
    const newUser = await fetchUser();    
    setDataFetch({
      user:newUser,
    })
  }

  useEffect(() => {
    getFetch();
  }, [])

  return (
    <nav className="h-full w-4/8 justify-start flex-none text-lg bg-neutral-900 fixed top-10 max-md:top-20 overflow-x-auto">
        <List>
            <ListItemAvatar className="p-3 flex flex-row pb-2">
            <Avatar 
            sx={{ width: 24, height: 24, fontSize:"10px"}}
            src={user[0]?.image ||''}
            >?</Avatar>
            <p className="font-semibold text-white text-base pl-2">{user[0]?.name ||null}</p>
            </ListItemAvatar>
        </List>
        <hr className=" border-zinc-600 py-1 w-4/5 m-auto"/>
        <List className="font-semibold  text-white space-y-1">
            <ListItem><HomeOutlinedIcon/><a href="#">Home</a></ListItem>
            <ListItem><PermIdentityIcon/> <a href="#">Profile</a></ListItem>
            <ListItem><ChatOutlinedIcon/> <a href="#">Message</a></ListItem>
            <ListItem><PeopleAltOutlinedIcon/> <a href="#">Friend</a></ListItem>
            <ListItem className=" flex flex-row"><img src={AvatarIcon} alt="Avatar Icon" className="w-6 h-6 fill-zinc-500"/><a href="#">Avatar</a></ListItem>
            <ListItem><BackpackOutlinedIcon/> <a href="#">Inventory</a></ListItem>
            <ListItem className=" flex flex-row"><img src={TradeIcon} alt="Avatar Icon" className="w-6 h-6"/><a href="#">Trade</a></ListItem>
            <ListItem><Groups2OutlinedIcon/> <a href="#">Groups</a></ListItem>
            <ListItem className=" flex flex-row"><img src={BlogIcon} alt="Avatar Icon" className="w-6 h-6"/><a href="#">Blog</a></ListItem>
            <ListItem><ShoppingCartOutlinedIcon /> <a href="#">Official Store</a></ListItem>
            <ListItem><AdUnitsOutlinedIcon /> <a href="#">Gift Cards</a></ListItem>
            <ListItem><button className="mt-[15px] mb-[80px] w-full p-1 text-black bg-white rounded-md">Premium</button></ListItem>
        </List>
    </nav>
  )
}