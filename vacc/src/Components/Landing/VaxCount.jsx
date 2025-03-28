import CountUp from 'react-countup'
export default function VaxCount() {
    return(
        <div class="flex flex-col items-center space-y-4 mt-10">
        <p class="text-2xl text-vaxcom font-medium "> Vaccinations Completed</p>
        <div class="flex space-x-4">
         <div class="flex flex-col space-y-2">
           <p class="text-transparent bg-clip-text bg-gradient-to-r from-numfro to-numto text-5xl font-bold" ><CountUp end={169420}/></p>
           <p class="text-vaxcom text-md font-medium ml-8">Total doses till date</p>
         </div>
         <div class="h-20 w-0 border-1 border-stone-400"></div>
         <div class="flex flex-col space-y-2">
           <p class="text-transparent bg-clip-text bg-gradient-to-r from-numfro to-numto text-5xl font-bold" ><CountUp end={6942 }/></p>
           <p class="text-vaxcom text-md font-medium ">Doses administered today</p>
         </div>
        </div>
       </div>
    )
}