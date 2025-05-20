// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Brandon B Code
// Created on: Sep 2020
// This file contains the JS functions for index.html

class SplashScene extends Phaser.Scene {
    constructor() {
        super({ key: 'splashScene' })
    }

    init(data) {
        this.cameras.main.setBackgroundColor('#ffffff')
    }

    preload() {
        console.log('Splash Scene')
    }

    create(data) {
        
    }

    update(time, delta) {
        
    }
}

export default SplashScene