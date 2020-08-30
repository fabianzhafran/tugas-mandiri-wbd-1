var loadingIndicatorOn = true;
var leftStuffChildren = document.getElementsByClassName('left-stuff')[0].childNodes;
var middleStuffChildren = document.getElementsByClassName('middle-stuff')[0].getElementsByClassName('navigasi')[0].childNodes;
var rightStuffChildren = document.getElementsByClassName('right-stuff')[0].childNodes;

function filterChildren(childItem, childIndex, index) {
    if (childIndex % 2 === 1) {
        var isInvisible = childItem.classList ? childItem.classList.contains('invisible') : null;
        if (index === childIndex && isInvisible) {
            childItem.classList.remove('invisible');
        }
        if (index !== childIndex && !isInvisible) {
            childItem.classList.add('invisible');
        }
    }
}

middleStuffChildren.forEach((item, index) => {
    if (index % 2 === 1) {
        item.addEventListener('mouseenter', function(event) {
            leftStuffChildren.forEach((childItem, childIndex) => filterChildren(childItem, childIndex, index));
            rightStuffChildren.forEach((childItem, childIndex) => filterChildren(childItem, childIndex, index));
        })
    }
})

window.onload = function() {
    var loadingText = document.getElementById('loading-text');
    var loadingScreen = document.getElementById('loading-screen');
    var loadingInterval = setInterval(() => {
        loadingText.style.color = loadingIndicatorOn ? 'white' : 'black';
        loadingIndicatorOn = !loadingIndicatorOn;
    }, 800);

    var loadingDone = setTimeout(() => {
        clearInterval(loadingInterval);
        loadingText.style.color = 'transparent';
        loadingScreen.style['background-color'] = 'transparent';
        setTimeout(() => {
            loadingScreen.classList.add('invisible');
        }, 800);
    }, 3200);

}