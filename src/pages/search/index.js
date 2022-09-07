Page({
  data: {
    toView: 'red',
    scrollTop: 100
  },

  /*onLoad(query) {
  },*/
  onReady() {
  },
  onShow() {
  },
  onHide() {
  },
  onUnload() {
  },
  // sets a temp data before it is changed
  data: {
    name: 'Guest'
  },
  onLoad() {
    // set data on load of the application
    this.setData({
      name: 'Nguyen Van A'
    });
    this.scroll = debounce(this.scroll.bind(this), 100);
  },

  upper(e) {
    console.log('upper', e);
  },
  lower(e) {
    console.log('lower', e);
  },
  scroll(e) {
    console.log('scroll', e);
  },
  scrollToTop(e) {
    console.log(e);
    this.setData({
      scrollTop: 0
    });
  },
  buttonNavigate() {
    console.log("Button has been pressed!" );
    my.navigateTo({ url: 'src/pages/blank/siuu' });
  },

  tap() {
       
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        const next = (i + 1) % order.length;
        this.setData({
          toView: order[next],
          scrollTop: next * 200
        });
        break;
      }
    }
  },
  tapMove() {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    });
  }
});
