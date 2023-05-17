input.onButtonPressed(Button.AB, function () {
    basic.showString("RESET")
    music.stopAllSounds()
    control.reset()
})
let robbery = 0
music.setVolume(255)
basic.showString("ACTIVE")
music.playMelody("F F F F E E E E ", 120)
loops.everyInterval(1, function () {
    if (robbery >= 800) {
        music.playMelody("C5 - - B B - - C5 ", 700)
    } else if (robbery >= 400) {
        music.playMelody("G - - - G - - - ", 100)
    } else {
    	
    }
})
loops.everyInterval(1, function () {
    if (robbery >= 800) {
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
    } else if (robbery >= 400) {
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
