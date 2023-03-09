basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        music.stopAllSounds()
    }
})
