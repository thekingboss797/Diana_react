import { Box, ListItemButton, Typography } from "@mui/material"
import List from '@mui/material/List';
import { useEffect, useState } from "react";
import { fetchUser } from "../../helpers/fetchUser";

export const Settings = () => {
    const [dataFetch, setDataFetch] = useState({
        user:{},
      })
      const getFetch= async()=>{
        const newUser = await fetchUser();    
        setDataFetch({...newUser[0]})
      }
    
      useEffect(() => {
        getFetch();
      }, [])
      console.log(dataFetch)
  return (
    <div className="w-full mt-[16px] text-white ">
        <Box width={"900px"} margin={'auto'}>
            <Typography component='h2' fontSize={32} fontWeight={700} marginBottom={"16px"}>Settings</Typography>
            <div className="grid grid-cols-[160px,1fr]">
                <div>
                    <List>
                        {['Account Info','Security','Privacy & content maturity','Notifications','Payment Methods','Subscription','Parental Control','App Pemissions'].map((name,i)=>(
                            <>
                                <ListItemButton key={i} sx={{paddingY:'0px',display:'inline', margin:'0px'}} divider disableGutters>
                                    <div className="h-full w-full m-[0] p-2 px-4 font-semibold text-neutral-300 hover:text-white bg-neutral-700">{name}</div>
                                </ListItemButton>
                            </>
                        ))}
                        
                    </List>
                </div>
                <div className="pl-3 flex flex-col gap-2 pt-4">
                    <h4 className="font-bold text-2xl">Account Info</h4>
                    <p className="text-lg">Display Name: <span className="font-semibold">{dataFetch.name}</span></p>
                    <p className="text-lg">Username: <span className="font-semibold">{dataFetch.name}</span></p>
                    <p className="text-lg">Email Address: <span className="font-semibold">{dataFetch.email}</span></p>
                    <p className="text-lg">Password: <span className="font-semibold">******</span></p>
                    <p className="text-lg">Birth: <span className="font-semibold"></span></p>
                </div>
            </div>
        </Box>
    </div>
  )
}
