"use strict";
const settings = {
    rowCount: 10,
    colCount: 10,
    startPositionX: 0,
    startPositionY: 0,
    startDirection: 'right',
    stepsInSecond: 3,
    playerCellColor: '#AA3333',
    emptyCellColor: '#eee'
};

const player = {
    x: null,
    y: null,
    direction: null,

    setDirection(direction) {
        this.direction = direction;
    },

    init(startX, startY, startDirection) {
        this.x = startX;
        this.y = startY;
        this.setDirection(startDirection);

    },

    makeStep() {
        const nextPoint = this.getNextStepPoint();
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    },

    getNextStepPoint() {
        const point = {
            x: this.x,
            y: this.y,
        };

        switch (this.direction) {
            case 'up': point.y--; break
            case 'right': point.x++; break
            case 'down': point.y++; break
            case 'left': point.x--; break
        }

        return point;

    }
}

const game = {
    player,
    settings,
    containerElement: document.getElementById('game'),
    cellElements: null,
    run() {
        this.init();
        //отрисовка
        this.render()


    },
    init() {
        this.player.init(
            this.settings.startPositionX,
            this.settings.startPositionY,
            this.settings.startDirection
        );
        this.initCells();
        this.initEventHandlers();
    },
    initCells() {
        this.containerElement.innerHTML = '';
        this.cellElements = [];
        for (let row = 0; row < this.settings.rowCount; row++) {
            //tr - строка
            const trElement = document.createElement(tr);
            this.containerElement.appendChild(trElement);
            for (let col = 0; row < this.settings.colCount; col++) {
                //td - столбец
                const cell = document.createElement(td);
                trElement.appendChild(cell);


                this.cellElements.push(cell);


            }
        }


    },
    //Обработчик событий
    initEventHandlers() {

    },
    render() {

    }
}


game.run();

