$(function() {
    console.log('I am loaded');

    $('#submitBtn').on('click', (event) => {
        event.preventDefault();
        let nameInput = $('#inputName').val().trim();
  
        if(nameInput === '') {return;};

        let newBurger = {
            name:nameInput
        };

        console.log(newBurger)

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(() => {
            location.reload();
        })

    })
});

