
export default function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <footer className="footer p-6 text-primary-content  footer-center">
        <p>Copyright &copy; {footerYear} All Rights Reserved</p>
    </footer>
  )
}
