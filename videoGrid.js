import { videos, users } from '../data.js';

function createVideoCard(video) {
    const channel = users[video.channelId];
    return `
        <a href="watch.html?v=${video.id}" class="video-card group">
            <div class="relative">
                <img src="${video.thumbnailUrl}" alt="${video.title}" class="w-full rounded-lg object-cover video-card-thumbnail">
                <span class="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">${video.duration}</span>
            </div>
            <div class="flex items-start mt-3">
                <a href="channel.html?c=${video.channelId}" class="flex-shrink-0">
                     <img src="${channel.channelAvatarUrl}" alt="${channel.channelName}" class="w-9 h-9 rounded-full mr-3">
                </a>
                <div>
                    <h3 class="text-base font-medium text-gray-900 group-hover:text-blue-600 transition-colors">${video.title}</h3>
                    <p class="text-sm text-gray-600 mt-1">${channel.channelName}</p>
                    <p class="text-sm text-gray-600">${video.views} views &bull; ${video.uploadDate}</p>
                </div>
            </div>
        </a>
    `;
}

export function renderVideoGrid(container) {
    container.innerHTML = videos.map(createVideoCard).join('');
}