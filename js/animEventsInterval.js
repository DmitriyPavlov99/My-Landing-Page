$(window).ready(function() {
    let animBtn = setInterval(animButton,3000);
    let pulseImg = setInterval(pulseImage,2000);
    let returnPulse = setInterval(returnPulseAnim,4000);
});

const pulseImage = () => {
    $('.main_photo-settings').css({
        'scale':'0.98',
        'transition':'1s'
    })
    
}
const returnPulseAnim = () => {
    $('.main_photo-settings').css({
        'scale':'1.0',
        'transition':'1s'
    })
}
const animButton = () => {
    $('.main_button-enter').css({
        'background':'black',
        'color':'white',
        'transition':'0.7s'
    })
    setInterval(func2,1500)
    function func2() {
        $('.main_button-enter').css({
            'background':'white',
            'color':'black',
            'transition':'0.7s'
        })
        
    }
}

