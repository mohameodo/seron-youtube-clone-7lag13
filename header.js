export function renderHeader() {
    return `
        <a href="index.html" class="flex items-center gap-2">
            <i class="fab fa-youtube text-2xl text-red-600"></i>
            <span class="font-bold text-xl text-gray-800">VidHere</span>
        </a>
        <div class="hidden sm:flex items-center w-full max-w-md mx-4">
            <input type="text" placeholder="Search" class="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            <button class="bg-gray-100 px-5 py-2 border-t border-b border-r border-gray-300 rounded-r-full hover:bg-gray-200">
                <i class="fas fa-search text-gray-600"></i>
            </button>
        </div>
        <div class="flex items-center gap-4">
            <button class="sm:hidden text-gray-600 hover:text-gray-900">
                <i class="fas fa-search text-xl"></i>
            </button>
            <button class="text-gray-600 hover:text-gray-900">
                <i class="fas fa-video text-xl"></i>
            </button>
            <button class="text-gray-600 hover:text-gray-900">
                <i class="fas fa-bell text-xl"></i>
            </button>
            <img src="https://i.pravatar.cc/150?u=currentUser" alt="User Avatar" class="w-8 h-8 rounded-full cursor-pointer">
        </div>
    `;
}