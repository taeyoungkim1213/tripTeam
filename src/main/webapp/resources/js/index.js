

$(document).ready(function() {

    let hd_top_px = $('.header').height() + 20;
    
    $(window).scroll(function() {
        // 1. 스크롤 내리면 Q&A 텍스트 오른쪽에서 나오기
        // console.log(hd_top_px , $(window).scrollTop(), (hd_top_px > $(window).scrollTop()))
        if (hd_top_px <= $(window).scrollTop()) {
            $('.mic').stop().animate({
                right: "-5px"
            }, 500)
            $('.qna_wrap p').stop().animate({
                opacity : 1
            }, 500)
        }
        else if (hd_top_px > $(window).scrollTop()) {
            $('.mic').stop().animate({
                right: "-200px"
            }, 500)

            $('.qna_wrap p').stop().animate({
                opacity : 0
            }, 500)
        }
    })
})

/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* 배너 (동영상 재생 끝나면) 오른쪽에서 들어오기 */ 

// let next_banner = document.getElementsByClassName('next_banner')[0];
// let video_banner = document.getElementsByClassName('banner')[0];
// let timer = 5000;
//
// time_out = setTimeout(() => {
//     video_banner.style.opacity = '0.5';
//     next_banner.style.transform = 'translate(0%, -100%)';
//     next_banner.style.opacity = '1';
//     next_banner.style.transition = 'all 2s';
//
// }, timer)
//
// setTimeout(()=>{
//     next_banner.style.transition = 'none';
// }, timer+2100)

/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* 오르리 오르리랏다 텍스트 나타나기 */

// let list1 = "오르리 오르리랏다";
// let list2 = "청산에 오르리랏다";
//
// txt_fade(list1, list2);
//
// // 요소 생성 및 클래스 추가 함수
// function text_load(list, num) {
//     let list_arr = list.split("");
//
//     for (let i = 0; i < 9 ; i++) {
//         setTimeout(() => {
//             $(`.txt${num}`).append(`<h1 class="mt_txt">${list_arr[i % 9]}</h1>`);
//             $(`.txt${num} h1:nth-of-type(${(i % 9) + 1})`).animate({
//                 opacity: 1
//             }, 1000)
//         }, 500*i)
//     }
// }
//
// // 글자 나타났다가 사라지게 하는 함수
// function txt_fade(list1, list2) {
//     setInterval(()=>{
//         setTimeout(() => {
//             text_load(list1, 1);
//         }, 500)
//
//         setTimeout(() => {
//             text_load(list2, 2);
//         }, 6000)
//
//         setTimeout(() => {
//             $('.orri_txt_box').animate({
//                 opacity: 0
//             }, 1000)
//         }, 11000)
//
//         setTimeout(() => {
//
//             $('.mt_txt').remove()
//             $('.orri_txt_box').css({
//                 opacity: 1
//             })
//         }, 12100)
//     }, 12200)
// }


/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* 멧돼지 물음표 움직이기 */

// setInterval(() => {
//     $('.animal_box img:nth-of-type(5)').animate({
//         top: '18%'
//     }, 200)
//     setTimeout(() => {
//         $('.animal_box img:nth-of-type(5)').animate({
//             top: '20%'
//         }, 200)
//     })
// }, 4000)



/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* 메뉴 hover 하면 아래 pan 나오기 */

/* '.nav_ul li' 에 마우스 올려서 .pan_wrap 을 아래로 펼쳐도 .pan_wrap에 마우스가 올라가면 hover가 풀려버린다. 따라서 .pan_wrap 한테도 똑같이 hover를 적용한다. */
$('.nav_ul li, .pan_wrap').hover(function() {
    // 판 펼치기 height 300px
    $('.pan_wrap').addClass('pan_active')
}, function() {
    $('.pan_wrap').removeClass('pan_active')
})


/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* 나의 등산기록 hover 하면 일정 만들기 색 변하기 */

$('#p2').hover(function() {
    $('#p1').css({
        color: 'black',
        backgroundColor: 'transparent',
        boxShadow: 'none'
    })
}, function() {
    $('#p1').css({
        color: 'black',
        backgroundColor: '#E0F4FF',
        boxShadow: 'rgba(25, 25, 25, 0.5) 6px 6px 10px'
    })
})



/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* 햄버거 버튼 클릭하면 메뉴나오기 */

$('.ham_btn').click(function() {
    $('.ham_ul').toggleClass('left0')
})


/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* 메뉴 hover 하면 등산여행 텍스트 커지기 */

$('.info_left').mouseenter(function(){
    $('.info_left p').css({
        transform: 'scale(1.1)'
    })
})

$('.info_left').mouseleave(function(){
    $('.info_left p').css({
        transform: 'scale(1)'
    })
})


$('.info_mid a:nth-of-type(2)').mouseenter(function(){
    $('.bus img').css({
        transform: 'scale(1.5)'
    })
})

$('.info_mid a:nth-of-type(2)').mouseleave(function(){
    $('.bus img').css({
        transform: 'scale(1.4)'
    })
})


/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* 반응형 만들기 */

let window_width = $(window).width();

// if (window_width < 1200) {
//     $('.next_banner_img img').attr('src', './img/banner_small.png'); 
// }
// else {
//     $('.next_banner_img img').attr('src', './img/banner.png'); 
// }

console.log(window_width);







/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* 이미지, 설명글 등 자바스크립트로 넣기 */

// const ITEM_LIST = [
//         // monthly_mountain
//         [
//             {item_no: 1, src: '1.jpg', title: '설악산 공룡능선', medal: 'gold.png'},
//             {item_no: 2, src: '2.jpg', title: '지리산 반야봉', medal: 'silver.png'},
//             {item_no: 3, src: '3.jpg', title: '방장산', medal: 'bronze.png'},
//             {item_no: 4, src: '4.jpg', title: '속리산'},
//             {item_no: 5, src: '5.jpg', title: '두타산・청옥산'},
//             {item_no:6, src: '6.jpg', title: '금원산'},
//             {item_no:7, src: '7.jpg', title: '백운산'},
//             {item_no:8, src: '8.jpg', title: '연인산'},
//         ],
//
//         // total_info
//         [
//             {item_no: 1, src: 'user_1.png', user_name: 'penguin123', user_age: '20대', user_sex: '여성'},
//             {item_no: 2, src: 'user_2.png', user_name: 'penguin123',  user_age: '30대', user_sex: '여성'},
//             {item_no: 3, src: 'user_3.png', user_name: 'penguin123',  user_age: '30대', user_sex: '남성'},
//             {item_no: 4, src: 'user_4.png', user_name: 'penguin123',  user_age: '20대', user_sex: '여성'},
//             {item_no: 5, src: 'user_5.png', user_name: 'penguin123',  user_age: '20대', user_sex: '남성'},
//             {item_no: 6, src: 'user_6.png', user_name: 'penguin123',  user_age: '20대', user_sex: '남성'},
//             {item_no: 7, src: 'user_7.png', user_name: 'penguin123',  user_age: '30대', user_sex: '여성'},
//             {item_no: 8, src: 'user_8.png', user_name: 'penguin123',  user_age: '20대', user_sex: '남성'},
//         ],
//
//         // bus_box
//         [
//             {item_no: 1, src: '1.PNG', departure: '강북', destination: '설악산', bus_date: '2023.09.21', bus_hour: '1:30 AM', company: '오리투어'},
//             {item_no: 2, src: '2.PNG', departure: '노원',  destination: '지리산', bus_date: '2023.09.21', bus_hour: '1:30 AM',  company: '오리투어'},
//             {item_no: 3, src: '3.PNG', departure: '건대',  destination: '월악산', bus_date: '2023.09.21', bus_hour: '1:30 AM',  company: '오리투어'},
//             {item_no: 4, src: '4.PNG', departure: '안양',  destination: '치악산', bus_date: '2023.09.21', bus_hour: '1:30 AM',  company: '오리투어'},
//             {item_no: 5, src: '5.PNG', departure: '수원',  destination: '한라산', bus_date: '2023.09.21', bus_hour: '1:30 AM',  company: '오리투어'},
//             {item_no: 6, src: '6.PNG', departure: '대전',  destination: '북한산', bus_date: '2023.09.21', bus_hour: '1:30 AM',  company: '오리투어'},
//             {item_no: 7, src: '7.PNG', departure: '대구',  destination: '소백산', bus_date: '2023.09.21', bus_hour: '1:30 AM',  company: '오리투어'},
//             {item_no: 8, src: '8.PNG', departure: '강원',  destination: '지리산', bus_date: '2023.09.21', bus_hour: '1:30 AM',  company: '오리투어'},
//         ],
//
//         // donghang
//         [
//             {item_no: 1, icon_src: 'user_1.png', user_name: 'penguin123', user_age: '20대', user_sex: '여성', hiking_date: '2023.09.18', mt_pic_src: '1.jpg', title: '설악산 공룡능선', desc: '마등령 - 공룡능선 - 희운각 - 천불동 계곡'},
//             {item_no: 2, icon_src: 'user_2.png', user_name: 'penguin123',  user_age: '30대', user_sex: '여성', hiking_date: '2023.09.18', mt_pic_src: '2.jpg', title: '지리산 반야봉', desc: '노고단 고개 - 피아골 삼거리 - 노루목 - 반야봉'},
//             {item_no: 3, icon_src: 'user_3.png', user_name: 'penguin123',  user_age: '30대', user_sex: '남성', hiking_date: '2023.09.18', mt_pic_src: '3.jpg', title: '방장산', desc: '마등령 - 공룡능선 - 희운각 - 천불동계곡'},
//             {item_no: 4, icon_src: 'user_4.png', user_name: 'penguin123',  user_age: '20대', user_sex: '여성', hiking_date: '2023.09.18', mt_pic_src: '4.jpg', title: '속리산', desc: '마등령 - 공룡능선 - 희운각 - 천불동계곡'},
//             {item_no: 5, icon_src: 'user_5.png', user_name: 'penguin123',  user_age: '20대', user_sex: '남성', hiking_date: '2023.09.18', mt_pic_src: '5.jpg', title: '두타산・청옥산', desc: '마등령 - 공룡능선 - 희운각 - 천불동계곡'},
//             {item_no:6, icon_src: 'user_6.png', user_name: 'penguin123',  user_age: '20대', user_sex: '남성', hiking_date: '2023.09.18', mt_pic_src: '6.jpg', title: '금원산', desc: '마등령 - 공룡능선 - 희운각 - 천불동계곡'},
//             {item_no:7, icon_src: 'user_7.png', user_name: 'penguin123',  user_age: '30대', user_sex: '여성', hiking_date: '2023.09.18', mt_pic_src: '7.jpg', title: '백운산', desc: '마등령 - 공룡능선 - 희운각 - 천불동계곡'},
//             {item_no:8, icon_src: 'user_8.png', user_name: 'penguin123',  user_age: '20대', user_sex: '남성', hiking_date: '2023.09.18', mt_pic_src: '8.jpg', title: '연인산', desc: '마등령 - 공룡능선 - 희운각 - 천불동계곡'},
//         ],
// ]
//
// const contents_array = ['monthly_mountain', 'total_info', 'bus_box', 'donghang'];
// const img_addr = "img/theComma/items/";

// swiper 슬라이드 생성
// function load_monthly_mt() {
//
//     for (let i = 0; i < 8; i++) {
//         let mt_list;
//
//         if (i < 3) {
//             mt_list = ` <div class="swiper-slide swiper_slide_monthlyMt">
//                                 <a href="#">
//                                     <img src="./img/${contents_array[0]}/${ITEM_LIST[0][i].src}" alt="이 달의 추천 명산 슬라이드">
//                                     <img src="./img/${contents_array[0]}/${ITEM_LIST[0][i].medal}" alt="${i+1}등">
//                                     <p>${ITEM_LIST[0][i].title}</p>
//                                 </a>
//                             </div>`;
//         }
//         else {
//             mt_list = ` <div class="swiper-slide swiper_slide_monthlyMt">
//                             <a href="#">
//                                 <img src="./img/${contents_array[0]}/${ITEM_LIST[0][i].src}" alt="이 달의 추천 명산 슬라이드">
//                                 <p>${ITEM_LIST[0][i].title}</p>
//                             </a>
//                         </div>`;
//         }
//
//         $(`.${contents_array[0]} .swiper-wrapper-monthlyMt`).append(mt_list);
//     }
//     // swiper 자바스크립트 - 요소 먼저 로드한 뒤에 얘가 와야 스와이퍼가 제대로 먹더라...
//     new Swiper(".myMountainSwiper", {
//         slidesPerView: 1,
//         spaceBetween: 30,
//         freeMode: true,
//         pagination: {
//         el: ".swiper-pagination",
//         clickable: true
//         },
//         navigation: {
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev"
//         },
//         autoplay: {
//             delay: 3000,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true
//         },
//         loop : true,
//
//         breakpoints: {
//             600 : {
//                 slidesPerView: 3,
//                 spaceBetween: 30,
//             }
//         }
//     });
// }

// load_monthly_mt();




/* total_info 내용 불러오기 */

// function load_total_info() {
// /*     let info_left_list = ``;
//
//     let info_right_list =  `<div class="right_box">
//                                 <div class="mypage_left">
//                                     <img src="./img/${contents_array[1]}/right/${ITEM_LIST[1][0].src}" alt="">
//                                 </div>
//                                 <div class="mypage_right mr_0">
//                                     <img src="./img/${contents_array[1]}/right/${ITEM_LIST[1][1].src}" alt="">
//                                 </div>
//                             </div>
//                             <div class="friends">
//                                 <img src="./img/${contents_array[1]}/right/${ITEM_LIST[1][2].src}" alt="">
//                             </div>`; */
//
//     for (let i = 0; i < 8; i++) {
//         let info_slide_list = ` <div class="swiper-slide swiper_slide_friends">
//                                     <a href="#">
//                                         <img src="./img/total_info/right/user/${ITEM_LIST[1][i].src}" alt="이 달의 추천 명산 슬라이드">
//                                         <p>${ITEM_LIST[1][i].user_name}</p>
//                                         <p>${ITEM_LIST[1][i].user_sex} ・ ${ITEM_LIST[1][i].user_age}</p>
//                                     </a>
//                                 </div>`;
//
//         $(`.${contents_array[1]} .swiper_wrapper_friends`).append(info_slide_list);
//     }
//
//     new Swiper(".myFriendsSwiper", {
//         slidesPerView: 4,
//         spaceBetween: 10,
//         freeMode: true,
//         autoplay: {
//             delay: 0,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true
//         },
//         speed : 5000,
//         loop : true,
//     });
//
// }
//
// load_total_info();



/* 타요타요 등산버스 목록 만들기 / li 8개 생성 */

// function load_bus() {
//     for (let i = 0; i < 8; i++) {
//         let bus_li = `<li>
//                 <div class="bus_location">
//                     <p>${ITEM_LIST[2][i].departure}</p>
//                     <div>
//                         <img src="./img/bus_box/arrow.png" alt="">
//                     </div>
//                     <p>${ITEM_LIST[2][i].destination}</p>
//                 </div>
//                 <div class="bus_date">
//                     <div class="bus_date_icon">
//                         <img src="./img/bus_box/calendar.png" alt="">
//                     </div>
//                     <div class="bus_dep_date">
//                         <p>${ITEM_LIST[2][i].bus_date}</p>
//                     </div>
//                     <div class="bus_hour">
//                         <p>${ITEM_LIST[2][i].bus_hour}</p>
//                     </div>
//                 </div>
//                 <div class="mountain_pic">
//                     <a href="#">
//                         <img src="./img/bus_box/location/${ITEM_LIST[2][i].src}" alt="">
//                     </a>
//                 </div>
//                 <div class="bus_company">
//                     <p>${ITEM_LIST[2][i].company}</p>
//                 </div>
//             </li>`;
//
//         $(bus_li).appendTo('.bus_nav_ul');
//     }
// }

// load_bus();


/* donghang 내용 불러오기 */

// ※ donghang_li
// function load_donghang_li() {
//     for (let i = 0; i < 8 ; i++) {
//         let donghang_li_list = `<li class="donghang_li">
//                                     <div class="donghang_info">
//                                         <div class="user">
//                                             <a href="#">
//                                                 <img src="./img/${contents_array[3]}/user_icon/${ITEM_LIST[3][i].icon_src}" alt="유저-아이콘">
//                                             </a>
//
//                                             <div class="user_info_box">
//                                                 <div class="user_name"><p>${ITEM_LIST[3][i].user_name}</p></div>
//                                                 <div class="user_age"><span>${ITEM_LIST[3][i].user_age}</span> • <span>${ITEM_LIST[3][i].user_sex}</span></div>
//                                             </div>
//                                         </div>
//                                         <div class="user_line"></div>
//
//                                         <div class="donghang_date">
//                                             <img src="./img/${contents_array[3]}/default/calendar.png" alt="달력">
//                                             <div class="duration_box">
//                                                 <div class="duration_txt"><p>등산날짜</p></div>
//                                                 <div class="duration_date"><span>${ITEM_LIST[3][i].hiking_date}</span></div>
//                                             </div>
//                                         </div>
//                                     </div>
//
//                                     <div class="donghang_pic">
//                                         <a href="#">
//                                             <img src="./img/${contents_array[3]}/mountain/${ITEM_LIST[3][i].mt_pic_src}" alt="moutain_pic">
//                                         </a>
//                                     </div>
//
//                                     <div class="donghang_location">
//                                         <div>
//                                             <img src="./img/${contents_array[3]}/default/location.png" alt="장소">
//                                             <a href="#"><p>${ITEM_LIST[3][i].title}</p></a>
//                                         </div>
//                                         <a href="#">
//                                             <p>${ITEM_LIST[3][i].desc}</p>
//                                         </a>
//                                     </div>
//
//                                     <div class="donghang_box">
//                                         <a href="#">
//                                             <div class="donghang_save">
//                                                 <img src="./img/${contents_array[3]}/default/download.png" alt="">
//                                                 <p>일정 담기</p>
//                                             </div>
//                                         </a>
//                                         <a href="#">
//                                             <div class="donghang_detail">
//                                                 <img src="./img/${contents_array[3]}/default/magnifier.png" alt="">
//                                                 <p>상세 보기</p>
//                                             </div>
//                                         </a>
//                                     </div>
//                                 </li>`;
//
//         $(`.${contents_array[3]}_nav_ul`).append(donghang_li_list);
//     }
// }
//
// load_donghang_li();
////////////////////////////////////////////////////////////


//월 차이 구하기
document.getElementById('btn').addEventListener('click',function(){
    let m1 = document.getElementById('m1').value.split("-");
    let m2 = document.getElementById('m2').value.split("-");

    const tmp = (m2[0] - m1[0]) * 12 + (m2[1] - m1[1]) + 1;

    if(m2<=m1){
        alert("다시 선택");
    }

    console.log(m1,m2) 
    console.log(tmp) 
})



