function menuFunction(){
    var x=document.getElementById("buttonPencil");
    
    if(x.className==="pencil"){
        x.className="eraser";
        document.getElementById("mainMenuID").className="mainMenuClassResponsive";
    }
    else{
        x.className="pencil";
        document.getElementById("mainMenuID").className="mainMenuClass";
    }
}

function backToTopFunction(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}