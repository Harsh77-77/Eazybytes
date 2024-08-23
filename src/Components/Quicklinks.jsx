import React from 'react'

const Quicklinks = () => {
  return (
    
<footer class=" rounded-tl-3xl -mt-28 md:-mt-24 lg:-mt-24 shadow dark:bg-gray-900 m-">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-20">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="#" class="flex items-center mb-12 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://banner2.cleanpng.com/20180606/hau/aa9xa43pe.webp" class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Quick Links</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 space-x-5">
                <li>
                    <a href="https://www.linkedin.com/in/harsh-singh-4z/" target="_blank" class="hover:underline me-4 md:me-6">LinkedIN</a>
                </li>
                <li>
                    <a href="https://github.com/Harsh77-77" target="_blank" class="hover:underline me-4 md:me-6">GIThub</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Twitter</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Upwork</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" class="hover:underline">Keep Learning</a>. All Rights Reserved.</span>
    </div>
</footer>
  )
}

export default Quicklinks