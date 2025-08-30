import { videos, users } from '../data.js';

export function renderChannelPage(container) {
    const urlParams = new URLSearchParams(window.location.search);
    const channelId = urlParams.get('c');
    const channel = users[channelId];
    
    if (!channel) {
        container.innerHTML = `<p class="text-center text-red-500">Channel not found!</p>`;
        return;
    }

    const channelVideos = videos.filter(v => v.channelId === channelId);

    container.innerHTML = `
        <!-- Banner -->
        <div class="h-32 md:h-48 lg:h-64 bg-cover bg-center" style="background-image: url('${channel.bannerUrl}')"></div>

        <!-- Channel Info -->
        <div class="px-4 md:px-6 lg:px-8">
            <div class="flex flex-col sm:flex-row items-center sm:items-end -mt-12 sm:-mt-16">
                <img src="${channel.channelAvatarUrl}" alt="${channel.channelName}" class="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-gray-50 bg-gray-50">
                <div class="sm:ml-6 mt-4 sm:mt-0 text-center sm:text-left">
                    <h1 class="text-2xl md:text-3xl font-bold">${channel.channelName}</h1>
                    <p class="text-gray-600">@${channel.channelName.toLowerCase()} &bull; ${channel.subscribers} subscribers &bull; ${channelVideos.length} videos</p>
                </div>
                <button class="bg-gray-900 text-white font-semibold px-5 py-2 rounded-full mt-4 sm:mt-0 sm:ml-auto hover:bg-gray-700">Subscribe</button>
            </div>
        </div>

        <!-- Channel Content -->
        <div class="mt-8 px-4 md:px-6 lg:px-8">
             <h2 class="text-xl font-bold mb-4">Uploads</h2>
             <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8">
                ${channelVideos.map(video => `
                    <a href="watch.html?v=${video.id}" class="video-card group">
                        <div class="relative">
                            <img src="${video.thumbnailUrl}" alt="${video.title}" class="w-full rounded-lg object-cover video-card-thumbnail">
                            <span class="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">${video.duration}</span>
                        </div>
                        <div class="mt-3">
                            <h3 class="text-base font-medium text-gray-900 group-hover:text-blue-600 transition-colors">${video.title}</h3>
                            <p class="text-sm text-gray-600 mt-1">${video.views} views &bull; ${video.uploadDate}</p>
                        </div>
                    </a>
                `).join('')}
             </div>
        </div>
    `;
}