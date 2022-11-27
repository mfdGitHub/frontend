document.addEventListener("DOMContentLoaded", init)
const URL_API = 'http://localhost:3000/api/'

function init(){
  search()
}

async function search(){
    var url = URL_API + 'customers'
    var response = await fetch(url, {
      "method": 'GET',
      "headers": {
        "Content-Type": 'application/json'
      }
    })
    var resultado = await response.json();

    console.log(resultado)

    var row = `
                <tr>
                    <td>Pepe</td>
                    <td>Angelini</td>
                    <td>pep.angelini@gmail.com</td>
                    <td>4534534</td>
                    <td>
                        <a href="#" class="myButton">Editar</a>
                        <a href="#" class="btnDelete">Elimiar</a>
                    </td>
                </tr>    
 
              `
    
    document.querySelector('#customers > tbody').outerHTML = row
}

