document.addEventListener('DOMContentLoaded', function() {
    console.log('Hello');

    const rootElement = document.querySelector('#root');
    const sections = document.querySelectorAll('section');
    document.addEventListener('mouseover', function(e){
        console.log(e.wheelDelta);
    })

})