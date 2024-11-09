const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: { type: String, required: true }, // e.g., "#133e"
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    duty: { type: String, enum: ['Nhân Viên', 'Trưởng Phòng', 'Giám Đốc'], required: true },
    age: { type: Number, required: true }
});

module.exports = mongoose.model('User', userSchema);
