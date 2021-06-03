console.log('connected')

const tabs=document.querySelectorAll('.operations_tab')
const tabscontainer=document.querySelector('.feature-toggle')
const tabsimg=document.querySelectorAll('.operation-img')
const tabscontent=document.querySelectorAll('.operation-content')



tabscontainer.addEventListener('click',(e)=>{
    const btn=e.target.closest('.operations_tab')
    console.log(btn)
    if(btn){
        tabs.forEach((val,i,arr)=>{
            val.classList.remove('tab-active')
           
        })

        tabscontent.forEach((val)=>{

            val.classList.remove('active')
        })

        tabsimg.forEach((val)=>{
            val.classList.remove('active')
        })

        btn.classList.add('tab-active')
        console.log(btn)
        console.log(btn.dataset.tab)

        document.querySelector(`.feature-img-tab-${btn.dataset.tab}`).classList.add('active')

        document.querySelector(`.feature-content-tab-${btn.dataset.tab}`).classList.add('active')
    }
})