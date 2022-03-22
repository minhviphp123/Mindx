//     //------Ex1--------
// let a = 'minh';

// a = Array.from(a);////[...a]
// a = a.reverse().join('');
// a = a.toString();

// console.log(a);




////--------Ex2--------

// function removeDupEle(arr) {

//     function checkDup(a, z) {
//         for (let index = 0; index < a.length; index++) {
//             const ele = a[index];

//             if (ele == z) {
//                 return true;
//             }

//         }

//         return false;
//     }

//     let brr = [];
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];

//         if (!checkDup(brr, element)) {
//             brr.push(element);
//         }

//     }
//     return brr;
// }

// let a = removeDupEle([1, 2, 2, 2, 2, 3]);

// console.log(a);





////--------------Ex3----------------

// function getEleFromArray(array) {

//     let a = [];
//     let b = [];
//     let brr = [];
//     let x = 0;

//     function checkDup(a, z) {
//         for (let index = 0; index < a.length; index++) {
//             const ele = a[index];

//             if (ele == z) {
//                 return true;
//             }

//         }

//         return false;
//     }

//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];

//         if (!checkDup(brr, element)) {
//             brr.push(element);
//         }

//     }

//     for (let index = 0; index < brr.length; index++) {
//         const element = brr[index];
//         x = 0;

//         for (let i = 0; i < array.length; i++) {
//             const e = array[i];

//             b = [];


//             if (element == e) {
//                 x++;
//             }
//         }
//         b.push(element);
//         b.push(x);
//         a.push(b);

//     }

//     
//     let max = a[0][1];

//     for (let index = 1; index < a.length; index++) {
//         const element = a[index];

//         if (element[1] > max) {
//             max = element[1];
//         }

//     }

//     for (let index = 0; index < a.length; index++) {
//         const element = a[index];

//         if (max == element[1]) {
//             console.log('so co lan xuat hien nhieu nhat la',
//                 element[0], 'voi', max, 'lan');
//         }

//     }

// }

// getEleFromArray([1, 2, 2, 2, 3, 3, 3, 3, 3, 3]);




////---------------EX4----------------

// const namee = document.querySelector('.name');
// const tele = document.querySelector('.telephone');
// const search = document.querySelector('.search');
// const addBtn = document.querySelector('.addBtn');
// const searchBtn = document.querySelector('.searchBtn');
// const rmBtn = document.querySelector('.rmBtn');
// const list = document.querySelector('.list');

// let temp = [];
// let notDupArr = [];
// const phoneBook = [{
//         name: 'Alice',
//         tele: 12345678
//     },
//     {
//         name: 'David',
//         tele: 34565634
//     },
//     {
//         name: 'Zeri',
//         tele: 45678907
//     }
// ]

// function render(arr, ctn) {

//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];

//         const item = document.createElement('div');
//         item.classList.add('item');

//         item.innerHTML = `

//             <div class="name">${element.name}</div>
//             <div class="telephone">${element.tele}</div>

//         `
//         ctn.appendChild(item);

//     }

// }

// addBtn.addEventListener('click', function(e) {


//     if (namee.value === '') {
//         namee.focus();
//         namee.style.border = '2px solid red';

//     }
//     if (tele.value === '') {
//         tele.focus();
//         tele.style.border = '2px solid red';
//     }



//     if (namee.value !== '') {
//         namee.style.border = '';
//     }
//     if (tele.value !== '') {
//         tele.style.border = '';
//     }

//     if (namee.value !== '' && tele.value !== '') {

//         const item = document.createElement('div');
//         item.classList.add('item');

//         item.innerHTML = `

//             <div class="name">${namee.value}</div>
//             <div class="telephone">${tele.value}</div>

//         `
//         list.appendChild(item);
//     }



//     let obj = { name: namee.value, tele: tele.value }
//     phoneBook.push(obj);

//     console.log(phoneBook);

//     namee.value = '';
//     tele.value = '';
// });

// searchBtn.addEventListener('click', function() {

//     if (search.value === '') {
//         search.focus();
//         search.style.border = '2px solid red';
//     } else {
//         search.style.border = '';

//         temp = [...phoneBook].filter((ten) => ten.name.includes(search.value));
//         list.innerHTML = '';
//         render(temp, list);
//     }

// })

// rmBtn.addEventListener('click', function() {

//     function checkDup(a, z) {
//         for (let index = 0; index < a.length; index++) {
//             const ele = a[index];

//             if (ele.name === z) {
//                 return true;
//             }

//         }

//         return false;
//     }

//     for (let index = 0; index < phoneBook.length; index++) {
//         const element = phoneBook[index];

//         if (!checkDup(notDupArr, element.name)) {
//             notDupArr.push(element);
//         }

//     }

//     list.innerHTML = '';
//     render(notDupArr, list);
// })