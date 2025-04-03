import React from 'react';
// import VaxUpImage from './vaxup.jpg'; 

export default function VaxUp() {
    return (
        <div className="bg-white py-8 mt-4 flex justify-center">
            <div className="max-w-4xl px-6 flex flex-col items-center">
                
                
                <h2 className="text-gray-800 text-3xl font-semibold text-center mb-4">Why Choose VaxUp?</h2>
                <p className="text-gray-600 text-sm mb-6">Your Trusted Vaccination Companion</p>

                
                <div className="text-gray-800 text-lg leading-relaxed max-w-3xl text-justify">
                    <p>
                        In today’s world, staying updated on vaccinations is crucial for personal and public health. 
                        <strong> VaxUp </strong> simplifies the vaccination process, making it easy to track appointments, 
                        find nearby pharmacies, and stay informed about the importance of immunization.
                    </p>

                    
                    <div className="my-6 flex flex-col items-center text-center">
                        <img src="https://www.chla.org/sites/default/files/styles/16x9_two_thirds/public/thumbnails/image/GettyImages-1306490855.jpg.webp?itok=tSt9nNE4" alt="VaxUp Dashboard" className="w-1/2 rounded-lg shadow-lg" />
                        <p className="mt-3 text-gray-500 text-sm italic">A seamless way to manage your vaccinations</p>
                    </div>

                    
                    <h3 className="text-xl font-semibold mt-4">Key Features of VaxUp</h3>
                    <ul className="list-none mt-2 space-y-2">
                        <li>✅ <strong>Find Pharmacies Near You</strong> – Use your ZIP code to locate pharmacies offering vaccines.</li>
                        <li>✅ <strong>Understand Vaccine Importance</strong> – Learn about different vaccines and their benefits.</li>
                        <li>✅ <strong>Personalized Dashboard</strong> – Track your upcoming vaccinations, history, and appointments.</li>
                        <li>✅ <strong>Appointment Management</strong> – Book, reschedule, or cancel vaccinations easily.</li>
                    </ul>

                    <p className="mt-4">
                        With VaxUp, you can take charge of your health effortlessly. Stay informed, stay protected, 
                        and never miss an important vaccination again!
                    </p>
                </div>
            </div>
        </div>
    );
}