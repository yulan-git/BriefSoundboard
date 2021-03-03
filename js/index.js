import {_addClass, _removeClass} from '/js/functions.js'; 

(function pressPlayAudio() {
    let idFileAudio;
    let idButton;
    
    document.addEventListener('keydown', playAudio);


    function playAudio(e) {
        let key = e.key;
        let touches = ["a", "z", "e", "r", "t", "y", "u", "i", "o"];
        if (touches.includes(key)) {
            idFileAudio = document.getElementById(key);
            idFileAudio.load();
            idFileAudio.play();

            idButton = idFileAudio.previousElementSibling;
            _addClass(idButton, "sound-active");
            
            idFileAudio.addEventListener('ended', () =>_removeClass(idButton, "sound-active"));
        }
    }

})();  
