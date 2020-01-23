var rootElement;
var justTouched;
var justTouchedTimer;


document.addEventListener('DOMContentLoaded', () => {
    rootElement = document.querySelector(":root");
    justTouched = false;
    justTouchedTimer = 0;

    rootElement && rootElement.addEventListener("touchstart", () => disableHover());
    rootElement && rootElement.addEventListener("mouseover", () => enableHover());

    function disableHover() {
        if (justTouchedTimer) {
            window.clearTimeout(justTouchedTimer);
        }
        justTouched = true;
        if (rootElement && rootElement.classList.contains("s-hover")) {
            rootElement.classList.remove("s-hover");
        }
        if (rootElement && !rootElement.classList.contains("s-touch")) {
            rootElement.classList.add("s-touch");
        }
        justTouchedTimer = window.setTimeout(() => justTouched = false, 500);
    }
    
    function enableHover() {
        if (!justTouched && rootElement && !rootElement.classList.contains("s-hover")) {
            justTouched = false;
            rootElement && rootElement.classList.add("s-hover");
            if (rootElement && rootElement.classList.contains("s-touch")) {
                rootElement.classList.remove("s-touch");
            }
        }
    }

})



