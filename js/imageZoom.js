// code from: code-boxx.com/image-zoom-css-javascript/

//Shows image in lightbox
var zoomImg = function () {
    // Create image clone
    var clone = this.cloneNode();  // creates new node
    clone.classList.remove("zoom"); // removes .zoom class to signify it's to be enlarged
    
    // Insert clone into picBox for viewing
    var picBox = document.getElementById("picBox-img"); // Grab all elem's w/ class of 'picBox-img'
    picBox.innerHTML = "";  // Erases var picBox's contents
    picBox.appendChild(clone);  // Appends 'clone' node to end of picBox's list of children nodes

    // Show picBox
    picBox = document.getElementById("picBox"); // Grabs elem's w/ class of 'picBox'
    picBox.classList.add("show");   // Shows enlarged img
};

window.addEventListener("load", function() {
    // Attach click events to all .zoom img's
    var images = document.getElementsByClassName("zoom");   // Put all .zoom img's into var images
    
    if (images.length > 0) {    // If images's .zoom elem's are pictures
        for (var img of images) {   // for each .zoom elem in var images
            img.addEventListener("click", zoomImg); // Slap on the EventListener
        }
    }

    // Clicking to hide picBox
    document.getElementById("picBox").addEventListener("click", function() {
        this.classList.remove("show");  // Removes .show to prevent visibility
    })
});

// code from ThingsILearned by Dave Fowler
// http://thingsilearned.com/2008/12/27/proportional-image-resize-in-javascript/
// var resize = function (img, height, width) {
//     var ratio = height/width;

//     if (img.height/img.width > ratio) {
//         if (img.height > height) {
//             img.width = Math.round(img.width*(height/img.height));
//             img.height = height;
//         }
//     } else {
//         if (img.width > height) {
//             img.height = Math.round(img.height*(width/img.width));
//             img.width = width;
//         }
//     }
// };