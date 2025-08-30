import { channels, videos, comments } from './mock-data.js';

document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;

    if (path === '/' || path.endsWith('index.html')) {
        renderHomePage();
    } else if (path.endsWith('watch.html')) {
        renderWatchPage();
    } else if (path.endsWith('channel.html')) {
        renderChannelPage();
    }
});

const formatViews = (views) => {
    const num = parseInt(views.replace(/,/g, ''));
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M views';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K views';
    return num + ' views';
};

function renderHomePage() {
    const videoGrid = document.getElementById('video-grid');
    if (!videoGrid) return;

    videoGrid.innerHTML = videos.map(video => {
        const channel = channels.find(c => c.id === video.channelId);
        return `
            <div class="flex flex-col group">
                <a href="/watch.html?v=${video.id}" class="relative">
                    <img src="${video.thumbnail}" alt="${video.title}" class="w-full h-auto object-cover rounded-xl group-hover:rounded-none transition-all duration-200">
                    <span class="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">${video.duration}</span>
                </a>
                <div class="flex items-start mt-3">
                    <a href="/channel.html?c=${channel.id}">
                        <img src="${channel.avatar}" alt="${channel.name}" class="w-9 h-9 rounded-full mr-3 shrink-0">
                    </a>
                    <div>
                        <h3 class="text-base font-medium leading-tight line-clamp-2">
                            <a href="/watch.html?v=${video.id}" class="hover:text-gray-900">${video.title}</a>
                        </h3>
                        <p class="text-sm text-gray-600 mt-1">
                            <a href="/channel.html?c=${channel.id}" class="hover:text-gray-900">${channel.name}</a>
                        </p>
                        <p class="text-sm text-gray-600">${video.views} &bull; ${video.uploadDate}</p>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function renderWatchPage() {
    const params = new URLSearchParams(window.location.search);
    const videoId = parseInt(params.get('v'));
    const video = videos.find(v => v.id === videoId);

    if (!video) {
        // Handle video not found
        return;
    }

    const channel = channels.find(c => c.id === video.channelId);
    const mainContent = document.getElementById('main-content');
    const recommendedVideosContainer = document.getElementById('recommended-videos');

    // Render Main Content
    mainContent.innerHTML = `
        <div class="aspect-video bg-black rounded-xl overflow-hidden">
             <img src="${video.thumbnail.replace('400x225', '1280x720')}" alt="${video.title}" class="w-full h-full object-cover">
        </div>
        <h1 class="text-xl font-bold mt-4">${video.title}</h1>
        <div class="flex flex-col sm:flex-row sm:items-center justify-between mt-4">
            <div class="flex items-center space-x-3">
                <a href="/channel.html?c=${channel.id}"><img src="${channel.avatar}" class="w-10 h-10 rounded-full"></a>
                <div>
                    <a href="/channel.html?c=${channel.id}" class="font-semibold">${channel.name}</a>
                    <p class="text-sm text-gray-600">${channel.subscribers} subscribers</p>
                </div>
                <button class="bg-black text-white px-4 py-2 rounded-full ml-4 font-semibold text-sm">Subscribe</button>
            </div>
            <div class="flex items-center space-x-2 mt-4 sm:mt-0">
                <button class="bg-gray-100 px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-200">
                    <i class="fas fa-thumbs-up"></i><span>12K</span>
                </button>
                <button class="bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200"><i class="fas fa-thumbs-down"></i></button>
                <button class="bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200"><i class="fas fa-share"></i> Share</button>
            </div>
        </div>
        <div class="bg-gray-100 p-4 rounded-xl mt-4">
            <p class="font-semibold">${video.views} &bull; ${video.uploadDate}</p>
            <p class="mt-2 text-sm">${video.description}</p>
        </div>
        <!-- Comments Section -->
        <div class="mt-6">
            <h2 class="text-lg font-bold">Comments</h2>
            ${renderComments(videoId)}
        </div>
    `;

    // Render Recommended Videos
    recommendedVideosContainer.innerHTML = videos
        .filter(v => v.id !== videoId)
        .map(recVideo => {
            const recChannel = channels.find(c => c.id === recVideo.channelId);
            return `
            <a href="/watch.html?v=${recVideo.id}" class="flex group items-start space-x-3 mb-4">
                <div class="w-40 shrink-0">
                    <img src="${recVideo.thumbnail}" alt="${recVideo.title}" class="w-full h-auto object-cover rounded-lg group-hover:rounded-none transition-all duration-200">
                </div>
                <div>
                     <h4 class="text-sm font-semibold leading-tight line-clamp-2">${recVideo.title}</h4>
                     <p class="text-xs text-gray-600 mt-1">${recChannel.name}</p>
                     <p class="text-xs text-gray-600">${recVideo.views} &bull; ${recVideo.uploadDate}</p>
                </div>
            </a>
            `;
        }).join('');
}

function renderComments(videoId) {
    const videoComments = comments.filter(c => c.videoId === videoId);
    return videoComments.map(comment => {
        const channel = channels.find(c => c.id === comment.channelId);
        return `
        <div class="flex items-start space-x-3 mt-4">
            <img src="${channel.avatar}" class="w-9 h-9 rounded-full">
            <div>
                <p class="text-sm"><span class="font-semibold">${channel.name}</span> <span class="text-gray-500">${comment.timestamp}</span></p>
                <p>${comment.comment}</p>
                <div class="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                    <button class="hover:text-gray-900"><i class="fas fa-thumbs-up"></i> ${comment.likes}</button>
                    <button class="hover:text-gray-900"><i class="fas fa-thumbs-down"></i></button>
                    <button class="hover:text-gray-900 font-semibold">Reply</button>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

function renderChannelPage() {
    const params = new URLSearchParams(window.location.search);
    const channelId = parseInt(params.get('c'));
    const channel = channels.find(c => c.id === channelId);
    const channelVideos = videos.filter(v => v.channelId === channelId);

    if (!channel) return;

    const mainContent = document.getElementById('channel-main-content');
    mainContent.innerHTML = `
        <div>
            <img src="${channel.banner}" class="w-full h-32 md:h-48 object-cover">
        </div>
        <div class="px-4 sm:px-6 lg:px-8">
            <div class="flex items-end -mt-12 md:-mt-16">
                <img src="${channel.avatar.replace('48', '160')}" class="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white bg-white">
                <div class="ml-4 mb-2">
                    <h1 class="text-2xl md:text-3xl font-bold">${channel.name}</h1>
                    <p class="text-sm text-gray-600">${channel.subscribers} subscribers</p>
                </div>
                <button class="bg-black text-white px-4 py-2 rounded-full ml-auto mb-2 font-semibold text-sm">Subscribe</button>
            </div>
            <div class="mt-4 border-b border-gray-200">
                <nav class="-mb-px flex space-x-8">
                    <a href="#" class="whitespace-nowrap py-4 px-1 border-b-2 border-black font-medium text-sm">Videos</a>
                    <a href="#" class="whitespace-nowrap py-4 px-1 border-b-2 border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700 font-medium text-sm">About</a>
                </nav>
            </div>
        </div>
        <div class="p-4 sm:p-6 lg:p-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8">
                ${channelVideos.map(video => `
                    <div class="flex flex-col group">
                        <a href="/watch.html?v=${video.id}" class="relative">
                             <img src="${video.thumbnail}" alt="${video.title}" class="w-full h-auto object-cover rounded-xl group-hover:rounded-none transition-all duration-200">
                             <span class="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">${video.duration}</span>
                        </a>
                        <div class="mt-3">
                            <h3 class="text-base font-medium leading-tight line-clamp-2">
                                <a href="/watch.html?v=${video.id}" class="hover:text-gray-900">${video.title}</a>
                            </h3>
                            <p class="text-sm text-gray-600 mt-1">${video.views} &bull; ${video.uploadDate}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}
