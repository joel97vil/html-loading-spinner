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


    //VARIABLES
    let _this;

    let _overlay;
    let _text;
    let _foreground_color;
    let _background_color;
    let _speed; //as millisecs
    let _size;
    let _options;

    let _exit = false;


    //INITIALIZATION
    let defaultOptions = { _foreground_color: DEFAULT_FOREGROUND, _overlay: false, _text: "", _speed: DEFAULT_SPEED, _background_color: DEFAULT_BACKGROUND};

    _options = { defaultOptions /*some more possible options to add*/ };
    _this = this;


    //FUNCTIONS
    this.render = function(){
        let container = document.createElement("div");
        container.setAttribute("class", "main-container");
    
        let spinner = document.createElement("div");
        spinner.setAttribute("class", "loading-spinner");
        container.append(spinner);
    
        let span = document.createElement("span");
        span.setAttribute("class", "text");
        span.innerHTML = "LOADING ...";
        container.append(span);
    
        document.body.appendChild(container);
    }
    
    this.init = function(){
        this.render();
    }
    
    this.checkFinish = async function(){
        let i = 1;
        if(i == 0){
            _exit = true;
        }
    }
    
    this.stop = function(){
        //TODO: remove div
        let div = document.getElementsByClassName("main-container");
        div.remove();
    }


    //EXECUTION
    this.init();

    //TODO: Add a listener to check when the process is finished
}