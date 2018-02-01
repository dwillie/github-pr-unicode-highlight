const handledElems = [];

setInterval(function() {
    elems = document.getElementsByClassName("blob-code-inner");
    const unicodeRegex = /([^\x00-\x7F])+/g;

    for (var i = 0; i < elems.length; i++) {
        if (handledElems.indexOf(elems[i]) > -1) {
            continue;
        }

        elems[i].innerHTML = elems[i].innerHTML.replace(unicodeRegex, "<span style=\"min-width: 3px; background-color: red;\">$&</span>"); 
        handledElems.push(elems[i]);
    }
}, 1000);
