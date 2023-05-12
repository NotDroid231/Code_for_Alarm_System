let robbery = 0
music.setVolume(255)
basic.showString("ACTIVE")
loops.everyInterval(1, function () {
    if (robbery >= 500) {
        music.playMelody("C5 C C C5 C5 C C C5 ", 9006)
    }
})
loops.everyInterval(1, function () {
    if (robbery >= 500) {
        music.playMelody("A E E A A E E A ", 60)
    }
})
loops.everyInterval(1, function () {
    if (robbery >= 500) {
        music.playMelody("G F F G G F F G ", 1000)
    }
})
basic.forever(function () {
    robbery = pins.analogReadPin(AnalogPin.P2)
})
