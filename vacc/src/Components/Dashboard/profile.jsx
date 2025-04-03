import defaultProfile from '../../assets/defaultProfile.svg'

export class Patient {
    constructor(id, name, totalVaccinations, pendingVaccinations, familyMembers, appointments, history, profile = defaultProfile) {
        this.id = id;
        this.name = name;
        this.profile = profile;
        this.totalVaccinations = totalVaccinations;
        this.pendingVaccinations = pendingVaccinations || [];
        this.familyMembers = familyMembers || [];
        this.appointments = appointments || [];
        this.history = history || [];
    }

    addPendingVax(id, vaccine, desc, due) {
        this.pendingVaccinations.push({ id, vaccine, desc, due })
    }

    addFamilyMember(id, name, profile = defaultProfile) {
        this.familyMembers.push({ id, name, profile });
    }

    addAppointment(id, vaccine, date, time, location, doctor) {
        this.appointments.push({ id, vaccine, date, time, location, doctor });
    }

    addHistory(id, vaccine, date, time, location, doctor , status = "missed") {
        this.history.push({ id, vaccine, date, time, location, doctor , status});
    }
}