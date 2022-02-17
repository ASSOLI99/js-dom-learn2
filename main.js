document.addEventListener('keydown',function(e){
   let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   let key = document.querySelector(`.key[data-key="${e.keyCode}"]`); 
   if(!audio){return;};
   
   audio.currentTime=0;
   audio.play();
   console.log(key)
   key.classList.add('onClick');
   setTimeout(() => {key.classList.remove('onClick')}, 100);
});
document.addEventListener('click',function(e){
    let audio = document.querySelector(".touch");
if(e.target.classList.length>1){
    audio.currentTime=0;
    audio.play();
}
   
    
    
 });