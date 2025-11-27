const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4">
      <h1 className="text-2xl font-bold">HOT WHEELS🔥</h1>
      <aside className="flex gap-6">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">Cars</a>
        <a href="#" className="hover:text-blue-600">Contact</a>
      </aside>
    </nav>
  )
}

export default Navbar