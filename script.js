function loadingSpinner(options){
    //CONSTANTS
    const DEFAULT_FOREGROUND = "#0077cc"; //TODO: Set those values as hexagecimal
    const BLUE_FOREGROUND = "#0077cc"; //TODO: Set those values as hexagecimal
    const RED_FOREGROUND = "red";
    const BLACK_FOREGROUND = "black";
    const YELLOW_FOREGROUND = "yellow";

    const DEFAULT_BACKGROUND = "rgba(0, 0, 0, 0.1)"; //TODO: Set those values as hexagecimal
    const GRAY_BACKGROUND = "rgba(0, 0, 0, 0.1)";
    const RED_BACKGROUND = "red";
    const BLACK_BACKGROUND = "black";
    const YELLOW_BACKGROUND = "yellow";

    const DEFAULT_SPEED = 2000;
    const FAST_SPEED = 1000;
    const SLOW_SPEED = 3000;
    const SLOWER_SPEED = 4000;

    const DEFAULT_TEXT = "LOADING ...";


    //EVENTS
    const event = new Event("isFinished");

    //INITIALIZATION
    options = { _foreground_color: DEFAULT_FOREGROUND, _overlay: false, _text: DEFAULT_TEXT, _speed: DEFAULT_SPEED, _background_color: DEFAULT_BACKGROUND, _secondary_text: null};
    _this = this;


    //ACCESSORS
    this.getInstance = function(){ return _this; }
    this.getOverlay = function(){ return options._overlay; }
    this.setOverlay = function(overlay) { options._overlay = overlay; }
    this.getForegroundColor = function(){ return options._foreground_color; }
    this.setForegroundColor = function(foregroundColor){ options._foreground_color = foregroundColor; }
    this.getBackgroundColor = function(){ return options._background_color; }
    this.setBackgroundColor = function(backgroundColor){ options._background_color = backgroundColor; }
    this.getSpeed = function(){ return options._speed; }
    this.setSpeed = function(speed){ options._speed = speed; }
    this.getText = function(){ return options._text; }
    this.setText = function(text) { options._text = text; }
    this.getSecondaryText = function(){ return options._secondary_text; }
    this.setSecondaryText = function(secondary_text) { options._secondary_text = secondary_text; }
    this.getSize = function(){ return options._size; }
    this.setSize = function(size){ options._size = size; }


    //FUNCTIONS
    this.render = function(){
        let container = document.createElement("div");
        container.setAttribute("class", "main-container");
    
        let spinner = document.createElement("div");
        spinner.setAttribute("class", "loading-spinner");
        container.append(spinner);
    
        let span = document.createElement("span");
        span.setAttribute("class", "text primary-text");
        span.innerHTML = this.getText();
        container.append(span);

        if(this.getSecondaryText() != "" && this.getSecondaryText() != null){
            let secondary = document.createElement("span");
            secondary.setAttribute("class", "text secondary-text");
            secondary.innerHTML = this.getSecondaryText();
            container.append(secondary);
        }
    
        document.body.appendChild(container);
    }
    
    this.init = function(){
        this.render();
    }
    
    this.stop = function(){
        let div = document.getElementsByClassName("main-container");
        for(let i = 0; i < div.length; i++){
            div[i].remove();
        }
    }


    //EXECUTION
    this.init();

    // Listen the event.
    window.addEventListener(
        "load",
            (e, _this) => {
                /*_this.*/stop();
            },
        false,
    );

    // Dispatch the event.
    //this.dispatchEvent(event);

    //setTimeout(3000000);
    //this.stop();
}