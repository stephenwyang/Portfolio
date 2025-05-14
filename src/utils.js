/* ` is going to be used instead of quotes to allow for string literals (inserting variables) */

export const getImageUrl = (path) => {
    /* Maybe this works on live, but isn't working on localhost for now */
    /* return new URL(`/assets/${path}`, import.meta.url).href; */      
    return `assets/${path}`;
};

