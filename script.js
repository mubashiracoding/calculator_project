document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector(".input");
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            handleButtonClick(button.innerText);
        });
    });

    function handleButtonClick(value) {
        if (value === "=") {
            try {
                input.value = eval(input.value);
            } catch (error) {
                input.value = "Error";
            }
        } else if (value === "AC") {
            input.value = "";
        } else if (value === "DEL") {
            input.value = input.value.slice(0, -1);
        } else {
            input.value += value;
        }
    }
});
