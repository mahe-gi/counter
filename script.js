const paragraph = document.getElementById('para');
let c=0;
function increment(){
    if(c>=20){
        alert("your going above 20 ");
        return;
    }else{
        c++;
        paragraph.textContent =c;
    }

}
function decrement(){
    if(c<=0){
        alert("your going below 0 ");
        return;
    }else{
        c--;
        paragraph.textContent =c;
    }

}
function reset(){
        c=0;
        paragraph.textContent =c;
}