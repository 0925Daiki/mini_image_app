document.addEventListener('DOMContentLoaded', function(){
  if (document.getElementById('message_image')){
    const ImageList = document.getElementById('image_list');

    //選択した画像を表示する関数
    const createImageHTML = (blob) => {
      //画像を表示するためのdiv要素を生成
      const imageElement = document.createElement('div');
      imageElement.setAttribute('class', "image-element");
      let imageElementNum = document.querySelectorAll('.image-element').length;

      //表示する画像を生成
      const blobImage = document.createElement('img');
      blobImage.setAttribute('src', blob);

      //ファイルを選択するボタンを生成
      const inputHTML = document.createElement('input');
      //変数imageElementNumを定義することで、先ほど作成したinput要素が「何番目の要素か」を判別
      inputHTML.setAttribute('id', `message_image_${imageElementNum}`);
      inputHTML.setAttribute('name', 'message[images][]');
      inputHTML.setAttribute('type', 'file');

      //生成したHTMLの要素をブラウザに表示させる
      imageElement.appendChild(blobImage);
      imageElement.appendChild(inputHTML);
      ImageList.appendChild(imageElement);

      inputHTML.addEventListener('change',(e) => {
        file = e.target.files[0];
        blob = window.URL.createObjectURL(file);

        createImageHTML(blob);
      });
    };

    document.getElementById('message_image').addEventListener('change',function(e){

      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);

      createImageHTML(blob);
    });
  }
});