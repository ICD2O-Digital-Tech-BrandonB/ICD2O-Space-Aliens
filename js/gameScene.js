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
    }
  
  
    init (data) {
    this.cameras.main.setBackgroundColor("AEA04B");
    }
  
    preload() {
        console.log('Game Scene');

        // images
        this.load.image('starBackground', './assets/starBackground.png')
        this.load.image('ship', './assets/spaceShip.png')
    }
  
    create(data) {
        this.background = this.add.image(0, 0, 'starBackground').setScale(2.0)
        this.background.setOrigin(0, 0)

        this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, 'ship')
    }
  
    update (time, delta) { 
    }
  }
    export default GameScene
