namespace SpriteKind {
    export const Snow = SpriteKind.create()
    export const Wcan = SpriteKind.create()
}
let projectile2: Sprite = null
let wateringCan: Sprite = null
// add to puzzle
function snowing () {
    projectile2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . 1 . . . . . . . . . . 1 . 
        . . . . . . . . 1 1 . . . . . . 
        . 1 1 . . . . . 1 1 . . . . . . 
        . 1 1 . . . . . . . . . . . . . 
        . . . . d . 1 . . . . . . . . . 
        . . . . . . . . . . . d . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 . . . . . . . . 1 . . 
        . . . . . . . . . 1 1 . . . . . 
        . . . . . . . . . 1 1 . . . . . 
        . d . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 . . . . . . . . 
        . . . . . . 1 1 . . . . . . . . 
        . . . . . . . . . . . . . d . . 
        `, SpriteKind.Projectile)
    tiles.placeOnRandomTile(projectile2, myTiles.tile14)
    projectile2.setVelocity(0, 50)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    snowing()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    pickLock()
})
// add to puzzle
function pickLock () {
    for (let value2 of tiles.getTilesByType(myTiles.tile10)) {
        tiles.setWallAt(value2, false)
        tiles.setTileAt(value2, myTiles.transparency16)
    }
}
function getWateringCan () {
    for (let value22 of tiles.getTilesByType(myTiles.tile20)) {
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
        tiles.placeOnTile(wateringCan, value22)
        tiles.setTileAt(value22, myTiles.tile20)
    }
}
