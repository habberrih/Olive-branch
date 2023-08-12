import argparse
import os
import sys
import tensorflow as tf
from tensorflow.keras.preprocessing.image import load_img, img_to_array

def create_arg_parser():
    # Creates and returns the ArgumentParser object

    parser = argparse.ArgumentParser()
    # parser.add_argument('imageFile')
    parser.add_argument('name')
    return parser

def olive_model(image_path):
    # Load the saved model
    model = tf.keras.models.load_model('olive_model.h5')

    # Load and preprocess a single image
    image = load_img(image_path, target_size=(256, 256))
    image_array = img_to_array(image) / 255.0
    image_array = tf.expand_dims(image_array, 0)

    # Make prediction on the image
    prediction = model.predict(image_array)
    predicted_label = tf.argmax(prediction, axis=1).numpy()[0]

    # Print the predicted label
    #print("Predicted Label:", predicted_label)
    return str(predicted_label)


def main():
    try:
        arg_parser = create_arg_parser()
        parsed_args = arg_parser.parse_args(sys.argv[1:])
        name = parsed_args.name
        
        model = tf.keras.models.load_model('model.h5')
        # Load and preprocess a single image
        image = load_img(name, target_size=(256, 256))  
        image_array = img_to_array(image) / 255.0
        image_array = tf.expand_dims(image_array, 0)
        # Make prediction on the image
        prediction = model.predict(image_array)
        predicted_label = tf.argmax(prediction, axis=1).numpy()[0]

        print(predicted_label)
    except Exception:
        print('we')
    

if __name__ == "__main__":
    main()
