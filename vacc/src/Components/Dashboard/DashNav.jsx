import img from "../../assets/dashlogo.png"
import {useState} from "react"
import Dashboard from "./dashboard"
import Appointment from "./Appointment";
import History from "./History";
import { Link } from "react-router-dom";

export default function DashNaV({patient}){
    const [Component,setComponent]=useState(()=> <Dashboard patient={patient}/>);
   
    return(
        <div class="min-w-screen min-h-screen relative">
        <div class="absolute inset-0 overflow-auto bg-[url('/background.png')] bg-cover bg-center bg-no-repeat">
        <div class="flex " id="dynamic">
        <div class="  flex flex-col w-100 h-screen  items-center  fixed ">
        <Link className= "no-underline" to='/'>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-logofro to-logoto text-4xl  mt-15 font-black hover:cursor-pointer ">
            VaxUp
          </p>
          <img src={img} alt="logo" class="w-40 h-40 mt-24 " />
        </Link>
        <p class="text-2xl text-black    font-bold">{patient?.name}</p>
        <div class="flex flex-col space-y-0 mt-11 hover:cursor-pointer"  >
            <div class=" flex space-x-3 items-center -mb-4"  onClick={()=>setComponent(<Dashboard patient={patient}/>)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-house -mt-1" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
</svg> <p class="text-black font-bold text-xl">Dashboard</p>
                 </div>


                 <div class=" flex space-x-3 items-center -mb-4 hover:cursor-pointer" onClick={()=>setComponent(<Appointment patient={patient}/>)}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-calendar4 -mt-1" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
</svg> <p class="text-black font-bold text-xl">Appointments</p>
                 </div>
                 <div class=" flex space-x-3 items-center -mb-4" onClick={()=>setComponent(<History patient={patient}/>)}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-clock-history -mt-1" viewBox="0 0 16 16">
  <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z"/>
  <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z"/>
  <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5"/>
</svg> <p class="text-black font-bold text-xl">History</p>
                 </div>
                
                 <div class=" flex space-x-3 items-center -mb-4" >
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-box-arrow-left -mt-1" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
  <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
</svg><p class="text-black font-bold text-xl">Log Out</p>
                 </div>
                
        </div>
        </div>
        <div class="h-[900px]  mt-2 mb-2  border-slate-300 border-1"></div>
        <div class="">{Component}</div>   
        </div>
        </div>
        </div>
    )
}