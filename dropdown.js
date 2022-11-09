window.onload = () => {
    let hamburger = document.getElementById("hamburgerIcon");
    let navigation = document.getElementById("navigationMobile");
    let navClosed = true;

    let infoArrow = document.getElementById("infoDrop");
    let infoContent = document.getElementById("infoContent");
    let infoClosed = true;

    let initiatievenArrow = document.getElementById("initiatievenDrop");
    let initiatievenContent = document.getElementById("initiatievenContent");
    let initiatievenClosed = true;

    let tipstricksArrow = document.getElementById("tipstricksDrop");
    let tipstricksContent = document.getElementById("tipstricksContent");
    let tipstricksClosed = true;
    
    hamburger.addEventListener("click", () => {
        if(navClosed){
            navigation.style.display = "block";
            navClosed = false;
        }
        else {
            navigation.style.display = "none";
            navClosed = true;
        }
    });

    infoArrow.addEventListener("click", () => {
        if(infoClosed){
            infoContent.style.display = "flex";
            infoClosed.innerHTML = "&blacktriangle;";
            infoClosed = false;
        }
        else {
            infoContent.style.display = "none";
            infoClosed.innerHTML = "&blacktriangledown;";
            infoClosed = true;
        }
    });

    initiatievenArrow.addEventListener("click", () => {
        if(initiatievenClosed){
            initiatievenContent.style.display = "flex";
            initiatievenClosed.innerHTML = "&blacktriangle;";
            initiatievenClosed = false;
        }
        else {
            initiatievenContent.style.display = "none";
            initiatievenClosed.innerHTML = "&blacktriangledown;";
            initiatievenClosed = true;
        }
    });

    tipstricksArrow.addEventListener("click", () => {
        if(tipstricksClosed){
            tipstricksContent.style.display = "flex";
            tipstricksClosed.innerHTML = "&blacktriangle;";
            tipstricksClosed = false;
        }
        else {
            tipstricksContent.style.display = "none";
            tipstricksClosed.innerHTML = "&blacktriangledown;";
            tipstricksClosed = true;
        }
    })
}