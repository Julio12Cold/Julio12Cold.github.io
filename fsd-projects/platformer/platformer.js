$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(0, 150, 1200, 25, "black");
createPlatform(1060, 175, 40, 480, "black");
createPlatform(1350, 1, 40, 1000, "black");

createPlatform(1250, 280, 100, 25, "green");
createPlatform(1100, 400, 100, 25, "green");
createPlatform(1250, 525, 100, 25,"green");

createPlatform(125, 550, 950, 25, "black");
createPlatform(0, 150, 40, 1000, "black");

createPlatform(900, 675, 40, 250, "red");
createPlatform(600, 675, 40, 250, "red");
createPlatform(300, 675, 40, 250, "red");
createPlatform(40, 660, 60, 25,"red");

createPlatform(0, 300, 900, 25, "black");
createPlatform(225, 450, 120, 25, "gold");
createPlatform(525, 450, 120, 25, "gold");
createPlatform(825, 450, 120, 25, "gold");
createPlatform(970, 375, 90, 25, "gold");


    // TODO 3 - Create Collectables
createCollectable("database", 500, 50, 0.5, 0.7);
createCollectable("database", 1100, 50, 0.5, 0.7);
createCollectable("database", 1060, 675, 0.5, 0.7);
createCollectable("database", 50, 600, 0.5, 0.7);
createCollectable("database", 1000, 300, 0.5, 0.7);
createCollectable("database", 50, 250, 0.5, 0.7);


    
    // TODO 4 - Create Cannons
createCannon("top", 200, 1500);
createCannon("top", 500, 1000);
createCannon("top", 800, 1000);
createCannon("top", 1300, 1000);

createCannon("right", 440, 5000);
createCannon("right", 570, 3500);

createCannon("left", 580, 2500);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
