var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: 0x000000
};

var game = new Phaser.Game(config);

function preload ()
{
    console.log("preload");
}

function create ()
{
    console.log("create");
}

function update ()
{
    console.log("update");
}