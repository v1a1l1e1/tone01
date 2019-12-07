const {Tone, Synth} = require('tone')

export let s;
let freq = 220;
let type = "triangle8";
let modFreq = 0.2;

export function createBasicSynth(){
  s = new Synth({
	"oscillator" : {
		"type" : type,
    "frequency": freq,
		"modulationFrequency" : modFreq
	},
	"envelope" : {
		"attack" : 0.02,
		"decay" : 0.1,
		"sustain" : 0.2,
		"release" : 0.2,
	}
});//.toMaster();
return s;
}

export function setModFreq(synth, val){
  synth.oscillator.modulationFrequency = val;
}

export function setOscillatorType(synth, val){
  synth.oscillator.type=val;
}

export function setOscillatorFreq(synth,val){
  synth.oscillator.frequency.value=val
}

export function playNote(note,synth){
  synth.triggerAttackRelease(note, "8n")
}

export function setEnvelope(synth, atk,dec,sus,rel){
  synth.envelope.attack=atk;
  synth.envelope.decay=dec;
  synth.envelope.sustain=sus;
  synth.envelope.release=rel;
}
