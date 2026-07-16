export default function TopNavbar() {
  return (
    <header className="flex justify-between items-center w-full px-gutter h-16 sticky top-0 z-50 bg-surface border-b border-outline-variant">
      <div className="flex items-center gap-xl flex-1">
        <div className="relative w-full max-w-md">
          <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant" data-icon="search">search</span>
          <input
            className="w-full bg-surface-container-low border-none rounded-full py-sm pl-11 pr-md font-body-sm text-body-sm focus:ring-2 focus:ring-primary"
            placeholder="Cari nama tamu, instansi, atau keperluan..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-md">
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors">
          <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
        </button>
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors">
          <span className="material-symbols-outlined" data-icon="settings">settings</span>
        </button>
        <div className="h-8 w-px bg-outline-variant mx-sm"></div>
        <div className="flex items-center gap-sm cursor-pointer hover:opacity-80 transition-opacity">
          <div className="text-right hidden sm:block">
            <p className="font-label-md text-label-md font-bold leading-none">Admin Utama</p>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Super Administrator</p>
          </div>
          <img
            className="w-9 h-9 rounded-full object-cover border border-outline-variant"
            data-alt="Professional headshot of a corporate administrator"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgi-Vr7ZnjmKu32bnVSSMmGqNRj2CBLurKCufXBkIqso4qmraokneAFKdAJ3pUi0n-EKi6U-PpFTbkSazIElVNAKmSeuE8V-dki_2ZKe2_POJzj7L1kaHJ46yxAFiKvi6PprkIkjKnkA6LIg08At18IO11PvgwqCCn8agXcAbUFK6pBx39oOZM8g1qjsrTJb0pzsxGcszFKzYa470KS6DL1kKcJYROjRnC0dPcNTo_nPwaT5WIWYHnzw"
            alt="Admin"
          />
        </div>
      </div>
    </header>
  )
}
