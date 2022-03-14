
window.onload = function(){
    
    let who = [ 'Mi mama ', 'El pais ', 'COVID ', 'La vinotinto '];
    let action = ['me reganó ' , 'descontroló ' , 'me preocupó ' , 'perdió '];
    let what = ['el pais ', 'el mundo ', 'el partido '];
    let when = ['hoy', 'esta tarde', 'antes de venir'];

    let random1 = Math.floor(Math.random()*who.length);
    let random2 = Math.floor(Math.random()*action.length);
    let random3 = Math.floor(Math.random()*what.length);
    let random4 = Math.floor(Math.random()*when.length);

    let excuse = who[random1]+action[random2]+what[random3]+when[random4];

    console.log(excuse);
    document.querySelector("#excusa").innerHTML = excuse
}