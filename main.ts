let robbery = 0
music.setVolume(255)
basic.showString("ACTIVE")
music.playMelody("E E F F G G A A ", 120)
music.playMelody("A A G G F F E E ", 120)
loops.everyInterval(1, function () {
    if (robbery >= 800) {
        music.playMelody("G F F G G F F G ", 700)
    } else if (robbery >= 700) {
        music.playMelody("G G G G G G G G ", 300)
        music.playMelody("F F F F F F F F ", 300)
    } else {
    	
    }
})
loops.everyInterval(1, function () {
    if (robbery >= 500) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.pause(50)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.pause(50)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(50)
        basic.clearScreen()
    } else if (robbery >= 200) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    }
})
basic.forever(function () {
    robbery = pins.analogReadPin(AnalogPin.P2)
})
basic.forever(function () {
	
})
