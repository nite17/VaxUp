export default function Appointment({ patient }) {
    const colorpairs = [["#0BDEF9", "#068393"], ["#B199FF", "#B199FF"], ["#99FFB8", "#5C9970"]];

    return (
        <div class="ml-30">
            <h2 class=" mt-20 ml-100 text-6xl font-bold ">Your Appointments</h2>
            <div class="flex flex-col space-y-8 ml-100 -mt-4 overflow-hidden">
                {patient.appointments.map((app, index) => {
                    const colors = colorpairs[index % colorpairs.length];
                    console.log(index)
                    return (
                        <div
                            key={index}
                            class="h-[318px] w-[1041px] mt-10 rounded-2xl shadow-lg hover:transform hover:-translate-y-[5px] transition-transform duration-300 ease-in-out"
                            style={{ background: `linear-gradient(to right, ${colors[0]}, ${colors[1]})` }}
                        >
                            <div class="flex justify-between mt-2 ">
                                <p class="font-semibold ml-6">{app.vaccine}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" fill="currentColor" class="bi bi-calendar4 mr-10 mt-4" viewBox="0 0 16 16">
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                                </svg>
                            </div>
                            <hr class="border-1 max-w-240 align "></hr>
                            <div class="flex justify-between ">
                                <div class="flex flex-col ml-6">
                                    <p class="text-2xl text-black font-extralight">{app.date}</p>
                                    <p class="text-4xl text-black font-extralight -mt-4">{app.time}</p>
                                </div>
                                <div class="flex flex-col mr-20">
                                    <p class="text-2xl text-black font-extralight">Location: {app.location},Bangalore</p>
                                    <button class="bg-black rounded-2xl h-[62px] w-[176px] ml-36 border-0 -mt-4 text-center text-sm text-white flex items-center justify-center space-x-2"
                                    > <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18 " fill="currentColor" class="bi bi-crosshair2 " viewBox="0 0 16 16">
                                            <path d="M8 0a.5.5 0 0 1 .5.5v.518A7 7 0 0 1 14.982 7.5h.518a.5.5 0 0 1 0 1h-.518A7 7 0 0 1 8.5 14.982v.518a.5.5 0 0 1-1 0v-.518A7 7 0 0 1 1.018 8.5H.5a.5.5 0 0 1 0-1h.518A7 7 0 0 1 7.5 1.018V.5A.5.5 0 0 1 8 0m-.5 2.02A6 6 0 0 0 2.02 7.5h1.005A5 5 0 0 1 7.5 3.025zm1 1.005A5 5 0 0 1 12.975 7.5h1.005A6 6 0 0 0 8.5 2.02zM12.975 8.5A5 5 0 0 1 8.5 12.975v1.005a6 6 0 0 0 5.48-5.48zM7.5 12.975A5 5 0 0 1 3.025 8.5H2.02a6 6 0 0 0 5.48 5.48zM10 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0" />
                                        </svg> <p>Get Directions</p></button>
                                </div>

                            </div>
                            <div class="bg-gradient-to-r from-white to-appinto w-full rounded-2xl h-[116px] flex justify-between" >
                                <div class="flex flex-col  mt-1">
                                    <p class=" ml-6 font-semibold ">Meet</p>
                                    <p class="text-4xl text-black font-extralight -mt-4 ml-6">{app.doctor}</p>
                                </div>
                                <div class="flex space-x-4">
                                    <button class="bg-red-600 rounded-2xl h-[62px] w-[118px] ml-36 border-0 mt-8 text-center text-sm text-white flex items-center justify-center space-x-1 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                        </svg>
                                        <p class="font-extralight">Cancel</p>
                                    </button>
                                    <button class="bg-blue-700 rounded-2xl h-[62px] w-[147px]  border-0 mt-8 text-center text-sm text-white mr-28 flex items-center justify-center space-x-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-check-all" viewBox="0 0 16 16">
                                            <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                                        </svg><p>Reschedule</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}