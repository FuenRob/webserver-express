const hbs = require('hbs');

// Helpers
hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (msg) => {
    let words = msg.split(' ');
    words.forEach((word, key) => {
        words[key] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })

    return words.join(' ');
});