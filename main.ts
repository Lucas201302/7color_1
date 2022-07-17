basic.showIcon(IconNames.Heart)
basic.forever(function () {
    basic.pause(500)
    Tinybit.RGB_Car_Program().setPixelColor(0, neopixel.rgb(randint(0, 10), randint(0, 10), randint(0, 10)))
    Tinybit.RGB_Car_Program().show()
})
