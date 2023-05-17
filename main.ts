input.onButtonPressed(Button.A, function () {
    basic.showString("RESET")
    control.reset()
})
let robbery = 0
music.setVolume(255)
basic.showString("ACTIVE")
music.playMelody("F F F F E E E E ", 120)
loops.everyInterval(1, function () {
    if (robbery >= 800) {
        music.playMelody("G F F G G F F G ", 700)
    } else if (robbery >= 400) {
        music.playMelody("G G G G G G G G ", 300)
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
