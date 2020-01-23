export class HoverRegulator {

    private rootElement: HTMLElement | null = document.querySelector(":root");
    private justTouched: boolean = false;
    private justTouchedTimer: number = 0;

    public setup() {
        this.rootElement && this.rootElement.addEventListener("touchstart", () => this.disableHover());
        this.rootElement && this.rootElement.addEventListener("mouseover", () => this.enableHover());
    }

    private disableHover() {
        if (this.justTouchedTimer) {
            window.clearTimeout(this.justTouchedTimer);
        }
        this.justTouched = true;
        if (this.rootElement && this.rootElement.classList.contains("s-hover")) {
            this.rootElement.classList.remove("s-hover");
        }
        if (this.rootElement && !this.rootElement.classList.contains("s-touch")) {
            this.rootElement.classList.add("s-touch");
        }
        this.justTouchedTimer = window.setTimeout(() => this.justTouched = false, 100);
    }

    private enableHover() {
        if (!this.justTouched && this.rootElement && !this.rootElement.classList.contains("s-hover")) {
            this.justTouched = false;
            this.rootElement && this.rootElement.classList.add("s-hover");
            if (this.rootElement && this.rootElement.classList.contains("s-touch")) {
                this.rootElement.classList.remove("s-touch");
            }
        }
    }
}
