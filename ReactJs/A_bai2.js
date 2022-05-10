//INPUT [60, 40, 55, 75, 64] thì OUTPUT là [179, 115]

let array = [60, 40, 55, 75, 64];
let array2 = [];
let sumA = 0;
let sumB = 0;


for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
    if(index % 2 == 0) {
        sumA += element;
    }else{
        sumB += element;
    }

}

array2.push(sumA);
array2.push(sumB);

console.log(array2);