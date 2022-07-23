input.onButtonPressed(Button.A, function () {
    servos.P1.setAngle(180)
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    basic.showLeds(`
        # # . # #
        # # # # #
        . # # # .
        # # # # #
        # # . # #
        `)
})
