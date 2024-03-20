document.body.innerHTML += `<div id="tarus"></div>`;

function tarusCSS() {
    return `<style>
        #tarus{
            position: fixed;
            bottom: 50px;
            right: 50px;
            z-index: 1000;
        }

        #tarus-frame{
            border: none;
            height: 650px;
            width: 350px;
            box-shadow: 0 0 40px -5px;
            border-radius: 10px;
            position: absolute;
            bottom: 0;
            right: 0;
            display: none;
            z-index: 1002;
        }

        #tarus-chat-wrapper {
            position: relative;
        }

        #tarus-chat-button {
            padding: 10px 20px;
            background: mediumpurple;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            position: relative;
            z-index: 1001;
            color: black;
        }
    </style>`;
}

function chatButton(){
    return `<button id="tarus-chat-button">Rently AI</button>`;
}

function tarusFrame() {
    return `<iframe id="tarus-frame" src="https://srira11.github.io/"></iframe>`;
}

const tarus = document.querySelector('#tarus');
tarus.innerHTML += tarusCSS();
tarus.innerHTML += `<div id="tarus-chat-wrapper">
    ${tarusFrame()}
    ${chatButton()}
</div>`;

window.addEventListener('message', (event) => {
    if(event.data === 'minimize')
        document.querySelector('#tarus-frame').style.display = 'none';
});

let firstClick = true;
document.querySelector('#tarus-chat-button').addEventListener('click', () => {
    const iframe = document.querySelector('#tarus-frame');
    if(firstClick === true) {
        iframe.contentWindow.postMessage('initConnection', 'https://srira11.github.io/');
        firstClick = false;
    }
    iframe.style.display = 'block';
});
