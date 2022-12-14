const API_ENDPOINT = 'https://yalies.io/api/people',
      API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzEwNDg0NTUsInN1YiI6ImVrYjMzIn0.0xYhLZiBSSr0IrRXfOISWRLKqpru8jTcSws5jTiU91M';

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
.then(json => {
    console.log(json);
});
