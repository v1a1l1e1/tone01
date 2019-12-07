import {notes_array, octaves_array} from './modules/elements.js'

notes_array.forEach(createNoteArray);
function createNoteArray(item, index) {
  document.getElementById("notes").innerHTML += "<td><button class=\"tab-button\" id = "+item +" value=" + item +">"+item+"</td>";
}
octaves_array.forEach(createOctArray);
function createOctArray(item, index) {
  document.getElementById("oct").innerHTML += "<td><button class=\"tab-button\" id = "+item +" value=" + item +">"+item+"</td>";
}
