import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import Speech from "speak-tts";
let VoicetestComponent = class VoicetestComponent {
    constructor() {
        this.synthesis = window.speechSynthesis;
        this.voicePlay = false;
        this.voicePause = true;
        this.voiceResume = true;
        this.voiceStop = true;
        //Testing Speak tts
        this.speech = new Speech();
    }
    ngOnInit() {
    }
    //Testing Speech Synthesis
    test() {
        var msg = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices[10]; // Note: some voices don't support altering params
        //msg.voiceURI = 'native';
        msg.volume = 1; // 0 to 1
        msg.rate = 1; // 0.1 to 10
        msg.pitch = 2; //0 to 2
        msg.text = 'Hello World';
        msg.lang = 'en-US';
        msg.onend = function (e) {
            //console.log('Finished in ' + event.elapsedTime + ' seconds.');
        };
        speechSynthesis.speak(msg);
    }
    test1() {
        var msg = new SpeechSynthesisUtterance('Hello World');
        var synthesis = window.speechSynthesis;
        var langRegex = /^en(-[a-z]{2})?$/i;
        var voices = synthesis.getVoices().filter(voice => langRegex.test(voice.lang));
        voices.forEach(function (voice) {
            console.log({
                name: voice.name,
                lang: voice.lang,
                uri: voice.voiceURI,
                local: voice.localService,
                default: voice.default
            });
        });
        speechSynthesis.speak(msg);
    }
    test2() {
        if ('speechSynthesis' in window) {
            var synthesis = window.speechSynthesis;
            //Get the first `en` language voice in the list
            var voice = synthesis.getVoices().filter(function (voice) {
                return voice.lang === 'en-UK';
            })[2];
            // Create an utterance object
            var utterance = new SpeechSynthesisUtterance('Hello World');
            // Set utterance properties
            utterance.lang = 'en-US';
            utterance.voice = voice;
            utterance.pitch = 1;
            utterance.rate = 1;
            utterance.volume = 0.8;
            // Speak the utterance
            synthesis.speak(utterance);
        }
        else {
            console.log('Text-to-speech not supported.');
        }
    }
    test3() {
        window.speechSynthesis.speak(new SpeechSynthesisUtterance('Oh why hello there.'));
    }
    start() {
        if ('speechSynthesis' in window) {
            // Create an utterance object
            var utterance = new SpeechSynthesisUtterance('Hello World');
            // Set utterance properties and default voice
            utterance.pitch = 1;
            utterance.rate = 1;
            utterance.volume = 1;
            // This overrides the text "Hello World" and is uttered instead
            utterance.text = "Hello World, My name is Glad. I'm a web developer from Nigeria. How are you today ?";
            var utterance1 = new SpeechSynthesisUtterance("Hello World");
            var utterance2 = new SpeechSynthesisUtterance("I'm a web developer from Nigeria.");
            // Speak or Pause the utterance
            this.synthesis.speak(utterance);
            // this.synthesis.speak(utterance1);
            // this.synthesis.speak(utterance2);
        }
    }
    pause() {
        window.speechSynthesis.pause();
    }
    stop() {
        window.speechSynthesis.cancel();
    }
    resume() {
        window.speechSynthesis.resume();
    }
    control(voiceEvent) {
        if (voiceEvent == "start") {
            this.voicePlay = true;
            this.voicePause = false;
            this.voiceResume = true;
            this.voiceStop = false;
            if ('speechSynthesis' in window) {
                // Create an utterance object
                var utterance = new SpeechSynthesisUtterance('Hello World');
                // Set utterance properties and default voice
                utterance.pitch = 1;
                utterance.rate = 1;
                utterance.volume = 1;
                // This overrides the text "Hello World" and is uttered instead
                utterance.text = "Hello World, My name is Glad. I'm a web developer from Nigeria. How are you today ?";
                var utterance1 = new SpeechSynthesisUtterance("Hello World");
                var utterance2 = new SpeechSynthesisUtterance("I'm a web developer from Nigeria.");
                // Speak or Pause the utterance
                this.synthesis.speak(utterance);
                // this.synthesis.speak(utterance1);
                // this.synthesis.speak(utterance2);
            }
        }
        else if (voiceEvent == "pause") {
            this.voicePlay = true;
            this.voicePause = true;
            this.voiceResume = false;
            this.voiceStop = true;
            window.speechSynthesis.pause();
        }
        else if (voiceEvent == "resume") {
            this.voicePlay = true;
            this.voicePause = false;
            this.voiceResume = true;
            this.voiceStop = false;
            window.speechSynthesis.resume();
        }
        else if (voiceEvent == "stop") {
            this.voicePlay = false;
            this.voicePause = true;
            this.voiceResume = true;
            this.voiceStop = true;
            window.speechSynthesis.cancel();
        }
    }
    startTTS() {
        this.speech.init().then((data) => {
            // The "data" object contains the list of available voices and the voice synthesis params
            console.log("Speech is ready, voices are available", data);
        }).catch(e => {
            console.error("An error occured while initializing : ", e);
        });
        this.speech.speak({
            text: 'Hello, how are you today ?',
        }).then(() => {
            console.log("Success !");
        }).catch(e => {
            console.error("An error occurred :", e);
        });
    }
    pauseTTS() {
        this.speech.pause();
    }
    resumeTTS() {
        this.speech.resume();
    }
    stopTTS() {
        this.speech.cancel();
    }
};
VoicetestComponent = tslib_1.__decorate([
    Component({
        selector: 'app-voicetest',
        templateUrl: './voicetest.component.html',
        styleUrls: ['./voicetest.component.css']
    })
], VoicetestComponent);
export { VoicetestComponent };
//# sourceMappingURL=voicetest.component.js.map