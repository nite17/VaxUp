import React from 'react';
import './VaccineJourney.css';
import JourneyImg from './journey.jpg';

export default function VaccineJourney() {
    return (
        <div className="vaccine-journey">
            <div className="vaccine-journey-container">
                <div className="author-info">
                    <h2 className="author-name">Dr. Sarah Whitmore</h2>
                    <p className="author-details">International Vaccine Research Institute | 26 March, 2025</p>
                </div>
                
                <div className="content">
                    <p>
                        Vaccines are one of the most powerful tools in modern medicine, protecting millions from deadly diseases each year. 
                        However, before a vaccine reaches the public, it undergoes a long and meticulous journey from the laboratory to real-world 
                        application. This process, though complex, ensures that every vaccine is safe, effective, and ready to save lives.
                    </p>

                    <div className="vaccination-image">
                        <img src={JourneyImg} alt="Vaccine Journey" />
                        <p className="image-caption">Scientists working in a modern vaccine research laboratory</p>
                    </div>

                    <h3 className="section-title">Step 1: Research and Development</h3>
                    <p>
                        The journey begins in research laboratories, where scientists study pathogens and their behavior. Using advanced techniques 
                        in microbiology and immunology, researchers identify antigens—substances that trigger an immune response. Once a potential 
                        vaccine candidate is found, it undergoes preclinical testing on cells and animals to assess safety and immune response.
                    </p>

                    <h3 className="section-title">Step 2: Clinical Trials</h3>
                    <p>
                        If a vaccine shows promise in preclinical testing, it moves on to clinical trials, which occur in three phases:
                    </p>
                    <ul className="phase-list">
                        <li><strong>Phase 1:</strong> Small-scale trials on healthy volunteers to evaluate safety and determine the appropriate dosage.</li>
                        <li><strong>Phase 2:</strong> A larger trial with hundreds of participants to further assess safety and immune response.</li>
                        <li><strong>Phase 3:</strong> Thousands of volunteers participate to confirm effectiveness, monitor side effects, and compare results with a placebo group.</li>
                    </ul>
                    <p>Only after passing these rigorous trials can a vaccine proceed to the next stage.</p>

                    <h3 className="section-title">Step 3: Regulatory Approval</h3>
                    <p>
                        Regulatory agencies such as the FDA (U.S.), EMA (Europe), and WHO (global) review the trial data to ensure the vaccine meets 
                        safety and efficacy standards. If approved, mass production begins under strict quality control measures.
                    </p>

                    <h3 className="section-title">Step 4: Manufacturing and Distribution</h3>
                    <p>
                        Once approved, vaccine production is scaled up. Manufacturers produce millions of doses while maintaining consistent quality 
                        and safety. Distribution networks are established, ensuring vaccines reach healthcare facilities, clinics, and vaccination 
                        centers worldwide.
                    </p>

                    <h3 className="section-title">Step 5: Real-World Monitoring</h3>
                    <p>
                        Even after approval, vaccines continue to be monitored for any rare side effects or long-term effectiveness. Global health 
                        organizations track vaccination rates and outbreak data to ensure continued protection.
                    </p>

                    <h3 className="section-title">Conclusion</h3>
                    <p>
                        The journey from lab to life is long but essential. Every vaccine undergoes years of rigorous testing and evaluation before 
                        reaching the public. This meticulous process ensures that vaccines remain a cornerstone of public health, saving lives and 
                        preventing outbreaks worldwide.
                    </p>
                </div>
            </div>
        </div>
    );
} 