export default function Footer() {
  return (
    <footer className="w-full py-md px-gutter flex flex-col md:flex-row justify-between items-center mt-auto border-t border-outline-variant bg-surface-container-lowest">
      <p className="font-body-sm text-body-sm text-on-surface-variant">© 2024 GuestFlow Enterprise. All rights reserved.</p>
      <div className="flex gap-lg mt-md md:mt-0">
        <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
        <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
        <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Support</a>
      </div>
    </footer>
  )
}
