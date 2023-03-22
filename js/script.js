document.querySelector('#formulario').addEventListener('submit', (e) => {
    e.preventDefault()
  })
  
  let nombre = document.querySelector('#nombre')
  let precio = document.querySelector('#precio')
  
  function validarForm () {
    let alfaNum = /[^a-z0-9]/gi 
    let precioCifra = /^\d+(\.\d+)?\s?€$/
  
    if (alfaNum.test(nombre.value.trim())) {
      alert('Solo caracteres alfanumericos')
      return false
    }
    
    if (!precioCifra.test(precio.value.trim())) {
      alert('El formato de precio debe ser 13€ ó 13.5€')
      return false
    } 
    
    return true
  }
  

document.querySelector('#cargar').addEventListener('click', () => {
  if(validarForm()){
    document.querySelector('#tbody').innerHTML += `<tr><td>${nombre.value}</td><td>${precio.value}</td></tr>`
  }
})