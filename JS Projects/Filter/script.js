const search = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const all = document.getElementById('all');
const categoryBtn = document.querySelectorAll('.categoryBtn');
const cards = document.querySelectorAll('.card');

categoryBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.getAttribute('id') === 'all'){
            cards.forEach((card) => {
                card.style.display = 'block';
            })
            return;
        }
        let category = btn.getAttribute('id');

        cards.forEach((card) => {
            if (card.getAttribute('data-category') === category){
                card.style.display = 'block';
            }
            else{
                card.style.display = 'none';
            }
        })
    })
})

search.addEventListener( 'input', () => {
    let searchValue = search.value.trim().toLowerCase();

    cards.forEach((card) => {
        if (card.getAttribute('data-category').includes(searchValue)){
            card.style.display = 'block';
        }
        else{
            card.style.display = 'none';
        }
    })
})

searchBtn.addEventListener('click', () => {
    let searchValue = search.value.trim().toLowerCase();
    if (searchValue === ''){
        return;
    }
    cards.forEach((card) => {
        if (card.getAttribute('data-category').includes(searchValue)){
            card.style.display = 'block';
        }
        else{
            card.style.display = 'none';
        }
    })
})