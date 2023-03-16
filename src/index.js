const mongoose = require('mongoose');

// ***** connecting *****

// mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1/student_db')

.then(() => {console.log('connected')})
.catch((error) => {
    console.log(error)
})


// ****** Schema*****
const studentData = new mongoose.Schema({
    name: String,
    age : Number,
    course: String
})


// ****** Model ******
const students = new mongoose.model('studentDB', studentData);



// ***** data addition to schema *********
const stud1 = new students({
    name: 'Shachi',
    age: 24,
    course: 'Full Stack',
})


try{
    stud1.save();
}catch(err){
    console.log(err);
}

