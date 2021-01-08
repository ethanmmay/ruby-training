window.onload = function () {
    im1 = false;
    im2 = false;
    var fileInput1 = document.getElementById('fileInput1');
    var fileInput2 = document.getElementById('fileInput2');
    var fileDisplayArea = document.getElementById('img1');

    fileInput1.addEventListener('change', function (e) {
        var file = fileInput1.files[0]
        var imageType = /image.*/;

        if(file.type.match(imageType)) {
            var reader = new FileReader();

            reader.onload = function(e) {
                fileDisplayArea.innerHTML = "";

                var img = new Image();
                img.src = reader.result;
                img.id = 'img1';
                img.width = 750;
                img.height = 400;

                fileDisplayArea.appendChild(img);
                im1 = true;
                node.removeChild(document.getElementsByClassName('img-comp-slider'));
                initComparisons();
            }
            reader.readAsDataURL(file);
        }
        else {
            fileDisplayArea.innerHTML = 'File not supported!';
        }
    });

    var fileDisplayAre = document.getElementById('img2');
    fileInput2.addEventListener('change', function (e) {
        var file = fileInput2.files[0]
        var imageType = /image.*/;

        if(file.type.match(imageType)) {
            var reader = new FileReader();

            reader.onload = function(e) {
                fileDisplayAre.innerHTML = "";

                var img = new Image();
                img.src = reader.result;
                img.id = 'img2';
                img.width = 750;
                img.height = 400;

                fileDisplayAre.appendChild(img);
                im2 = true;
                node.removeChild(document.getElementsByClassName('img-comp-slider'));
                initComparisons();
            }
            reader.readAsDataURL(file);
        }
        else {
            fileDisplayAre.innerHTML = 'File not supported!';
        }
    });
}