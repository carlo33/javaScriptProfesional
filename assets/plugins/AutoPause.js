class AutoPause{
  constructor(){
    this.threshold = 0.25;
    //tecnica para establecer el this permanentemente
    this.handleIntersection = this.handleIntersection.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }
  run(player){
    this.player = player;
    /* const observer = new IntersectionObserver(handler, config); */
    const observer = new IntersectionObserver(this.handleIntersection,{
      //en  configuracion debemos pasale el umbral
      threshold:this.threshold,
    });
    observer.observe(this.player.media);
    ///implementando el Visibility change
    document.addEventListener("visibilitychange",this.handleVisibilityChange)
  }
  //entries es la lista de objetos que estamos observando
  handleIntersection(entries){
    const entry = entries[0];
    const isVisible = entry.intersectionRatio >= this.threshold;
    if (isVisible){
      this.player.play();
    }else{
      this.player.pause();
    }
  }
  handleVisibilityChange(){
    const isVisible = document.visibilityState === "visible";
    if(isVisible){
      this.player.play();
    }else{
      this.player.pause();
    }
  }
}
export default AutoPause;