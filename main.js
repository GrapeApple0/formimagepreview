            function loadImage(obj) {
              document.getElementById('preview').innerHTML = '<p>プレビュー</p>';
              for (i = 0; i < obj.files.length; i++) {
                var fileReader = new FileReader();
                let isimage = /^image.*/.test(obj.files[i].type);
                let filename = obj.files[i].name;
                let filetype = obj.files[i].type;
                if (filetype == "") {
                  filetype = filename.split('.').pop() + "file";
                }
                let filesize = formatSize(obj.files[i].size);
                fileReader.onload = (function(e) {
                  if (isimage == true) {
                    isimage = false;
                    document.getElementById('preview').innerHTML +=
                      '<div class="preitem">' +
                      '<img src="' + e.target.result + '" style="width: 120px;"><br>' +
                      '<label class="fname">' + filename + '</label>' +
                      '<label>' + filetype + '</label><br>' +
                      '<label>' + filesize + '</label>' +
                      '</div>';
                  } else {
                    document.getElementById('preview').innerHTML +=
                      '<div class="preitem">' +
                      '<img src="https://04.si/favicon.png" style="width: 120px;"><br>' + //ファイルが画像以外の物の場合
                      '<label class="fname">' + filename + '</label>' +
                      '<label>' + filetype + '</label><br>' +
                      '<label>' + filesize + '</label>' +
                      '</div>';
                  }
                });
                fileReader.readAsDataURL(obj.files[i]);
              }
            }
