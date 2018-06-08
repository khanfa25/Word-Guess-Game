window.onload = function () {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];


    var word;              // Selected word
    var guess;             // Guess
    var guesses = [];      // Stored geusses
    var chances;             // Chances
    var counter;           // Count correct geusses

    // Get elements
    var showChances = document.getElementById("mychances");



    // create alphabet ul
    var buttons = function () {
        myButtons = document.getElementById('buttons');
        letters = document.createElement('ul');

        for (var i = 0; i < alphabet.length; i++) {
            letters.id = 'alphabet';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }



    // Create geusses ul
    result = function () {
        wordHolder = document.getElementById('hold');
        correct = document.createElement('ul');

        for (var i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (word[i] === "-") {
                guess.innerHTML = "-";
                space = 1;
            } else {
                guess.innerHTML = "_";
            }

            guesses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    }

    // Show lives
    comments = function () {
        showLives.innerHTML = "You have " + chances + " chances";
        if (lives < 1) {
            showLives.innerHTML = "Game Over";
        }
        for (var i = 0; i < guesses.length; i++) {
            if (counter + space === guesses.length) {
                showChances.innerHTML = "You Win!";
            }





            // OnClick Function
            check = function () {
                list.onclick = function () {
                    var geuss = (this.innerHTML);
                    this.setAttribute("class", "active");
                    this.onclick = null;
                    for (var i = 0; i < word.length; i++) {
                        if (word[i] === geuss) {
                            geusses[i].innerHTML = geuss;
                            counter += 1;
                        }
                    }
                    var j = (word.indexOf(guess));
                    if (j === -1) {
                        chances -= 1;
                        comments();
                        animate();
                    } else {
                        comments();
                    }



                    // Play
                    play = function () {
                        word = ["Quidditch", "Warewolf", "Horcrux", "Metamorphmagus", "Sirius", "wand", "Dumbledore"];

                        play();
                        word = [Math.floor(Math.random()];
                        word = word.replace(/\s/g, "-");
                        console.log(word);
                        buttons();

                        guesses = [];
                        lives = 10;
                        counter = 0;
                        space = 0;
                        result();

                    }



                };

                // Reset

                document.getElementById('reset').onclick = function () {
                    correct.parentNode.removeChild(correct);
                    letters.parentNode.removeChild(letters);

                }
            }

