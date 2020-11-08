import * as alt from 'alt';
import * as game from 'natives';

let hidden = false;
let webview;
let opened = false;
let view = new alt.WebView('http://resource/html/index.html');


// function handleDiscordAuth(url) {
//     if (view && view.destroy) {
//         view.destroy();
//     }

//     // discordURL = url;
//     view = new alt.WebView('http://resource/client/html/index.html');
//     // view.on('discord:BearerToken', handleBearerToken);
//     // view.on('discord:Ready', handleReady);
//     view.focus();

//     // showCursor(true);
// }

// view.on('chatmessage', (text) => {
//     alt.emitServer('chatmessage', text);

//     if (text !== undefined && text.length >= 1)
//         alt.emit('messageSent', text);

//     opened = false;
//     alt.emit('chatClosed');
//     alt.toggleGameControls(true);
// });