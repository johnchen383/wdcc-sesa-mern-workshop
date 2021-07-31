// function removeButton(id) {
//     const button = document.querySelector(id);
//     if (button != null) {
//         var buttonSelect = button.parentElement.parentElement.parentElement;
//         buttonSelect.parentElement.removeChild(buttonSelect);
//     }
// }


window.onload = start;
const mainDiv = document.querySelector('[role="main"]');

function start() {
    removeItems();
    setTimeout(
        function () {
            removeItems();
        }, 1500);
    setTimeout(
        function () {
            removeItems();
        }, 3000);
    setTimeout(
        function () {
            removeItems();
        }, 4500);
    setTimeout(
        function () {
            removeItems();
            addInspo();
        }, 6000);
}

function removeItems() {
    // removeButton('[aria-label="Watch"]');
    // removeButton('[aria-label="Marketplace"]');
    // removeButton('[aria-label="Groups"]');
    // removeButton('[aria-label="Pages"]');
    const leftRail = document.querySelector('[data-pagelet="LeftRail"] div');
    const rightRail = document.querySelector('[data-pagelet="RightRail"] div');
    const bodyBit = document.querySelector('[aria-label="Facebook"] ul');

    if (leftRail != null) {
        leftRail.parentElement.removeChild(leftRail);
    }

    if (rightRail != null) {
        rightRail.parentElement.removeChild(rightRail);
    }

    if (bodyBit != null) {
        bodyBit.parentElement.removeChild(bodyBit);
    }

    if (mainDiv != null) {
        if (mainDiv.childNodes[0] != undefined) {
            mainDiv.removeChild(mainDiv.childNodes[0]);
        }

    }
}

function addInspo() {
    mainDiv.style = "position: relative";
    //format verse
    var tag = document.createElement("h1");
    var text = document.createTextNode("\"For the wages of sin is death, but the free gift of God is eternal life through Christ Jesus our Lord\"");
    tag.appendChild(text);
    tag.style = "position: absolute; top: 10px; font-size: 20px; text-align: center;";
    
    //add verse reference
    var ref = document.createElement("p");
    var text = document.createTextNode("- Romans 6:23");
    ref.appendChild(text);
    ref.style = "position: absolute; top: 55px; font-size: 16px; right: 50px;";

    //add gif
    var gif = document.createElement("img");
    gif.style = "position: absolute; top: 100px; width: 50%";
    gif.src = "https://camo.githubusercontent.com/f5063eca77400ff666dbecd8e484df1dfdc186465a29a588c98bb8fbc381dff2/68747470733a2f2f75706c6f6164732d73736c2e776562666c6f772e636f6d2f3539613739393830646432333739303030313633303134652f3562396666616665393831396538653362396664316566655f436f7a7943616c5f4368726973253237732532306d6f6465253230312e676966"
    
    //add elements
    mainDiv.appendChild(tag);
    mainDiv.appendChild(ref);
    mainDiv.appendChild(gif);
}
