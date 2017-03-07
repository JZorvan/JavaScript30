'use strict';

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];

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
    console.clear();

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);

    // Grouping together
    dogs.forEach(dog => {
      console.groupCollapsed(`${dog.name}`);
      console.log(`This is ${dog.name}.`);
      console.log(`${dog.name} is ${dog.age} years old.`);
      console.log(`${dog.name} is a good dog.`);
      console.groupEnd(`${dog.name}`);
    });

    console.table(dogs);

    // counting
    console.count('badger');
    console.count('badger');
    console.count('badger');
    console.count('badger');
    console.count('badger');
    console.count('mushroom');
    console.count('mushroom');

    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/JZorvan')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });