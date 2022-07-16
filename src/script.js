function openWiki() {
    var modal=document.getElementById("modal");
    var close = document.getElementsByClassName("close")[0];

    modal.style.display="block";
    close.onclick=function(){
        modal.style.display="none";
    }    
}


