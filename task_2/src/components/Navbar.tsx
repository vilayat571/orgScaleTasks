// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className=" w-full flex items-center justify-center h-12 relative top-8" >
    <div className="w-4/5 border-[1.2px] border-[#e0b47b] rounded-full px-16  py-4 flex items-center justify-between ">
    
      <h2>DROME</h2>
      <div className="links">
        <a>About</a>
        <a>Exchange</a>
        <a>Marketplace</a>
        <a>Solution</a>
      </div>
      <button className="lang-btn">English</button></div>
    </nav>
  );
}
