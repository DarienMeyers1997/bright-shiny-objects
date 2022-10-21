// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

/*
functionName: createUser
parameters: 2 strings (firstName, lastName)


return object
{
    firstName: string
    lastName: string
}

putting first name and last name into an object

*/

function createUser(firstName, lastName){
    let user = {
        firstName: firstName,
        lastName: lastName,
    }
    return user
}

// console.log(createUser("Mesi", "Kaleziq"))
// console.log(createUser("Darien","Meyers"))


/*
functionName: setAge
parameters: user(object), age(number)
user =
{
    firstName: string
    lastName: string
}

return:
user
{
    firstName: string,
    lastName: string,
    age: number
}
*/

function setAge(user, age){
    user.age = age
    return user
}

console.log(setAge(createUser("Darien","Meyers"),26))
console.log(setAge({firstName: "Joe", lastName: "Joeyson"}, 30))


function incrementAge(user){
    user.age = user.age + 1
    return user
}

console.log(incrementAge(createUser("Darien", "Meyers")))
console.log(incrementAge({firstName: "Darien", lastName: "Meyers",age: 24}))


/*
functionName: fixCar
parameters: car

car {
    make: string
    model: string
    year: number
    needsMaintenace: boolean
}

return
car object
*/

function fixCar(car){
    car.needsMaintenance = false
    return car
}

console.log(fixCar({
    make: "Ford",
    model: "Mustang",
    year: 1969,
    needsMaintenance: true
}))

/*
function addGrades
parameters: student object and grades array

student = {
    name: string
    email: string
    grades: array numbers
}

grades parmeter - array numbers
return type: student object
*/

function addGrades(student, newGrades){
   // student.grades = student.grades.concat(newGrades)

    for(let i = 0; i < newGrades.length; i++){
        student.grades.push(newGrades[i])
    }

    return student
}

let student = {
    name: "Anthony",
    email: "anthony.derosa@codeimmersives.com",
    grades: [80, 100, 95]
}

let newGrades = [88, 70, 90]

console.log(addGrades(student, newGrades))









function getDataType(object, key){
    
        keyType = typeof object[key]
    
    return keyType
}

console.log(getDataType)



function createNewToDo(title, isComplete){
    let newToDo = {
        title: title,
        isComplete: isComplete
    }
    return newToDo
}

function addTodo(toDo, newToDo){
    toDo.push(newToDo)
    return toDo
}
const newTodo = {
    title: 'Call mom', 
    isComplete: false
};
expect(addTodo(todos, newTodo)).toStrictEqual([
    { 
        title: 'Get gas', 
        isComplete: false 
    },
    { 
        title: 'Buy bread', 
        isComplete: true  
    },
    {
        title: 'Call mom', 
        isComplete: false
    }
]);

console.log(addTodo)




function addSong(playlist, newSong){
    playlist.songs.push(newSong)
    playlist["duration"] = (playlist["duration"] += newSong["duration"])
    return playlist
}

let playlist = {
    title: "My Jams",
    duration: 7,
    songs: [
        {
            title: 'Texas Sun',
            artist: 'Khruangbin',
            duration: 4
        },
        {
            title: 'Malamente',
            artist: 'Rosalia',
            duration: 3
        }
    ]
};
console.log(addSong(playlist, newSong))






function updateReportCard(report, newGrade){
    report.grades.push(newGrade)
    let
}





// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
