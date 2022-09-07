Page({
  data: {
    videoUrl: undefined
  },
  onReady() {
    const video = my.createAudioContext('video');
    video.play();
  },
  onChooseVideo() {
    my.chooseVideo({
      success: (res) => {
        my.trimVideo({ filePath: res.filePaths[0], duration: 5 });
      },
      fail: (e) => {
        my.alert({ content: JSON.stringify(e) });
        console.log(e);
      }
    });
  },

  onChange(e) {
    console.log("yo man");
    console.log('onChange', e);
  }
});