'use strict';

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('Hello.');

    // Interpolated
    console.log('Hello, I am a %s person!', 'baddass');

    // Styled
    console.log('%c I am some great text.', 'color: purple; background-color: green');

    // warning!
    console.warn('Oh no!!');

    // Error :|
    console.error('There is an error.');

    // Info
    console.info('This is useful info.');

    // Testing
    const p = document.querySelector('p');
    console.assert(p.classList.contains('zibbityza'), 'That is wrong.');

    // clearing

    // Viewing DOM Elements

    // Grouping together

    // counting

    // timing
