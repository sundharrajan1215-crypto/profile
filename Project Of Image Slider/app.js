const Containe=document.querySelector('.container')
const btns=document.querySelectorAll('.btn')
const imgList=["1","2","3","4","5","6"]
let index=0;
btns.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.classList.contains('.btn-left')){
            index--;
            if(index<0)
            {
                index=imgList.length-1;
            }
            Containe.style.background =  `url("image\ ${imgList[index]}.jpeg") center/cover fixed no-repeat`
        }
        else{
            index++;
            if(index===imgList.length)
            {
                index=0;
            }
            Containe.style.background =  `url("image\ ${imgList[index]}.jpeg") center/cover fixed no-repeat`
        }
        })
    })


