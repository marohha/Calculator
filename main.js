let btns = Array.from(document.querySelectorAll('.button'));

let display = document.querySelector('.calc-meaning');

btns.map(e => {
    e.addEventListener("click", el => {
        switch (el.target.innerText) {
            case 'AC':
                display.innerText = '0';
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                    break;
                } catch (el) {
                    display.innerText = 'Ошибочка';
                }
            case '+/-':
                display.innerText = '-';
                break;
            default:
                if (display.innerText === "0" && el.target.innerText != '.') {
                    display.innerText = el.target.innerText;
                } else {
                    display.innerText += el.target.innerText;
                } 
        }
    })
})