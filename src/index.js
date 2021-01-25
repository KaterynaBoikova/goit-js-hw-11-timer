import './styles.css';

class CountdownTimer{
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = new Date(targetDate);
    this.htmlTextRefs = document.querySelectorAll(this.selector);
    this.intervalId = null;
}
  pad(num){
    return String(num).padStart(2, '0');
  }
  setTimer(){
    this.intervalId = setInterval(()=>{
      let time = this.targetDate - Date.now();
      this.htmlTextRefs[0].textContent = Math.floor(time / (1000 * 60 * 60 * 24));
      this.htmlTextRefs[1].textContent = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      this.htmlTextRefs[2].textContent = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      this.htmlTextRefs[3].textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));
      const check = Object.values(this.htmlTextRefs).map(textRef=>textRef.textContent).every(val=> val <= 0);
      if(check){
        clearInterval(this.intervalId); }
    }, 1000);}

};

const customTimer = new CountdownTimer ('.value', 'Jul 25, 2021 22:13');
customTimer.setTimer();


