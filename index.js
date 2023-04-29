document.addEventListener('DOMContentLoaded', function() {
    console.log('Hello');

    const rootElement = document.querySelector('#root');
    const sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;
    let isTrottled = false;

    document.addEventListener('wheel', function(e){
        if (isTrottled) return;
        isTrottled = true;

        setTimeout(function(){
            isTrottled = false;
        }, 1000);

        const direction = e.wheelDelta < 0 ? 1 : -1;

        //console.log(e.wheelDelta);
        scroll(direction);
        
    })

    function scroll(direction) {
        if(direction === 1) {
            const isLastSection =  currentSectionIndex === sections.length -1;
            if (isLastSection) return;
        } else if(direction === -1) {
            const firstSection = currentSectionIndex === 0;
            if (firstSection) return;
        }

        currentSectionIndex = currentSectionIndex + direction;

        console.log(currentSectionIndex);
        scrollToCurrentSection(currentSectionIndex);
    }

    function scrollToCurrentSection(Index) {
        sections[Index].scrollIntoView({
            behavior: 'smooth',
            block: "start",
        })
    }

})