document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;

    if (path === '/' || path.endsWith('index.html')) {
        initHomePage();
    } else if (path.endsWith('watch.html')) {
        initWatchPage();
    } else if (path.endsWith('channel.html')) {
        initChannelPage();
    }
});

function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function initHomePage() {
    const videoGrid = document.getElementById('video-grid');
    if (!videoGrid) return;

    // Clear existing content
    videoGrid.innerHTML = '';

    // Populate with videos from mock data
    VIDEOS.forEach(video => {
        const videoCard = createVideoCard(video);
        videoGrid.appendChild(videoCard);
    });
}

function initWatchPage() {
    const videoId = getUrlParam('v');
    if (!videoId) {
        // Handle case where no video ID is provided
        const mainContent = document.querySelector('main');
        mainContent.innerHTML = '<p class="text-center text-red-500">Video not found. Please select a video to watch.</p>';
        return;
    }

    const video = VIDEOS.find(v => v.id === videoId);
    if (!video) {
        // Handle case where video ID is invalid
        const mainContent = document.querySelector('main');
        mainContent.innerHTML = '<p class="text-center text-red-500">Invalid video ID.</p>';
        return;
    }

    const channel = CHANNELS.find(c => c.id === video.channelId);
    const comments = COMMENTS.filter(c => c.videoId === videoId);

    // Render main video player and details
    document.getElementById('video-player-container').innerHTML = createVideoPlayer(video);
    document.getElementById('video-details-container').innerHTML = createVideoDetails(video, channel);

    // Render comments
    const commentsContainer = document.getElementById('comments-container');
    commentsContainer.innerHTML = createCommentsSection(comments, videoId);

    // Render recommended videos
    const recommendedContainer = document.getElementById('recommended-videos-container');
    const recommendedVideos = VIDEOS.filter(v => v.id !== videoId).slice(0, 10); // Simple recommendation: other videos
    recommendedContainer.innerHTML = '';
    recommendedVideos.forEach(recVideo => {
        recommendedContainer.appendChild(createRecommendedVideoCard(recVideo));
    });
}

function initChannelPage() {
    const channelId = getUrlParam('c');
    if (!channelId) {
        document.querySelector('main').innerHTML = '<p class="text-center text-red-500">Channel not found.</p>';
        return;
    }

    const channel = CHANNELS.find(c => c.id === channelId);
    if (!channel) {
        document.querySelector('main').innerHTML = '<p class="text-center text-red-500">Invalid channel ID.</p>';
        return;
    }

    const channelVideos = VIDEOS.filter(v => v.channelId === channelId);

    document.getElementById('channel-header-container').innerHTML = createChannelHeader(channel);

    const videosContainer = document.getElementById('channel-videos-container');
    videosContainer.innerHTML = '';
    if (channelVideos.length > 0) {
        channelVideos.forEach(video => {
            videosContainer.appendChild(createVideoCard(video));
        });
    } else {
        videosContainer.innerHTML = '<p class="text-gray-500">This channel has no videos yet.</p>';
    }
}
