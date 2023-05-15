let robbery = 0
music.setVolume(255)
basic.showString("ACTIVE")
loops.everyInterval(1, function () {
    if (robbery >= 500) {
        music.playMelody("G F F G G F F G ", 700)
    } else if (robbery >= 200) {
        music.playMelody("G G G G G G G G ", 120)
        music.playMelody("F F F F F F F F ", 120)
    } else {
    	
    }
})
basic.forever(function () {
    robbery = pins.analogReadPin(AnalogPin.P2)
})
basic.forever(function () {
	
})
