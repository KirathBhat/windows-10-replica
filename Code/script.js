document.addEventListener("click", function () {
    document.getElementById("app1").classList.remove("clicked");
});
document.addEventListener("click", function () {
    document.getElementById("app2").classList.remove("clicked");
});
document.addEventListener("click", function () {
    document.getElementById("con").classList.remove("clicked");
});
document.addEventListener("click", function () {
    document.getElementById("tray").classList.remove("clicked");
});
document.addEventListener("click", function () {
    document.getElementById("not").classList.remove("clicked");
});
document.addEventListener("click", function () {
    document.getElementById("clock").classList.remove("clicked");
});
document.addEventListener("click", function () {
    document.getElementById("strtdv").classList.remove("clicked");
});
document.addEventListener("click", function () {
    document.getElementById("ihatebruh").classList.remove("nah");
});
document.addEventListener("click", function () {
    document.getElementById("traysys").classList.remove("touchgrass");
});
document.addEventListener("click", function () {
    document.getElementById("wifisys").classList.remove("grass");
});
document.addEventListener("click", function () {
    document.getElementById("notsys").classList.remove("helpme");
});

document.addEventListener("DOMContentLoaded", function () {

    const chromeBar = document.getElementById("chrome-bar");
    const iframeContainer = document.getElementById("iframe-container");
    const googleHome = document.getElementById("google-home");
    const backButton = document.getElementById("c3rd");

    backButton.addEventListener("click", function () {
        chromeBar.classList.add("hidden");
        iframeContainer.classList.add("hidden");
        googleHome.classList.remove("hidden");
        iframeContainer.innerHTML = "";
    });




    document.getElementById("show").addEventListener("mouseenter", function () {
        document.getElementById("para1").style.display = "inline";
    });

    document.getElementById("show").addEventListener("mouseleave", function () {
        document.getElementById("para1").style.display = "none";
    });
    document.getElementById("tbp1").addEventListener("click", function (event) {
        this.classList.toggle('clicked');
        event.stopPropagation();
        document.getElementById("blue1").style.backgroundColor = "#1A73E8";
        document.getElementById('term').style.display = "block";
        document.getElementById('terminal').style.zIndex = "2";
        setTimeout(() => {
            document.getElementById('term').style.opacity = "1";
        }, 10);
        document.getElementById("notepad").style.zIndex = "1"
        document.getElementById("chrome").style.zIndex = "1"




    });
    const contextMenu = document.getElementById("contextMenu");

    document.addEventListener("contextmenu", (event) => {
        if (event.target.closest(".no-context")) {
            return;
        }

        event.preventDefault();
        contextMenu.style.display = "block";
        contextMenu.style.visibility = "hidden";


        let menuWidth = contextMenu.offsetWidth;
        let menuHeight = contextMenu.offsetHeight;
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;

        let posX = event.clientX;
        let posY = event.clientY;

        if (posX + menuWidth > windowWidth) {
            posX -= menuWidth;
        }
        if (posY + menuHeight > windowHeight) {
            posY -= menuHeight;
        }

        contextMenu.style.left = `${posX}px`;
        contextMenu.style.top = `${posY}px`;
        contextMenu.style.visibility = "visible";
    });

    document.addEventListener("click", () => {
        contextMenu.style.display = "none";
    });

    window.addEventListener("resize", () => {
        contextMenu.style.display = "none";
    });




    document.getElementById("tbp2").addEventListener("click", function (event) {
        this.classList.toggle('clicked');
        event.stopPropagation();
        document.getElementById("blue2").style.backgroundColor = "#1A73E8";
        document.getElementById('chrome').style.display = "block";
        document.getElementById('chrome').style.zIndex = "2";
        setTimeout(() => {
            document.getElementById('chrome').style.opacity = "1";
        }, 10);
        document.getElementById("terminal").style.zIndex = "1"
        document.getElementById("notepad").style.zIndex = "1"
    });

    document.getElementById("tbp3").addEventListener("click", function (event) {
        this.classList.toggle('clicked');
        event.stopPropagation();
        document.getElementById("blue3").style.backgroundColor = "#1A73E8";
        document.getElementById('note').style.display = "block";
        document.getElementById('notepad').style.zIndex = "2";
        setTimeout(() => {
            document.getElementById('note').style.opacity = "1";
        }, 10);
        document.getElementById("terminal").style.zIndex = "1"
        document.getElementById("chrome").style.zIndex = "1"
    });
    document.getElementById("app1").addEventListener("click", function (event) {
        this.classList.add('clicked');
        event.stopPropagation();
    });
    document.getElementById("app2").addEventListener("click", function (event) {
        this.classList.add('clicked');
        event.stopPropagation();
    });
    document.getElementById("app3").addEventListener("click", function (event) {
        this.classList.add('clicked');
        event.stopPropagation();
    });
    document.getElementById("strtdv").addEventListener("click", function (event) {
        this.classList.toggle('clicked');
        document.getElementById('ihatebruh').classList.toggle('nah');
        event.stopPropagation();
    });
    document.getElementById("con").addEventListener("click", function (event) {
        this.classList.toggle('clicked');
        document.getElementById('wifisys').classList.toggle('grass');
        event.stopPropagation();
    });
    document.getElementById("not").addEventListener("click", function (event) {
        this.classList.toggle('clicked');
        document.getElementById('notsys').classList.toggle('helpme');
        event.stopPropagation();
    });
    document.getElementById("clock").addEventListener("click", function (event) {
        this.classList.toggle('clicked');
        event.stopPropagation();
    });
    document.getElementById("tray").addEventListener("click", function (event) {
        this.classList.toggle('clicked');
        document.getElementById('traysys').classList.toggle('touchgrass');
        event.stopPropagation();
    });

    const triggerElement = document.querySelector("#tbp1");
    const targetElement = document.querySelector("#term");
    const requiredClass = "clicked";
    triggerElement.addEventListener("click", function () {
        if (!triggerElement.classList.contains(requiredClass)) {
            targetElement.style.display = "none";
            document.getElementById('terminal').style.zindex = "1";
            setTimeout(() => {
                document.getElementById('term').style.opacity = "0";
            }, 10);
        }
    });


    const trigger = document.getElementById('show');
    const targets = document.querySelectorAll('.showWhenHovered');

    let timer; 

    trigger.addEventListener('mouseenter', () => {
    timer = setTimeout(() => {
        targets.forEach(target => target.style.zIndex = '-2');
        }, 1000); 
    });

    trigger.addEventListener('mouseleave', () => {
        clearTimeout(timer); 
        targets.forEach(target => target.style.zIndex = '10'); 
    });





    const tg1 = document.querySelector("#tbp2");
    const tg2 = document.querySelector(".chrome");
    const cl1 = "clicked";
    tg1.addEventListener("click", function () {
        if (!tg1.classList.contains(cl1)) {
            tg2.style.display = "none";
            document.getElementById('chrome').style.zindex = "1";
            setTimeout(() => {
                document.getElementById('chrome').style.opacity = "0";
            }, 10);
        }
    });

    let trt = document.getElementById("app3");
    let tgt1 = document.getElementById("chrome");
    let tgt2 = document.getElementById("blue2");
    let tgt3 = document.getElementById("tbp2");

    trt.addEventListener("dblclick", function () {
        tgt2.style.backgroundColor = "#1A73E8";
        tgt3.classList.add("clicked");
        tgt1.style.display = "block";
        document.getElementById('chrome').style.zIndex = "2";
        setTimeout(() => {
            document.getElementById('chrome').style.opacity = "1";
        }, 10);
        document.getElementById("terminal").style.zIndex = "1"
        document.getElementById("notepad").style.zIndex = "1"
        setTimeout(() => {
            tgt1.style.opacity = "1";
        }, 10);
    });


});


document.addEventListener('DOMContentLoaded', function () {




    const searchBox = document.getElementById("search-box");
    const addressBar = document.getElementById("address-bar");
    const chromeBar = document.getElementById("chrome-bar");
    const iframeContainer = document.getElementById("iframe-container");
    const googleHome = document.getElementById("google-home");
    const backButton = document.getElementById("back-btn");

    searchBox.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            let url = searchBox.value.trim();
            if (!url.startsWith("https://") && !url.startsWith("http://")) {
                url = "https://" + url;
            }
            chromeBar.classList.remove("hidden");
            googleHome.classList.add("hidden");
            iframeContainer.classList.remove("hidden");
            addressBar.value = url;
            iframeContainer.innerHTML = `<iframe src="${url}" width="100%" height="100%" style="border:none;"></iframe>`;
        }
    });

    backButton.addEventListener("click", function () {
        chromeBar.classList.add("hidden");
        iframeContainer.classList.add("hidden");
        googleHome.classList.remove("hidden");
        iframeContainer.innerHTML = "";
    });

    addressBar.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            let url = addressBar.value.trim();
            if (!url.startsWith("https://") && !url.startsWith("http://")) {
                url = "https://" + url;
            }
            addressBar.value = url;
            iframeContainer.innerHTML = `<iframe src="${url}" width="100%" height="100%" style="border:none;"></iframe>`;
        }
    });




    let trt = document.getElementById("app2");
    let tgt1 = document.getElementById("note");
    let tgt2 = document.getElementById("blue3");
    let tgt3 = document.getElementById("tbp3");

    trt.addEventListener("dblclick", function () {
        tgt2.style.backgroundColor = "#1A73E8";
        tgt3.classList.add("clicked");
        tgt1.style.display = "block";
        document.getElementById('notepad').style.zIndex = "2";
        setTimeout(() => {
            document.getElementById('note').style.opacity = "1";
        }, 10);
        document.getElementById("terminal").style.zIndex = "1"
        document.getElementById("chrome").style.zIndex = "1"
        setTimeout(() => {
            tgt1.style.opacity = "1";
        }, 10);
    });

    const triggerElement = document.querySelector("#tbp3");
    const targetElement = document.querySelector("#note");
    const requiredClass = "clicked";
    triggerElement.addEventListener("click", function () {
        if (!triggerElement.classList.contains(requiredClass)) {
            targetElement.style.display = "none";
            document.getElementById('notepad').style.zindex = "1";
            setTimeout(() => {
                document.getElementById('note').style.opacity = "0";
            }, 10);
        }
    });

    function handleOverlap(target) {
        target.classList.add('clicked');
    }

    document.getElementById('a1st').addEventListener("click", function () {
        document.getElementById('term').style.display = "none";
        document.getElementById('tbp1').classList.remove('clicked');
        document.getElementById('terminal').style.zIndex = "1";
        document.getElementById('chrome').style.zIndex = "2";
    });

    document.getElementById('a3rd').addEventListener("click", function () {
        document.getElementById('term').style.display = "none";
        document.getElementById('terminal').style.zIndex = "1";
        setTimeout(() => {
            document.getElementById('term').style.opacity = "1";
        }, 10);
        document.getElementById('tbp1').classList.remove('clicked');
        document.getElementById("blue1").style.background = "none";
        document.getElementById("editable-div").innerHTML = "";
        document.getElementById('chrome').style.zIndex = "2";
    });

    document.getElementById('b1st').addEventListener("click", function () {
        document.getElementById('note').style.display = "none";
        document.getElementById('tbp3').classList.remove('clicked');
        document.getElementById('notepad').style.zIndex = "1";
        document.getElementById('terminal').style.zIndex = "2";
        document.getElementById('chrome').style.zIndex = "2";
    });

    document.getElementById('b3rd').addEventListener("click", function () {
        document.getElementById('note').style.display = "none";
        document.getElementById('notepad').style.zIndex = "1";
        setTimeout(() => {
            document.getElementById('note').style.opacity = "1";
        }, 10);
        document.getElementById('tbp3').classList.remove('clicked');
        document.getElementById("blue3").style.background = "none";
        document.getElementById("inpnote").innerHTML = "Hi there! I am Kirath Bhat. This is my Windows 10 OS inspired Portfolio webpage. You can find many interactive elements here such as OBVIOUSLY NOT A VIRUS - GTA 5. Jokes aside, I am a 15 year old front end web developer who aspires to become a full-stack dev pretty soon. This entire webpage was created by me to showcase my work. Head over and double click on GTA(Legit) to enter BSOD. Click Google Chrome to access a showcase of my projects and other elements, go to terminal to....try out some non-functioning stuff? That's right, this is not a 1:1 windows replica because it is quite impossible for me to make the entire Windows OS in HTML. Oh yeah btw, you can edit this text file. Make sure you save your changes before you close the application! (Changes can't be saved lol, I was a bit lazy while coding this haha)";
        document.getElementById("notepad").style.zIndex = "1"
        document.getElementById('terminal').style.zIndex = "2";
        document.getElementById('chrome').style.zIndex = "2";
    });

    function limitContent(element) {
        while (element.scrollHeight > element.clientHeight) {
            element.innerHTML = element.innerHTML.slice(0, -1);
        }

        const range = document.createRange();
        const sel = window.getSelection();
        range.selectNodeContents(element);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
    }

    function checkOverlap(selectionRect) {
        for (let target of targetElements) {
            let targetRect = target.getBoundingClientRect();


            if (
                selectionRect.left < targetRect.right &&
                selectionRect.right > targetRect.left &&
                selectionRect.top < targetRect.bottom &&
                selectionRect.bottom > targetRect.top
            ) {
                handleOverlap(target);
            } else {
                target.classList.remove('overlapping');
            }
        }
    }





    //i am too lazy



    let trigger = document.getElementById("app1");
    let target1 = document.getElementById("window");
    let target2 = document.getElementById("blue1");
    let target3 = document.getElementById("tbp1");
    let target4 = document.getElementById("bsod");

    trigger.addEventListener("dblclick", function () {
        target2.style.backgroundColor = "#1A73E8";
        target3.classList.add("clicked");
        target1.style.display = "block";
        setTimeout(() => {
            target1.style.opacity = "1";
            document.getElementById('virus').style.zIndex = "999";
            document.getElementById('window').style.zIndex = "999";
        }, 10);
        setTimeout(() => {
            setTimeout(() => {
                document.body.innerHTML = "<div class='bsod no-context' id='bsod'><img src='/Assets/bsod.png'></div>";
                document.getElementById('bsod').style.display = "block";
            }, 200);
        }, 2000);
    });





    let selectionBox = document.getElementById('selectionBox');
    let targetElements = [
        document.getElementById('app1'),
        document.getElementById('app2'),
        document.getElementById('app3')
    ];
    let startX, startY;

    document.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains("draggable") || e.target.id === "taskbar") return;
        isSelecting = true;
        if (isDragging) return;
        isSelecting = true;
        if (e.button !== 0) return;

        startX = e.clientX;
        startY = e.clientY;

        selectionBox.style.left = startX + 'px';
        selectionBox.style.top = startY + 'px';
        selectionBox.style.width = '0px';
        selectionBox.style.height = '0px';
        selectionBox.style.display = 'block';

        function onMouseMove(e) {
            let currentX = e.clientX;
            let currentY = e.clientY;

            let width = Math.abs(currentX - startX);
            let height = Math.abs(currentY - startY);

            selectionBox.style.left = Math.min(startX, currentX) + 'px';
            selectionBox.style.top = Math.min(startY, currentY) + 'px';
            selectionBox.style.width = width + 'px';
            selectionBox.style.height = height + 'px';


            checkOverlap(selectionBox.getBoundingClientRect());
        }

        function onMouseUp() {
            isSelecting = false;
            selectionBox.style.display = 'none';
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
    const originalContent = document.getElementById('exp1').innerHTML;

    document.getElementById('app2').addEventListener('click', function (event) {
        document.getElementById('exp1').innerHTML = "Text <br>Document<br>.txt";
        event.stopPropagation();
    });

    document.addEventListener('click', function () {
        document.getElementById('exp1').innerHTML = originalContent;
    });

    document.getElementById("tbp1").addEventListener("click", function () {
        document.getElementById("tbp2").classList.remove("clicked");
    });
    document.getElementById("tbp1").addEventListener("click", function () {
        document.getElementById("tbp3").classList.remove("clicked");
    });
    document.getElementById("tbp2").addEventListener("click", function () {
        document.getElementById("tbp1").classList.remove("clicked");
    });
    document.getElementById("tbp2").addEventListener("click", function () {
        document.getElementById("tbp3").classList.remove("clicked");
    });
    document.getElementById("tbp3").addEventListener("click", function () {
        document.getElementById("tbp1").classList.remove("clicked");
    });
    document.getElementById("tbp3").addEventListener("click", function () {
        document.getElementById("tbp2").classList.remove("clicked");
    });

    document.getElementById("app1").addEventListener("click", function () {
        document.getElementById("app2").classList.remove("clicked");
    });
    document.getElementById("app1").addEventListener("click", function () {
        document.getElementById("app3").classList.remove("clicked");
    });
    document.getElementById("app2").addEventListener("click", function () {
        document.getElementById("app1").classList.remove("clicked");
    });
    document.getElementById("app2").addEventListener("click", function () {
        document.getElementById("app3").classList.remove("clicked");
    });
    document.getElementById("app3").addEventListener("click", function () {
        document.getElementById("app1").classList.remove("clicked");
    });
    document.getElementById("app3").addEventListener("click", function () {
        document.getElementById("app2").classList.remove("clicked");
    });


    document.getElementById("tray").addEventListener("click", function () {
        document.getElementById("con").classList.remove("clicked");
        document.getElementById("wifisys").classList.remove("grass");
    });
    document.getElementById("tray").addEventListener("click", function () {
        document.getElementById("not").classList.remove("clicked");
        document.getElementById("notsys").classList.remove("helpme");
    });
    document.getElementById("tray").addEventListener("click", function () {
        document.getElementById("clock").classList.remove("clicked");
    });


    document.getElementById("con").addEventListener("click", function () {
        document.getElementById("tray").classList.remove("clicked");
        document.getElementById("traysys").classList.remove("touchgrass");
    });
    document.getElementById("con").addEventListener("click", function () {
        document.getElementById("not").classList.remove("clicked");
        document.getElementById("notsys").classList.remove("helpme");
    });
    document.getElementById("con").addEventListener("click", function () {
        document.getElementById("clock").classList.remove("clicked");
    });


    document.getElementById("not").addEventListener("click", function () {
        document.getElementById("tray").classList.remove("clicked");
        document.getElementById("traysys").classList.remove("touchgrass");
    });
    document.getElementById("not").addEventListener("click", function () {
        document.getElementById("con").classList.remove("clicked");
        document.getElementById("wifisys").classList.remove("grass");
    });
    document.getElementById("not").addEventListener("click", function () {
        document.getElementById("clock").classList.remove("clicked");
    });


    document.getElementById("clock").addEventListener("click", function () {
        document.getElementById("tray").classList.remove("clicked");
        document.getElementById("traysys").classList.remove("touchgrass");
    });
    document.getElementById("clock").addEventListener("click", function () {
        document.getElementById("not").classList.remove("clicked");
        document.getElementById("notsys").classList.remove("helpme");
    });
    document.getElementById("clock").addEventListener("click", function () {
        document.getElementById("con").classList.remove("clicked");
        document.getElementById("wifisys").classList.remove("grass");
    });




    document.getElementById('c1st').addEventListener("click", function () {
        document.getElementById('chrome').style.display = "none";
        document.getElementById('tbp2').classList.remove('clicked');
        document.getElementById('chrome').style.zIndex = "1";
        document.getElementById('terminal').style.zIndex = "2";
        document.getElementById('notepad').style.zIndex = "2";
    });

    document.getElementById('c3rd').addEventListener("click", function () {
        document.getElementById('chrome').style.display = "none";
        document.getElementById('chrome').style.zIndex = "1";
        setTimeout(() => {
            document.getElementById('chrome').style.opacity = "0";
        }, 10);
        document.getElementById('tbp2').classList.remove('clicked');
        document.getElementById("blue2").style.background = "none";
        document.getElementById("chrome").style.zIndex = "1"
        document.getElementById('terminal').style.zIndex = "2";
        document.getElementById('notepad').style.zIndex = "2";
    });


    //yayyy finally an end to the above mess

    let draggableItems = document.querySelectorAll(".draggable");
    let ghostItem = null;
    let offsetX, offsetY, isDragging = false, isPreparingToDrag = false;
    let initialX, initialY, finalX, finalY, currentDragItem;

    draggableItems.forEach((item) => {
        item.addEventListener("mousedown", (e) => {
            isPreparingToDrag = true;
            initialX = e.clientX;
            initialY = e.clientY;

            currentDragItem = item;

            offsetX = e.clientX - currentDragItem.getBoundingClientRect().left;
            offsetY = e.clientY - currentDragItem.getBoundingClientRect().top;
        });
    });

    document.addEventListener("mousemove", (e) => {
        if (isPreparingToDrag) {
            let distance = Math.sqrt(Math.pow(e.clientX - initialX, 2) + Math.pow(e.clientY - initialY, 2));

            if (distance > 5) {
                isDragging = true;
                isPreparingToDrag = false;

                ghostItem = currentDragItem.cloneNode(true);
                ghostItem.classList.add("ghost");
                document.body.appendChild(ghostItem);
            }
        }

        if (isDragging) {
            let newX = e.clientX - offsetX;
            let newY = e.clientY - offsetY;

            let maxX = window.innerWidth - currentDragItem.offsetWidth;
            let maxY = window.innerHeight - currentDragItem.offsetHeight;

            newX = Math.max(0, Math.min(newX, maxX));
            newY = Math.max(0, Math.min(newY, maxY));


            ghostItem.style.position = "absolute";
            ghostItem.style.left = newX + "px";
            ghostItem.style.top = newY + "px";


            finalX = newX;
            finalY = newY;
        }
    });

    document.addEventListener("mouseup", () => {
        if (isDragging) {
            isDragging = false;


            currentDragItem.style.left = finalX + "px";
            currentDragItem.style.top = finalY + "px";


            if (ghostItem) {
                document.body.removeChild(ghostItem);
                ghostItem = null;
            }
        }
        isPreparingToDrag = false;
    });
    const elements = [
        { trigger: "app1", target: "name1" },
        { trigger: "app3", target: "name2" },
        { trigger: "app2", target: "name3" },
        { trigger: "strtdv", target: "name4" },
        { trigger: "tbp1", target: "name5" },
        { trigger: "tbp2", target: "name6" },
        { trigger: "tbp3", target: "name7" },
        { trigger: "tray", target: "name8" },
        { trigger: "con", target: "name9" },
        { trigger: "not", target: "name10" },
        { trigger: "clock", target: "name11" },
        { trigger: "show", target: "name12" }
    ];

    elements.forEach(({ trigger, target }) => {
        let triggerElement = document.getElementById(trigger);
        let targetElement = document.getElementById(target);
        let hoverTimeout, hideTimeout;

        if (triggerElement && targetElement) {
            triggerElement.addEventListener("mouseenter", function () {
                clearTimeout(hideTimeout);
                hoverTimeout = setTimeout(function () {
                    targetElement.style.display = "inline";
                    setTimeout(() => targetElement.classList.add("appear"), 10);
                }, 700);
            });

            triggerElement.addEventListener("mouseleave", function () {
                clearTimeout(hoverTimeout);
                targetElement.classList.remove("appear");


                hideTimeout = setTimeout(() => {
                    targetElement.style.display = "none";
                }, 300);
            });
        }
    });


});




document.addEventListener("click", function () {
    document.getElementById("app3").classList.remove("clicked");
});

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();

    document.getElementById('time').textContent = `${hours}:${minutes}`;
    document.getElementById('date').textContent = `${day}-${month}-${year}`;
}

setInterval(updateClock, 1000);
updateClock();

//IF IT WORKS, DON'T TOUCH IT
//I DONT CARE IF IT'S UGLY
//IT WORKS
//THAT'S ALL THAT MATTERS
//I'M NOT TOUCHING IT
//The above javascript was for the basic windows gui operations
//The javascript below is for the advanced windows gui operations and functionalities
//i was too lazy so i inserted the javascript that was to be here up tehre


