import {createBasicSynth, playNote, setModFreq,setOscillatorType,setOscillatorFreq} from './modules/synth.js'
import {notes_array, octaves_array} from './modules/elements.js'

notes_array.forEach(bindToNote);
octaves_array.forEach(bindToOct);

let my_synth = createBasicSynth();
my_synth = my_synth.toMaster();


let oct=2;
let base_note = "C1";
//document.querySelector('#play').addEventListener('click', () => playNote(base_note, my_synth));
document.querySelector('#type_sq').addEventListener('click', () => {
  setOscillatorType(my_synth, "square");
  document.getElementById("info_osc").innerHTML="Waveform: square";
});
document.querySelector('#type_tri').addEventListener('click', () => {
  setOscillatorType(my_synth, "triangle8");
  document.getElementById("info_osc").innerHTML="Waveform: triangle";
});

document.querySelector('#type_sin').addEventListener('click', () => {
  setOscillatorType(my_synth, "sine2");
  document.getElementById("info_osc").innerHTML="Waveform: sine";
});

//document.querySelector('#freq').addEventListener('click', () => playNote(440, my_synth))
function bindToNote(item,index){
document.getElementById(item).addEventListener('click', () => {
    playNote(item+oct, my_synth);
    document.getElementById("info_n").innerHTML="Note: "+item;
  });
}

function bindToOct(item,index){
document.getElementById(item).addEventListener('click', () => {
    oct = item;
    document.getElementById("info_o").innerHTML="Octave: "+item;
  });
}
