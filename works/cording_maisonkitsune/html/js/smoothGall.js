let gallery = '.visual_area';
const on = 'background:hotpink;';
const off = 'background:rgba(0,0,0,0.3);';

const gall = document.querySelectorAll(gallery+' .gall');
const temp = document.querySelectorAll(gallery+' .gall > ul')[0].cloneNode(true);
gall[0].appendChild(temp);
const mn = document.querySelectorAll(gallery+' a.mn');
const prev = document.querySelectorAll(gallery+' .gall_btn.prev');
const next = document.querySelectorAll(gallery+' .gall_btn.next');
const gall_btn = document.querySelectorAll(gallery+' .gall_btn');

let idx=0;

let imgw = document.querySelector(gallery).clientWidth;
window.addEventListener("resize",function(){
  imgw = document.querySelector(gallery).clientWidth;
  targetX=-imgw*idx;
});

const imgn = mn.length;

const logo = document.querySelector('h1 img');
const gnb = document.querySelectorAll('.gnb .main>a');
const icon = document.querySelectorAll('.util .icon');
const search = document.querySelector('#search_text');

/////부드러운 움직임
let x = 0;
let targetX = 0;

function smoothGall(){
  x=x+0.05*(targetX-x);
  gall[0].style.left=x+'px';
};
setInterval(smoothGall,10);

/////mn 클릭시
let last_mn=mn[0];


for(i=0; i<imgn; i++){
  mn[i].style.cssText=off;
  mn[i].addEventListener('click', function(){
    idx = this.getAttribute('data-idx');
    targetX=-imgw*idx;//이벤트 안에서는 변수 i 사용 불가
    last_mn.style.cssText=off;
    this.style.cssText=on;
    last_mn=this;

    if(idx>=2){
      logo.style.filter='invert(0)';
      search.style.borderBottom='1px solid black'
      for(g=0; g<5; g++){gnb[g].style.color='black';};
      for(u=0; u<4; u++){icon[u].style.color='black';};
      for(b=0; b<2; b++){gall_btn[b].style.color='black';};
    } else {
      logo.style.filter='invert(1)';
      search.style.borderBottom='1px solid white'
      for(g=0; g<5; g++){gnb[g].style.color='white';};
      for(u=0; u<4; u++){icon[u].style.color='white';};
      for(b=0; b<2; b++){gall_btn[b].style.color='white';};
    }
  });
};
mn[0].style.cssText=on;

/////이전 다음
prev[0].addEventListener('click',prevGall);
function prevGall(){
  targetX=targetX+imgw;
  if (targetX > 0) { //끊어지는 위치가 목적지가 되면
    x= -imgw*imgn; // 끊어지지않는 위치로 보내고
    targetX= -imgw*(imgn-1); //한단계 오른쪽 위치를 목적지로 설정
  }

  idx--;
  if (idx < 0) { idx=imgn-1; };

  last_mn.style.cssText=off;
  mn[idx].style.cssText=on;
  last_mn = mn[idx];	

  if(idx>=2){
    logo.style.filter='invert(0)';
    search.style.borderBottom='1px solid black'
    for(g=0; g<5; g++){gnb[g].style.color='black';};
    for(u=0; u<4; u++){icon[u].style.color='black';};
    for(b=0; b<2; b++){gall_btn[b].style.color='black';};
  } else {
    logo.style.filter='invert(1)';
    search.style.borderBottom='1px solid white'
    for(g=0; g<5; g++){gnb[g].style.color='white';};
    for(u=0; u<4; u++){icon[u].style.color='white';};
    for(b=0; b<2; b++){gall_btn[b].style.color='white';};
  }
};

next[0].addEventListener('click',nextGall);
function nextGall(){
  targetX=targetX-imgw;
  if (targetX < -imgw*(imgn*2-1)) { //끊어지는 위치가 목적지가 되면
    x= -imgw*(imgn-1); // 끊어지지않는 위치로 보내고
    targetX= -imgw*imgn; //한단계 왼쪽 위치를 목적지로 설정
  }

  idx++;
  if (idx >(imgn-1)) { idx=0; };

  last_mn.style.cssText=off;
  mn[idx].style.cssText=on;
  last_mn = mn[idx];	

  if(idx>=2){
    logo.style.filter='invert(0)';
    search.style.borderBottom='1px solid black'
    for(g=0; g<5; g++){gnb[g].style.color='black';};
    for(u=0; u<4; u++){icon[u].style.color='black';};
    for(b=0; b<2; b++){gall_btn[b].style.color='black';};
  } else {
    logo.style.filter='invert(1)';
    search.style.borderBottom='1px solid white'
    for(g=0; g<5; g++){gnb[g].style.color='white';};
    for(u=0; u<4; u++){icon[u].style.color='white';};
    for(b=0; b<2; b++){gall_btn[b].style.color='white';};
  }
};