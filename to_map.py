import shutil
from subprocess import call
import os

tile_width = 256
tile_height = 256
total_image_width = 7865
total_image_height = 2610
for zoom in range(20, 17, -1):
    os.makedirs(str(zoom))
    zoomedImage = "%d.png" % zoom
    reduction = 100 * pow(.5, 20-zoom)
    call(["cmd", "/c", "convert", "stolen-lands-empty.png",
          "-resize", "{}%".format(reduction), zoomedImage])
    call(
        ["cmd", "/c", "convert", "-crop", "256x256", zoomedImage, "tiles_%d.png"])
    os.remove(zoomedImage)
    total_tiles = len([name for name in os.listdir(
        '.') if os.path.isfile(name) and name.startswith('tiles')])
    row = 0
    column = 0
    image_width = total_image_width*reduction/100
    tiles_per_line = image_width/tile_width
    for i in range(0, total_tiles):
        filename = "tiles_{}.png".format(i)  # current filename
        target = "{}/{}_{}.png".format(zoom, column, row,)  # new filename
        shutil.move(filename, target)
        # work out next step
        column = column + 1
        if column >= tiles_per_line:
            column = 0
            row = row + 1
