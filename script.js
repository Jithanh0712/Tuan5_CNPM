document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.input');

    inputs.forEach(input => {

        setInputColor(input);

        input.addEventListener('input', function() {
            setInputColor(input);
        });
    });

    function setInputColor(input) {
        if (input.value.toUpperCase() === 'Y') {
            input.classList.add('green');
            input.classList.remove('red');
        } else if (input.value.toUpperCase() === 'N') {
            input.classList.add('red');
            input.classList.remove('green');
        } else {
            input.classList.remove('green', 'red');
        }
    }
});
