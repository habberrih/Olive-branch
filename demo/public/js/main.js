const uploadInput = document.getElementById("upload");
const imagePreview = document.getElementById("imagePreview");
const uploadButton = document.getElementById("uploadButton");

uploadInput.addEventListener("change", function (event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    imagePreview.src = e.target.result;
  };
  reader.readAsDataURL(file);
});

function displayResults(response) {
  if (response == "Healthy") {
    document.getElementById(
      "output-result"
    ).innerHTML = `Your tree is looking good and health<br>Keep taking care of it`;
  } else if (response == "Bird Eye Mushroom")
    document.getElementById(
      "output-result"
    ).innerHTML = `Your tree maybe effected by ${response}. Please take the necessary precautions.`;
  else if (response == "Pas Akari")
    document.getElementById(
      "output-result"
    ).innerHTML = `Your tree maybe effected by ${response}. Please take the necessary precautions.`;
}

uploadButton.addEventListener("click", function () {
  const file = uploadInput.files[0];
  const formData = new FormData();
  formData.append("file", file);
  $.ajax({
    url: "http://localhost:5000/model",
    type: "POST",
    data: formData,
    processData: false,
    contentType: false,
    success: function (response) {
      displayResults(response);
    },
    error: function (xhr, status, error) {
      if (status === "400") {
        alert("Upload error: " + xhr);
      }
    },
  });
});
