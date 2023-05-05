import { authors, books, BOOKS_PER_PAGE } from './data.js'

/**
 * Creates an html fragment given as an object.
 * 
 * @param {array} props is an object array with book properties from data.js.
 * @returns {HTMLElement} 
 **/
export const createPreview = (props) => {
    const { author, image, title, id } = props;

    const newElement = document.createElement('button');
    newElement.className = 'preview';
    newElement.setAttribute('data-preview', id);

    newElement.innerHTML =  /* HTML */`
        <img
                class="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${author}</div>
            </div>
        `

    return newElement;
};

export const createGenres = (obj) => {
    let genresHtml = document.createDocumentFragment();
    let element = document.createElement('option');

};


/**
 * Creates a slice of specified length from the database of books.
 * 
 * @param {array} array is an object array of all books with properties.
 * @param {number} start is a number denoting where to start extract the array number of books.
 * @param {number} end is a number denoting where to end extracting tha array number of books.
 * @return {HTMLElement} 
 * 
 */
export const createPreviewsFragment  = (array , start, end) => {
    
    const booksExtract = array.slice(start, end);

    let previewFragment = document.createDocumentFragment();

    for (let i = 0; i < booksExtract.length; i++){

        let { author, image, title, id } = booksExtract[i];
        author = authors[author];
    
        const preview = {
            author,
            id,
            image,
            title,
        };
        previewFragment.appendChild(createPreview(preview));
    };
    return previewFragment;
};


/**
 * This code determines the number of pages to be shown on the app based on the total
 * number of books available in the database made originally.
 * 
 * @param {array} array with total number of books on the database.
 * @param {number} page current page.
 * @returns {number}
 */
export const updateRemaining = (array, page) => {
    let remaining = array.length - (page * BOOKS_PER_PAGE);
    return remaining;
}; 


// this code deals with the view of the app (which includes search button and descrptions of books to be visible) by selecting data from html and makes the viewing and scrolling have a smoother experience//
export const html = {
    view: {
        mainHtml: document.querySelector('[data-list-items]'),
    },    
    scroll: {
        moreButton: document.querySelector('[data-list-button]'),
    },
    preview: {
        summaryList: document.querySelectorAll('[data-preview]'),
        summaryOverlay: document.querySelector('[data-list-active]'),
        summaryBlur: document.querySelector('[data-list-blur]'),
        summaryImage: document.querySelector('[data-list-image]'),
        summaryTitle: document.querySelector('[data-list-title]'),
        summarySubTitle: document.querySelector('[data-list-subtitle]'),
        summaryDescription: document.querySelector('[data-list-description]'),
        summaryClose: document.querySelector('[data-list-close]'),
    },
    display: {
        settingsOverlay: document.querySelector('[data-settings-overlay]'),
        settingButton: document.querySelector('[data-header-settings]'),
        settingsTheme: document.querySelector('[data-settings-theme]'),
        settingsCancel: document.querySelector('[data-settings-cancel]'),
        settingsSubmit: document.querySelector('[data-settings-form]'),
    },
    search: {
        searchCancel: document.querySelector('[data-search-cancel]'),
        searchButton: document.querySelector('[data-header-search]'),
        searchOverlay: document.querySelector('[data-search-overlay]'),
        seacrhTitle: document.querySelector('[data-search-title]'),
        searchSubmit: document.querySelector('[data-search-form]'),
        searchAuthors: document.querySelector('[data-search-authors]'),
        searchAuthors: document.querySelector('[data-search-authors]'),
        searchGenres: document.querySelector('[data-search-genres]'),
    },
};


export function showBookDescription() {
    // Get the container element to display the book description
    const container = document.querySelector('.book-description');
  
    // Create and update HTML elements to display the book description
    const title = document.createElement('h2');
    title.textContent = 'Book Title';
  
    const author = document.createElement('p');
    author.textContent = 'Author Name';
  
    const description = document.createElement('p');
    description.textContent = 'Book Description';
  
    // Append the elements to the container
    container.appendChild(title);
    container.appendChild(author);
    container.appendChild(description);
  }
  


/**
 * Event to show summary overlay after clicking preview button by allowing to show a sneak preview of a book and also allow it to be closed by using cancel.
 * This is only placed inside a function to allow re-useability.
 * 
 * @param - void
 * @returns - no return.
 */
export const showPreview = () => {
    const summaryList = document.querySelectorAll('[data-preview]');

[...summaryList].forEach(function(buttons) {
    let summaryButton = buttons;
    summaryButton.addEventListener('click', () => {

    let summaryId = summaryButton.getAttribute('data-preview');
    let searchBooks = books.find((book) => book.id === summaryId);
    const { author, image, title, description, published } = searchBooks;

    let year = new Date(published).getFullYear();

    html.preview.summaryBlur.src = `${image}`;
    html.preview.summaryImage.src = `${image}`;
    html.preview.summaryTitle.innerHTML = `${title}`;
    html.preview.summarySubTitle.innerHTML = `${authors[author]} (${year})`;
    html.preview.summaryDescription.innerHTML = `${description}`;
    
    html.preview.summaryOverlay.showModal();    
    });
});
    html.preview.summaryClose.addEventListener('click', () => {
    html.preview.summaryOverlay.close();
});

};


