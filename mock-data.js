const CHANNELS = [
    {
        id: 'c1',
        name: 'CodeMasters',
        avatarUrl: 'https://i.pravatar.cc/150?u=c1',
        bannerUrl: 'https://picsum.photos/seed/c1-banner/1280/280',
        subscribers: '1.2M',
        description: 'Your one-stop channel for learning web development. From HTML to advanced JavaScript frameworks, we cover it all. Join us and become a coding master!'
    },
    {
        id: 'c2',
        name: 'GourmetJourney',
        avatarUrl: 'https://i.pravatar.cc/150?u=c2',
        bannerUrl: 'https://picsum.photos/seed/c2-banner/1280/280',
        subscribers: '850K',
        description: 'Exploring the world one dish at a time. We bring you the best recipes, cooking techniques, and food stories from around the globe. Subscribe for a delicious journey!'
    },
    {
        id: 'c3',
        name: 'PixelPerfect',
        avatarUrl: 'https://i.pravatar.cc/150?u=c3',
        bannerUrl: 'https://picsum.photos/seed/c3-banner/1280/280',
        subscribers: '2.5M',
        description: 'Tutorials, tips, and inspiration for digital artists and designers. We cover everything from Photoshop and Illustrator to Procreate and Figma.'
    },
    {
        id: 'c4',
        name: 'TechUnboxed',
        avatarUrl: 'https://i.pravatar.cc/150?u=c4',
        bannerUrl: 'https://picsum.photos/seed/c4-banner/1280/280',
        subscribers: '5.1M',
        description: 'The latest and greatest in tech, unboxed and reviewed. We give you honest opinions on smartphones, laptops, gadgets, and more.'
    }
];

const VIDEOS = [
    {
        id: 'v1',
        title: 'Building a Modern Website with Tailwind CSS',
        thumbnailUrl: 'https://picsum.photos/seed/v1/400/225',
        duration: '18:24',
        channelId: 'c1',
        views: '150K',
        likes: '8.1K',
        uploadedAt: '2 weeks ago',
        description: 'In this tutorial, we will build a beautiful, responsive landing page from scratch using Tailwind CSS. We will cover utility-first concepts, responsive design, and customizing your theme.'
    },
    {
        id: 'v2',
        title: 'The Perfect Sourdough Bread | Step-by-Step Guide',
        thumbnailUrl: 'https://picsum.photos/seed/v2/400/225',
        duration: '25:10',
        channelId: 'c2',
        views: '1.2M',
        likes: '45K',
        uploadedAt: '1 month ago',
        description: 'Master the art of sourdough bread with our comprehensive guide. We will walk you through every step, from feeding your starter to getting that perfect crust and crumb.'
    },
    {
        id: 'v3',
        title: 'Creating Stunning Illustrations in Procreate',
        thumbnailUrl: 'https://picsum.photos/seed/v3/400/225',
        duration: '35:50',
        channelId: 'c3',
        views: '890K',
        likes: '32K',
        uploadedAt: '3 weeks ago',
        description: 'Unlock your creativity with Procreate! This tutorial covers brushes, layers, color palettes, and advanced techniques to help you create professional-grade digital illustrations.'
    },
    {
        id: 'v4',
        title: 'The M2 MacBook Air Review: Almost Perfect!',
        thumbnailUrl: 'https://picsum.photos/seed/v4/400/225',
        duration: '15:05',
        channelId: 'c4',
        views: '3.1M',
        likes: '150K',
        uploadedAt: '1 week ago',
        description: 'We have spent a month with the new M2 MacBook Air. Is it the best laptop for most people? We dive into performance, battery life, design, and its biggest pros and cons.'
    },
    {
        id: 'v5',
        title: 'JavaScript Promises in 10 Minutes',
        thumbnailUrl: 'https://picsum.photos/seed/v5/400/225',
        duration: '10:15',
        channelId: 'c1',
        views: '300K',
        likes: '12K',
        uploadedAt: '3 days ago',
        description: 'Confused by asynchronous JavaScript? This quick tutorial breaks down Promises in a simple, easy-to-understand way. Learn .then(), .catch(), and .finally() with practical examples.'
    },
    {
        id: 'v6',
        title: 'Homemade Pasta from Scratch - 3 Simple Shapes',
        thumbnailUrl: 'https://picsum.photos/seed/v6/400/225',
        duration: '12:45',
        channelId: 'c2',
        views: '550K',
        likes: '28K',
        uploadedAt: '5 days ago',
        description: 'Ditch the store-bought pasta! Learn how to make fresh, delicious pasta at home with just two ingredients. We will show you how to make three classic shapes: fettuccine, farfalle, and orecchiette.'
    },
    {
        id: 'v7',
        title: 'Figma Crash Course for Beginners 2024',
        thumbnailUrl: 'https://picsum.photos/seed/v7/400/225',
        duration: '45:00',
        channelId: 'c3',
        views: '1.1M',
        likes: '50K',
        uploadedAt: '2 months ago',
        description: 'Everything you need to know to get started with Figma. This comprehensive crash course covers the interface, tools, prototyping, and collaboration features.'
    },
    {
        id: 'v8',
        title: 'The Ultimate Smart Home Tour 2024!',
        thumbnailUrl: 'https://picsum.photos/seed/v8/400/225',
        duration: '22:30',
        channelId: 'c4',
        views: '2.5M',
        likes: '95K',
        uploadedAt: '3 weeks ago',
        description: 'Come take a tour of our fully automated smart home. We showcase the best smart lights, speakers, security cameras, and other gadgets that make life easier and more fun.'
    }
];

const COMMENTS = [
    { id: 'cm1', videoId: 'v1', channelId: 'c2', text: 'Great tutorial! Super clear and easy to follow.', likes: 150, timestamp: '1 week ago' },
    { id: 'cm2', videoId: 'v1', channelId: 'c3', text: 'This completely changed how I approach my CSS. Thank you!', likes: 88, timestamp: '1 week ago' },
    { id: 'cm3', videoId: 'v2', channelId: 'c1', text: 'My sourdough turned out amazing because of this video!', likes: 250, timestamp: '2 weeks ago' },
    { id: 'cm4', videoId: 'v4', channelId: 'c1', text: 'Awesome review. Very balanced and informative.', likes: 400, timestamp: '3 days ago' },
    { id: 'cm5', videoId: 'v4', channelId: 'c3', text: 'Thinking of getting this for my design work. Your review helped a lot!', likes: 120, timestamp: '2 days ago' }
];
