const btn = document.querySelector("button");

const username = document.querySelector("#username");

const email = document.querySelector("#email");

const password = document.querySelector("#password");

const confirmPassword = document.querySelector(".cf");

const form = document.querySelector("form");

let listInput = [username, email, password, confirmPassword];

function showError(input, message) {

    let parent = input.parentElement;

    let small = parent.querySelector("small");

    parent.classList.add("error");

    small.innerText = message;

}

function showSuccess(input) {
    let parent = input.parentElement;

    parent.classList.add("success");
}

function checkEmpty(listInput) {

    let isEmpty = false;

    listInput.forEach(input => {

        input.value = input.value.trim();

        if (input.value == "") {

            isEmpty = true;

            showError(input, "dien vao day");

        } else {

            showSuccess(input);

        }

    });

    return isEmpty;
}

function checkLength(a, min, max) {


    if (a.value.length < min) {
        showError(a, `ki tu qua ngan, phai co it nhat ${min} ky tu`);
    }

    if (a.value.length > max) {
        showError(a, `ki tu qua dai, chi dc nhieu nhat la ${max} ky tu`)
    }
}

function checkMatchPassword(a, b) {
    if (a.value != b.value) {

        showError(b, "mk khong trung khop");
        return true;
    }

    return false;
}

btn.addEventListener("click", function(e) {

    e.preventDefault();

    checkEmpty(listInput);

    checkLength(username, 3, 15);

    checkLength(email, 3, 15);

    checkLength(password, 3, 15);

    checkLength(confirmPassword, 3, 15);

    checkMatchPassword(password, confirmPassword);

});