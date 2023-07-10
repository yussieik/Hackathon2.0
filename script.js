//Wrapper
const Wrapper = document.querySelector('.wrapper')
//Start-container's ellements:
const startContainer = document.querySelector('.start-container')
const startTitle = document.querySelector('.start-container__title')
const startButton = document.querySelector('.start-container__start')
//Main-container's ellements:
const MainContainer = document.querySelector('.main-container')
const MainCircle = document.querySelector('.main-container__map')
const Option1 = document.querySelector('.first')
const Option2 = document.querySelector('.second')
const Option3 = document.querySelector('.third')
const Options = document.querySelectorAll('.main-container__options')
const Shadow = document.querySelector('.main-container__shadow')
//Catalog-Container's ellemens:
const CatalogContainer = document.querySelector('.catalog-container')
// Exercise-Container's ellements:
const ExerciseContainer = document.querySelector('.exercise-container')
const north = document.querySelector('.exercise-container__north')
const zodiac = document.querySelector('.exercise-container__zodiac')
const south = document.querySelector('.exercise-container__south')
const zodiac_text = document.querySelector('.exercise-container__zodiac-text')

const textExerciseButtons = document.querySelectorAll('.exerciseButton')
// Quiz-Container's ellements:
const QuizContainer = document.querySelector('.quiz-container')
// Back-Button:
const back = document.querySelectorAll('.back-button')
const allPages = [CatalogContainer,ExerciseContainer,QuizContainer]

startButton.addEventListener('click', ()=>{
    startTitle.style.opacity = 0
    startButton.style.transition = '.5s'
    startButton.style.opacity = 0
    setTimeout(()=>{
        startTitle.style.display = 'none'
        startButton.style.display = 'none'
        startContainer.style.animation = 'zoomTopStart 1s ease-in forwards'
        setTimeout(()=>startContainer.style.display = 'none',1000)
    },1000)
    setTimeout(()=>{
        Wrapper.style.animation = "WrapperBG 1s ease-in forwards,MainContainerMoving 60s ease-in-out infinite"
        MainContainer.style.animation = 'zoomBottomMain 1s ease-in forwards,MainBG 1.5s 1s ease-in forwards'
    },2000)
    
})
Option1.addEventListener('click', ()=>{
    MainCircle.style.transition = '1.5s'
    Options.forEach(element => {
        element.style.transition = '1.5s'
    });
    MainCircle.style.transform = 'rotateZ(45deg)'
    Option1.style.transform = 'rotateZ(-45deg)'
    Option2.style.transform = 'rotateZ(-45deg) translate(-35%, -100%)'
    Option3.style.transform = 'rotateZ(-45deg) translate(-100%, 35%)'
  

    setTimeout(()=>{
        MainContainer.style.animation = 'MainBGReverse 1s linear forwards, zoomTopMain 1s ease-in forwards'
        CatalogContainer.style.display = 'flex'
        CatalogContainer.style.animation = 'zoomBottomMain 1s ease-in forwards'
    },2000)
    setTimeout(()=>{
        MainContainer.style.display = 'none'
    },3000)
})
Option2.addEventListener('click', ()=>{
    MainCircle.style.transition = '1.5s'
    Options.forEach(element => {
        element.style.transition = '1.5s'
    });
    MainCircle.style.transform = 'rotateZ(180deg)'
    Option1.style.transform = 'rotateZ(180deg) translate(25%, -30%)'
    Option2.style.transform = 'rotateZ(180deg) translate(50%, 35%)'
    Option3.style.transform = 'rotateZ(180deg) translate(90%, -20%)'

    setTimeout(()=>{
        MainContainer.style.animation = 'MainBGReverse 1s linear forwards, zoomTopMain 1s ease-in forwards'
        QuizContainer.style.display = 'flex'
        QuizContainer.style.animation = 'zoomBottomMain 1s ease-in forwards'
    },2000)
    setTimeout(()=>{
        MainContainer.style.display = 'none'
    },3000)
})
Option3.addEventListener('click', ()=>{
    MainCircle.style.transition = '1.5s'
    Options.forEach(element => {
        element.style.transition = '1.5s'
    });
    MainCircle.style.transform = 'rotateZ(-45deg)'
    Option1.style.transform = 'rotateZ(45deg) translate(35%, 100%)'
    Option2.style.transform = 'rotateZ(45deg) translate(-25%, -50%)'
    Option3.style.transform = 'rotateZ(45deg) translate(-75%, 75%)'

    setTimeout(()=>{
        MainContainer.style.animation = 'MainBGReverse 1s linear forwards, zoomTopMain 1s ease-in forwards'
        ExerciseContainer.style.display = 'flex'
        ExerciseContainer.style.animation = 'zoomBottomMain 1s ease-in forwards'
    },2000)
    setTimeout(()=>{
        MainContainer.style.display = 'none'
    },3000)
})

//Exercise Section:
zodiac_text.addEventListener('mouseover', ()=>{
    zodiac_text.style.animation = 'ZodiacShirma 0.5s linear forwards'
})
zodiac_text.addEventListener('mouseout', ()=>{
    zodiac_text.style.animation = 'ZodiacShirmaReverse 0.5s linear forwards'
})
textExerciseButtons.forEach((element,index) => {
    element.addEventListener('click',async ()=>{
        index == 0? await Study(North_constellations) : index == 1? await Study(South_constellations): await Study(Zodiac_constellations)

    })
    
});


back.forEach((element, index) => {
    element.addEventListener('click', ()=>{            
            MainContainer.style.animation = 'zoomBottom2Main 1s ease-in forwards,MainBG 1s ease-in forwards'
            allPages[index].style.animation = 'zoomTopContainer 1s ease-in forwards'
            setTimeout(() => {
                MainContainer.style.display = 'flex'
                allPages[index].style.display = 'none'
            }, 1000);
    })
});