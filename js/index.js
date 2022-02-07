
const pricingValue = document.getElementById('pricingValueRange')

const progressbar = document.getElementById('progressBar')

const slide = document.getElementById('slider')

const input = document.querySelector('.circle')

pricingValue.addEventListener('mousemove', function(){
    progressbar.style.width = pricingValue.value + '%'

    const pricingValueN = Number(pricingValue.value)
    value(input)

})

input.addEventListener('click',function(){
    if(input.checked){
        discValue()
    } else{
        value()
    }
})

function value(input){

    const pricingValueN = Number(pricingValue.value)

    if(input.checked){
        if(pricingValueN <= 25){
            pageView('10k') 
            monthView(6)
         } else if(pricingValueN <= 50){
             pageView('50K')
             monthView(9)
         } else if(pricingValueN <= 75){
             pageView('100K')
             monthView(12)
         } else if(pricingValueN < 100){
             pageView('500k')
             monthView(18)
         } else if(pricingValueN == 100){
             pageView('1M')
             monthView(26.25)
         } 

         return

    } 
    else{
        if(pricingValueN <= 25){
            pageView('10k') 
            monthView(8)
         } else if(pricingValueN <= 50){
             pageView('50K')
             monthView(12)
         } else if(pricingValueN <= 75){
             pageView('100K')
             monthView(16)
         } else if(pricingValueN < 100){
             pageView('500k')
             monthView(24)
         } else if(pricingValueN == 100){
             pageView('1M')
             monthView(35)
         }
    }

}

function pageView(texto){
    const pageView = document.getElementById('pageview')

    pageView.innerHTML = texto + ' PAGEVIEW'

    return pageView
}

function monthView(value){
    const monthValue = document.getElementById('valueMonth')

    monthValue.innerHTML = '$' + value.toFixed(2) 

    return monthValue
}
