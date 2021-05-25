basic.showIcon(IconNames.Heart)
basic.pause(100)
basic.clearScreen()
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 1) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        60,
        robotbit.Motors.M2A,
        60
        )
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        0,
        robotbit.Motors.M2A,
        50
        )
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 1) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        50,
        robotbit.Motors.M2A,
        0
        )
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        0,
        robotbit.Motors.M2A,
        0
        )
    }
})
