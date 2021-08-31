

const read_more_btn = document.querySelector('.read-more-btn');
const text = document.querySelector('.text');

read_more_btn.addEventListener('click',()=>{
    text.classList.toggle('show-more');
    if(read_more_btn.innerText === 'Read More'){
        read_more_btn.innerText = 'Read Less';
    }else{
        read_more_btn.innerText = 'Read More'
    }
})