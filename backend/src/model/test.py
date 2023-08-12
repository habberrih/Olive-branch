import argparse
import os
import sys


def create_arg_parser():
    # Creates and returns the ArgumentParser object

    parser = argparse.ArgumentParser()
    # parser.add_argument('imageFile')
    parser.add_argument('name')
    return parser


def olive_model(name):

    return name


def main():
    
    arg_parser = create_arg_parser()
    parsed_args = arg_parser.parse_args(sys.argv[1:])
    name = parsed_args.name
    
    result = olive_model(name)
    if result == '0':
        print('Bird Eye Mushroom')
    elif result == '1':
        print('Pas Akari')
    elif result == '2':
        print('Healthy')
    
    

if __name__ == "__main__":
    main()