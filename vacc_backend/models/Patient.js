const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: String,
    mobile: String,
    aadhaar: String,
    pin: String, // Hashed PIN
    totalVaccinations: { type: Number, default: 0 },
    pendingVaccinations: [{ vaccine: String, desc: String, due: String }],
    familyMembers: [{ id: String, name: String }],
    appointments: [{ vaccine: String, date: String, time: String, location: String, doctor: String }],
    history: [{ vaccine: String, date: String, time: String, location: String, doctor: String, status: String }]
});

module.exports = mongoose.model('Patient', patientSchema);
