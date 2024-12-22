const search = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const all = document.getElementById('all');
const categoryBtn = document.querySelectorAll('.categoryBtn');
const cards = document.querySelectorAll('.card');


const debounce = (func, delay) => {
    let debounceTimer
    return function (...args) {
        console.log('debounce triggered');
        clearTimeout(debounceTimer)
        debounceTimer = setTimeout(() =>{
            console.log('debounce executed');
            func.apply(this, args);
        }, delay)
    }
}

categoryBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.getAttribute('id') === 'all'){
            cards.forEach((card) => {
                card.style.display = 'block';
            })
            return;
        }

        cards.forEach((card) => {
            card.style.display = card.getAttribute('data-category') === btn.getAttribute('id') ? 'block' : 'none';
        })
    })
})

const debouncedSearch = debounce( () => {
    let searchValue = search.value.trim().toLowerCase();

    cards.forEach((card) => {
        card.style.display = card.getAttribute('data-category').includes(searchValue) ? 'block' : 'none';
    })
}, 500)

search.addEventListener( 'input', debouncedSearch);

searchBtn.addEventListener('click', () => {
    let searchValue = search.value.trim().toLowerCase();
    if (searchValue === ''){
        return;
    }
    cards.forEach((card) => {
        card.style.display = card.getAttribute('data-category').includes(searchValue) ? 'block' : 'none';
    })
})