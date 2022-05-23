function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom) {
        let direction = null;
        let x = left;
        let y = bottom;

        element.style.left = x + 'px'
        element.style.left = y + 'px'

        function moveCharacter() {
            if (direction === 'west') {
                x = x - 1
            }
            if (direction === 'north') {
                y = y + 1
            }
            if (direction === 'east') {
                x = x + 1
            }
            if (direction === 'south') {
                y = y - 1  
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }

        setInterval(moveCharacter, 1)

        document.addEventListener('keydown', function (e) {
            if (e.repeat) return;

            if (e.key === 'ArrowLeft') {
                direction = 'west'
                element.src = 'assets/green-character/west.gif'
            }
            if (e.key === 'ArrowUp') {
                direction = 'north'
                element.src = 'assets/green-character/north.gif'
            }
            if (e.key === 'ArrowRight') {
                direction = 'east'
                element.src = 'assets/green-character/east.gif'
            }
            if (e.key === 'ArrowDown') {
                direction = 'south'
                element.src = 'assets/green-character/south.gif'
            }
        })

        document.addEventListener('keyup', function (e) {
            direction = null
            element.src = 'assets/green-character/static.gif'
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}