const Header = () => {
  return (
       <header className="h-[70vh] bg-[url(https://images.hdqwalls.com/wallpapers/hot-wheels-and-jet-21.jpg)] bg-center bg-cover flex justify-center items-center">
        <div className="bg-[rgba(0,0,0,0.5)] text-white flex flex-col items-center justify-center gap-6 p-6 rounded-2xl">
          <h1 className="text-5xl font-bold">Premium Toy Cars</h1>
          <p>Collect the coolest miniature cars</p>
          <button className="bg-blue-600 px-8 py-3 rounded-4xl hover:bg-blue-800">Shop Now</button>
        </div>
      </header>
  )
}

export default Header