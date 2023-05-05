
/**
 * It was challenging to fix the final layout of the app because the first developer had not initially commented this code. Function comments must have descriptions, arguments and logic to make the code more readable and facilitate future debugging.

 * Functions must be declared with the const or let keyword, which makes it simpler to find bugs and ensures proper operation. Using a function might be preferable when writing some types of code, such as that which creates drop-down menu items. Functions were used to construct HTML fragments, which had the advantage of being reusable. 
 *As seen on originalcode.js, code was randomly ordered, with code for related functions placed far apart.
 * The code has been reorganized and divided into sections based on functions (by using event listeners and also extracting the information from html) to increase readability.
 The dark/light mode symbol is deceptive, according to reviewers. For users who are using the app for the first time, it may be perplexing because it seems more like a login button.



 */
// Import data from data.js and handlers.
import { BOOKS_PER_PAGE, authors, genres, books } from "./data.js"
import { html, } from "./handlers.js";
import { createPreviewsFragment, updateRemaining, showBookDescription } from "./handlers.js"

const range = [0, 36]
const matches = books; // Try to convert matches to an indepenedent copy.
let page = 1;

/* This code checks if a book is not empty/undefined, and if it is an array.
 * Therefore it must be changed '&&' to || because both are invalid. 
 */
if (!books || !Array.isArray(books)) throw new Error('Source required');

/* range is an array to check if range is within 0 - 36.
 * Change "< 2" to "=== 2" to avoid future errors.
 */
if (!range && range.length === 2) throw new Error('Range must be an array with two numbers');


/** this is the theme constrast for easier readability for the users
 * day theme in white color
 * night theme in navy like color
 */
const day = {
    dark: '10, 10, 20',
    light: '255, 255, 255',
};

const night = {
    dark: '255, 255, 255',
    light: '10, 10, 20',
};

let fragment = createPreviewsFragment(matches, 0, 36)

html.view.mainHtml.appendChild(fragment);

window.scrollTo({ top: 0, behavior: 'smooth' }); ///scroll to top on reload page for more books.

/* ------------------------
SEARCH FUNCTIONS
-------------------------*/

/* Genres */

const genresHtml = document.createDocumentFragment();
let element = document.createElement('option');
element.value = 'any'
element.innerText = 'All Genres';
genresHtml.appendChild(element);

for (const [id, name] of Object.entries(genres)) {
    element = document.createElement('option');
    element.value = id;
    element.innerText = name;
    genresHtml.appendChild(element);
};

html.search.searchGenres.appendChild(genresHtml);


/* Authors */

const authorsHtml = document.createDocumentFragment();
element = document.createElement('option');
element.value = 'any';
element.innerText = 'All Authors';
authorsHtml.appendChild(element);

for (const [id, name] of Object.entries(authors)) {
    element = document.createElement('option');
    element.value = id;
    element.innerText = name;
    authorsHtml.appendChild(element);
};

html.search.searchAuthors.appendChild(authorsHtml);

/* Search Overlay */ 


html.search.searchCancel.addEventListener('click', () => {
    html.search.searchOverlay.close();
    html.search.searchSubmit.reset();
 });

html.search.searchButton.addEventListener('click', () => {
html.search.searchOverlay.showModal();
}); 

html.search.searchSubmit.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const filters = Object.fromEntries(formData);
    const result = Object.entries(filters); 

    let searchResult = [];
    let titleMatch = null;
    let authorMatch = null;
    let genreMatch = null;

    for (let i = 0; i < books.length; i++) {

        if ((filters.title.trim()) && (books[i].title.toLowerCase().includes(filters.title.toLowerCase()))) {
            titleMatch = books[i];
            searchResult.push(titleMatch);
            console.log(searchResult)
        }; 
        
        if (filters.author !== 'any' && books[i].author.includes(filters.author)) {
            authorMatch = books[i];
            searchResult.push(authorMatch);            
        };

        if (filters.genre !== 'any' && books[i].genres.includes(filters.genre)) {
            genreMatch = books[i];   
            searchResult.push(genreMatch);       
        };

        if (!filters.title.trim() && (filters.author === 'any') && (filters.genre === 'any')) {
            html.search.searchOverlay.close();
            html.search.searchSubmit.reset();
        };

    }

    if (searchResult.length > 0) {
        let resultFragment = createPreviewsFragment(searchResult);
        html.view.mainHtml.replaceChildren(resultFragment); 

        html.scroll.moreButton.innerHTML = /* html */ `
        <span>Show more</span>
        <span class="list__remaining"> (0)</span>
        `;
        html.scroll.moreButton.disabled = true;
        showPreview();        
    } else {
        html.search.seachMessage.setAttribute('class', 'list__message_show');

        const firstElementChild = html.search.seachMessage;
        html.view.mainHtml.innerHTML = '';
        html.view.mainHtml.append(firstElementChild);

        html.scroll.moreButton.innerHTML = /* html */ `
        <span>Show more</span>
        <span class="list__remaining"> (0)</span>
        `;
        html.scroll.moreButton.disabled = true;
    };

    html.search.searchOverlay.close();
    html.search.seachMessage.setAttribute('class', 'list__message');
    html.search.searchSubmit.reset();

    window.scrollTo({ top: 0, behavior: 'smooth' });    
});

html.search.searchCancel.addEventListener('click', () => {
    html.search.searchOverlay.close();
    html.search.searchSubmit.reset();
 });

html.search.searchButton.addEventListener('click', () => {
html.search.searchOverlay.showModal();
}); 

html.search.searchSubmit.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const filters = Object.fromEntries(formData);
    const result = Object.entries(filters); 

    let searchResult = [];


    for (let i = 0; i < books.length; i++) {

        searchTitle(filters.title, i, searchResult);
        
        searchAuthor(filters.author, i, searchResult)

        searchGenre(filters.genre, i, searchResult)

        searchNothing(filters.title, filters.author, filters.genre);
    }

    html.search.searchOverlay.close();
    html.search.seachMessage.setAttribute('class', 'list__message');
    html.search.searchSubmit.reset();

    window.scrollTo({ top: 0, behavior: 'smooth' });    
});



//this code allows the search button to be responsive and easier to fetch the required data//
const searchTitle = (title, index, searchResult) => {
    let titleMatch;
    if ((title.trim()) && (books[index].title.toLowerCase().includes(title.toLowerCase()))) {
        titleMatch = books[index];
        searchResult.push(titleMatch);
        return 'success';
    };
    return 'fail';
};

const searchAuthor = (author, index, searchResult) => {
    let authorMatch;
    if (author !== 'any' && books[index].author.includes(author)) {
        authorMatch = books[index];
        searchResult.push(authorMatch);
        return 'success';           
    };
    return 'fail';
};

const searchGenre = (genre, index, searchResult) => {
    let genreMatch;
    if (genre !== 'any' && books[index].genres.includes(genre)) {
        genreMatch = books[index];   
        searchResult.push(genreMatch);      
    };
};

const searchNothing = (title, author, genre) => {
    if (!title.trim() && (author === 'any') && (genre === 'any')) {
        html.search.searchOverlay.close();
        html.search.searchSubmit.reset();
    };
};

const searchAll = (filters, index, searchResult) => {
    let allMatch = [];

    let titleState = (filters.title.trim()) && (books[index].title.toLowerCase().includes(filters.title.toLowerCase()));
    let authorState = filters.author !== 'any' && books[index].author.includes(filters.author);
    let genreState = filters.genre !== 'any' && books[index].genres.includes(filters.genre);

    if (titleState != true) {
        return 
    };
    if (authorState != true) {
        return
    };
    if(genreState != true ) {
        return 
    };
    
    allMatch = books[index];

    searchResult.push(allMatch);    
};


/**
 * This handler shows the book description overlay when the book is clicked on
 * @param event 
 */
const descriptionOverlay = (event) => {
    event.preventDefault()

    //fetch the dialog box where the overlay will be appended
    const bookSummary = document.querySelector('[data-list-active]')

    //get the book that is clicked
const book = event.target.closest('.preview');
//get a book id to use to fetch book information
const bookId = book.getAttribute('[data-preview]');

//for loop to iterate over the book object looking for matching ids
for (let z = 0; z < books.length; z++) {
    //check if the id in the books object matches that of the clicked book
    if (books[z].id === bookId) {
    //create the overlaay div html
    bookSummary.innerHTML = /*html*/
    `<div class="overlay__preview">
    <img class="overlay__blur" data-list-blur="" src="${books[z].image}">
    <img class="overlay__image" data-list-image="" src="${books[z].image}">
    </div>
    <div class="overlay__content">
    <h3 class="overlay__title" data-list-title="">${books[z].title} (${new Date(books[z].published).getFullYear()})</h3>
    <div class="overlay__data" data-list-subtitle="">${authors[books[z].author]}</div>
    <p class="overlay__data overlay__data_secondary" data-list-description="">${books[i].description}</p>
    </div>
    <div class="overlay__row">
    <button class="overlay__button overlay__button_primary" data-list-close="">Close</button>
    </div>`
    }
}

    //show the book summary overlay when its done being created
    bookSummary.showModal()

    //when the close button is clicked, the overlay should be removed
    document.querySelector('[data-list-close]').addEventListener("click", () => {
        bookSummary.close()
    })

};

/* ---------------------------
DISPLAY SETTINGS-
------------------ */ 

// This code checks darkmode/lightmode settings of user's system and assign them to the websites settings.
html.display.settingsTheme.value = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day';

let v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 'night' : 'day';

html.display.settingButton.addEventListener('click', () => {
    html.display.settingsOverlay.showModal();
});

html.display.settingsCancel.addEventListener('click', () => {
    html.display.settingsOverlay.close();
    html.display.settingsSubmit.reset();
});

const css = {
    day : ['255, 255, 255', '10, 10, 20'],
    night: ['10, 10, 20','255, 255, 255']
};

html.display.settingsSubmit.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const selected = Object.fromEntries(formData);

    if (selected.theme === 'night') {
        document.documentElement.style.setProperty('--color-light', css[selected.theme][0]);
        document.documentElement.style.setProperty('--color-dark', css[selected.theme][1]);        
    } else if (selected.theme === 'day') {
        document.documentElement.style.setProperty('--color-light', css[selected.theme][0]);
        document.documentElement.style.setProperty('--color-dark', css[selected.theme][1]);
    };

    html.display.settingsOverlay.close();
});

/* -----------------------
PAGE SCROLL-
------------------------ */ 

let pagesRemaining = matches.length - (page * BOOKS_PER_PAGE);

html.scroll.moreButton.innerHTML = /* html */ `
    <span>Show more</span>
    <span class="list__remaining"> (${pagesRemaining > 0 ? pagesRemaining : 0})</span>
`;

html.scroll.moreButton.addEventListener('click', () => {
if (pagesRemaining <= 0) {
    html.scroll.moreButton.disabled;
}else {
    html.view.mainHtml.appendChild(createPreviewsFragment(matches, (page * BOOKS_PER_PAGE), (page + 1) * BOOKS_PER_PAGE));
    page = page + 1;
    pagesRemaining = updateRemaining(matches, page);

    html.scroll.moreButton.innerHTML = /* html */ `
    <span>Show more</span>
    <span class="list__remaining"> (${pagesRemaining > 0 ? pagesRemaining : 0})</span>
    `
    }
});
showPreview();