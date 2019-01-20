var middle_earth_danger = prompt('Is Middle earth in danger?');

switch (middle_earth_danger){
    case 'no':
    document.write('Good!');
    break;

    case 'yes':
        var someone_else = prompt('Can someone else deal with it?');
        switch (someone_else){
            case 'yes':
            document.write('Good!');
            break;

            case 'no':
            var hobbits = prompt('what about Hobbits?');
            switch (hobbits){
            case 'yes':
            document.write('Proceed to find a suitable hobbit');

            break;

            case 'no':
            var magic =prompt('does magic work?');
                switch (magic){
                    case 'yes':
                    var alive = prompt('are you alive?');
                        switch(alive){
                            case ('yes'):
                            document.write('Good!');
                            break;

                            case ('no'):
                            document.write('resurrect!');
                            break;
                        }
                    case ('no'):
                    document.write('Call the eagles!');
                    brake;
                }

            }
        }

    }

