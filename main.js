import { renderHeader } from './components/header.js';
import { renderVideoGrid } from './components/videoGrid.js';
import { renderWatchPage } from './components/watchPage.js';
import { renderChannelPage } from './components/channelPage.js';

document.addEventListener('DOMContentLoaded', () => {
    const headerContainer = document.getElementById('app-header');
    if (headerContainer) {
        headerContainer.innerHTML = renderHeader();
    }

    const path = window.location.pathname;

    if (path.includes('index.html') || path === '/') {
        const videoGridContainer = document.getElementById('video-grid');
        if (videoGridContainer) {
            renderVideoGrid(videoGridContainer);
        }
    } else if (path.includes('watch.html')) {
        const watchPageContainer = document.getElementById('watch-page-content');
        if (watchPageContainer) {
            renderWatchPage(watchPageContainer);
        }
    } else if (path.includes('channel.html')) {
        const channelPageContainer = document.getElementById('channel-page-content');
        if (channelPageContainer) {
            renderChannelPage(channelPageContainer);
        }
    }
});