const form = document.querySelector('#form')

form.addEventListener("submit", () => {
    const date = document.querySelector('#date').value
    const month = document.querySelector('#month').value
    const year = document.querySelector('#year').value

    checkValidity()
})

function checkValidity(){
    if (date.value < 0 || date.value > 31){
        alert("false date")
    } else if (month.value < 0 || month.value > 12){
        alert("false  month")
    } else {
        CheckGender()
        console.log(getDayOfBirth())
    }
}


function CheckGender(){
     const male = document.querySelector('#male')
     const female = document.querySelector('#female')

     if(male.checked == true){
        alert(maleNameGenerator(getDayOfBirth))
     } else if (female.checked == true) {
        alert(femaleNameGenerator(getDayOfBirth))
     }
}

function getDayOfBirth(){
    let CC = parseInt(year.value.toString().split("").slice(0, 2).join(""))
    let YY = parseInt(year.value.toString().split("").slice(2).join(""))
    let MM = parseInt(month.value)
    let DD = parseInt(date.value)

    return Math.trunc(
        (((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7)
}

function maleNameGenerator(getDayOfBirth){
    switch(getDayOfBirth()){
        case 0: 
            return 'Your Akan name is Kwame'
        case 1:
            return 'Your Akan name is Kwasi'
        case 2:
            return 'Your Akan name is Kwadwo'
        case 3:
            return 'Your Akan name is Kwabena'
        case 4:
            return 'Your Akan name is Kwaku'
        case 5:
            return 'Your Akan name is Yaw'
        case 6:
            return 'Your Akan name is Kofi'
    }
}


function femaleNameGenerator(getDayOfBirth){
    switch(getDayOfBirth()){
        case 0: 
            return 'Your Akan name is Ama'
        break
        case 1:
            return 'Your Akan name is Akosua'
        case 2:
            return 'Your Akan name is Adwoa'
        case 3:
            return 'Your Akan name is Abenaa'
        case 4:
            return 'Your Akan name is Akua'
        case 5:
            return 'Your Akan name is Yaa'
        case 6:
            return 'Your Akan name is Afua'
    }
}