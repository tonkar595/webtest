// first class function

// leapYear = (year) => {
//         if(year%400 == 0 || (year % 100 != 0 && year % 4 ==0)){
//             return "is leap year"
//         } 
//         else{
//             return "is not leap year"
//         }
            
//     }
    
//     console.log("%d %s",2004,leapYear(2004))
//     console.log("%d %s",2100,leapYear(2100))
//     console.log("%d %s",2400,leapYear(2400))
    






// arrow function

// leapYear = year => {
//     if(year%400 == 0 || (year % 100 != 0 && year % 4 ==0))
//         return "is leap year"
//     else
//         return "is not leap year"
// }

// console.log("%d %s",2004,leapYear(2004))
// console.log("%d %s",2100,leapYear(2100))
// console.log("%d %s",2400,leapYear(2400))

// arrow function แบบย่อ

// leapYear = year => 
//         (year%400 == 0 || (year % 100 != 0 && year % 4 ==0))
//         ?"is leap year":"is not leap year"
        
   
    
//     console.log("%d %s",2004,leapYear(2004))
//     console.log("%d %s",2100,leapYear(2100))
//     console.log("%d %s",2400,leapYear(2400))

leapyear = year => year%400 == 0||(year%100 != 0 && year % 4 ==0)?"":"not"

year = 2024
for(i=0;i<=100;i++){
    console.log(year+i + "is " +leapyear(year+i)+" leap year")
}

    