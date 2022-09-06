const continentsSelect = document.getElementById('name-select')
const countryList = document.getElementById('visitas-list')

queryFetch( `
query{
  duenos{
    nombre
    id
  }
}
        `)
.then(data =>{
    data.data.duenos.forEach(d => {
       const option = document.createElement('option')
       option.value = d.id
       option.innerText = d.nombre
       continentsSelect.append(option) 
       console.log(data);
   }
   
   );
 }) 

//PRIMER QUERY 
/* query{
    continents{
      name
      code 
    }
  } */

 /*  
  Segundo query
    query getCountries($code: ID!){
    continent(code: $code) {
    name
    countries{
      name
    }
  }
}
 */
continentsSelect.addEventListener('change', async e =>{
    const Codigo = e.target.value
    const duenosmascotas = await getDuenos(Codigo)
    console.log(duenosmascotas)
    
    countryList.innerHTML = ''
    duenosmascotas.forEach(e =>{
        const element = document.createElement('div')
        element.innerText = "Dueño: " + e.nombre;
        countryList.append(element)

        e.mascota.forEach(b =>{
          const element = document.createElement('div')
          element.innerText = b.nombre;
          countryList.append(element)

          b.visita.forEach(d =>{
            const element = document.createElement('div')
            element.innerText =   "Comentario: " + d.comentario;
            countryList.append(element)
          })
        })
    })
    
})

function getDuenos(Codigo) {
    return queryFetch(`
    query getDuenos($code: ID!){
      duenos2(id:$code){
      nombre
        mascota{
          nombre
          visita{
            comentario
          }  
        }
      }
      }
    
    `, { code: Codigo }).then(data => {
      return data.data.duenos2
    })
  } 


 function queryFetch(query, variables){
    return fetch('http://localhost:3000/',{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            query:query,
            variables: variables
        })
    }).then(res => res.json())
 }


 /* complete 
 fetch('https://countries.trevorblades.com',{
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        query: `
query{
  continents{
    name
    code 
  }
}
        `
    })

}).then(res => res.json())
.then(data =>{
   data.data.continents.forEach(continent => {
       const option = document.createElement('option')
       option.value = continent.code
       option.innerText = continent.name
       continentsSelect.append(option)
   });
}) */