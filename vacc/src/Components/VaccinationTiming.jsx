import React from 'react';
import './VaccinationTiming.css';
import VaccinationsImg from './vaccinations.jpg';

export default function VaccinationTiming() {
    return (
        <div className="vaccination-timing">
            <div className="vaccination-timing-container">
                <div className="author-info">
                    <h2 className="author-name">Dr. Nathan Collins</h2>
                    <p className="author-details">Global Health Initiative | 26 March, 2025</p>
                </div>
                
                <div className="content">
                    <p>
                        In a world where diseases can spread rapidly, timely vaccination plays a crucial role in safeguarding public health. 
                        Vaccines are not just individual protective measures; they are vital tools in preventing outbreaks and ensuring the 
                        well-being of entire communities.
                    </p>
                    
                    <p>
                        Vaccination works by training the immune system to recognize and fight pathogens before they can cause severe illness. 
                        However, timing is key. Receiving vaccines according to the recommended schedule ensures maximum effectiveness, providing 
                        immunity when the body needs it most. Delays can leave individuals vulnerable, increasing the risk of infection and transmission.
                    </p>

                    <div className="vaccination-image">
                        <img src={VaccinationsImg} alt="Vaccination Timing" />
                        <p className="image-caption">Healthcare workers administering vaccines on schedule, ensuring optimal protection for patients</p>
                    </div>
                    
                    <p>
                        Beyond personal protection, timely vaccination strengthens herd immunity. When a significant portion of a population is 
                        immunized on time, the spread of diseases slows, protecting those who cannot receive vaccines, such as newborns, the elderly, 
                        and immunocompromised individuals. This collective defense is essential in preventing large-scale outbreaks.
                    </p>
                    
                    <p>
                        The COVID-19 pandemic underscored the importance of swift and widespread immunization. Delays in vaccine distribution allowed 
                        the virus to mutate and persist longer than anticipated. Similarly, diseases like measles and influenza can resurface if 
                        routine vaccinations are ignored or postponed. History has shown that lapses in immunization schedules can lead to the 
                        resurgence of nearly eradicated diseases.
                    </p>

                    <p>
                        Timely vaccination is a responsibility shared by individuals, healthcare providers, and policymakers. Ensuring vaccine 
                        accessibility, raising awareness, and debunking misinformation are critical steps in maintaining high immunization rates. 
                        By prioritizing timely vaccination, we contribute to a healthier, more resilient society—one where preventable diseases 
                        no longer pose a major threat.
                    </p>
                </div>
            </div>
        </div>
    );
} 