//2 so lien ke trong mang co tich lon nhat

let arr = [2, 3, -5, -2, 4];
let tg = 10;
let max = 6;

for (let index = 1; index < arr.length; index++) {
    const element = arr[index];

    if(element * arr[index + 1] > max) {
        max = element * arr[index + 1];
    }

}

console.log(max);
