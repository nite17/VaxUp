import CountUp from 'react-countup'
export default function VaxCount() {
  return (
    <div class="flex flex-col items-center space-y-6 mt-20">
      <p class="text-4xl text-vaxcom font-bold "> Vaccinations Completed</p>
      <div class="flex space-x-4">
        <div class="flex flex-col space-y-0">
          <p class="text-transparent bg-clip-text bg-gradient-to-r from-numfro to-numto text-5xl font-bold text-right" ><CountUp end={169420} /></p>
          <p class="text-vaxcom text-x1 font-semibold ml-8">Doses administered till date</p>
        </div>
        <div class="h-20 w-0 border-1 border-stone-400"></div>
        <div class="flex flex-col space-y-0">
          <p class="text-transparent bg-clip-text bg-gradient-to-r from-numfro to-numto text-5xl font-bold" ><CountUp end={6942} /></p>
          <p class="text-vaxcom text-x1 font-semibold ">Doses administered today</p>
        </div>
      </div>
    </div>
  )
}