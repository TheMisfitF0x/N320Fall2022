activeInstrument = 0;

class Instrument {
    constructor(loudness, family, playVerb, over) {
        this.loudness = loudness;
        this.family = family;
        this.playVerb = playVerb;
        this.synth = new Tone.Synth().toDestination();
        this.over = playNext;
    }

    playInstrument(duration) {
        this.synth.triggerAttackRelease("C4", duration);
        console.log(this.family + " " + this.playVerb + " at " + this.loudness + " loudness");
        setTimeout(this.over, 1000);
    }
}

class Woodwind extends Instrument {
    constructor(loudness) {
        super(loudness, "Woodwind", "play");
    }
}
class Percussion extends Instrument {
    constructor(loudness) {
        super(loudness, "Percussion", "bam");
    }
}
class String extends Instrument {
    constructor(loudness) {
        super(loudness, "String", "twang");
    }
}

function playNext() {
    instruments[activeInstrument].playInstrument(.5);
    activeInstrument++;
}

recorder = new Woodwind(10);
drum = new Percussion(20);
guitar = new String(30);
const instruments = [recorder, drum, guitar];
console.log(instruments);
