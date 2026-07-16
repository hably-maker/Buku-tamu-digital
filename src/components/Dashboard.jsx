import { useEffect, useRef } from 'react'

const guests = [
  { id: '#4492', name: 'Aditya Saputra', initials: 'AS', time: '14:20 WIB', date: 'Hari ini', phone: '0812-3456-7890', purpose: 'Rapat Koordinasi', org: 'PT. Global Solusindo', note: 'Membahas integrasi sistem API tahap dua.', badgeColor: 'bg-secondary-container text-on-secondary-container' },
  { id: '#4491', name: 'Rina Marlina', initials: 'RM', time: '13:45 WIB', date: 'Hari ini', phone: '0877-2233-4455', purpose: 'Kunjungan Pribadi', org: 'Individu', note: 'Menemui Ibu Diana (HRD).', badgeColor: 'bg-surface-container-highest text-on-surface-variant' },
  { id: '#4490', name: 'Budi Nugraha', initials: 'BN', time: '16:10 WIB', date: 'Kemarin', phone: '0813-9988-7766', purpose: 'Pengiriman', org: 'J&T Express', note: 'Antar paket dokumen penting.', badgeColor: 'bg-primary-fixed text-primary' },
  { id: '#4489', name: 'Fahmi Kusuma', initials: 'FK', time: '11:05 WIB', date: 'Kemarin', phone: '0852-1111-2222', purpose: 'Wawancara', org: 'Kandidat IT Support', note: 'Jadwal interview dengan tim teknis.', badgeColor: 'bg-tertiary-container text-on-tertiary-container' },
]

export default function Dashboard() {
  const searchInputRef = useRef(null)

  useEffect(() => {
    const searchInput = searchInputRef.current
    if (!searchInput) return

    const handleFocus = () => searchInput.parentElement.classList.add('ring-2', 'ring-primary/20')
    const handleBlur = () => searchInput.parentElement.classList.remove('ring-2', 'ring-primary/20')

    searchInput.addEventListener('focus', handleFocus)
    searchInput.addEventListener('blur', handleBlur)
    return () => {
      searchInput.removeEventListener('focus', handleFocus)
      searchInput.removeEventListener('blur', handleBlur)
    }
  }, [])

  const handleDelete = (e) => {
    if (confirm('Apakah Anda yakin ingin menghapus data riwayat tamu ini?')) {
      const row = e.target.closest('tr')
      row.style.opacity = '0'
      row.style.transform = 'translateX(20px)'
      row.style.transition = 'all 0.4s ease'
      setTimeout(() => row.remove(), 400)
    }
  }

  return (
    <section className="p-lg flex-1">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-md mb-lg">
        <div>
          <h2 className="font-headline-md text-headline-md font-bold text-on-surface">Riwayat Tamu</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">Pantau dan kelola seluruh data kunjungan tamu secara real-time.</p>
        </div>
        <div className="flex items-center gap-md">
          <div className="flex items-center gap-sm bg-secondary-container/50 px-md py-sm rounded-full border border-on-secondary-container/10">
            <span className="w-2.5 h-2.5 bg-secondary rounded-full pulse-indicator"></span>
            <span className="font-label-md text-label-md text-on-secondary-container font-bold">Live: 5 Tamu Hari Ini</span>
          </div>
          <button className="flex items-center gap-sm bg-primary text-on-primary px-lg py-sm rounded-lg font-label-md text-label-md font-bold hover:opacity-90 transition-opacity shadow-sm">
            <span className="material-symbols-outlined text-[20px]" data-icon="download">download</span>
            Ekspor Data (CSV)
          </button>
        </div>
      </div>

      <div className="bg-surface border border-outline-variant rounded-xl p-md mb-lg flex flex-wrap gap-md items-center shadow-sm">
        <div className="flex flex-col gap-xs">
          <label className="font-label-md text-[11px] text-on-surface-variant font-bold uppercase tracking-widest">Filter Keperluan</label>
          <select className="bg-surface border border-outline-variant rounded-lg font-body-sm text-body-sm py-xs px-sm focus:border-primary focus:ring-0 min-w-[200px]">
            <option>Semua Keperluan</option>
            <option>Rapat Koordinasi</option>
            <option>Pengiriman Barang</option>
            <option>Wawancara</option>
            <option>Kunjungan Dinas</option>
          </select>
        </div>
        <div className="flex flex-col gap-xs">
          <label className="font-label-md text-[11px] text-on-surface-variant font-bold uppercase tracking-widest">Rentang Tanggal</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" data-icon="calendar_today">calendar_today</span>
            <input className="bg-surface border border-outline-variant rounded-lg font-body-sm text-body-sm py-xs pl-9 pr-sm focus:border-primary focus:ring-0" type="date" />
          </div>
        </div>
        <div className="flex flex-col gap-xs ml-auto">
          <label className="font-label-md text-[11px] text-on-surface-variant font-bold uppercase tracking-widest invisible">Action</label>
          <button className="bg-surface-container-high text-on-surface px-md py-xs rounded-lg font-label-md text-label-md font-bold hover:bg-surface-dim transition-colors border border-outline-variant">
            Terapkan Filter
          </button>
        </div>
      </div>

      <div className="bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-container-low border-b border-outline-variant">
              <tr>
                <th className="px-md py-md font-label-md text-label-md font-bold text-on-surface-variant">Waktu</th>
                <th className="px-md py-md font-label-md text-label-md font-bold text-on-surface-variant">Nama Tamu</th>
                <th className="px-md py-md font-label-md text-label-md font-bold text-on-surface-variant">No. HP</th>
                <th className="px-md py-md font-label-md text-label-md font-bold text-on-surface-variant">Tujuan / Instansi</th>
                <th className="px-md py-md font-label-md text-label-md font-bold text-on-surface-variant">Keterangan</th>
                <th className="px-md py-md font-label-md text-label-md font-bold text-on-surface-variant text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {guests.map((guest) => (
                <tr key={guest.id} className="hover:bg-primary-fixed/20 transition-colors">
                  <td className="px-md py-md font-table-data text-table-data whitespace-nowrap">
                    <span className="font-bold">{guest.date}</span><br />
                    <span className="text-on-surface-variant text-xs">{guest.time}</span>
                  </td>
                  <td className="px-md py-md">
                    <div className="flex items-center gap-sm">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${guest.badgeColor}`}>{guest.initials}</div>
                      <div>
                        <p className="font-table-data text-table-data font-bold">{guest.name}</p>
                        <p className="text-[11px] text-on-surface-variant">Visitor ID: {guest.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-md py-md font-table-data text-table-data font-medium text-on-surface-variant">{guest.phone}</td>
                  <td className="px-md py-md">
                    <span className={`px-sm py-1 rounded-full text-[11px] font-bold uppercase tracking-tight ${guest.badgeColor}`}>{guest.purpose}</span>
                    <p className="text-[11px] text-on-surface-variant mt-1">{guest.org}</p>
                  </td>
                  <td className="px-md py-md font-table-data text-table-data text-on-surface-variant max-w-[200px] truncate">{guest.note}</td>
                  <td className="px-md py-md text-right whitespace-nowrap">
                    <button className="p-2 text-error hover:bg-error-container/20 rounded-lg transition-colors group" title="Delete" onClick={handleDelete}>
                      <span className="material-symbols-outlined" data-icon="delete">delete</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-surface-container-lowest px-md py-sm flex items-center justify-between border-t border-outline-variant">
          <p className="font-label-md text-label-md text-on-surface-variant">Menampilkan 1-10 dari 48 tamu</p>
          <div className="flex gap-xs">
            <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-[18px]" data-icon="chevron_left">chevron_left</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-on-primary font-bold text-xs">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container-high transition-colors text-xs">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container-high transition-colors text-xs">3</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-[18px]" data-icon="chevron_right">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
