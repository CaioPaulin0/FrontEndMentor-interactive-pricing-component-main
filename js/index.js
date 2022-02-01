const pricingValue = document.getElementById('pricingValueRange')

const progressbar = document.getElementById('progressBar')

const slide = document.getElementById('slider')

pricingValue.addEventListener('mousemove', function(){

    progressbar.style.width = pricingValue.value + '%'

    const pricingValueN = Number(pricingValue.value)

    console.log(pricingValue.value)
    if(pricingValueN <= 25){
       pageView('10k') 
       monthView('$8.00')
    } else if(pricingValueN <= 50){
        pageView('50K')
        monthView('$12.00')
    } else if(pricingValueN <= 75){
        pageView('100K')
        monthView('$16.00')
    } else if(pricingValueN < 100){
        pageView('500k')
        monthView('$24.00')
    } else if(pricingValueN == 100){
        pageView('1M')
        monthView('$35.00')
    }
})

function pageView(texto){
    const pageView = document.getElementById('pageview')

    pageView.innerHTML = texto + ' PAGEVIEW'

    return pageView
}

function monthView(value){
    const monthValue = document.getElementById('valueMonth')

    monthValue.innerHTML = value 

    return monthValue
}

const option = document.querySelector('.monthlyAct')
const circle = document.querySelector('.circle')

option.addEventListener('click', function(){
    option.classList.toggle("mActive")
    circle.classList.toggle("active")
})