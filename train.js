// console.log("Jack Ma maslahatlari");

// const list = [
//   "yaxshi talaba boling", // 0–20
//   "togri boshliq tanlang va koproq hato qiling", // 20–30
//   "uzingizga ishlashingizni boshlang", // 30–40
//   "siz kuchli bolgan narsalarni qiling", // 40–50
//   "yoshlarga investitsiya qiling", // 50–60
//   "endi dam oling, foydasi yoq endi" // 60+
// ];

// function maslahatBering(a, callback){
//     if (typeof a !== "number") callback("Xato: son kiriting", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a < 30) callback(null, list[1]);
//     else if (a >= 30 && a < 40) callback(null, list[2]);
//     else if (a >= 40 && a < 50) callback(null, list[3]);
//     else if (a >= 50 && a < 60) callback(null, list[4]);
//     else {
//         setTimeout(() => {
//             callback(null, list[5]);
//         }, 3000);
//     }
// }

// console.log("Kod boshlandi, natija kutilyapti...");
// maslahatBering(61, function(err, data){
//     if(err) console.log(err);
//     else console.log(data);
// })
// console.log("Kod tugadi, natija kutilyapti...");

// maslahatBering("salom", function(err, data){
//     if(err) console.log(err);
//     else console.log(data);
// })

// maslahatBering(25, function(err, data){
//     if(err) console.log(err);
//     else console.log("javob",data);
// })

// async function maslahatBering(a){
//     return new Promise((resolve, reject) => {
//         if (typeof a !== "number") reject("Xato: son kiriting");
//         else if (a <= 20) resolve(list[0]);
//         else if (a > 20 && a < 30) resolve(list[1]);
//         else if (a >= 30 && a < 40) resolve(list[2]);
//         else if (a >= 40 && a < 50) resolve(list[3]);
//         else if (a >= 50 && a < 60) resolve(list[4]);
//         else {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 3000);
//         }
//     });
// }

// console.log("Kod boshlandi, natija kutilyapti...");
// async function run(){
//     try {
//         const javob = await maslahatBering(61);
//         console.log(javob);
//     } catch(err){
//         console.log(err);
//     }
// }
// run();
// console.log("Kod tugadi, natija kutilyapti...");


// A- Task

function findnumberLetter(str, letter) {
    let count = 0;
    if(letter === undefined || letter.length !== 1) {
        return "Bitta harf kiriting";
    }else{
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}
}

console.log(findnumberLetter("engineering", "e"));