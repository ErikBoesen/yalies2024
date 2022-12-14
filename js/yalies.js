const API_ENDPOINT = 'https://yalies.io/api/people',
      API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzEwNDg0NTUsInN1YiI6ImVrYjMzIn0.0xYhLZiBSSr0IrRXfOISWRLKqpru8jTcSws5jTiU91M';

const elem = {
    people: document.getElementById('people'),
};

fetch(API_ENDPOINT, {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer ' + API_KEY,
    },
    body: JSON.stringify({
        filters: {
            year: 2024,
        },
        page_size: 50,
        page: 1,
    }),
})
.then(response => response.json())
.then(people => {
    for (let person of people) {
        console.log(person);
        let container = document.createElement('div');
        container.className = 'person';
        container.innerHTML = ('<img src="' + (person.image || 'https://yalies.io/static/images/user.png') + '">' +
            '<h4>' + person.first_name + ' ' + person.last_name + '</h4>' +
            '<p>College: ' + person.college + '</p>' +
            '<p>Major: ' + person.major + '</p>' +
            '<p>Birthday: ' + person.birthday + '</p>' +
            '<p>NetID: ' + person.netid + '</p>');
        elem.people.appendChild(container);
    }
});
