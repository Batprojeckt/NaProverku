// 1 Задание ===========================================================================
// const user = {
//     name: 'Pasha',
//     age: 28,
//     profession: 'student',
//     learnLesson: true
// }
// console.log(user)

// 2 Задание ===========================================================================
// const user = {
//         name:'Pasha',
//         age: 28,
//         profession: 'student',
//         learnLesson: true,
//         sayHello(name) {
//             console.log(`Hello ${name}`)
//         }
// }
// console.log(user)
// user.sayHello('Steven')

// 3 Задание ===========================================================================
const users = [
    {
        name: 'Misha',
        isAdmin: false
    },

    {
        name: 'Sveta',
        isAdmin: true
    },

    {
        name: 'Nina',
        isAdmin: false
    },

    {
        name: 'Fedor',
        isAdmin: true
    },

    {
        name: 'Dima',
        isAdmin: false
    },
    {
        name: 'Oleg',
        isAdmin: false
    }
]

let simpleUsers = 0

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin != true) {
        simpleUsers++
    }
}
console.log('Количество простых пользователей: ' + simpleUsers)