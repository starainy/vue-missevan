let audioInfo = {
  autoplay: false,
  testAutoPlay () {
    // 返回一个promise以告诉调用者检测结果
    return new Promise(resolve => {
      let audio = document.createElement('audio');
      // require一个本地文件，会变成base64格式
      audio.src = 'http://static.missevan.com/MP3/201504/28/733399a15bd434a0bbf250676a464176165026.mp3';
      document.body.appendChild(audio);
      let autoplay = true;
      // play返回的是一个promise
      audio.play().then(() => {
          // 支持自动播放
          autoplay = true;
      }).catch(err => {
          // 不支持自动播放
          autoplay = false;
      }).finally(() => {
          audio.remove();
          // 告诉调用者结果
          resolve(autoplay);
      });
    });
  },
  // 监听页面的点击事件，一旦点过了就能autoplay了
  setAutoPlayWhenClick () {
      function setAutoPlay () {
          // 设置自动播放为true
          audioInfo.autoplay = true;
          document.documentElement.removeEventListener('click', setAutoPlay);
          // document.getElementById('podcastItemWrapper').removeEventListener('touchend', setAutoPlay);
      }
      document.documentElement.addEventListener('click', setAutoPlay);
      // document.getElementById('podcastItemWrapper').addEventListener('touchend', setAutoPlay);
  },
  init () {
      // 检测是否能自动播放
      audioInfo.testAutoPlay().then(autoplay => {
          if (!audioInfo.autoplay) {
              audioInfo.autoplay = autoplay;
          }
      });
      // debugger
      // 用户点击交互之后，设置成能自动播放
      audioInfo.setAutoPlayWhenClick();
  }
};
audioInfo.init();
export default audioInfo;
