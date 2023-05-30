const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        username: { type: String, unique: true },
        password: { type: String },
        email: { type: String },
        fullName: { type: String },
        avatar: { type: String },
        gender: { type: String },
        date: { type: String },
        numberPhone: { type: String },
        address: { type: String },
    },
    { timestamps: true },
);

module.exports = mongoose.model('User', UserSchema);
