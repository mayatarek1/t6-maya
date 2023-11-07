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
              className="h-8 w-auto"
              width={100}
              height={24}
              priority
            />              </a>
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
        <div class="lg:hidden" role="dialog" aria-modal="true">
          <div class="fixed inset-0 z-50"></div>
          <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-between">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Maya Tarek</span>
                <Image
              src="next/images/logo.png"
              alt="Vercel Logo"
              className="h-8 w-auto"
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
      </header>
  </div>


    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="sr-only">Products</h2>

        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <div class="group">
            <a href="./productdetails.html" id="product-modal-1" class="group" >
                      <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <Image
              src="next/images/product1.JPG"
              alt="Vercel Logo"
              className="h-full w-full object-cover object-center group-hover:opacity-75"
              width={100}
              height={24}
              priority
            />                        </div>
                      <h3 class="mt-4 text-sm text-gray-700">Heart Frame</h3>
                      <p class="mt-1 text-lg font-medium text-gray-900">200EGP</p>

                  </a>

            <div class="mt-4 flex items-center">
              <button class="px-3 py-1 text-sm bg-purple-500 text-white" onclick="decrementQuantity(this)">-</button>
              <span class="px-3 py-1 text-sm bg-gray-200">1</span>
              <button class="px-3 py-1 text-sm bg-purple-500 text-white" onclick="incrementQuantity(this)">+</button>
          </div>
          </div> 
          </div>
   <div>
    <a href="./productdetails.html" id="product-modal-2" class="group">
      <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
      <Image
              src="next/images/product2.JPG"
              alt="Vercel Logo"
              className="h-full w-full object-cover object-center group-hover:opacity-75"
              width={100}
              height={24}
              priority
            />        </div>
      <h3 class="mt-4 text-sm text-gray-700">Open When Letters</h3>
      <p class="mt-1 text-lg font-medium text-gray-900">200EGP</p>

  </a>
                <div class="mt-4 flex items-center">
                    <button class="px-3 py-1 text-sm bg-purple-500 text-white" onclick="decrementQuantity(this)">-</button>
                    <span class="px-3 py-1 text-sm bg-gray-200">1</span>
                    <button class="px-3 py-1 text-sm bg-purple-500 text-white" onclick="incrementQuantity(this)">+</button>
                </div>
   </div>

<div>
  <a href="./productdetails.html"id="product-modal-3" class="group">
    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
    <Image
              src="next/images/product3.JPG"
              alt="Vercel Logo"
              className="h-full w-full object-cover object-center group-hover:opacity-75"
              width={100}
              height={24}
              priority
              />
    </div>
    <h3 class="mt-4 text-sm text-gray-700">Music Plaque</h3>
    <p class="mt-1 text-lg font-medium text-gray-900">200EGP</p>
  
</a>
                <div class="mt-4 flex items-center">
                    <button class="px-3 py-1 text-sm bg-purple-500 text-white" onclick="decrementQuantity(this)">-</button>
                    <span class="px-3 py-1 text-sm bg-gray-200">1</span>
                    <button class="px-3 py-1 text-sm bg-purple-500 text-white" onclick="incrementQuantity(this)">+</button>
                </div>
</div>
          
            <div> 
              <a href="./productdetails.html" id="product-modal-4"class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
              src="next/images/product4.JPG"
              alt="Vercel Logo"
              className="h-full w-full object-cover object-center group-hover:opacity-75"
              width={100}
              height={24}
              priority
            />                         
                </div>
                <h3 class="mt-4 text-sm text-gray-700">Bulb Messages</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">200EGP</p>
        
            </a>
                <div class="mt-4 flex items-center">
                    <button class="px-3 py-1 text-sm bg-purple-500 text-white" onclick="decrementQuantity(this)">-</button>
                    <span class="px-3 py-1 text-sm bg-gray-200">1</span>
                    <button class="px-3 py-1 text-sm bg-purple-500 text-white" onclick="incrementQuantity(this)">+</button>
                </div>
            </div>
       
    </div>
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

    <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      <div class="group">
        <a href="./productdetails.html" id="product-modal-5" class="group" >
                  <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Image
              src="next/images/product5.JPG"
              alt="Vercel Logo"
              className="h-full w-full object-cover object-center group-hover:opacity-75"
              width={100}
              height={24}
              priority
            />                    </div>
                  <h3 class="mt-4 text-sm text-gray-700">Gift Box</h3>
                  <p class="mt-1 text-lg font-medium text-gray-900">200EGP</p>

              </a>

        <div class="mt-4 flex items-center">
          <button class="px-3 py-1 text-sm bg-purple-500 text-white" onclick="decrementQuantity(this)">-</button>
          <span class="px-3 py-1 text-sm bg-gray-200">1</span>
          <button class="px-3 py-1 text-sm bg-purple-500 text-white" onclick="incrementQuantity(this)">+</button>
      </div>
      </div> 
       <div>
<a href="./productdetails.html" id="product-modal-6" class="group">
  <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
  <Image
              src="next/images/product6.JPG"
              alt="Vercel Logo"
              className="h-full w-full object-cover object-center group-hover:opacity-75"
              width={100}
              height={24}
              priority
            />    </div>
  <h3 class="mt-4 text-sm text-gray-700">Music Keychain</h3>
  <p class="mt-1 text-lg font-medium text-gray-900">200EGP</p>

</a>
            <div class="mt-4 flex items-center">
                <button class="px-3 py-1 text-sm bg-purple-500 text-white" onclick="decrementQuantity(this)">-</button>
                <span class="px-3 py-1 text-sm bg-gray-200">1</span>
                <button class="px-3 py-1 text-sm bg-purple-500 text-white" onclick="incrementQuantity(this)">+</button>
            </div>
    </div>

   <div>
<a href="./productdetails.html"id="product-modal-7" class="group">
<div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
<Image
              src="next/images/product8.JPG"
              alt="Vercel Logo"
              className="h-full w-full object-cover object-center group-hover:opacity-75"
              width={100}
              height={24}
              priority
            />          
</div>
<h3 class="mt-4 text-sm text-gray-700">Music Cover</h3>
<p class="mt-1 text-lg font-medium text-gray-900">200EGP</p>

</a>
            <div class="mt-4 flex items-center">
                <button class="px-3 py-1 text-sm bg-purple-500 text-white" onclick="decrementQuantity(this)">-</button>
                <span class="px-3 py-1 text-sm bg-gray-200">1</span>
                <button class="px-3 py-1 text-sm bg-purple-500 text-white" onclick="incrementQuantity(this)">+</button>
            </div>
  </div>
      
        <div> 
          <a href="./productdetails.html" id="product-modal-8"class="group">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <Image
              src="next/images/product8.JPG"
              alt="Vercel Logo"
              className="h-full w-full object-cover object-center group-hover:opacity-75"
              width={100}
              height={24}
              priority
            />                     
            </div>
            <h3 class="mt-4 text-sm text-gray-700">Lipgloss</h3>
            <p class="mt-1 text-lg font-medium text-gray-900">200EGP</p>
    
        </a>
            <div class="mt-4 flex items-center">
                <button class="px-3 py-1 text-sm bg-purple-500 text-white" onclick="decrementQuantity(this)">-</button>
                <span class="px-3 py-1 text-sm bg-gray-200">1</span>
                <button class="px-3 py-1 text-sm bg-purple-500 text-white" onclick="incrementQuantity(this)">+</button>
            </div>
        </div>
   
  </div>
</div>
  </main>

);
}

