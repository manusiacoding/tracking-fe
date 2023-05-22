export default function Page() {
  return (
    <div className="my-8 mx-8">
      <div className="card w-100 bg-base-100 drop-shadow-md">
        <div className="card-body items-center text-center">
          <h3 className="card-title mb-14">Beranda Tracking</h3>
          <div class="relative w-2/4 mb-14">
            <input
              type="search"
              id="search-dropdown"
              class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-black-50 rounded-3xl border-l-black-100 border-l-2 border border-black-300"
              placeholder="Masukkan nama, no aju, komoditas, dsb"
              required
            />
            <button
              type="submit"
              class="absolute top-0 right-0 p-2.5 text-sm font-medium text-black bg-white-700 rounded-3xl border border-balck-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="card w-60 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://cdn.vox-cdn.com/thumbor/LXInRMZr79bUxYyQxOGM0_EW9Og=/0x0:2000x1284/1200x800/filters:focal(840x482:1160x802)/cdn.vox-cdn.com/uploads/chorus_image/image/56473521/pizza_shoe12.0.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <div className="card-actions justify-center">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card w-60 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://cdn.vox-cdn.com/thumbor/LXInRMZr79bUxYyQxOGM0_EW9Og=/0x0:2000x1284/1200x800/filters:focal(840x482:1160x802)/cdn.vox-cdn.com/uploads/chorus_image/image/56473521/pizza_shoe12.0.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <div className="card-actions justify-center">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card w-60 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://cdn.vox-cdn.com/thumbor/LXInRMZr79bUxYyQxOGM0_EW9Og=/0x0:2000x1284/1200x800/filters:focal(840x482:1160x802)/cdn.vox-cdn.com/uploads/chorus_image/image/56473521/pizza_shoe12.0.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <div className="card-actions justify-center">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card w-60 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://cdn.vox-cdn.com/thumbor/LXInRMZr79bUxYyQxOGM0_EW9Og=/0x0:2000x1284/1200x800/filters:focal(840x482:1160x802)/cdn.vox-cdn.com/uploads/chorus_image/image/56473521/pizza_shoe12.0.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <div className="card-actions justify-center">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card w-60 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://cdn.vox-cdn.com/thumbor/LXInRMZr79bUxYyQxOGM0_EW9Og=/0x0:2000x1284/1200x800/filters:focal(840x482:1160x802)/cdn.vox-cdn.com/uploads/chorus_image/image/56473521/pizza_shoe12.0.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <div className="card-actions justify-center">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card w-60 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://cdn.vox-cdn.com/thumbor/LXInRMZr79bUxYyQxOGM0_EW9Og=/0x0:2000x1284/1200x800/filters:focal(840x482:1160x802)/cdn.vox-cdn.com/uploads/chorus_image/image/56473521/pizza_shoe12.0.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <div className="card-actions justify-center">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
