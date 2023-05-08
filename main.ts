input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("1")
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    radio.sendString("4")
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    radio.sendString("3")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == 1) {
        basic.showLeds(`
            . # # # .
            # . . # #
            # . . # #
            . # # # #
            . # . # .
            `)
    } else if (receivedString == 2) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . . .
            . # # # .
            `)
    } else if (receivedString == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    radio.sendString("2")
})
radio.setGroup(56)
