const colors = document.querySelectorAll('.color');
const body = document.querySelector('body')


colors.forEach(function (color) {
    console.log(color);
    color.addEventListener('click', function (e) {
        body.style.color = 'black';
        switch (e.target.id) {
            case 'red':
                body.style.backgroundColor = '#48CFCB';
                body.style.color = '#161D6'
                break;
            case 'gold':
                body.style.backgroundColor = 'gold';
                body.style.color = '#821131'
                break;

            case 'grey':
                body.style.backgroundColor = 'grey';
                break;

            case 'green':
                body.style.backgroundColor = '#603F26';
                body.style.color = 'white'
                break;

            case 'blue':
                body.style.backgroundColor = '#F05A7E';
                break;
            default:
                body.style.backgroundColor = 'white';

        }


    })

})