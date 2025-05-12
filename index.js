let botton = document.querySelector('#btnAgregar');
let ul = document.querySelector('ul')
let input = document.querySelector('input')

const agregar = (event) =>{
    event.preventDefault()

    //selecciono el input para tener el valor en ese momento
    let inputTask= document.querySelector('.form-control')

    //creamos los elementos y clases
    let li = document.createElement('li')
    li.classList.add('list-unstyled')
    let div = document.createElement('div')
    div.classList.add('form-control')
    let input = document.createElement('input')
    input.value=inputTask.value
    inputTask.value=''
    input.classList.add('w-75')
    let btn1 = document.createElement('button')
    btn1.classList.add('btn','btn-danger','mx-2','fw-bold')
    btn1.innerText= 'Eliminar'
    btn1.addEventListener('click', () => {
        li.remove()
    })
    let btn2 = document.createElement('button')
    btn2.classList.add('btn','btn-success', 'fw-bold')
    btn2.innerText= 'Completado'
    btn2.addEventListener('click', ()=>{
        input.classList.add('text-decoration-line-through')
    })

    //añadimos
    li.appendChild(div)
    div.appendChild(input)
    div.appendChild(btn1)
    div.appendChild(btn2)
    ul.appendChild(li)
}

botton.addEventListener('click',(event) => {
    if(input.value==''){
        alert('Debe ingresar una tarea')
    }else{
        agregar(event)
    }
})

input.addEventListener('keydown',(event)=>{
    if (event.key == 'Enter'){
        if(input.value==''){
            alert('Debe ingresar una tarea')
        }else{
            agregar(event)
        }
    }
})

