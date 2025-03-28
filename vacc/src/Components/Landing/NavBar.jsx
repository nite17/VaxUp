export default function NavBar(){
    return(
        <div class="flex h-20  justify-between w-full bg-stone-200 fixed top-0 items-center">
        <p class="text-transparent bg-clip-text bg-gradient-to-r from-logofro to-logoto text-6xl ml-10 font-bold mb-4">VaxUp</p>
        <div class="flex space-x-14 mr-16  ">
          <a href="#" class=" text-xl font-semibold text-navb mt-2 transition-all duration-200 hover:scale-110 ">FAQ</a>
          <a href="#" class=" text-xl font-medium text-navb mt-2 transition-all duration-200 hover:scale-110">Dashboard</a>
          <button class="rounded-xl w-[117px] h-[45px] text-2xl text-log font-semibold border-log border-[1px] text-center transition-all duration-500 hover:bg-log hover:text-white ">Log in</button>

        </div>
      </div>
    )
}