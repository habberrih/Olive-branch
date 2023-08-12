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
      console.log(response);
    },
    error: function (xhr, status, error) {
      console.log(error);
    },
  });
});
