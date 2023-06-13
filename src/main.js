let flowerUri = document.currentScript.getAttribute('flowerUri');
let flower = document.getElementById('flower')

flower.src = flowerUri;
flower.style.position = 'absolute';
flower.style.bottom = '0px';
