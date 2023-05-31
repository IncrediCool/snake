const snakePosition = {
    snakeX: 2,
    snakeY: 1,
}
const foodPosition = {
    foodX: 0,
    foodY: 0,
}

function random() {
    return Math.floor(Math.random() * 30 + 1);
}

    function foodGenerate() {
        const food = document.querySelector('#snake-food');
        foodPosition.foodX = random();
        foodPosition.foodY = random();

        food.style.gridArea = `${foodPosition.foodY} / ${foodPosition.foodX}`;
    }

    foodGenerate()

let direction = 'ArrowRight';
const snakeElement = document.querySelector('#snake');

function moveSnake() {
    const snakeElement = document.querySelector('#snake');
    switch (direction) {
        case 'ArrowUp':

            snakePosition.snakeY -= 1;
                if (snakePosition.snakeY === 0) {
                    snakePosition.snakeY = 30;
                }
                snakeElement.style.transform = 'rotate(180deg)'


            break;

        case 'ArrowDown':
            snakePosition.snakeY += 1;
            if (snakePosition.snakeY === 31) {
                snakePosition.snakeY = 1;
            }
            snakeElement.style.transform = 'rotate(0deg)'

            break;

        case 'ArrowLeft':
            snakePosition.snakeX -= 1;
            if (snakePosition.snakeX === 0) {
                snakePosition.snakeX = 30;
            }
            snakeElement.style.transform = 'rotate(90deg)'

            break;

        case 'ArrowRight':
            snakePosition.snakeX += 1;
            if (snakePosition.snakeX === 31) {
                snakePosition.snakeX = 1;
            }
            snakeElement.style.transform = 'rotate(270deg)'

            break;
    }
    if (foodPosition.foodX === snakePosition.snakeX && foodPosition.foodY === snakePosition.snakeY) {
        foodGenerate();
    }

    const snakeMove = document.querySelector('#snake');
    snakeMove.style.gridArea = snakePosition.snakeY + ' / ' + snakePosition.snakeX;
}

const snakeMovementInterval = setInterval(moveSnake, 250);

window.addEventListener('keydown', function (event) {
    // switch (event.key) {
    //     case 'ArrowUp':
    //
    //     case 'ArrowDown':
    //     case 'ArrowLeft':
    //     case 'ArrowRight':
    //         direction = event.key;
    //         break;
    // }
    if(event.key === 'ArrowUp' && direction !== 'ArrowDown'){
        direction = event.key;
    }
    if(event.key === 'ArrowDown' && direction !== 'ArrowUp'){
        direction = event.key;
    }
    if(event.key === 'ArrowLeft' && direction !== 'ArrowRight'){
        direction = event.key;
    }
    if(event.key === 'ArrowRight' && direction !== 'ArrowLeft'){
        direction = event.key;
    }
});