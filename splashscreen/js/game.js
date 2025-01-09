var game = {
    // Initialize game objects, preload assets and display start screen
    init: function() {
        // Get the canvas and its 2D context
        game.canvas = document.getElementById("gameCanvas");
        game.context = game.canvas.getContext("2d");

        // Initialize objects
        levels.init();
        
        // Hide all game layers and display the start screen
        game.hideScreens();
        game.showScreen("gamestartscreen");
    },
    
    hideScreens: function() {
        var screens = document.getElementsByClassName("gamelayer");
        
        // Iterate through all game layers and set their display to none
        for(let i = screens.length - 1; i >= 0; i--) {
            screens[i].style.display = "none";
        }
    },
    
    hideScreen: function(id) {
        var screen = document.getElementById(id);
        screen.style.display = "none";
    },
    
    showScreen: function(id) {
        var screen = document.getElementById(id);
        screen.style.display = "block";
    },

    showLevelScreen: function(){
        game.hideScreen();
        game.showScreen("levelselectscreen");
    }
};

var levels = {
    //Level data
    data: [{//First Level
        foreground: "desert-foreground",
        background: "clouds-background",
        entities: []
    },{//Second Level
        foreground: "desert-foreground",
        background: "clouds-background",
        entities: []
    }],

    //initialize level selection screen
    init:function(){
        var levelSelectionScreen = document.getElementById("levelselectscreen");

        //An event handler to call
        var buttonClickHandler = function(){
            game.hideScreen("levelselectscreen");

            //Level label values are 1,2, Levels 0,1
            levels.load(this.value -1);
        };

        for(let i = 0; i < levels.data.length; i++){
            var button = document.createElement("input");

            button.type = "button";
            button.value = (i+1); //Level labels are 1,2
            button.addEventListener("click",buttonClickHandler);

            levelSelectionScreen.appendChild(button);
        }
    },

    //Load all data and images for a specific level
    load: function(number){}
}

// Add this after your game object definition
window.addEventListener("load", function() {
    // Initialize game
    game.init();
    
    // Debug image loading
    var images = document.getElementsByTagName('img');
    for(var i = 0; i < images.length; i++) {
        images[i].addEventListener('error', function(e) {
            console.error('Error loading image:', e.target.src);
        });
        
        images[i].addEventListener('load', function(e) {
            console.log('Successfully loaded image:', e.target.src);
        });
    }
    
    // Debug screen visibility
    console.log('gamestartscreen display:', 
        document.getElementById('gamestartscreen').style.display);
});

