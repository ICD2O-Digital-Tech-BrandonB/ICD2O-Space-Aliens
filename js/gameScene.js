// Created by: BrandonBCode
// Created on: May 2025
// This is the Menu scene for the game


/**
 * This class is the splash scene for the game
 */
class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'gameScene' });
    }
  
  
    init (data) {
    this.cameras.main.setBackgroundColor("AEA04B");
    }
  
    preload() {
        console.log('Game Scene');
    }
  
    create (data) {
    }
  
    update (time, delta) { 
    }
  }
    export default GameScene
