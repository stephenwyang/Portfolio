/* ` is going to be used instead of quotes to allow for string literals (inserting variables) */

export const getImageUrl = (path) => {
    /* return new URL(`/assets/${path}`, import.meta.url).href; */
    return `/assets/${path}`;
};

