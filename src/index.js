import {secretButton, secretParagraph} from './js/dom-loader';
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";

var showSecret = false;

secretButton.addEventListener('click', toggleSecretState);
updateSecretParagraph();

function toggleSecretState() {
    showSecret = !showSecret;
    updateSecretParagraph();
    updateSecretButton()
}

function updateSecretButton() {
    if (showSecret) {
        console.log("Hide secret!");
        secretButton.textContent = 'Hide the Secret';
    } else {
        console.log("Show secret!");
        secretButton.textContent = 'Show the Secret';
    }
}

function updateSecretParagraph() {
    if (showSecret) {
        secretParagraph.style.display = 'block';
    } else {
        secretParagraph.style.display = 'none';
    }
}

function some(...args) {
    console.log("Args from some: ", args);
}

some(1, 2, 3, 4, 5);


