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
    headerMenu.classList.remove('open');
    scrollIntoViews(link);
});

// header toggle botton을 누르면 headermenu가 내려온다
const headerToggleBotton = document.querySelector('.header__toggle-button');
headerToggleBotton.addEventListener('click', () => {
    headerMenu.classList.toggle('open');
});

//contact me 를 눌렀을 떄 contact section으로 이동
//1. contact me 버튼을 누른다
//2. contact section으로 스크롤 위치 변경

const homecontactBtn = document.querySelector('.home__contact');
homecontactBtn.addEventListener('click', ()=>{
    scrollIntoViews('#contact');
});

//scrolling이 될수록 home이 점점 투명해짐

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
window.addEventListener('scroll', () => {
    // console.log(`homeHeight: ${homeHeight}`);
    // console.log(1 - window.scrollY/homeHeight);
    home.style.opacity = 1 - window.scrollY/homeHeight;
    
});

// Arrow up button
// scrolling 되어 내려오면 arrow up button을 나타나게 하여
// 어디서든 이 버튼을 누르면 가장 위로 올라감
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight/2){
        arrowUp.classList.add('visible');
    }else {
        arrowUp.classList.remove('visible');
    }
});

arrowUp.addEventListener('click', () => {
    scrollIntoViews('#home');
});

//My work category를 누르면 해당 카테고리의 item만 보이게
//html data를 이용
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.work__project');
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter; // || e.target.parentNode.dataset.filter; 만약 filter가 없다면 부모노드의 dataset filter값을 받아 오겟다.work__projects
    if(filter == null){
        return; //filter가 null이라면 아무 행동도 취하지 않겟다.
    }
    //클릭한 버튼이 표시가 되게
    const active = document.querySelector('.category__button.selected');
    active.classList.remove('selected');
    e.target.classList.add('selected');

    projectContainer.classList.add('anim-out');
    setTimeout(() => {
        projects.forEach((work__project) => {
            // console.log(work__project.dataset.type);
            if(filter ==='*' || filter === work__project.dataset.type){
                work__project.classList.remove('invisible');
            }else{
                work__project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    }, 300)
});






// scrollIntoview()
function scrollIntoViews(selector){ //selector만 일치하면 이동할 수 있게 함수를 지정
    const scrollTo = document.querySelector(selector); //selector의 요소를 찾는다.
    scrollTo.scrollIntoView({behavior: 'smooth'}); // 'smooth'하게 이동
}