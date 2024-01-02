let x,y;
var op;

var div = document.getElementById('nr');
var asta;

function adaugarepunct(numar){
    if(document.getElementById('nr').innerHTML.includes('.')){
        alert("Maxim un pct.");
    }
    else {ecran(numar);}
}

function ecran(numar){
    if(document.getElementById('nr').innerHTML=="0"){
        document.getElementById('nr').innerHTML='';
        div.innerHTML += numar;
    }else
    {
        div.innerHTML += numar;
    }

}
function reset(){
    document.getElementById('nr').innerHTML='0';
}

function delet(){
    let text=document.getElementById("nr").textContent;
    text=text.slice(0,-1);
    document.getElementById("nr").textContent = text;

}

var c;
var rezultat;

function setOperation(operatie){
    op=operatie;
    //c=document.getElementById("nr").textContent;
    var txt = document.getElementById("nr").innerHTML;
            c = Number(txt);
    document.getElementById('nr').innerHTML='';
}


function egl(){
    if(op=='+'){
    var txt = document.getElementById("nr").innerHTML;
        var num = Number(txt);
    
        rezultat=c+num;
        if(Number.isInteger(rezultat))
        {
            document.getElementById("nr").textContent=rezultat;
        }else{
           rezultat=rezultat.toFixed(6);
           document.getElementById("nr").textContent=rezultat;
        }
        document.getElementById("nr").textContent=rezultat;}
        else if(op=='/'){
        var txt = document.getElementById("nr").innerHTML;
        var num = Number(txt);

        rezultat=c/num;
            if(Number.isInteger(rezultat))
            {
                document.getElementById("nr").textContent=rezultat;
            }else{
               rezultat=rezultat.toFixed(6);
               document.getElementById("nr").textContent=rezultat;
            }
        document.getElementById("nr").textContent=rezultat;}else if(op=='-'){

        var txt = document.getElementById("nr").innerHTML;
        var num = Number(txt);

        rezultat=c-num;
        if(Number.isInteger(rezultat))
        {
            document.getElementById("nr").textContent=rezultat;
        }else{
           rezultat=rezultat.toFixed(6);
           document.getElementById("nr").textContent=rezultat;
        }
        document.getElementById("nr").textContent=rezultat;}else{
        var txt = document.getElementById("nr").innerHTML;
        var num = Number(txt);

    rezultat=c*num;
            if(Number.isInteger(rezultat))
            {
                document.getElementById("nr").textContent=rezultat;
            }else{
               rezultat=rezultat.toFixed(6);
               document.getElementById("nr").textContent=rezultat;
            }
                
    }
}



