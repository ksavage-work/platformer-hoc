namespace SpriteKind {
    export const Snow = SpriteKind.create()
}
let stormCloud: Sprite = null
let projectile2: Sprite = null
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
