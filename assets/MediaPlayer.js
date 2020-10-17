class MediaPlayer {
  constructor(config){
    this.media = config.el;
    this.plugins = config.plugins || [];
    this._initplugins();
  }
  _initplugins(){
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }
  play(){
    this.media.play();
  }
  pause(){
    this.media.pause();
  }
  togglePlay(){
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  }
  mute(){
    this.media.muted = true
  }
  toggleMute(){
    if (this.media.muted){
      this.media.muted = false;
    } else{
      this.media.muted = true;
    }
  }
}
export default MediaPlayer;