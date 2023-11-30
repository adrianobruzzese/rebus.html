// Soluzione del primo indizio
function checkWord1(input, resultElement) {
  if (input.value.toLowerCase() === 'put'.toLowerCase()) {
    resultElement.textContent = 'Corretto';
  } else {
    resultElement.textContent = 'Sbagliato!';
  }
}

// Soluzione del secondo indizio
function checkWord2(input, resultElement) {
  if (input.value.toLowerCase() === 'tana'.toLowerCase()) {
    resultElement.textContent = 'Corretto';
  } else {
    resultElement.textContent = 'Sbagliato!';
  }
}

// Soluzione del terzo indizio
function checkWord3(input, resultElement) {
  if (input.value.toLowerCase() === 'lama'.toLowerCase()) {
    resultElement.textContent = 'Corretto';
  } else {
    resultElement.textContent = 'Sbagliato!';
  }
}

// Soluzione del quarto indizio
function checkWord4(input, resultElement) {
  if (input.value.toLowerCase() === 'donna'.toLowerCase()) {
    resultElement.textContent = 'Corretto';
  } else {
    resultElement.textContent = 'Sbagliato!';
  }
}

// Modifica DOM per la prima immagine
const imageContainer1 = document.createElement('div');
imageContainer1.className = 'image-container';

const image1 = document.createElement('img');
image1.src = 'assets/img/put1.jpg'; // Replace with the actual path or URL for the first image
image1.alt = 'Indizio 1';
image1.width = 200;
image1.height = 200;
imageContainer1.appendChild(image1);

// Modifica DOM per creazione form
const form1 = document.createElement('form');

const input1 = document.createElement('input');
input1.type = 'text';
input1.placeholder = 'Inserisci la prima parola';

const result1 = document.createElement('div');

// Verifica dell'immagine, dovrebbe funzionare
input1.addEventListener('input', function (event) {
  checkWord1(input1, result1);
});

form1.appendChild(input1);
form1.appendChild(result1);

// Evita il reload all'immissione del form
form1.addEventListener('submit', function (event) {
  event.preventDefault();
});

// Unisci form e container immagine?
imageContainer1.appendChild(form1);
document.body.appendChild(imageContainer1);

// Copia dello stesso codice per tre volte per le altre tre immagini, come faccio a ciclarlo?
// Immagine 2
const imageContainer2 = document.createElement('div');
imageContainer2.className = 'image-container';
const image2 = document.createElement('img');
image2.src = 'assets/img/tana.jpg';
image2.alt = 'Indizio 2';
image2.width = 200;
image2.height = 200;
imageContainer2.appendChild(image2);

const form2 = document.createElement('form');
const input2 = document.createElement('input');
input2.type = 'text';
input2.placeholder = 'Inserisci la seconda parola';
const result2 = document.createElement('div');
input2.addEventListener('input', function (event) {
  checkWord2(input2, result2);
});
form2.appendChild(input2);
form2.appendChild(result2);
form2.addEventListener('submit', function (event) {
  event.preventDefault();
});
imageContainer2.appendChild(form2);
document.body.appendChild(imageContainer2);

// Immagine 3
const imageContainer3 = document.createElement('div');
imageContainer3.className = 'image-container';
const image3 = document.createElement('img');
image3.src = 'assets/img/lama.jpg';
image3.alt = 'Image 3';
image3.width = 200;
image3.height = 200;
imageContainer3.appendChild(image3);

const form3 = document.createElement('form');
const input3 = document.createElement('input');
input3.type = 'text';
input3.placeholder = 'Inserisci la terza parola';
const result3 = document.createElement('div');
input3.addEventListener('input', function (event) {
  checkWord3(input3, result3);
});
form3.appendChild(input3);
form3.appendChild(result3);
form3.addEventListener('submit', function (event) {
  event.preventDefault();
});
imageContainer3.appendChild(form3);
document.body.appendChild(imageContainer3);

// Immagine 4
const imageContainer4 = document.createElement('div');
imageContainer4.className = 'image-container';
const image4 = document.createElement('img');
image4.src = 'assets/img/donna.jpg';
image4.alt = 'Image 4';
image4.width = 200;
image4.height = 200;
imageContainer4.appendChild(image4);

const form4 = document.createElement('form');
const input4 = document.createElement('input');
input4.type = 'text';
input4.placeholder = 'Inserisci la quarta parola';
const result4 = document.createElement('div');
input4.addEventListener('input', function (event) {
  checkWord4(input4, result4);
});
form4.appendChild(input4);
form4.appendChild(result4);
form4.addEventListener('submit', function (event) {
  event.preventDefault();
});
imageContainer4.appendChild(form4);
document.body.appendChild(imageContainer4);
