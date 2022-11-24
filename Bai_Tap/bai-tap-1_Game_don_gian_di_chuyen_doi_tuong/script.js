function Hero(image, top, left, size, button) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.button = button;
    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style=" top: ' + this.top + 'px;left: ' + this.left + 'px; position: absolute; " />';

    }

    this.getHeroElement2 = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="margin-left: 25%; top: ' + this.top + 'px;left: ' + this.left + 'px; position: absolute; " />';
    }
    this.moveRight = function () {
        this.left += 30;
        console.log('ok: ' + this.left);
        this.moveRight3 = function () {
            this.button += 30;
            console.log('ok1: ' + this.button);

        };
    }
    this.moveRight2 = function () {
        this.left += 30;
        console.log('ok: ' + this.left);
    }
}

var hero = new Hero('https://cdnb.artstation.com/p/assets/images/images/046/491/445/original/chat-poteley-animation.gif?1645234590',
    20, 20, 150);
function start() {
    if (hero.left < window.innerWidth - hero.size) {
        hero.moveRight();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 150)
}
start();

var hero2 = new Hero('https://media.tenor.com/iasB1Bq9Qo0AAAAC/doraemon-silly.gif',
    20, 20, 150);
function start2() {
    if (hero2.left < window.innerWidth - hero2.size) {
        hero2.moveRight2();
    }
    document.getElementById('game2').innerHTML = hero2.getHeroElement2();
    setTimeout(start2, 150)
}
start2();
