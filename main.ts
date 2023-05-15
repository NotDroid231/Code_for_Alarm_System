let robbery = 0
music.setVolume(255)
basic.showString("ACTIVE")
loops.everyInterval(1, function () {
    if (robbery >= 500) {
        music.playMelody("C5 C C C5 C5 C C C5 ", 600)
    }
})
loops.everyInterval(1, function () {
    if (robbery >= 500) {
        music.playMelody("G F F G G F F G ", 700)
    }
})
basic.forever(function () {
    robbery = pins.analogReadPin(AnalogPin.P2)
})
basic.forever(function () {
	
})
