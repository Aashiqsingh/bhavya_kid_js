var language = ["hindi","english","tamil","telugu","punjabi","bengali","kannada","gujarati","malayalam"];


// const deleteLang = (langName)=>{


//     return language.filter((lang)=>{
//         return lang != langName
//     })

// }

// let x = deleteLang("punjabi")
// console.log(x);


// const deleteLang = (langName)=>{


//     return language.filter((lang)=>lang != langName )

// }

// let x = deleteLang("tamil")
// console.log(x);


const deleteLang = (langName)=> language.filter((lang)=>lang != langName )

let x = deleteLang("gujarati")
console.log(x);














// const deleteLang = (langName)=>{


//     let x = language.filter((lang)=>{
//         return lang != langName
//     })

//     return x

// }

// let x = deleteLang("bengali")
// console.log(x);
