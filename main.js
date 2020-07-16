'use strict'; /* 초기설정 */

const header = document.querySelector('#header');
const headerHeight = header.getBoundingClientRect().height;
window.addEventListener('scroll', () => {
	// console.log(window.scrollY);
	// console.log(`headerHeight: ${headerHeight}`);
    /* 백틱(')을 이용하여 원하는 값만 확인 가능 */
    if(window.scrollY > headerHeight){
        header.classList.add('header--dark');
    } else{
        header.classList.remove('header--dark');
    }
});

// scrollIntoview()
function scrollIntoViews(selector){ //selector만 일치하면 이동할 수 있게 함수를 지정
    const scrollTo = document.querySelector(selector); //selector의 요소를 찾는다.
    scrollTo.scrollIntoView({behavior: 'smooth'}); // 'smooth'하게 이동
}

//Handle scrolling whe tapping on the header menu
// 1. 메뉴를 누른다
// 2. 스크롤값이 바뀐다

const headerMenu = document.querySelector('.header__menu');
headerMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link==null){
        return;
    }
    scrollIntoViews(link);
});

//contact me 를 눌렀을 떄 contact section으로 이동
//1. contact me 버튼을 누른다
//2. contact section으로 스크롤 위치 변경

const homecontactBtn = document.querySelector('.home__contact');
homecontactBtn.addEventListener('click', ()=>{
    scrollIntoViews('#contact');
});

//scrolling이 될수록 home이 점점 투명해짐

const homefadeout = docoument.querySelector();
const homeHeight = home.getBoundingClientRect().height;
window.addEventListener('scroll', () => {
    
});