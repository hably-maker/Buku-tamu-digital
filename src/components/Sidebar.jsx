const navItems = [
  { icon: 'dashboard', label: 'Overview', href: '#' },
  { icon: 'group', label: 'Live Guests', href: '#' },
  { icon: 'history', label: 'History', href: '#', active: true },
  { icon: 'file_export', label: 'Export', href: '#' },
  { icon: 'block', label: 'Blacklist', href: '#' },
]

const bottomNavItems = [
  { icon: 'help', label: 'Help Center', href: '#' },
  { icon: 'logout', label: 'Logout', href: '#' },
]

export default function Sidebar() {
  return (
    <aside className="flex flex-col h-full py-lg px-md w-[280px] fixed left-0 top-0 bg-surface border-r border-outline-variant z-40">
      <div className="mb-xl px-sm">
        <h1 className="font-headline-md text-headline-md font-extrabold text-primary">GuestFlow</h1>
        <p className="font-label-md text-label-md text-on-surface-variant">Enterprise Admin</p>
      </div>
      <nav className="flex-1 space-y-base">
        {navItems.map((item) => (
          <a
            key={item.label}
            className={`flex items-center gap-md px-md py-sm font-label-md text-label-md rounded-lg group transition-all ${
              item.active
                ? 'bg-secondary-container text-on-secondary-container'
                : 'text-on-surface-variant hover:bg-surface-container-highest'
            }`}
            href={item.href}
          >
            <span className="material-symbols-outlined" data-icon={item.icon}>{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
      <div className="mt-auto pt-lg border-t border-outline-variant space-y-base">
        {bottomNavItems.map((item) => (
          <a
            key={item.label}
            className="flex items-center gap-md px-md py-sm font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg"
            href={item.href}
          >
            <span className="material-symbols-outlined" data-icon={item.icon}>{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </aside>
  )
}
