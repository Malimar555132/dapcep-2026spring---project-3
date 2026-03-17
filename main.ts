controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    bx = 0
    by = -50
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSide(img`
        4 2 
        2 4 
        `, 50, 50)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    fire_ball = sprites.createProjectileFromSide(img`
        4 2 
        2 4 
        `, 50, 50)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    bx = 0
    by = -50
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    game.gameOver(true)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.gameOver(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    bx = 0
    by = -50
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    bx = 0
    by = -50
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar2.value += -5
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += -5
})
let fire_ball: Sprite = null
let projectile: Sprite = null
let by = 0
let bx = 0
let statusbar2: StatusBarSprite = null
let statusbar: StatusBarSprite = null
info.startCountdown(90)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c . . . . 
    . . . . . . c c 4 4 4 4 c c . . 
    . . . . . c 4 4 4 4 4 4 4 4 c . 
    . . . . c 4 4 4 f 1 4 4 4 4 4 c 
    . . . c 4 4 4 4 f f 4 4 4 4 4 c 
    . . . c 4 4 4 4 4 4 4 4 4 4 4 c 
    . . c 4 4 4 4 4 4 4 b 1 b b c c 
    . . c 4 4 4 4 4 4 4 4 3 3 3 4 c 
    4 2 c 4 4 4 4 4 4 4 4 4 4 4 b . 
    2 4 c 4 4 4 4 b 4 4 c b b c . . 
    c 4 c 4 4 4 4 b b 4 4 c b b c . 
    c 4 4 4 4 4 4 4 4 c c c c c c . 
    . c 4 4 4 b 4 4 4 c c c c . . . 
    . . c c c b 4 4 b c c c c c . . 
    . . . . c b 4 4 4 c b b b c . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.castle.tileDarkGrass2)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . c c c c c . . . . 
    . . . . . . c 4 4 4 4 4 c c . . 
    . . . . . c 4 4 f 1 4 4 4 4 c . 
    . . . . c 4 4 4 f f 4 4 4 4 4 c 
    . . . c 4 4 4 4 4 4 4 4 4 4 4 c 
    . . . c 4 4 4 4 4 4 b 1 b b c c 
    . . c 4 4 4 4 4 4 4 4 3 3 3 4 c 
    . . c 4 4 4 4 4 4 4 4 3 3 3 4 c 
    . . c 4 4 4 4 4 4 b 4 4 4 4 c . 
    . . c 4 4 4 4 b 4 4 c b b c . . 
    2 4 c 4 4 4 4 b b 4 1 c b b c . 
    4 2 c 4 4 4 4 4 4 c c c c c c . 
    . c 4 4 4 b 4 4 b c c c . . . . 
    . . c c c b b 4 4 1 c . . . . . 
    . . . . . c c c c c c c . . . . 
    . . . . . . . c b b b c . . . . 
    `,img`
    . . . . . . . c c c c c . . . . 
    . . . . . . c 4 4 4 4 4 c c . . 
    . . . . . c 4 4 f 1 4 4 4 4 c . 
    . . . . c 4 4 4 f f 4 4 4 4 4 c 
    . . . c 4 4 4 4 4 4 4 4 4 4 4 c 
    . . . c 4 4 4 4 4 4 b 1 b b c c 
    . . c 4 4 4 4 4 4 4 4 3 3 3 4 c 
    . . c 4 4 4 4 4 4 4 4 4 4 4 4 c 
    . . c 4 4 4 4 4 4 b 4 4 4 4 c . 
    . . c 4 4 4 4 b 4 4 c 4 4 c . . 
    4 2 c 4 4 4 4 b b 4 1 c 4 1 c . 
    2 4 c 4 4 4 4 4 4 c c c c c c . 
    . c 4 4 4 4 b 4 4 b c c . . . . 
    . . . c c c b b 4 4 1 c . . . . 
    . . . . . c c c c c c c . . . . 
    . . . . . . . c b b b c . . . . 
    `,img`
    . . . . . . . c c c c c . . . . 
    . . . . . . c 4 4 4 4 4 c c . . 
    . . . . . c 4 4 f 1 4 4 4 4 c . 
    . . . . c 4 4 4 f f 4 4 4 4 4 c 
    . . . c 4 4 4 4 4 4 4 4 4 4 4 c 
    . . . c 4 4 4 4 4 4 b 1 b b c c 
    . . c 4 4 4 4 4 4 4 4 3 3 3 4 c 
    . . c 4 4 4 4 4 4 4 4 4 4 4 4 c 
    . . c 4 4 4 4 4 4 b 4 4 4 4 c . 
    . . c 4 4 4 d b 4 4 c 4 4 c . . 
    . c c 4 4 4 d b b 4 1 c 4 1 c . 
    2 4 c 4 4 4 d d b b c c c c c . 
    4 2 c 4 4 4 4 4 b 4 4 c c . . . 
    c c 4 c c c b b 4 4 1 c . . . . 
    . . . . . . c c c c c c . . . . 
    . . . . . . c b b b c . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c . . . . 
    . . . . . . c c 4 4 4 4 c c . . 
    . . . . . c 4 4 4 4 4 4 4 4 c . 
    . . . . c 4 4 4 f 1 4 4 4 4 4 c 
    . . . c 4 4 4 4 f f 4 4 4 4 4 c 
    . . . c 4 4 4 4 4 4 b 1 b b c c 
    . . c 4 4 4 4 4 4 4 b b 3 3 c c 
    . . c 4 4 4 4 4 4 4 4 3 3 3 4 c 
    . . c 4 4 4 4 4 4 4 4 4 4 4 b . 
    . . c 4 4 4 4 b 4 4 c b b c . . 
    4 2 c 4 4 4 4 b b 4 1 c b 1 c . 
    2 4 c 4 4 4 4 4 4 c c c c c c . 
    c c 4 4 4 b 4 4 4 c c c c . . . 
    . . c c c b 4 4 b c c b c . . . 
    . . . . . c b 4 4 1 c c c . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c . . . . 
    . . . . . . c c 4 4 4 4 c c . . 
    . . . . . c 4 4 4 4 4 4 4 4 c . 
    . . . . c 4 4 4 f 1 4 4 4 4 4 c 
    . . . c 4 4 4 4 f f 4 4 4 4 4 c 
    . . . c 4 4 4 4 4 4 4 4 4 4 4 c 
    . . c 4 4 4 4 4 4 4 b 1 b b c c 
    . . c 4 4 4 4 4 4 4 4 3 3 3 4 c 
    . . c 4 4 4 4 4 c c 4 c c 4 b . 
    . . c 4 4 4 4 b 4 4 c 4 4 c . . 
    2 4 c 4 4 4 4 b b 4 1 c 4 1 c . 
    4 2 c 4 4 4 4 4 4 c c c c c c . 
    . c 4 4 4 b 4 4 4 c c c c . . . 
    . . . c c b 4 4 c c c b b c . . 
    . . . . . c 4 4 1 c c c c c . . 
    `],
100,
true
)
let mySprite2 = sprites.create(img`
    ........................
    ........................
    ...........ccc..........
    ...........cccc.........
    .......ccc..ccccccc.....
    .......cccccc555555cc...
    ........ccb5555555555c..
    .....cc..b555555555555c.
    .....cccb555555ff155555c
    ......cb55555555ff55d55c
    ......b5555555555555555c
    ...cc.b555dd5555bb13bbc.
    ...cccd55ddddd555b3335c.
    .....bdddddddddd55b335c.
    ..cccdddddb55bbddd5555c.
    ..cccdddddb555bbbbcccc..
    ...ccddddddb5555cbcdc...
    ccccbdddddd5cb55cbcc....
    cddddddddd5555ccbbc.....
    .cddddddbdd555bbbcc.....
    ..ccdddbbbdd55cbcdc.....
    ....ccbbcbddddccdddcc...
    ......cccdd555dcccccc...
    ........cccccccc........
    `, SpriteKind.Enemy)
animation.runImageAnimation(
mySprite2,
[img`
    ........................
    ........................
    ...........88...........
    ...........8888.........
    .......88...8888888.....
    .......88888855555588...
    ........88b55555555558..
    .....88..b5555555555558.
    .....888b555555ff155555c
    .....88b55555555ff55d55c
    ......b5555555555555555c
    ...8..b555d55555bb13bbc.
    ...888d55ddddd55bb3335c.
    ....cbdddddddddd55b335c.
    ..cccdddddb55bdddd5555c.
    ..cccdddddb555bbbbcccc..
    ...ccddddddb5555cbcdc...
    ccccbdddddddcb55cbcc....
    cddddddddd55dbccbbc.....
    cbdddddddd555dbbbcc.....
    .ccbdddbbdd555bbcdbcc...
    ...cccbbbbdd55ccdddbc...
    ......cccbdddbccccccc...
    ........cdd555dc........
    `,img`
    ........................
    ........................
    ...........888..........
    ...........8888.........
    .......888..8888888.....
    .......88888855555588...
    ........88b55555555558..
    .....88..b5555555555558.
    .....888b555555ff155555c
    ......8b55555555ff55d55c
    ......b5555555555555555c
    ...88.b555dd5555bb13bbc.
    ...888d55ddddd555b3335c.
    .....bdddddddddd55b335c.
    ..888dddddb55bbddd5555c.
    ..888dddddb555bbbbcccc..
    ...88ddddddb5555cbcdc...
    8888bdddddd5cb55cbcc....
    8ddddddddd5555ccbbc.....
    .cddddddbdd555bbbcc.....
    ..ccdddbbbdd55cbcdc.....
    ....ccbbcbddddccdddcc...
    ......cccdd555dcccccc...
    ........cccccccc........
    `,img`
    ........................
    ............88..........
    ............888.........
    ........888.8888888.....
    ........8888855555588...
    ........88b55555555558..
    .....888.b55555ff155558.
    .....888b5555555ff55555c
    ......8b555555555555d55c
    ....8.b555555555bb55555c
    ....88b555ddd5555b13bbc.
    ....88d55ddddd555b3335c.
    .....8dd5ddddddd55b335c.
    ...8.bddddb555bbbd555c..
    ...88dddddbb55555bccc...
    ...88dddddddcc555bcc....
    ...88ddddddddbcccbcccc..
    .88bddddddd55dbbbbc55c..
    88ddddddddd555dbbcc5c...
    8ddddddbbbdd555bbccc....
    .ccddddbbbbdd55bcc......
    ...cccbbbbbdddbcddcc....
    .....cccccdd555dcccc....
    ..........cccccc........
    `,img`
    ........................
    ............88..........
    ............888.........
    ........888.8888888.....
    ........8888855555588...
    ........88b55555555558..
    .....888.b55555ff155558.
    .....888b5555555ff55555c
    ......8b555555555555d55c
    ....8.b555555555bb55555c
    ....88b555ddd5555b13bbc.
    ....88d55ddddd555b3335c.
    .....8dd5ddddddd55b335c.
    ...8.bddddb555bbbd555c..
    ...88dddddbb55555bccc...
    ...88dddddddcc555bcc....
    .8888dddddddddcccbcccc..
    .8d8dddddddd55dbbbc55c..
    .8dddddddddd555dccc5c...
    .8bddddbbbbdd5d555cc....
    ..cbdddbbbbbdd5555......
    ...cccbbbbbbd5555c......
    .....cccccccc555c.......
    .............ccc........
    `,img`
    ........................
    ............88..........
    ............888.........
    ........888.8888888.....
    ........8888855555588...
    ........88b55555555558..
    .....888.b55555ff155558.
    .....888b5555555ff55555c
    ......8b555555555555d55c
    ....8.b555555555bb55555c
    ....88b555ddd5555b13bbc.
    ....88d55ddddd555b3335c.
    .....8dd5ddddddd55b335c.
    ...8.bddddb555bbbd555c..
    ...88dddddb555555bccc...
    ..888ddddddcc5555bcc....
    .8d88ddddddddbcccbcccc..
    .8ddbdddddddddbbbbc55c..
    .8dddddddddd55dbbbc5c...
    .8bddddbbbbd55ddbccc....
    ..cbdddbbbbd555dccc.....
    ...cccbbbbbbddd555c.....
    .....ccccccbd55555c.....
    ...........cc5555c......
    `,img`
    ........................
    ............88..........
    ............888.........
    ........88..8888888.....
    ........8888855555588...
    ........88b55555555558..
    .....88..b5555555555558.
    .....888b555555ff155555c
    ......8b55555555ff55d55c
    ......b5555555555555555c
    ...88.b555dd5555bb13bbc.
    ...888d55ddddd555b3335c.
    ....88dd5ddddddd55b335c.
    .....bddddb55bdddd5555c.
    ..cccdddddb55bbbbbcccc..
    .ccccddddddb5555cbcccc..
    .cdccdddddddc555cbc55c..
    .cdddddddddddcccbbc5c...
    .cbddddddd55dbbbbccc....
    .ccbdddddd555dbbbcbc....
    ..cccddbbbd555bbccc.....
    ....ccbbbbbd555cc.......
    ......ccccbddddbc.......
    ..........cd5555dc......
    `],
500,
true
)
statusbar = statusbars.create(4, 20, StatusBarKind.Health)
statusbar.setColor(8, 15)
statusbar.positionDirection(CollisionDirection.Bottom)
statusbar.positionDirection(CollisionDirection.Left)
statusbar.max = 300
statusbar.value = 300
statusbar2 = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
statusbar2.setColor(8, 15)
statusbar2.positionDirection(CollisionDirection.Top)
statusbar2.positionDirection(CollisionDirection.Right)
statusbar2.max = 900
statusbar2.value = 900
forever(function () {
    mySprite2.follow(mySprite, 40)
})
