const body = document.querySelector('body')
const clickButton = document.getElementById('click')
const hoverButton = document.getElementById('hover')
const colorText = document.getElementById('colorText')
const input = document.querySelector('input')
const copy = document.getElementById("clipBoard")

clickButton.style.outline = 'none'




const colorChanged = ()=>{

    const color = ['A','B','C','D','E','F',0,1,2,3,4,5,6,7,8,9]
    let result = '#'
    let i = 0
    for(let i= 0; i<6;i++){
        const randomText = Math.floor(Math.random() * color.length)
        result += color[randomText]
        
    }
  return result
}

window.addEventListener('load',()=>{
    body.style.backgroundColor = colorChanged()
})


clickButton.addEventListener('click',()=>{

  const newColor = body.style.backgroundColor = colorChanged()
    colorText.innerText =  newColor
    input.value = newColor
})


hoverButton.addEventListener('mouseover',()=>{

    const newColor = body.style.backgroundColor = colorChanged()
    colorText.innerText =  newColor
    input.value = newColor
})


input.addEventListener('input',()=>{

   let selectColor = input.value;
   colorText.innerText = input.value
   body.style.backgroundColor = selectColor
   
})


document.addEventListener('keydown',()=>{

    if(event.key ==='Enter'){

body.style.backgroundColor = colorChanged()
colorText.innerText =  newColor
input.value = newColor
   
    }

})

copy.addEventListener('click',()=>{

   navigator.clipboard.writeText(colorText.innerText)

   navigator.clipboard.readText(colorText.innerText)
})