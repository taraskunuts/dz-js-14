const users = [
{
    name: "Someone",
    eyeColor: "blue",
    gender: "male",
    isActive: true,
    email: "Someone@google.com",
    age: 25,
    }
]
const userNames = users.map(user => user.name)
console.log(userNames)
//
//
//
//
const getUsersByEyeColor = color => users.filter(user => user.eyeColor === color)
console.log(getUsersByEyeColor("blue"))
//
//
//
//
const getUserNamesByGender = (gender) =>
  users.reduce((acc, user) => {
    if (user.gender === gender) {
      acc.push(user.name)
    }
    return acc
}, [])
console.log(getUserNamesByGender("male"))
//
//
//
//
const inactiveUsers = users.filter(user => !user.isActive)
console.log(inactiveUsers)
//
//
//
//
const getUserByEmail = (email) => users.find(user => user.email === email)
console.log(getUserByEmail("Someone@google.com"))
//
//
//
//
const getUsersByAgeRange = (min, max) => users.filter(user => user.age >= min && user.age <= max)
console.log(getUsersByAgeRange(0, 100))