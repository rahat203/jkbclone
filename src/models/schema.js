

const mongoose = require("mongoose");
const StundentSchema = new mongoose.Schema({
    fname: { type: String, require: true },
    numb: { type: Number, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    address: { type: String, require: true },
    purpose: { type: String, require: true },
});
const Student = new mongoose.model("Purpose", StundentSchema);
module.exports = Student;