let posts = [

    {
        name: "Tran Quang Minh",
        class: "KTN59CL",
        code: "79048"
    },

    {
        name: "Tran Quang Minh",
        class: "KTN59CL",
        code: "79048"
    },


    {
        name: "Tran Quang Minh",
        class: "KTN59CL",
        code: "79048"
    },


    {
        name: "Tran Quang Minh",
        class: "KTN59CL",
        code: "79048"
    },


];

const ip = document.querySelector("input");

const leftPost = document.querySelector(".left");

//cac buoc lam:
//b1:event input clear data 
//render data by value 

function render(array, container) {

    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        container.innerHTML = `
        
        <div class="post">

            <img src="./fio.jpg" alt="">

            <h4>${element.name}</h4>
            <p>${element.class}</p>
            <small>${element.code}</small>

        </div>

        
        `

    }


}