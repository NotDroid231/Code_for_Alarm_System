input.onButtonPressed(Button.AB, function () {
    basic.showString("RESET")
    music.stopAllSounds()
    control.reset()
})
let robbery = 0
basic.showString("Active")
basic.forever(function () {
    if (robbery >= 800) {
        music.setVolume(255)
        music.playMelody("C5 - - B B - - C5 ", 700)
    } else if (robbery >= 400) {
        music.setVolume(255)
        music.playMelody("G - - - G - - - ", 100)
    } else {
    	
    }
})
basic.forever(function () {
    robbery = pins.analogReadPin(AnalogPin.P2)
})
basic.forever(function () {
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
    if (robbery >= 800) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(100)
    } else if (robbery >= 400) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
