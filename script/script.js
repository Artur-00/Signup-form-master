function focusOut(element) {
    element.classList.remove("input-error");
    const elementWithError = event.target.parentNode.classList[1];
    const errorClass = elementWithError+"Error";
            
    document.querySelector(`.${errorClass}`).style.display = 'none';
}

const inputs = document.querySelectorAll('[required]');

for (input of inputs) {
    input.addEventListener("invalid", function(event) {
        event.preventDefault();
        const valueMissing = event.target.validity.valueMissing;
        const typeMismatch = event.target.validity.typeMismatch;
        const errorMessages = document.querySelectorAll(".error");

        if (valueMissing || typeMismatch) {
            const elementWithError = event.target.parentNode.classList[1];
            const errorClass = elementWithError+"Error";

            document.querySelector(`.${errorClass}`).style.display = 'block';
            event.target.classList.add("input-error");
        }
        
        
    })
}