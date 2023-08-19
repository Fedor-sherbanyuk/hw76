class AlbumDetailApp {
    constructor(albumId) {
        this.albumDetail = document.querySelector('.album-photo');
        this.albumId = albumId;
        this.init();
    }

    async fetchPhotos() {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${this.albumId}`);
            const photos = await response.json();
            return photos;
        } catch (error) {
            console.error('Error fetching photos:', error);
        }
    }

    renderPhotos(photos) {
        photos.forEach(photo => {
            const photoElement = document.createElement('img');
            photoElement.src = photo.thumbnailUrl;
            photoElement.alt = photo.title;
            this.albumDetail.appendChild(photoElement);
        });
    }

    async init() {
        const photos = await this.fetchPhotos();
        this.renderPhotos(photos);
    }
}

const urlParams = new URLSearchParams(window.location.search);
const albumId = urlParams.get('albumId');

const albumDetailApp = new AlbumDetailApp(albumId);
