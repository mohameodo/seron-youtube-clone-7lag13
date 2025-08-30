import { videos, users, comments } from '../data.js';

export function renderWatchPage(container) {
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get('v');
    const video = videos.find(v => v.id === videoId);

    if (!video) {
        container.innerHTML = `<p class="text-center text-red-500">Video not found!</p>`;
        return;
    }

    const channel = users[video.channelId];
    const videoComments = comments[video.id] || [];
    const suggestedVideos = videos.filter(v => v.id !== videoId).slice(0, 8);

    container.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div class="lg:col-span-2">
                <!-- Video Player -->
                <div class="aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
                     <img src="${video.thumbnailUrl.replace('400x225', '1280x720')}" class="w-full h-full object-cover" alt="Video player placeholder" />
                </div>

                <!-- Video Info -->
                <div class="mt-4">
                    <h1 class="text-xl md:text-2xl font-bold">${video.title}</h1>
                    <div class="flex flex-wrap items-center justify-between mt-4">
                        <div class="flex items-center space-x-4">
                            <a href="channel.html?c=${video.channelId}">
                                <img src="${channel.channelAvatarUrl}" class="w-12 h-12 rounded-full" alt="${channel.channelName}">
                            </a>
                            <div>
                                <a href="channel.html?c=${video.channelId}" class="font-semibold text-lg">${channel.channelName}</a>
                                <p class="text-sm text-gray-600">${channel.subscribers} subscribers</p>
                            </div>
                            <button class="bg-gray-900 text-white font-semibold px-4 py-2 rounded-full ml-4 hover:bg-gray-700">Subscribe</button>
                        </div>
                        <div class="flex items-center space-x-2 mt-4 sm:mt-0">
                            <button class="bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 flex items-center gap-2"><i class="fas fa-thumbs-up"></i> 123K</button>
                            <button class="bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300"><i class="fas fa-thumbs-down"></i></button>
                            <button class="bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 flex items-center gap-2"><i class="fas fa-share"></i> Share</button>
                            <button class="bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300"><i class="fas fa-ellipsis-h"></i></button>
                        </div>
                    </div>
                </div>

                <!-- Description -->
                <div class="bg-gray-100 p-4 rounded-xl mt-4">
                    <p class="font-semibold">${video.views} views &bull; ${video.uploadDate}</p>
                    <p class="mt-2 description-text collapsed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.</p>
                </div>

                <!-- Comments Section -->
                <div class="mt-6">
                    <h2 class="text-lg font-bold mb-4">${videoComments.length} Comments</h2>
                    <div class="space-y-4">
                        ${videoComments.map(comment => `
                            <div class="flex items-start space-x-3">
                                <img src="${comment.userAvatarUrl}" class="w-10 h-10 rounded-full" alt="${comment.userName}">
                                <div>
                                    <p class="font-semibold text-sm">@${comment.userName.toLowerCase()} <span class="text-gray-500 font-normal ml-2">${comment.timestamp}</span></p>
                                    <p>${comment.commentText}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- Suggested Videos -->
            <div class="lg:col-span-1 space-y-4">
                ${suggestedVideos.map(sv => `
                    <a href="watch.html?v=${sv.id}" class="flex items-start space-x-3 group">
                        <div class="w-40 flex-shrink-0">
                             <img src="${sv.thumbnailUrl}" class="w-full rounded-lg" alt="${sv.title}">
                        </div>
                        <div>
                             <h4 class="font-medium text-sm group-hover:text-blue-600">${sv.title}</h4>
                             <p class="text-xs text-gray-600 mt-1">${users[sv.channelId].channelName}</p>
                             <p class="text-xs text-gray-600">${sv.views} views</p>
                        </div>
                    </a>
                `).join('')}
            </div>
        </div>
    `;
}