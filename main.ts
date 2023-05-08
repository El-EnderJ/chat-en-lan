input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("when the impostor is sus")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(56)
