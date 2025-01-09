// var i =5
// var j = i==1?0:1
// console.log(j)

var fruit = {f0:'apple',f1:'papaya',f2:'orange',f3:'banana'}

// for(i = 0; i<Object.keys(fruit).length;i++){
//     console.log("fruit[%d] = %s",i, fruit[i])
// }

for([index, item] of Object.entries(fruit)){
    console.log("fruit[%d] = %s",index, item)
}

for(index in Object.values(fruit)){
    console.log("fruit[%d] = %s",index,fruit[index])
}


Object.entries(fruit).forEach(entry => {
    [index, item] = entry
    console.log("fruit[%d] = %s",index, item)
})

for(item of Object.values(fruit)){
    console.log("fruit = %s",item)
}