import { useEffect, useState } from "react";
import {fetchFriends} from '../../helpers/fetchFriends'
import {fetchRecommendedForYou} from '../../helpers/fetchRecommend'

//icon
import ButtonDropdown from "../../components/ButtonDropdown"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Skeleton } from "@mui/material";

export const MainPage = () => {
    const [dataFetch, setDataFetch] = useState({
      friend:[],
      recommendedForYou:[],
      isLoading:false,
    })
    const {friend,recommendedForYou,isLoading}= dataFetch;

    const getFetch= async()=>{
      setDataFetch({
        ...dataFetch,
        isLoading:true,
      })
      const newFriend = await fetchFriends();
      const newRecommend = await fetchRecommendedForYou();
      setDataFetch({
        friend:newFriend,
        recommendedForYou:newRecommend,
        isLoading:false,
      })
    }

  useEffect(() => {
    document.title = 'Home - Roblox';
  }, []);

  useEffect(() => {
    getFetch();
  }, [])
  const acortarTexto = (texto, maxCaracteres) => {
    if (texto.length > maxCaracteres) {
      return texto.substring(0, maxCaracteres) + '...';
    }
    return texto;
  };

  return (
    <section className="main w-4/8 flex text-white flex-auto gap-y-5 flex-col">
        <h1 className="text-4xl font-bold">Home</h1>
        <article className="mb-[20px]">
            <div className="flex flex-row justify-between">
            <h2 className="text-xl max-md:text-lg font-medium">Friends ({friend.length})</h2>
            <p className="max-md:text-base hover:underline font-bold">Ver Todo <ArrowForwardIcon/></p>
            </div>
            <div className="friend-avatar grid justify-items-center h-40 max-md:h-36 grid-cols-12">
              {isLoading && Array.from(new Array(12)).map((index)=>
                  (<div key={index} className="flex flex-col w-fit items-center justify-center p-2 mt-[10px]">
                  <Skeleton variant="circular" className="mb-[5px]" sx={{bgcolor:'#52525b'}} width={96} height={96} />
                  <Skeleton variant="text" sx={{ fontSize: '1rem',bgcolor:'#52525b', width:'80%' }} />
                </div>)
              )}
              {!isLoading && friend?.length>0 && friend.map((data, i)=>{
                if(i>11) return
                return (
                    <ButtonDropdown
                    key={data.name}
                    transparent={false}
                    className='grid-item'
                    menuItems={[`Chat with ${data.name}`,'View Profile']}
                    >
                    <div className="flex flex-col w-fit items-center justify-center mt-[10px]">
                        <img src={data.image} alt={data.name} className="w-24 h-24 max-md:w-21 max-md:h-21 rounded-full mb-[5px]"/>
                        <p className="text-xsmall max-md:text-xs font-semibold hover:underline"> {acortarTexto(data.name,9)}</p>
                    </div>
                    </ButtonDropdown>
                )
              })}
            </div>
        </article>
        <article>
            <h2 className="text-xl max-md:text-base font-bold">Recommended for you</h2>
            <div className="grid grid-cols-6 h-[480px] max-md:h-[590px] overflow-hidden max-sm:gap-2 gap-7 items-center recommended-game">
            {isLoading && Array.from(new Array(12)).map((index)=>
                  (<div key={index} className="mt-[10px] p-2 flex-col text-start">
                  <Skeleton variant="rectangular" sx={{bgcolor:'#52525b', width:'95%', height:'120px'}} />
                  <Skeleton variant="text" sx={{ fontSize: '1rem',bgcolor:'#52525b', width:'80%' }} />
                  <Skeleton variant="text" sx={{ fontSize: '1rem',bgcolor:'#52525b', width:'50%' }} />
                </div>)
              )}
              {!isLoading && recommendedForYou?.length>0 && recommendedForYou.map((data)=>{
                return (
                  <ButtonDropdown
                  key={data.name}
                  className='flex justify-center max-sm:w-full'
                  transparent
                  menuItems={[]}
                  >
                    <div className="mt-[10px] flex-col text-start">
                      <img src={data.image} alt={data.name} className="w-64 h-40 max-sm:w-52 max-sm:h-32 rounded-md"/>
                      <p className="text-base max-md:text-xs font-bold pl-2 ">{data.name}</p>
                      <p className="text-xs text-zinc-400 font-semibold pl-2 mt-1"><ThumbUpIcon fontSize="small"/> <span>{data.rating}%</span> Rating</p>
                    </div>
                  </ButtonDropdown>
                  )
              })}
            </div>
        </article>
    </section>
  )
}
