const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    mobile: String,
    aadhaar: String,
    pin: String // Hashed PIN
});

module.exports = mongoose.model('User', userSchema);
