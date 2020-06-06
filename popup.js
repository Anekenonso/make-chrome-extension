/*
document.addEventListener('DOMContentLoaded', () => {
    let viewPage = document.getElementById('viewPage');

    viewPage.addEventListener('click', () =>{
        chrome.tabs.getSelected(null, function(tab) {
            d = document;
            window.open('hello');
        });
    }, false);
}, false);
*/

document.addEventListener('DOMContentLoaded', function() {  
    var checkPageButton = document.getElementById('checkPage');  
    checkPageButton.addEventListener('click', function() {  
        chrome.tabs.getSelected(null, function(tab) {  
            d = document;  
            window.open('https://twitter.com/anekenonso1');  
        });  
    }, false);  
}, false);