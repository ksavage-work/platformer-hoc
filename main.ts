namespace SpriteKind {
    export const Snow = SpriteKind.create()
    export const Wcan = SpriteKind.create()
}
let stormCloud: Sprite = null
let projectile2: Sprite = null
let wateringCan: Sprite = null
let waterDroplet: Sprite = null
function snowing () {
    for (let value2 of tiles.getTilesByType(myTiles.tile14)) {
        stormCloud = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Snow)
        tiles.placeOnTile(stormCloud, value2)
        tiles.setTileAt(value2, myTiles.tile14)
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . 1 . . . . . . . . . . 1 . 
            . . . . . . . . . 1 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 1 . . . . . . . . . . . . . . 
            . . . . d . 1 . . . . . . . . . 
            . . . . . . . . . . . d . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 1 . . . . . . . . 1 . . 
            . . . . . . . . . . 1 . . . . . 
            . . . . . . . . . . . . . . . . 
            . d . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . . . . . . . d . . 
            `, stormCloud, 0, 50)
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    waterPlant()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    snowing()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    pickLock()
})
// add to puzzle blocks
function pickLock () {
    tiles.setWallAt(tiles.getTileLocation(6, 6), false)
}
function waterPlant () {
    let mySprite: Sprite = null
    if (mySprite.overlapsWith(wateringCan)) {
        waterDroplet = sprites.createProjectileFromSprite(img`
            . . . . . . . 6 6 . . . . . . . 
            . . . . . . 9 9 9 9 . . . . . . 
            . . . . . 9 9 c c 9 9 . . . . . 
            . . . . . 9 c c 6 9 9 . . . . . 
            . . . . 9 9 9 c 6 6 9 9 . . . . 
            . . . 9 9 9 9 9 6 6 9 9 9 . . . 
            . . . 9 6 6 6 6 9 6 9 9 c . . . 
            . . c 6 6 6 9 9 9 6 9 c c c . . 
            . . c c c 9 6 9 9 9 6 6 6 c . . 
            . . 9 c 9 9 6 9 6 6 6 6 9 9 . . 
            . . 9 9 9 9 6 6 9 9 9 9 9 9 . . 
            . . 6 9 9 9 6 6 c 9 9 9 9 6 . . 
            . . . 6 9 9 9 6 c c 9 9 6 . . . 
            . . . 6 6 9 9 c c 9 9 6 6 . . . 
            . . . . . 6 9 9 9 9 6 . . . . . 
            . . . . . . . . . . . . . . . . 
            `, wateringCan, -50, 0)
    }
}
function getWateringCan () {
    for (let value2 of tiles.getTilesByType(myTiles.tile20)) {
        wateringCan = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Wcan)
        tiles.placeOnTile(wateringCan, value2)
        tiles.setTileAt(value2, myTiles.tile20)
    }
}
