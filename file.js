const input = document.getElementById('input')
const buttons = document.querySelectorAll('.btn')
Array.from(buttons).forEach(element=>{
    element.addEventListener('click',(e)=>{
        if(e.target.innerText === '='){
            input.value = eval(input.value)
        }else if(e.target.innerText === 'C'){
            input.value = ''
        }
        else{
            input.value += e.target.innerText
        }
    })
})
