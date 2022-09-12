$(window).ready(function() {

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
