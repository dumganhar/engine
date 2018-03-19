
function inject () {
    window.top = window.parent = window

    window.document = require('./document');
    window.HTMLElement = require('./HTMLElement');
    window.HTMLCanvasElement = require('./HTMLCanvasElement');
    window.HTMLImageElement = require('./HTMLImageElement');
    window.HTMLMediaElement = require('./HTMLMediaElement');
    window.HTMLAudioElement = require('./HTMLAudioElement');
    window.canvas = new HTMLCanvasElement();
    window.gl.canvas = window.canvas;
    window.navigator = require('./navigator');
    window.Image = require('./Image');
    window.Audio = require('./Audio');
    window.FileReader = require('./FileReader');
    window.location = require('./location');
    window.FontFace = require('./FontFace');
    window.EventTarget = require('./EventTarget');
    window.Event = require('./Event');
    window.TouchEvent = require('./TouchEvent');

    window.addEventListener = function(eventName, listener, options) {
        window.canvas.addEventListener(eventName, listener, options);
    }

    window.removeEventListener = function(eventName, listener, options) {
        window.canvas.removeEventListener(eventName, listener, options);
    }

    window.dispatchEvent = function(event) {
        window.canvas.dispatchEvent(event);
    }

    window._isInjected = true;
}

if (!window._isInjected) {
    inject();
}
