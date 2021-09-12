const inputEl = document.querySelector(".inputText");

const calculate = (number) => {
    inputEl.value += number;
};

const result = () => {
    try {
        inputEl.value = eval(inputEl.value);
    } catch (err) {
        alert("Your entry is not valid!");
    }
};

const clr = () => {
    inputEl.value = " ";
};

const del = () => {
    inputEl.value = inputEl.value.slice(0, -1);
};
