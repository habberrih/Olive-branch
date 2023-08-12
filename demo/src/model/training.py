import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense


# Preprocess the training data
train_datagen = ImageDataGenerator(rescale=1./255, shear_range=0.2, zoom_range=0.2, horizontal_flip=True)
train_set = train_datagen.flow_from_directory('path/to/train', target_size=(256, 256), batch_size=40, class_mode='categorical')
# Preprocess the test data


test_datagen = ImageDataGenerator(rescale=1./255)
test_set = test_datagen.flow_from_directory('path/to/test', target_size=(256, 256), batch_size=40, class_mode='categorical')
# Preprocess the validation data

val_datagen = ImageDataGenerator(rescale=1./255)
val_set = val_datagen.flow_from_directory('path/to/validation', target_size=(256, 256), batch_size=40, class_mode='categorical')


# Create the CNN model
model = Sequential()
model.add(Conv2D(32, (3, 3), input_shape=(256,256,3), activation='relu'))
model.add(MaxPooling2D(pool_size=(2, 2)))
model.add(Flatten())
model.add(Dense(units=128, activation='relu'))
model.add(Dense(units=train_set.num_classes, activation='softmax'))
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
# Train the model
model.fit(x=train_set, epochs=5, validation_data=val_set)
# Save the model
model.save('demo/src/model/olive_model.h5')