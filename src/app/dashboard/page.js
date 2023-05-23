export default function Page() {
  return (
    <div class="my-8 mx-8">
      <div class="card card-compact w-100 bg-base-100 drop-shadow-md">
        <div class="card-body items-center text-center">
          <h2 className="card-title">Beranda Tracking</h2>

          <div class="relative w-2/4">
            <input
              type="search"
              id="search-dropdown"
              class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-black-50 rounded-3xl border-l-black-100 border-l-2 border border-black-300"
              placeholder="Masukkan nama, no aju, komoditas, dsb"
              required
            />
            <button
              type="submit"
              class="absolute top-0 right-0 p-2.5 text-sm font-medium text-black bg-white-700 rounded-r-lg border border-balck-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none"
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

          <div class="grid grid-cols-3 gap-2">
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
              <div class="card-body">
                <img
                  src="https://e7.pngegg.com/pngimages/309/782/png-clipart-computer-icons-report-chart-others-text-logo.png"
                  className="max-h-32"
                ></img>
                <h2 class="card-title justify-center">Data Entitas</h2>
              </div>
            </div>

            <div class="card card-compact w-96 bg-base-100 shadow-xl">
              <div class="card-body">
                <img
                  src="https://e7.pngegg.com/pngimages/309/782/png-clipart-computer-icons-report-chart-others-text-logo.png"
                  className="max-h-32"
                ></img>
                <h2 class="card-title justify-center">Data Pengajuan</h2>
              </div>
            </div>

            <div class="card card-compact w-96 bg-base-100 shadow-xl">
              <div class="card-body">
                <img
                  src="https://e7.pngegg.com/pngimages/309/782/png-clipart-computer-icons-report-chart-others-text-logo.png"
                  className="max-h-32"
                ></img>
                <h2 class="card-title justify-center">Data Komoditas</h2>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-2">
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
              <div class="card-body">
                <img
                  src="https://e7.pngegg.com/pngimages/309/782/png-clipart-computer-icons-report-chart-others-text-logo.png"
                  className="max-h-32"
                ></img>
                <h2 class="card-title justify-center">Data Pengangkut</h2>
              </div>
            </div>

            <div class="card card-compact w-96 bg-base-100 shadow-xl">
              <div class="card-body">
                <img
                  src="https://e7.pngegg.com/pngimages/309/782/png-clipart-computer-icons-report-chart-others-text-logo.png"
                  className="max-h-32"
                ></img>
                <h2 class="card-title justify-center">Data Dokumen</h2>
              </div>
            </div>

            <div class="card card-compact w-96 bg-base-100 shadow-xl">
              <div class="card-body">
                <img
                  src="https://e7.pngegg.com/pngimages/309/782/png-clipart-computer-icons-report-chart-others-text-logo.png"
                  className="max-h-32"
                ></img>
                <h2 class="card-title justify-center">Data Persetujuan KL</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
