document.addEventListener('DOMContentLoaded', () => {
    let viewPage = document.getElementById('viewPage');

    viewPage.addEventListener('click', () => {
        chrome.tabs.getSelected(null, function(tab) {
            d = document;
            window.open('https://twitter.com/anekenonso1', 'blank');
        });
    }, false);
}, false);