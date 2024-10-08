import ButtonDropdown from "../../components/ButtonDropdown"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

//games
import evade from './img/games/evade.jpg';
import adoptMe from './img/games/adopt-me.jpg';
import piggy from './img/games/piggy.jpg';
import doors from './img/games/doors.jpg';
import bloxburg from './img/games/bloxburg.jpg';
import jailbreak from './img/games/jailbreak.jpg';
import brookhaven from './img/games/brookhaven.jpg';
import meepcity from './img/games/meepcity.jpg';
import murderMistery from './img/games/murder-mystery.jpg';
import naturalDisaster from './img/games/natural-disaster.jpg';
import towerHell from './img/games/tower-hell.jpg';
import deliveryPizza from './img/games/delivery-pizza.jpg';

//avatar
import avatar1 from './img/avatar/avatar1.jpg'
import avatar2 from './img/avatar/avatar2.jpg'
import avatar3 from './img/avatar/avatar3.jpg'
import avatar4 from './img/avatar/avatar4.jpg'
import avatar5 from './img/avatar/avatar5.jpg'
import avatar6 from './img/avatar/avatar6.jpg'
import avatar7 from './img/avatar/avatar7.jpg'
import avatar8 from './img/avatar/avatar8.jpg'
import avatar9 from './img/avatar/avatar9.jpg'
import avatar10 from './img/avatar/avatar10.jpg'
import avatar11 from './img/avatar/avatar11.jpg'
import avatar12 from './img/avatar/avatar12.jpg'
import { useEffect } from "react";

export const MainPage = () => {

  useEffect(() => {
    document.title = 'Home - Roblox';
  }, []);

  const acortarTexto = (texto, maxCaracteres) => {
    if (texto.length > maxCaracteres) {
      return texto.substring(0, maxCaracteres) + '...';
    }
    return texto;
  };

  const RecommendedForYou=[
    {
        name:'BloxBurg',
        rating:'90',
        image:bloxburg
    },
    {
      name:'Piggy',
      rating:'70',
      image:piggy
    },
    {
      name:'Jailbreak',
      rating:'98',
      image:jailbreak
    },
    {
      name:'evade',
      rating:'92',
      image:evade,
    },
    {
      name:'Doors',
      rating:'90',
      image:doors
    },
    {
      name:'Adopt Me',
      rating:'88',
      image:adoptMe
    },
    {
      name:'Brookhaven',
      rating:'78',
      image:brookhaven
    },
    {
      name:'meepcity',
      rating:'68',
      image:meepcity
    },
    {
      name:'Murder Mystery',
      rating:'96',
      image:murderMistery
    },
    {
      name:'Natural Disaster',
      rating:'38',
      image:naturalDisaster
    },
    {
      name:'Tower of Hell',
      rating:'38',
      image:towerHell,
    },
    {
      name:'Work at a Pizza Place',
      rating:'38',
      image:deliveryPizza
    },
  ];

  const Friend=[
    {
      name:'puk_karevzz',
      image:avatar1
    },
    {
      name:'Rip_sasos',
      image:avatar2
    },
    {
      name:'xlivxw',
      image:avatar3
    },
    {
      name:'JuanJox',
      image:avatar4
    },
    {
      name:'Stornado11',
      image:avatar5
    },
    {
      name:'Gabo',
      image:avatar6
    },
    {
      name:'rook_Jucky',
      image:avatar7
    },
    {
      name:'Thekingboss797',
      image:avatar8
    },
    {
      name:'PanBimbo',
      image:avatar9
    },
    {
      name:'SukunaFemboy',
      image:avatar10
    },
    {
      name:'DaddyGojo',
      image:avatar11
    },
    {
      name:'WinstonRegaleNota',
      image:avatar12
    },
  ]

  return (
    <section className="main w-4/8 flex text-white flex-auto gap-y-5 flex-col">
        <h1 className="text-4xl font-bold">Home</h1>
        <article className="mb-[20px]">
            <div className="flex flex-row justify-between">
            <h2 className="text-xl max-md:text-lg font-medium">Friends ({Friend.length})</h2>
            <p className="max-md:text-base hover:underline font-bold">Ver Todo <ArrowForwardIcon/></p>
            </div>
            <div className="friend-avatar grid justify-items-center h-40 max-md:h-32 grid-cols-12">
              {Friend.length>0 && Friend.map((data)=>{
                return (
                    <ButtonDropdown
                    key={data.name}
                    transparent={false}
                    className='grid-item'
                    menuItems={[`Chat with ${data.name}`,'View Profile']}
                    >
                    <div className="flex flex-col w-fit items-center justify-center mt-[10px]">
                        <img src={data.image} alt={data.name} className="w-24 h-24 max-md:w-20 max-md:h-20 bg-white rounded-full mb-[5px]"/>
                        <p className="text-xsmall max-md:text-xs font-semibold hover:underline"> {acortarTexto(data.name,9)}</p>
                    </div>
                    </ButtonDropdown>
                )
              })}
            </div>
        </article>
        <article>
            <h2 className="text-xl max-md:text-base font-bold">Recommended for you</h2>
            <div className="grid grid-cols-6 max-sm:gap-2 gap-7 items-center recommended-game">
              {RecommendedForYou.length>0 && RecommendedForYou.map((data)=>{
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
