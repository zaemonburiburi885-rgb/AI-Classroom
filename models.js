const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const classSchema = new mongoose.Schema({
    className: { type: String, required: true },
    instructorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    createdAt: { type: Date, default: Date.now }
});

const assignmentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
    dueDate: { type: Date },
    submittedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

const gradeSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    assignmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Assignment', required: true },
    grade: { type: String },
    comments: { type: String }
});

const User = mongoose.model('User', userSchema);
const Class = mongoose.model('Class', classSchema);
const Assignment = mongoose.model('Assignment', assignmentSchema);
const Grade = mongoose.model('Grade', gradeSchema);

module.exports = { User, Class, Assignment, Grade };