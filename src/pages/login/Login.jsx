import { Link, useNavigate } from "react-router-dom"
import { Footer } from "../footer/Footer"
import { Divider } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { fetchUser } from "../../helpers/fetchUser"
import Cookies from "universal-cookie"
import { UserContext } from "../../useContext/user/UserContext"

export const Login = () => {
    const [data, setData] = useState({
        email:'',
        password:'',
    })
    const navigate = useNavigate();
    const cookie = new Cookies();
    const {setUser} = useContext(UserContext);

    const onChangeValue = ({target})=>{
        document.getElementById('validation').classList.add('hidden');
        setData({
            ...data,
            [target.name]:target.value,
        })
    }

    const handleLoginRequest=async(e)=>{
        e.preventDefault();

        const res=await fetchUser(data); 
        
        if(typeof res.message=== 'string'){
            setData({
                ...data,
                password:'',
            })
            document.getElementById('validation').classList.remove('hidden');
            return
        }
        const date = new Date();
        cookie.set('roblo',JSON.stringify(res),{path:'/',expire:date.getDate() + (60)});
        setUser({...res})
        return navigate('/');
    }

    useEffect(()=>cookie.remove('roblo'),[])
  return (
    <>
        <div className="bg-zinc-800 pt-165px flex items-center flex-col h-screen">
            <div className=" flex-1 flex flex-col justify-center items-center h-1/3 w-4/6">
                <form className="bg-zinc-700 text-white w-96 flex flex-col justify-center p-5" onSubmit={handleLoginRequest} method="POST">
                    <h4 className="text-3xl font-bold mb-[16px]">Iniciar sesión en Roblox</h4>
                    <input type="text" name="email" id="email" value={data.email} placeholder="Correo" onChange={onChangeValue} className="pl-2 py-1 rounded-lg mb-[16px] bg-zinc-950" required/>
                    <input type="password" name="password" id="password" value={data.password} placeholder="Contraseña" onChange={onChangeValue} className="pl-2 py-1 rounded-lg mb-[16px] bg-zinc-950" required/>
                    <span id='validation' className=' relative -top-3 text-xs text-red-500 hidden'>Correo o Contraseña incorrecta</span>
                    <input type="submit" value="Iniciar Sesión" className="border-white border rounded-lg font-semibold text-lg py-1 mb-[16px]"/>               
                     
                    <Divider className="bg-zinc-200"/>
                    <p className="mt-[16px]">¿No tienes una cuenta de Roblox? <Link className="hover:underline font-semibold" >Regístrate</Link></p>
                </form>
            </div>
            <Footer main={false} />
        </div>
    </>
  )
}
