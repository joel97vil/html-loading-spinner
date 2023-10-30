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


    //VARIABLES
    let _this;

    let _overlay;
    let _text;
    let _foreground_color;
    let _background_color;
    let _speed; //as millisecs
    let _size;
    let _options;


    //INITIALIZATION
    let defaultOptions = { _foreground_color: DEFAULT_FOREGROUND, _overlay: false, _text: DEFAULT_TEXT, _speed: DEFAULT_SPEED, _background_color: DEFAULT_BACKGROUND};

    _options = { defaultOptions /*some more possible options to add*/ };
    _this = this;

    //ACCESSORS
    this.getInstance = function(){ return _this; }
    this.getOverlay = function(){ return _overlay; }
    this.setOverlay = function(overlay) { _overlay = overlay; }
    this.getForegroundColor = function(){ return _foreground_color; }
    this.setForegroundColor = function(foregroundColor){ _foreground_color = foregroundColor; }
    this.getBackgroundColor = function(){ return _background_color; }
    this.setBackgroundColor = function(backgorundColor){ _background_color = backgorundColor; }
    this.getSpeed = function(){ return _speed; }
    this.setSpeed = function(speed){ _speed = speed; }
    this.getSize = function(){ return _size; }
    this.setSize = function(size){ _size = size; }
    this.getOptions = function(){ return _options; }

    //FUNCTIONS
    this.render = function(){
        let container = document.createElement("div");
        container.setAttribute("class", "main-container");
    
        let spinner = document.createElement("div");
        spinner.setAttribute("class", "loading-spinner");
        container.append(spinner);
    
        let span = document.createElement("span");
        span.setAttribute("class", "text");
        span.innerHTML = DEFAULT_TEXT;
        container.append(span);
    
        document.body.appendChild(container);
    }
    
    this.init = function(){
        this.render();
    }
    
    this.stop = function(){
        //TODO: remove div
        let div = document.getElementsByClassName("main-container");
        div.remove();
    }


    //EXECUTION
    this.init();
    
    // Listen the event.
    /*this.addEventListener(
        "isFinished",
            (e, _this) => {
                _this.stop();
            },
        false,
    );*/

    // Dispatch the event.
    //this.dispatchEvent(event);
}