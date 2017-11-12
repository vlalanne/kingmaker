#!/usr/bin/env python
import shutil
from subprocess import call
import os
import sys

TILE_WIDTH = 256
TILE_HEIGHT = 256


def convert(image, width, height):
    final_width = (int(width / (TILE_WIDTH * 4)) + 1) * TILE_WIDTH * 4
    final_height = (int(width / (TILE_WIDTH * 4)) + 1) * TILE_HEIGHT * 4
    final_image = 'resized_{}'.format(image)
    call(['cmd', '/c', 'convert', image, '-background', 'transparent', '-extent',
          '{}x{}'.format(final_width, final_height), final_image])
    for zoom in range(20, 17, -1):
        os.makedirs(str(zoom))
        zoomedImage = '%d.png' % zoom
        reduction = 100 * pow(.5, 20 - zoom)
        call(['cmd', '/c', 'convert', final_image,
              '-resize', '{}%'.format(reduction), zoomedImage])
        call(['cmd', '/c', 'convert', '-crop',
              '{}x{}'.format(TILE_WIDTH, TILE_HEIGHT), zoomedImage, 'tiles_%d.png'])
        os.remove(zoomedImage)
        total_tiles = len([name for name in os.listdir('.')
                           if os.path.isfile(name) and name.startswith('tiles')])
        row = 0
        column = 0
        image_width = final_width * reduction / 100
        tiles_per_line = image_width / TILE_WIDTH
        for i in range(0, total_tiles):
            filename = 'tiles_{}.png'.format(i)  # current filename
            target = '{}/{}_{}.png'.format(zoom, column, row)  # new filename
            shutil.move(filename, target)
            # work out next step
            column = column + 1
            if column >= tiles_per_line:
                column = 0
                row = row + 1


if __name__ == '__main__':
    image = sys.argv[1] if len(sys.argv) > 1 else 'stolen-lands-empty.png'
    total_image_width = int(sys.argv[2]) if len(sys.argv) > 2 else 7865
    total_image_height = int(sys.argv[3]) if len(sys.argv) > 3 else 2610
    convert(image, total_image_width, total_image_height)
