const HOSTED_URL = "https://srira11.github.io/TarusUI";
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
            height: 632px;
            width: 357px;
            box-shadow: 0 10px 15px -3px rgba(16, 24, 40, 0.1), 0 4px 6px -4px rgba(16, 24, 40, 0.1);
            border-radius: 8px;
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
            box-shadow: 0 10px 15px -3px rgba(16, 24, 40, 0.1), 0 4px 6px -4px rgba(16, 24, 40, 0.1);
        }
    </style>`;
}

function chatButton(){
    return `<button id="tarus-chat-button">Rently AI</button>`;
}

function tarusFrame() {
    return `<iframe id="tarus-frame" src="${HOSTED_URL}"></iframe>`;
}

const tarus = document.querySelector('#tarus');
tarus.innerHTML += tarusCSS();
tarus.innerHTML += `<div id="tarus-chat-wrapper">
    ${tarusFrame()}
    ${chatButton()}
</div>`;

window.addEventListener('message', (event) => {
    if(event.data === 'minimize' && event.origin === HOSTED_URL) {
        document.querySelector('#tarus-frame').style.display = 'none';
        document.querySelector('#tarus-chat-button').style.display = 'block';
    }
});

let firstClick = true;
document.querySelector('#tarus-chat-button').addEventListener('click', () => {
    const iframe = document.querySelector('#tarus-frame');
    if(firstClick === true) {
        iframe.contentWindow.postMessage('initConnection', HOSTED_URL);
        firstClick = false;
    }
    iframe.style.display = 'block';
    document.querySelector('#tarus-chat-button').style.display = 'none';
});
