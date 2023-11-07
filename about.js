import Image from 'next/image'

export default function about() {
  return (
<main>
   
    <div class="bg-white">
      <header class="absolute inset-x-0 top-0 z-50">
        <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Maya Tarek</span>
              <Image
              src="next/images/logo.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />            </a>
          </div>
          <div class="flex lg:hidden">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span class="sr-only">Open main menu</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div class="hidden lg:flex lg:gap-x-12">
            <a href="./index.html" class="text-sm font-semibold leading-6 text-gray-900">Home</a>
            <a href="./about.html" class="text-sm font-semibold leading-6 text-gray-900">About</a>
            <a href="./products.html" class="text-sm font-semibold leading-6 text-gray-900">Products</a>
            <a href="./reach-us.html" class="text-sm font-semibold leading-6 text-gray-900">Reach Us</a>
          </div>
          <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="./login.html" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
          </div>
        </nav>
</header>
         <div class="lg:hidden" role="dialog" aria-modal="true">
          <div class="fixed inset-0 z-50"></div>
          <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-between">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Maya Tarek</span>
                <Image
              src="/next/images/logo.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />                </a>
              <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                <span class="sr-only">Close menu</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</a>
                  <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">About</a>
                  <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Products</a>
                  <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Reach Us</a>
                </div>
                <div class="py-6">
                  <a href="./login.html" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
      <div class="bg-white">
        <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Learn More About Us</h2>
            <p class="mt-4 text-gray-500">The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated steel divider separates active cards from new ones, or can be used to archive important task lists.</p>
      
            <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div class="border-t border-gray-200 pt-4">
                <dt class="font-medium text-gray-900">Origin</dt>
                <dd class="mt-2 text-sm text-gray-500">Designed by Maya Tarek, Made By M.</dd>
              </div>
              <div class="border-t border-gray-200 pt-4">
                <dt class="font-medium text-gray-900">Materials</dt>
                <dd class="mt-2 text-sm text-gray-500">Locally Sourced materials upholding top-notch quality to maintain brand quality.</dd>
              </div>
              <div class="border-t border-gray-200 pt-4">
                <dt class="font-medium text-gray-900">Sizes</dt>
                <dd class="mt-2 text-sm text-gray-500">Most Products come in three different sizes; Large, Medium and Small.</dd>
              </div>
              <div class="border-t border-gray-200 pt-4">
                <dt class="font-medium text-gray-900">Finish</dt>
                <dd class="mt-2 text-sm text-gray-500">Hand sanded and finished with natural oil</dd>
              </div>
              <div class="border-t border-gray-200 pt-4">
                <dt class="font-medium text-gray-900">Includes</dt>
                <dd class="mt-2 text-sm text-gray-500">Wood card tray and 3 refill packs</dd>
              </div>
              <div class="border-t border-gray-200 pt-4">
                <dt class="font-medium text-gray-900">Considerations</dt>
                <dd class="mt-2 text-sm text-gray-500">Made from natural materials. Grain and color vary with each item.</dd>
              </div>
            </dl>
          </div>
          <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <Image
              src="next/images/product1.JPG"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />  
              <Image
              src="next/images/product2.JPG"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />    <Image
            src="next/images/product3.JPG"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />    <Image
          src="next/images/product4.JPG"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />   </div>
        </div>
      </div>
</main>
  );
}
