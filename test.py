import argparse
import os
import sys


def test():
    parser = argparse.ArgumentParser()
    # parser.add_argument('imageFile')
    parser.add_argument('name')
    parsed_args = parser.parse_args(sys.argv[1:])
    path = parsed_args.name
    print(path)
    # if os.path.exists(path):
    #     return path
    # else:
    #     sys.exit(1)

test()