/*
TODO
- add parentheses
- add option to delete
- add history? -> maybe like somewhere to the side
*/
let num1 = "";
let num2 = "";
let operation;
let result = 0;

function putNumberOnScreen(
    clickedButton,
    displayParagraph = document.getElementById("displayText")
) {
    if (typeof clickedButton === "number" && typeof num1 === "string") {
        num1 += String(clickedButton);
        displayParagraph.textContent = String(num1);
    } else if (typeof clickedButton === "number" && typeof num1 === "number") {
        num2 += String(clickedButton);
        displayParagraph.textContent += String(clickedButton);
    } else {
        if (clickedButton !== "=") {
            displayParagraph.textContent += String(clickedButton);
        }
        switch (clickedButton) {
            case "=":
                switch (operation) {
                    case "+":
                        result = num1 + Number(num2);
                        displayParagraph.textContent = String(result);
                        num1 = "";
                        num2 = "";
                        result = 0;
                        break;
                    case "-":
                        result = num1 - Number(num2);
                        displayParagraph.textContent = String(result);
                        num1 = "";
                        num2 = "";
                        result = 0;
                        break;
                    case "*":
                        result = num1 * Number(num2);
                        displayParagraph.textContent = String(result);
                        num1 = "";
                        num2 = "";
                        result = 0;
                        break;
                    case "/":
                        result = num1 / Number(num2);
                        displayParagraph.textContent = String(result);
                        num1 = "";
                        num2 = "";
                        result = 0;
                        break;
                }
                break;
            case "*":
                num1 = Number(num1);
                operation = "*";
                break;
            case "+":
                num1 = Number(num1);
                operation = "+";
                break;
            case "-":
                num1 = Number(num1);
                operation = "-";
                break;
            case "/":
                num1 = Number(num1);
                operation = "/";
                break;
            case "square":
                num1 = Number(num1);
                result = num1 * num1;
                displayParagraph.textContent = String(result);
                num1 = "";
                break;
        }
    }
}
