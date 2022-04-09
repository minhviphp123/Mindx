let a = [];
let b;

const button = document.querySelector('button');

document.addEventListener('scroll', () => {

    if(document.documentElement.scrollTop < a[a.length - 1]) {
        button.style.display = 'block';
    }else{
        button.style.display = 'none';
    }

    a = [];
    a.push(document.documentElement.scrollTop);
})

button.addEventListener('click', () => {
    button.style.display = 'none';
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})