document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // This line prevents the form from submitting normally

    let age = document.getElementById('age').value;
    let name = document.getElementById('name').value;

    let promise = new Promise(function(resolve, reject) {
        if(age >= 18) {
            setTimeout(() => resolve(`Welcome, ${name}. You can vote.`), 4000);
        } else {
            reject(`Oh sorry ${name}. You aren't old enough.`);
        }
    });

    promise.then(
        result => alert(result), // shows "Welcome, <name>. You can vote." after 4 sec if resolved
        error => alert(error) // shows "Oh sorry <name>. You aren't old enough." if rejected
    );
});
