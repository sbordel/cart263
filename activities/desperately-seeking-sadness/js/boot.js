class Boot extends Phaser.Scene {
    constructor() {
        super({
            key: 'boot'
        });
    }

    preload() {
        //load assets here
        this.load.image('avatar', 'assets/images/avatar.png')

        this.load.on('complete', () => {
            this.scene.start('play');
        });
    }

    create() {

    }

    update() {

    }

}