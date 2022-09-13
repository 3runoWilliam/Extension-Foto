const form = document.querySelector('form');
const input = document.querySelector('.input');

const replaceImagem = (url) => {
    const images = document.querySelectorAll(img);

    img.forEach((image) => image.scr = url);
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

     chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: replaceImagem,
        args: [input.value]

     });
});