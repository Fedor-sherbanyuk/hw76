class AlbumApp {
    constructor() {
        this.albumList = document.querySelector('.album-list');
        this.init();
    }

    async fetchAlbums() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/albums');
            const albums = await response.json();
            return albums;
        } catch (error) {
            console.error('Error fetching albums:', error);
        }
    }

    renderAlbums(albums) {
        albums.forEach(album => {
            const albumElement = document.createElement('a');
            albumElement.className = 'album';
            albumElement.textContent = album.id + ' ' + album.title;
            albumElement.href = `album-photo.html?albumId=${album.id}`;
            this.albumList.appendChild(albumElement);
        });
    }
    async init() {
        const photos = await this.fetchAlbums();
        this.renderAlbums(photos);
    }
}
const app = new AlbumApp();