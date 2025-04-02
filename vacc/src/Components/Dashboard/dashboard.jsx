import React from "react";
import Dash from './dash.jsx'


export default function Dashboard({ patient }) {

    return (
        <>
            <Dash patient={patient} />
        </>
    );
}
