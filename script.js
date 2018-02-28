document.addEventListener('DOMContentLoaded', function () {
  var elements = [
    { name: 'Hydrogen', number: 1, symbol: 'H' },
    { name: 'Mercury', number: 80, symbol: 'Hg' },
    { name: 'Lead', number: 82, symbol: 'Pb' },
    { name: 'Bismuth', number: 83, symbol: 'Bi' },
    { name: 'Neon', number: 10, symbol: 'Ne' }
  ]

  let el = document.createElement('p');
  //el.innerHTML = "hi mom, I love " + elements[1].name;
  el.innerHTML = `hi mom, I love ${elements[1].name}`;
  document.body.appendChild(el)
})
