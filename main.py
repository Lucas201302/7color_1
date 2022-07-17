basic.show_icon(IconNames.HEART)
music.play_melody("C5 C5 B F F D G B ", 120)

def on_forever():
    Tinybit.RGB_Car_Program().show_color(neopixel.colors(NeoPixelColors.RED))
basic.forever(on_forever)
