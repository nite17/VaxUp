const express = require('express');
const Patient = require('../models/Patient');

const router = express.Router();

// Get Patient Profile
router.get('/:id', async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) return res.status(404).json({ message: 'Patient not found' });
        res.json(patient);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add Vaccine Record
router.post('/:id/vaccine', async (req, res) => {
    try {
        const { vaccine, date, location, doctor } = req.body;
        const patient = await Patient.findById(req.params.id);
        if (!patient) return res.status(404).json({ message: 'Patient not found' });

        patient.history.push({ vaccine, date, location, doctor, status: 'completed' });
        patient.totalVaccinations += 1;
        await patient.save();
        res.json({ message: 'Vaccine record added' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add Family Member
router.post('/:id/family', async (req, res) => {
    try {
        const { memberId, name } = req.body;
        const patient = await Patient.findById(req.params.id);
        if (!patient) return res.status(404).json({ message: 'Patient not found' });

        patient.familyMembers.push({ id: memberId, name });
        await patient.save();
        res.json({ message: 'Family member added' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
