import React from "react";
import CountUp from 'react-countup'
import { Link } from 'react-router-dom';
import './dash.css'
import bell_icon from "../../assets/bell.svg"
import upcoming from "../../assets/upcoming.svg"
import totalvax from "../../assets/totalvax.svg"
import pendingvax from "../../assets/pendingvax.svg"
import directions from "../../assets/directions.svg"
import scheduleNow from "../../assets/scheduleNow.svg"
import defaultProfile from "../../assets/defaultProfile.svg"

const CurrentDateTime = () => {
    const now = new Date();
    const options = { weekday: "long", day: "2-digit", month: "long", year: "numeric" };
    const formattedDateTime = now.toLocaleDateString("en-GB", options).replace(/^(\w+) (\d+)/, "$1, $2");

    return formattedDateTime;
};

export default function Dash({ patient }) {
    // Check if patient has appointments and pending vaccinations before rendering
    const hasAppointments = patient?.appointments && patient.appointments.length > 0;
    const hasPendingVaccinations = patient?.pendingVaccinations && patient.pendingVaccinations.length > 0;

    return (
        <div className="dash ml-100 -mt-6">
            <div className="Head">
                <div className="welcome">
                    <h1>Hello, {patient?.name}</h1>
                    <h2>Today is {CurrentDateTime()}</h2>
                </div>
                <div className="options">
                    <button className="notif"><img src={bell_icon} alt="Notifications" /></button>
                    <Link to='/addvax'>
                        <button className="AddVaccineRecord"> Add Vaccine Record</button>
                    </Link>
                </div>
            </div>
            <div className="main-info">
                <div className="upcoming">
                    <div className="heading">
                        <h1 className="title-card">Upcoming Appointments</h1>
                        <img src={upcoming} alt="Upcoming" />
                    </div>
                    {hasAppointments && (
                        <div className="upcoming-info">
                            <h2>{patient.appointments[0].date}</h2>
                            <h1>{patient.appointments[0].time}</h1>
                            <p>Location: {patient.appointments[0].location}</p>
                            <button className="main-info-buttons">
                                <img src={directions} alt="Directions" /> Get Directions
                            </button>
                        </div>
                    )}
                </div>
                <div className="totalVax">
                    <div className="heading">
                        <h1 className="title-card">Total Vaccines Received</h1>
                        <img src={totalvax} alt="Total Vaccines" />
                    </div>
                    <div className="totalvax-info">
                        <h1><CountUp end={patient?.totalVaccinations || 0} /></h1>
                    </div>
                </div>
                <div className="pendingVax">
                    <div className="heading">
                        <h1 className="title-card">Pending Vaccinations</h1>
                        <img src={pendingvax} alt="Pending Vaccinations" />
                    </div>
                    {hasPendingVaccinations && (
                        <div className="pending-info">
                            <div className="pending-box">
                                <h1>{patient.pendingVaccinations[0].desc} Due</h1>
                                <h2>{patient.pendingVaccinations[0].vaccine} - Due in {patient.pendingVaccinations[0].due}</h2>
                            </div>
                            <Link to="/schedule">
                                <button className="main-info-buttons">
                                    <img src={scheduleNow} alt="Schedule" /> Schedule Now
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            <div className="bottom-info">
                <div className="quickOverview">
                    <h1>Quick Overview</h1>
                    <div className="quickOverviewBox">
                        <h1>Missed Appointment</h1>
                        <ul>
                            {patient.history.map((event, index) => {
                                if (event.status === "missed") {
                                    return (
                                        <li key={index}>{event.vaccine} missed</li>
                                    );
                                }
                                return null;
                            })}
                        </ul>
                    </div>
                </div>
                <div className="family">
                    <h1>Family</h1>
                    <div className="members">
                        {patient.familyMembers.map((member) => (
                            <button key={member.id} className="profile-pic">
                                <img
                                    src={member.profile || defaultProfile}
                                    alt={member.name}
                                    className="family-member-img"
                                />
                                <p>{member.name}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}