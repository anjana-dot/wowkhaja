
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        if (e.target.id === 'lightgray') {
            body.style.background = 'lightgray';
        } 
        else if (e.target.id === 'lightblue') {
            body.style.background = 'lightblue';
        } 
        else if (e.target.id === 'lightpink') {
            body.style.background = 'lightpink';
        } 
        else if (e.target.id === 'orange') {
            body.style.background = 'orange';
        }
    });
});