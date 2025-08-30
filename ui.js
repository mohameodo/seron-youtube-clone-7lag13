function createVideoCard(video) {
    const channel = CHANNELS.find(c => c.id === video.channelId);
    const card = document.createElement('div');
    card.className = 'flex flex-col space-y-2';
    card.innerHTML = `
        <a href="watch.html?v=${video.id}" class="relative">
            <img src="${video.thumbnailUrl}" alt="${video.title}" class="w-full rounded-xl object-cover aspect-video hover:rounded-none transition-all duration-200">
            <span class="absolute bottom-1 right-1 bg-black text-white text-xs px-1.5 py-0.5 rounded">${video.duration}</span>
        </a>
        <div class="flex items-start space-x-3">
            <a href="channel.html?c=${channel.id}">
                <img src="${channel.avatarUrl}" alt="${channel.name}" class="w-9 h-9 rounded-full mt-1">
            </a>
            <div>
                <a href="watch.html?v=${video.id}" class="font-semibold text-gray-800 line-clamp-2">${video.title}</a>
                <a href="channel.html?c=${channel.id}" class="text-sm text-gray-600 hover:text-gray-900">${channel.name}</a>
                <p class="text-sm text-gray-600">${video.views} views &bull; ${video.uploadedAt}</p>
            </div>
        </div>
    `;
    return card;
}

function createVideoPlayer(video) {
    return `
        <div class="aspect-video bg-black rounded-xl overflow-hidden">
            <img src="${video.thumbnailUrl}" alt="${video.title}" class="w-full h-full object-cover">
            <!-- In a real app, this would be a <video> tag -->
        </div>
    `;
}

function createVideoDetails(video, channel) {
    return `
        <h1 class="text-xl md:text-2xl font-bold mt-4">${video.title}</h1>
        <div class="flex flex-col md:flex-row md:items-center justify-between mt-2">
            <div class="flex items-center space-x-3">
                <a href="channel.html?c=${channel.id}">
                    <img src="${channel.avatarUrl}" alt="${channel.name}" class="w-12 h-12 rounded-full">
                </a>
                <div>
                    <a href="channel.html?c=${channel.id}" class="font-semibold text-lg">${channel.name}</a>
                    <p class="text-sm text-gray-600">${channel.subscribers} subscribers</p>
                </div>
                <button class="bg-black text-white font-semibold px-4 py-2 rounded-full ml-4 hover:bg-gray-800">Subscribe</button>
            </div>
            <div class="flex items-center space-x-2 mt-4 md:mt-0">
                <button class="bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 flex items-center space-x-2">
                    <i class="fas fa-thumbs-up"></i><span>${video.likes}</span>
                </button>
                <button class="bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300">
                    <i class="fas fa-thumbs-down"></i>
                </button>
                 <button class="bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 flex items-center space-x-2">
                    <i class="fas fa-share"></i><span>Share</span>
                </button>
            </div>
        </div>
        <div class="bg-gray-200 p-4 rounded-xl mt-4">
            <p class="font-semibold">${video.views} views &bull; ${video.uploadedAt}</p>
            <p class="mt-2">${video.description}</p>
        </div>
    `;
}

function createCommentsSection(comments, videoId) {
    const commentsHtml = comments.map(comment => {
        const channel = CHANNELS.find(c => c.id === comment.channelId);
        return `
            <div class="flex items-start space-x-3 mt-4">
                <a href="channel.html?c=${channel.id}">
                    <img src="${channel.avatarUrl}" alt="${channel.name}" class="w-10 h-10 rounded-full">
                </a>
                <div>
                    <div class="flex items-center space-x-2">
                        <a href="channel.html?c=${channel.id}" class="font-semibold text-sm">@${channel.name.toLowerCase().replace(/\s+/g, '')}</a>
                        <span class="text-xs text-gray-500">${comment.timestamp}</span>
                    </div>
                    <p>${comment.text}</p>
                    <div class="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                        <button class="hover:text-gray-900"><i class="fas fa-thumbs-up"></i> ${comment.likes}</button>
                        <button class="hover:text-gray-900"><i class="fas fa-thumbs-down"></i></button>
                        <button class="font-semibold hover:text-gray-900">Reply</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    return `
        <h2 class="text-lg font-semibold">${comments.length} Comments</h2>
        <div class="flex items-start space-x-3 mt-4">
            <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Your Avatar" class="w-10 h-10 rounded-full">
            <div class="flex-1">
                <input type="text" placeholder="Add a comment..." class="w-full bg-transparent border-b-2 border-gray-300 focus:border-black focus:outline-none pb-1">
                <div class="flex justify-end space-x-4 mt-2 hidden">
                    <button class="bg-gray-200 px-4 py-2 rounded-full font-semibold hover:bg-gray-300">Cancel</button>
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600">Comment</button>
                </div>
            </div>
        </div>
        <div class="mt-6">${commentsHtml}</div>
    `;
}

function createRecommendedVideoCard(video) {
    const channel = CHANNELS.find(c => c.id === video.channelId);
    const card = document.createElement('div');
    card.className = 'flex items-start space-x-3';
    card.innerHTML = `
        <a href="watch.html?v=${video.id}" class="w-2/5">
            <img src="${video.thumbnailUrl}" alt="${video.title}" class="w-full rounded-lg object-cover aspect-video">
        </a>
        <div class="w-3/5">
            <a href="watch.html?v=${video.id}" class="font-semibold text-sm text-gray-800 line-clamp-2">${video.title}</a>
            <a href="channel.html?c=${channel.id}" class="text-xs text-gray-600 hover:text-gray-900">${channel.name}</a>
            <p class="text-xs text-gray-600">${video.views} views &bull; ${video.uploadedAt}</p>
        </div>
    `;
    return card;
}

function createChannelHeader(channel) {
    return `
        <div>
            <div class="h-32 md:h-48 bg-gray-300">
                <img src="${channel.bannerUrl}" class="w-full h-full object-cover" alt="Channel Banner">
            </div>
            <div class="p-4 md:p-6 bg-white">
                <div class="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                    <img src="${channel.avatarUrl}" class="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white -mt-12 md:-mt-16" alt="${channel.name}">
                    <div class="flex-1">
                        <h1 class="text-2xl md:text-3xl font-bold">${channel.name}</h1>
                        <p class="text-sm text-gray-600">@${channel.name.toLowerCase().replace(/\s+/g, '')} &bull; ${channel.subscribers} subscribers &bull; ${VIDEOS.filter(v => v.channelId === channel.id).length} videos</p>
                        <p class="text-sm text-gray-600 mt-1 line-clamp-2">${channel.description}</p>
                    </div>
                    <button class="bg-black text-white font-semibold px-4 py-2 rounded-full hover:bg-gray-800 w-full md:w-auto">Subscribe</button>
                </div>
            </div>
        </div>
    `;
}
