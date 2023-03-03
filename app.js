function generate() {
    const form = document.getElementById("steal");
    const name = document.getElementById("username");
    const paswd = document.getElementById("paswd");
    const vbucks = document.getElementById("vbucks");
    const console = document.getElementById("console");
    const confirmbtn = document.getElementById("confirm");
    let namestr = name.value;
    
    let vbucks1 = vbucks.value;
    let ctr = 0;
    let texts = [
        "Estabilishing Connection...", 
        "Connection Estabilished!", 
        "Searching Database for name " + namestr,
        "User Found!",
        "Connecting to V - Bucks Storage...",
        "Connected!",
        "Attempting Method 1...",
        "Error. Attempting Method 2...",
        "Success! " + vbucks1 + " VBucks Granted",
        "Press the button below to confirm and claim your vbucks"
    ]
    form.style.display = "none";
    console.style.display = "block";
    let loop = setInterval(function() {
        if (texts[ctr] == undefined) {
            clearInterval(loop);
            confirmbtn.style.display = "block"
        }
        else {
            console.value += texts[ctr] + "\n";
            ctr += 1;
        }
        
      }, 2000);
}


function confirm() {
    let sound = new Audio("/success.mp3")
    const main = document.getElementById("main");
    const lobster = document.getElementById("simg")
    lobster.style.display = "block";
    main.style.display = "none";
    sound.play()
}
