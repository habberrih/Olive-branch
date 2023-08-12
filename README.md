# Olive Branch

###

Olive Branch aims to support olive tree growers by providing a comprehensive solution for disease identification, classification, and cultivation guidance. It goes beyond disease management and envisions creating a platform for olive tree farmers to connect, share knowledge, and exchange experiences, fostering a sense of community among growers. Additionally, the app serves as a valuable tool by sending reminders for essential tasks like watering schedules and harvest periods, ensuring that farmers stay organized. It offers various features such as guidance on best practices, pest management, and optimal growing conditions, serving as a reliable resource throughout the olive tree cultivation journey. By encompassing these diverse features, the project aims to empower farmers and contribute to their success in maintaining thriving and healthy olive groves.

###

# Prerquired Languages

1- Python

2- Nodejs

# Install Packages

### Python

```
pip install -r requirement.txt
```

### NodeJS (CMD)

```
cd backend && npm install
```

# Download The Model fileby clicking on [Olive_Model](https://drive.google.com/drive/folders/1e2ksL21b62zT4U-BDRvC8-vgnnJaoyQ5?usp=sharing).

then put it in the following path in the project:

```
/backend/model/olive_model.h5
```

# <b> Important Notes <b>

1. You have to create a file called uploaded_images in:

```
/backend/src/model/uploaded_images/
```

2. You have to specify the full path in execute_module.js

```
17- const python = spawn("python", ["FullFilePath", image_path]);
// like C://local//project/model.py
```

3. Also in model.py file when the model load

```
model = tf.keras.models.load_model('FullPath')
like C://local//project//olive_model.h5
```

# About Us

###

We are a passionate team of computer science students who share a deep interest in agriculture, specifically focusing on olive tree cultivation in the Mediterranean basin. Our collective enthusiasm lies in leveraging technological advancements, particularly artificial intelligence (AI), to revolutionize and optimize various aspects of olive tree farming.

Driven by our belief in the potential of AI, we are dedicated to developing innovative solutions that enhance the care and management of olive tree cultivation. Our areas of focus include optimizing irrigation practices, detecting diseases, controlling pests, and predicting crop yields. By combining our expertise in computer science with our in-depth understanding of the intricacies of olive tree farming, we strive to bring about transformative changes to traditional farming practices in the Mediterranean basin.

Our ultimate objective is to contribute to the sustainability and efficiency of olive tree farming. We aim to empower farmers with cutting-edge tools and techniques, equipping them with the means to ensure the health and productivity of their olive trees. Through our dedication and commitment, we aspire to make a lasting impact on the agricultural industry and support the success of olive tree farmers in the region.

###
