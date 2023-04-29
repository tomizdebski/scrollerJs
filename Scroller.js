class Scroller {
    constructor(rootSelector) {
        const rootElement = document.querySelector(rootSelector);
        this.sections = document.querySelectorAll('section');
        const sectionsArr = [...this.sections];
        const currentSectionIndex = sectionsArr.findIndex(this.isScrolledIntoView );
        this.currentSectionIndex = currentSectionIndex < 0 ? 0 : currentSectionIndex;
        // this.currentSectionIndex = Math.max(currentSectionIndex, 0); // to samo co wyzej
        this.isTrottled = false;
    
        
    }

    isScrolledIntoView(el) {
        const rect = el.getBoundingClientRect();
        const elemTop = rect.top;
        const elemBottom = Math.floor(rect.bottom);
        const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        console.log('czy widac',isVisible);
        return isVisible; 
    }

    listenScroll = (event) => {
        if (this.isTrottled) return;
        this.isTrottled = true;

        setTimeout(() => {
            this.isTrottled = false;
        }, 1000);

        const direction = event.wheelDelta < 0 ? 1 : -1;

        //console.log(e.wheelDelta);
        this.scroll(direction);

    }

    scroll = (direction) => {
        console.log(direction)
        if(direction === 1) {
            const isLastSection =  this.currentSectionIndex === this.sections.length -1;
            if (isLastSection) return;
        } else if(direction === -1) {
            const firstSection = this.currentSectionIndex === 0;
            if (firstSection) return;
        }

        this.currentSectionIndex = this.currentSectionIndex + direction;

        console.log(this.currentSectionIndex);
        this.scrollToCurrentSection();

    }
    scrollToCurrentSection = () => {
        this.sections[this.currentSectionIndex].scrollIntoView({
            behavior: 'smooth',
            block: "start",
        })
    }
}