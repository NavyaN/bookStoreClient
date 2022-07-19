const environmentUrls = new Map();

environmentUrls.set('localhost','http://localhost:8080');
environmentUrls.set('bookstore93-ui.herokuapp.com', 'https://book-store-app93.herokuapp.com/');

export default environmentUrls.get(window.location.hostname);