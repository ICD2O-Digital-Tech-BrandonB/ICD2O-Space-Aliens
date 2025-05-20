// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

import SplashScene from './splashScene.js'

// Our game sense
const splashScene = new SplashScene()

//**Game Scene*/
const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    physics: {
        default: 'arcade',
        arcade: {
            debug:true
        }
    },
    // set the background color
    backgroundColor: 0x5f6e7a,
    scale: {
        mode: Phaser.Scale.FIT,
        // we place it in the middle of the page.
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
}

const game = new Phaser.Game(config)

//load scenes
// NOTE: remember any "key" is global and can not be reused!
game.scene.add('splashScene', splashScene)

//start title
game.scene.start('splashScene')