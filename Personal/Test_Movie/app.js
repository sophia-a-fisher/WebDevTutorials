const infoCard = document.querySelectorAll('.card');
const imageContainer = document.querySelectorAll('.promoImg');
const collectionSearch = document.querySelector('#collectionSearch');
const advancedSearch = document.querySelector('#advancedSearch');
let startYear;
let endYear;
let filmGenreInput;
let musicGenreInput;
let keywordInput;
let directorInput;
let actorInput;
let companyInput;
let ratingInput;
let IMDBInput;
let TomatoInput;
let advancedSearchBtn;
let imgCard;
const lightPink = 'rgb(228, 202, 217)';
const lightGrey = 'rgb(240, 234, 239)';

let advancedSearchOpen = false;

function clearAdvancedYear(){
    const advancedSearchBox = document.querySelector('#advancedSearchBox');
    advancedSearchBox.remove();
}

function setupAdvancedOther(advancedSearchBox){
    const otherBox = document.createElement('div');

    // HOW TO MAKE A DROPDOWN SEARCHABLE BOX
    // <datalist id="suggestions">
    //     <option>First option</option>
    //     <option>Second Option</option>
    // </datalist>
    // <input  autoComplete="on" list="suggestions"/> 

    directorInput = document.createElement('input');
    actorInput = document.createElement('input');
    companyInput = document.createElement('input');

    otherBox.style.width = '30%';
    otherBox.style.height = '100%';
    // otherBox.style.background = 'red';
    otherBox.style.display = 'flex';
    otherBox.style.flexDirection = 'column';
    otherBox.style.borderRadius = '5px';
    otherBox.style.paddingTop = '8px';

    directorInput.setAttribute("type","text");
    directorInput.style.marginLeft = '4%';
    directorInput.style.marginRight = '4%';
    directorInput.style.border = 'none';
    directorInput.style.borderRadius = '3px';
    directorInput.style.marginTop = '6px';
    directorInput.placeholder = 'Enter Director';
    directorInput.addEventListener('focus', (e) => {
        e.preventDefault();
        setFocus(directorInput);
    }, false);
    directorInput.addEventListener('blur', (e) => {
        e.preventDefault();
        setFocusOut(directorInput);
    }, false);

    actorInput.setAttribute("type","text");
    actorInput.style.marginLeft = '4%';
    actorInput.style.marginRight = '4%';
    actorInput.style.border = 'none';
    actorInput.style.borderRadius = '3px';
    actorInput.style.marginTop = '6px';
    actorInput.placeholder = 'Enter Actor';
    actorInput.addEventListener('focus', (e) => {
        e.preventDefault();
        setFocus(actorInput);
    }, false);
    actorInput.addEventListener('blur', (e) => {
        e.preventDefault();
        setFocusOut(actorInput);
    }, false);

    companyInput.setAttribute("type","text");
    companyInput.style.marginLeft = '4%';
    companyInput.style.marginRight = '4%';
    companyInput.style.border = 'none';
    companyInput.style.borderRadius = '3px';
    companyInput.style.marginTop = '6px';
    companyInput.placeholder = 'Enter Production Company';
    companyInput.addEventListener('focus', (e) => {
        e.preventDefault();
        setFocus(companyInput);
    }, false);
    companyInput.addEventListener('blur', (e) => {
        e.preventDefault();
        setFocusOut(companyInput);
    }, false);

    otherBox.append(directorInput);
    otherBox.append(actorInput);
    otherBox.append(companyInput);

    const ratingBox = document.createElement('div');

    const RatingDropDown = document.createElement('div');
    const RatingDataList = document.createElement('datalist');
    const RatingOption = document.createElement('option');
    const PG = document.createElement('option');
    const PG_13 = document.createElement('option');
    const G = document.createElement('option');
    const R = document.createElement('option');
    const NoRating = document.createElement('option');
    advancedSearchBtn = document.createElement('button');

    RatingInput = document.createElement('input');
    IMDBRating = document.createElement('input');
    TomatoRating = document.createElement('input');

    ratingBox.style.width = '10%';
    ratingBox.style.height = '100%';
    // ratingBox.style.background = 'red';
    ratingBox.style.display = 'flex';
    ratingBox.style.flexDirection = 'column';
    ratingBox.style.borderRadius = '5px';

    RatingDataList.setAttribute("id", "ratings");
    RatingOption.innerHTML = 'MPAA';
    PG.innerHTML = 'PG';
    PG_13.innerHTML = 'PG-13';
    G.innerHTML = 'G';
    R.innerHTML = 'R';
    NoRating.innerHTML = 'None';

    RatingDataList.appendChild(RatingOption);
    RatingDataList.appendChild(PG);
    RatingDataList.appendChild(PG_13);
    RatingDataList.appendChild(G);
    RatingDataList.appendChild(R);
    RatingDataList.appendChild(NoRating);

    RatingInput.placeholder = 'MPAA';
    RatingInput.autocomplete = 'on';
    RatingInput.setAttribute("list","ratings");
    RatingInput.style.border = 'none';
    RatingInput.style.borderRadius = '3px';
    RatingInput.style.width = '95%';
    RatingInput.style.marginRight = '6px';
    RatingInput.addEventListener('focus', (e) => {
        e.preventDefault();
        setFocus(RatingInput);
    }, false);
    RatingInput.addEventListener('blur', (e) => {
        e.preventDefault();
        setFocusOut(RatingInput);
    }, false);

    RatingDropDown.style.marginLeft = '8px';
    RatingDropDown.style.marginRight = '8px';
    RatingDropDown.style.border = 'none';
    RatingDropDown.style.borderRadius = '3px';
    RatingDropDown.style.marginTop = '12px';

    IMDBRating.setAttribute("type","number");
    IMDBRating.style.marginLeft = '8px';
    IMDBRating.style.marginRight = '8px';
    IMDBRating.style.border = 'none';
    IMDBRating.style.borderRadius = '3px';
    IMDBRating.style.marginTop = '6px';
    IMDBRating.placeholder = 'IMDB';
    IMDBRating.addEventListener('focus', (e) => {
        e.preventDefault();
        setFocus(IMDBRating);
    }, false);
    IMDBRating.addEventListener('blur', (e) => {
        e.preventDefault();
        setFocusOut(IMDBRating);
    }, false);

    TomatoRating.setAttribute("type","number");
    TomatoRating.style.marginLeft = '8px';
    TomatoRating.style.marginRight = '8px';
    TomatoRating.style.border = 'none';
    TomatoRating.style.borderRadius = '3px';
    TomatoRating.style.marginTop = '6px';
    TomatoRating.placeholder = 'Tomato';
    TomatoRating.addEventListener('focus', (e) => {
        e.preventDefault();
        setFocus(TomatoRating);
    }, false);
    TomatoRating.addEventListener('blur', (e) => {
        e.preventDefault();
        setFocusOut(TomatoRating);
    }, false);

    // advancedSearchBtn
    advancedSearchBtn.style.marginLeft = '8px';
    advancedSearchBtn.style.marginRight = '8px';
    advancedSearchBtn.style.border = 'none';
    advancedSearchBtn.style.marginTop = '6px';
    advancedSearchBtn.style.borderRadius = '3px';
    advancedSearchBtn.style.background = 'black';
    advancedSearchBtn.style.color = 'white';
    advancedSearchBtn.innerHTML = 'Search';
    advancedSearchBtn.addEventListener('mouseover',() => {
        advancedSearchBtn.style.cursor = "pointer";
        advancedSearchBtn.style.boxShadow = '2px 2px 10px .5px rgb(57, 47, 47)';
    });
    advancedSearchBtn.addEventListener('mouseleave',() => {
        advancedSearchBtn.style.cursor = "pointer";
        advancedSearchBtn.style.boxShadow = `2px 2px 10px .5px ${lightGrey}`;
    });
    advancedSearchBtn.addEventListener('mousedown',() => {
        advancedSearchBtn.style.color = `${lightPink}`;
    });
    advancedSearchBtn.addEventListener('mouseup',() => {
        advancedSearchBtn.style.color = `${lightGrey}`;
    });

    RatingDropDown.appendChild(RatingDataList);
    RatingDropDown.appendChild(RatingInput);
    ratingBox.appendChild(RatingDropDown);
    ratingBox.appendChild(IMDBRating);
    ratingBox.appendChild(TomatoRating);
    ratingBox.appendChild(advancedSearchBtn);

    advancedSearchBox.appendChild(otherBox);
    advancedSearchBox.appendChild(ratingBox);
}

function setupAdvancedGenre(advancedSearchBox){
    const genreBox = document.createElement('div');

    // HOW TO MAKE A DROPDOWN SEARCHABLE BOX
    // <datalist id="suggestions">
    //     <option>First option</option>
    //     <option>Second Option</option>
    // </datalist>
    // <input  autoComplete="on" list="suggestions"/> 

    const filmGenreDropDown = document.createElement('div');
    const filmGenreDataList = document.createElement('datalist');
    const filmGenreOption = document.createElement('option');
    filmGenreInput = document.createElement('input');
    const musicGenreDropDown = document.createElement('div');
    const musicGenreDataList = document.createElement('datalist');
    const musicGenreOption = document.createElement('option');
    musicGenreInput = document.createElement('input');
    keywordInput = document.createElement('input');

    genreBox.style.width = '30%';
    genreBox.style.height = '100%';
    // genreBox.style.background = 'red';
    genreBox.style.display = 'flex';
    genreBox.style.flexDirection = 'column';
    genreBox.style.borderRadius = '5px';

    filmGenreDataList.setAttribute("id", "filmGenres");
    filmGenreOption.innerHTML = 'All Film Genres';

    filmGenreDataList.appendChild(filmGenreOption);

    filmGenreInput.placeholder = 'All Film Genres';
    filmGenreInput.autocomplete = 'on';
    filmGenreInput.setAttribute("list","filmGenres");
    filmGenreInput.style.border = 'none';
    filmGenreInput.style.borderRadius = '3px';
    filmGenreInput.style.width = '98%';
    filmGenreInput.style.marginRight = '4px';
    filmGenreInput.addEventListener('focus', (e) => {
        e.preventDefault();
        setFocus(filmGenreInput);
    }, false);
    filmGenreInput.addEventListener('blur', (e) => {
        e.preventDefault();
        setFocusOut(filmGenreInput);
    }, false);

    filmGenreDropDown.style.marginLeft = '4%';
    filmGenreDropDown.style.marginRight = '4%';
    filmGenreDropDown.style.border = 'none';
    filmGenreDropDown.style.borderRadius = '3px';
    filmGenreDropDown.style.marginTop = '12px';

    filmGenreDropDown.appendChild(filmGenreDataList);
    filmGenreDropDown.appendChild(filmGenreInput);

    musicGenreDataList.setAttribute("id", "musicGenres");
    musicGenreOption.innerHTML = 'All Music Genres';

    musicGenreDataList.appendChild(musicGenreOption);

    musicGenreInput.placeholder = 'All Music Genres';
    musicGenreInput.autocomplete = 'on';
    musicGenreInput.setAttribute("list","musicGenres");
    musicGenreInput.style.border = 'none';
    musicGenreInput.style.borderRadius = '3px';
    musicGenreInput.style.width = '98%';
    musicGenreInput.style.marginRight = '4%';
    musicGenreInput.addEventListener('focus', (e) => {
        e.preventDefault();
        setFocus(musicGenreInput);
    }, false);
    musicGenreInput.addEventListener('blur', (e) => {
        e.preventDefault();
        setFocusOut(musicGenreInput);
    }, false);

    musicGenreDropDown.style.marginLeft = '4%';
    musicGenreDropDown.style.marginRight = '4%';
    musicGenreDropDown.style.border = 'none';
    musicGenreDropDown.style.borderRadius = '3px';
    musicGenreDropDown.style.marginTop = '3px';

    keywordInput.setAttribute("type","text");
    keywordInput.style.marginLeft = '4%';
    keywordInput.style.marginRight = '4%';
    keywordInput.style.border = 'none';
    keywordInput.style.borderRadius = '3px';
    keywordInput.style.marginTop = '6px';
    keywordInput.placeholder = 'Enter keywords';
    keywordInput.addEventListener('focus', (e) => {
        e.preventDefault();
        setFocus(keywordInput);
    }, false);
    keywordInput.addEventListener('blur', (e) => {
        e.preventDefault();
        setFocusOut(keywordInput);
    }, false);

    musicGenreDropDown.appendChild(musicGenreDataList);
    musicGenreDropDown.appendChild(musicGenreInput);

    genreBox.append(filmGenreDropDown);
    genreBox.append(musicGenreDropDown);
    genreBox.append(keywordInput);

    advancedSearchBox.appendChild(genreBox);
}

function setupAdvancedYear(advancedSearchBox) {

    startYear = document.createElement('input');
    endYear = document.createElement('input');
    const calendarBox = document.createElement('div');
    const totalLabel = document.createElement('div');
    const calendarSymbol = document.createElement('span');
    const releaseYearLabel = document.createElement('span');

    calendarBox.style.width = '30%';
    calendarBox.style.height = '100%';
    calendarBox.style.background = 'rgb(240, 234, 239)';
    calendarBox.style.display = 'flex';
    calendarBox.style.flexDirection = 'column';
    calendarBox.style.borderRadius = '5px';

    totalLabel.style.height = '30px';
    totalLabel.style.width = '300px';
    totalLabel.style.marginBottom = '4px';
    totalLabel.style.marginTop = '6px';

    calendarSymbol.style.height = '15px';
    calendarSymbol.style.width = '15px';
    calendarSymbol.style.backgroundImage = "url('calendar.png')";
    calendarSymbol.style.backgroundRepeat = 'no-repeat';
    calendarSymbol.style.backgroundSize = 'contain';
    calendarSymbol.style.backgroundPosition = 'center center';
    calendarSymbol.style.display = 'inline-block';
    calendarSymbol.style.marginLeft = '4%';
    calendarSymbol.style.marginTop = '2.5%';
    calendarSymbol.style.marginRight = '6px';

    releaseYearLabel.innerHTML = 'Release Year';
    releaseYearLabel.style.fontSize = '110%';

    startYear.type = 'number';
    startYear.setAttribute("id","startYear");
    startYear.style.marginLeft = '4%';
    startYear.style.marginRight = '4%';
    startYear.placeholder = 'Start Range';
    startYear.style.border = 'none';
    startYear.style.borderRadius = '3px';
    // startYear.style.marginTop = '1%';
    startYear.addEventListener('focus', (e) => {
        e.preventDefault();
        setFocus(startYear);
    }, false);
    startYear.addEventListener('blur', (e) => {
        e.preventDefault();
        setFocusOut(startYear);
    }, false);

    endYear.type = 'number';
    endYear.style.marginLeft = '4%';
    endYear.style.marginRight = '4%';
    endYear.style.marginTop = '2%';
    endYear.placeholder = 'End Range';
    endYear.style.border = 'none';
    endYear.style.borderRadius = '3px';
    endYear.style.marginBottom = '1%';
    endYear.addEventListener('focus', (e) => {
        e.preventDefault();
        setFocus(endYear);
    }, false);
    endYear.addEventListener('blur', (e) => {
        e.preventDefault();
        setFocusOut(endYear);
    }, false);

    totalLabel.appendChild(calendarSymbol);
    totalLabel.appendChild(releaseYearLabel);

    advancedSearchBox.appendChild(calendarBox);
    calendarBox.appendChild(totalLabel);
    calendarBox.appendChild(startYear);
    calendarBox.appendChild(endYear);

}


// if(startYear){
//     startYear.addEventListener('focus', setFocus(startYear));
//     startYear.addEventListener('focusout', setFocusOut(startYear));
// }


collectionSearch.addEventListener('click', () => {
    if(!advancedSearchOpen){

        const advancedSearchBox = document.createElement('div');
        advancedSearch.appendChild(advancedSearchBox);
        advancedSearch.style.display = 'flex'
        advancedSearch.style.justifyContent = 'flex-end';
        advancedSearchBox.style.height = '120px';
        advancedSearchBox.style.width = '100%';
        advancedSearchBox.style.marginLeft = '15%';
        advancedSearchBox.style.marginRight = '15%';
        advancedSearchBox.style.background = 'rgb(240, 234, 239)';
        advancedSearchBox.style.display = 'flex';
        advancedSearchBox.style.borderRadius = '5px';
        advancedSearchBox.style.border = '1.5px solid rgb(37, 25, 16)';
        // advancedSearchBox.style.border = '2px solid rgb(240, 234, 239)';
        advancedSearchBox.id = 'advancedSearchBox';

        // const searchBox = document.createElement('div');
        // searchBox.style.height = '100px';
        // searchBox.style.width = '400px';
        // searchBox.style.background = 'red';
        // // searchBox.style.display = 'flex';
        // searchBox.style.marginRight = '10%';
        // advancedSearch.appendChild(searchBox);

        setupAdvancedYear(advancedSearchBox);
        setupAdvancedGenre(advancedSearchBox);
        setupAdvancedOther(advancedSearchBox);
        advancedSearchOpen = true;
    } else {
        clearAdvancedYear();
        advancedSearchOpen = false;
    }

});

function setFocus(control){
    // control.style.background = 'rgb(228, 202, 217)';
    // control.style.boxShadow = '2px 2px 6px .5px rgb(57, 47, 47)';
    control.style.boxShadow = '0 0 8px 2px rgb(228, 202, 217) inset';
    control.style.border = '1px solid rgb(228, 202, 217)';
    
    // control.style.border = 'none';
    control.style.outline = 'none';
}

function setFocusOut(control){
    // control.style.background = 'white';
    control.style.boxShadow = '0 0 8px 2px white inset';
    control.style.border = 'none';
}

infoCard.forEach(card => {
    card.addEventListener('mouseover', (event) => {
        // alert('asdk');
        card.style.borderColor = `${lightGrey}`;
        imgCard = card.querySelector('.promoImg');
        // imgCard.style.innerHTML = ".promoImg:after {border: `3px solid ${lightGrey}`}";
        imgCard.style.setProperty('--imgBorder', `3px solid ${lightGrey}`);
        // imgCard.style.border = `3px solid ${lightGrey}`;
        // infoCard.style.border.color = 'rgb(240, 234, 239)';
    })
})

imageContainer.forEach(img => {
    img.addEventListener('mouseover', (event) => {

        // img.innerHTML = ".promoImg:after {
        //     content: "";
        //     display: block;
        //     border: 3px solid white;
        //     padding: 2px;
        // }";

        // img.style.content = '';
        // img.style.display = 'block';
        // img.style.border = '3px solid red';
        // img.style.padding = '2px';
        // // alert('asdk');
        // img.style.after.borderColor = 'rgb(240, 234, 239)';
        // img.innerHTML = ".promoImg:after {border: 3px solid white;}";
    //     styleElem.innerHTML = "#theDiv:before {background: black;}";
    // display: block;
    // border: 3px solid white;
    // padding: 2px;};
    // // infoCard.style.border.color = 'rgb(240, 234, 239)';
    })
})

// infoCard.addEventListener('click',() =>
// {
//     alert('asdh');
// });

// infoCard.addEventListener('mouseover', () => {
//     alert('asdk');
//     infoCard.style.border.color = 'rgb(240, 234, 239)';
// });