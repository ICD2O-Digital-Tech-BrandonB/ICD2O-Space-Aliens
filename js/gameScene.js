// Created by: BrandonBCode
// Created on: May 2025
// This is the Menu scene for the game


/**
 * This class is the splash scene for the game
 */
class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'gameScene' });

        this.background = null
        this.ship = null
        this.fireMissile = false
    }
}
  
  
    init (data) {
    this.cameras.main.setBackgroundColor("AEA04B");
    }
  
    preload() {
        console.log('Game Scene');

        // images
        this.load.image('starBackground', './assets/starBackground.png')
        this.load.image('ship', './assets/spaceShip.png')
        this.load.image ('missile', './assets/missile.png')
    }
  
    create(data) {
        this.background = this.add.image(0, 0, 'starBackground').setScale(2.0)
        this.background.setOrigin(0, 0)

        this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, 'ship')

        // create a group for the missiles
        this.missileGroup = this.physics.add.group()
    }
  
update(time, delta) {
        

    const keyLeftObj = this.input.keyboard.addKey('LEFT')
    const keyRightObj = this.input.keyboard.addKey('RIGHT')
    const keySpaceObj = this.input.keyboard.addkey('SPACE')

    if (keyLeftObj.isDown === true) {
        this.ship.x -= 15
        if (this.ship.x < 0) {
            this.ship.x = 1920
        }
    }

    if (keyRightObj.isDown === true) {
        this.ship.x += 15
        if (this.ship.x > 1920) {
            this.ship.x = 0
        }
        if (keySpaceObj.isDown === true) {
            if (this.fireMissile === false) {
                // fire missile
                this.fireMissile = true
                const aNewMissile = this.physics.add.sprite(this.ship.x, this.ship.y, 'missile')
                this.missileGroup.add(aNewMissle)
            }
        }

        if (keySpaceObj.isUp === true) {
            this.fireMissile = false
        }
        if (keyUpObj.isDown === true) {
            this.ship.y -= 15
            if (this.ship.y < 1080) {
                this.ship.y = 0
            }
            if (keyDownObj.isDown === true) {
                this.ship.y += 15
                if (this.ship.y > 0) {
                    this.ship.y = 1080
                }
            }
        }
    }
}
    export default GameScene
