let a = [2, 1, 3, 2, 8, 5, 7];
let brr = [];

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    
    let pos = -1;

    for (let j = index - 1; j >= 0; j--) {

        if(a[j] > element) {

            pos = j;
            break;

        }
        
    }
    
    if(pos >= 0){
        brr.push(pos + 1);
    }
    else{
        brr.push(pos);
    }
}

console.log(brr);