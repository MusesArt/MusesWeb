/*jshint esversion: 6 */
export default {
  upload() {
    console.log("triggered")

    var uploader = document.createElement('input'),
      image = document.getElementById('img-result'),
      button = document.getElementById('button'),
        bg = document.getElementById('bg-img');

    uploader.type = 'file';
    uploader.accept = 'image/*';

    image.onclick = function () {
      uploader.click();
      console.log("clicked")
    }

    uploader.onchange = function () {
      var reader = new FileReader();
      reader.onload = function (evt) {
        image.classList.remove('no-image');
        button.style.opacity = 0;
        bg.style.background = `url(${evt.target.result}) no-repeat center center fixed`;
        bg.style.backgroundSize = `cover`;
        var request = {
          itemtype: 'test 1',
          brand: 'test 2',
          images: [{
            data: evt.target.result
          }]
        };

        document.querySelector('.show-button').style.display = 'block';
        document.querySelector('.upload-result__content').innerHTML = JSON.stringify(request, null, '  ');
      }
      reader.readAsDataURL(uploader.files[0]);
    }

    document.querySelector('.hide-button').onclick = function () {
      document.querySelector('.upload-result').style.display = 'none';
    };

    document.querySelector('.show-button').onclick = function () {
      document.querySelector('.upload-result').style.display = 'block';
    };

  }
}
