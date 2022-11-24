function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
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
            ' style="margin-left: ' + this.left + 'px;top: ' + this.top + 'px;left: ' + this.left + 'px; position: absolute; " />';
    }
    this.moveRight = function () {
        this.left += 10;
        console.log('ok: ' + this.left);
    }
    this.moveRight2 = function () {
        this.left += 10;
        console.log('ok: ' + this.left);
    }
}

var hero = new Hero('https://media.tenor.com/mxeI-UpaxVgAAAAd/doraemon.gif', 20, 30, 200);
function start() {
    if (hero.left < window.innerWidth - hero.size) {
        hero.moveRight();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 150)
}
start();

var hero2 = new Hero('https://media.tenor.com/iasB1Bq9Qo0AAAAC/doraemon-silly.gif', 20, 30, 200);
function start2() {
    if (hero2.left < window.innerWidth - hero2.size) {
        hero2.moveRight2();
    }
    document.getElementById('game1').innerHTML = hero2.getHeroElement2();
    setTimeout(start2, 150)
}
start2();
