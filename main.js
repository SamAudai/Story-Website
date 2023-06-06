let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountain3 = document.getElementById('mountain3');
let mountain4 = document.getElementById('mountain4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let story = document.getElementById('story');
let main = document.querySelector('.main');

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    stars.style.transition = '1s',
    moon.style.top = value*4 + 'px';
    moon.style.transition = '1s',
    mountain3.style.top = value*2.5 + 'px';
    mountain3.style.transition = '1s',
    mountain4.style.top = value*1.5 + 'px';
    mountain4.style.transition = '1s',
    river.style.top = value + 'px';
    river.style.transition = '1s',
    boat.style.top = value + 'px';
    boat.style.transition = '1s',
    boat.style.left = value*3 + 'px';
    boat.style.transition = '1s',
    story.style.fontSize = value + 'px';
    if(scrollY >= 67){
        story.style.fontSize = 67 + 'px';
        story.style.position = 'fixed';
        
        if(scrollY > 380){
            story.style.display = 'none';
                        
        }
        else
        {
            story.style.display = 'block';
            
        }

        if(scrollY > 107){
            main.style.background = 'linear-gradient(rgb(44, 9, 36),rgb(193 241 239))';
            
        }
        else{
            main.style.background = 'linear-gradient(rgb(44, 9, 36),rgb(16, 2, 37))';
            
        }
    }
    if(scrollY > 553){
        document.getElementById('header').style.display='none'
    }
    else{
        document.getElementById('header').style.display='flex'
    }
}
