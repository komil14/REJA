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

// function findnumberLetter(str, letter) {
//     let count = 0;
//     if(letter === undefined || letter.length !== 1) {
//         return "Bitta harf kiriting";
//     }else{
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }
// }

// console.log(findnumberLetter("engineering", "e"));



// B task 

// function countDigits(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (!isNaN(str[i]) && str[i] !== ' ') {
//             count++;
//         }
//     }
//     return count; 
// }
// console.log(countDigits("1a 2b3c 4d5e6f 7g8h9i0")); 


// C task

// function checkString(str1,str2){
//     return str1.trim().split("").sort().join() === str2.trim().split("").sort().join()
//  }
//  console.log(checkString("Jacob", " bocaJ"))


// D  Task

// const Shop = {
//     init(non, lagmon, cola) {
//         this.non = non;
//         this.lagmon = lagmon;
//         this.cola = cola;
//     },
//     qoldiq() {
//         const now = new Date();
//         const hours = now.getHours().toString().padStart(2, '0');
//         const minutes = now.getMinutes().toString().padStart(2, '0');
//         console.log(`Hozir ${hours}:${minutes}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`);
//     },
//     sotish(product, quantity) {
//         if (this[product] !== undefined && this[product] >= quantity) {
//             this[product] -= quantity;
//             console.log(`${quantity}ta ${product} sotildi.`);
//         } else {
//             console.log(`Kechirasiz, yetarli ${product} yo'q.`);
//         }
//     },
//     qabul(product, quantity) {
//         if (this[product] !== undefined) {
//             this[product] += quantity;
//             console.log(`${quantity}ta ${product} qabul qilindi.`);
//         } else {
//             console.log(`Kechirasiz, bunday mahsulot mavjud emas.`);
//         }
//     }               
    
// }

// Shop.init(4, 5, 2);
// Shop.qoldiq();
// Shop.sotish('non', 3);
// Shop.qabul('cola', 4);
// Shop.qabul('non', 4);
// Shop.qoldiq();  


// E Task

const getReverseString = (str) => {
    return str.split("").reverse().join("");
};
console.log(getReverseString("hello"));
