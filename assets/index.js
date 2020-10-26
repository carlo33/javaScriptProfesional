import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins:[
  new AutoPlay(), new AutoPause() ] 
});

const playPause = document.getElementById('playPause');
playPause.onclick = () => player.togglePlay();

const muteUnmute = document.getElementById('muteUnmute');
muteUnmute.onclick = () => player.toggleMute();
