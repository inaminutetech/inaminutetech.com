import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f9f9ed] text-[#1a2e1a] font-sans">
      {/* Header */}
      <header className="bg-[#e9fbe9] p-4 shadow-md flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="In A Minute Tech Logo" className="h-10" />
          <h1 className="text-xl font-bold">IN A MINUTE TECH</h1>
        </div>
        <nav className="space-x-4">
          <a href="#menu" className="hover:underline">Menu</a>
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#gallery" className="hover:underline">Gallery</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center p-10">
        <h2 className="text-3xl font-bold mb-2">Business Centre & Cybercafé</h2>
        <p className="mb-4">Internet access, educational resources, printing, and more.</p>
        <a href="https://www.google.com/search?q=IN+A+MINUTE+TECH" target="_blank" className="bg-yellow-400 text-black px-4 py-2 rounded shadow hover:bg-yellow-300">
          Search Us on Google
        </a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-10 bg-white">
        <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
        <p>Email: <a href="mailto:inaminutetech@gmail.com" className="text-blue-600 underline">inaminutetech@gmail.com</a></p>
        <p>Phone: <a href="tel:+2348103960979" className="text-blue-600 underline">+234 8103960979</a></p>
        <p>Instagram: <a href="https://instagram.com/myhandleinaminutetech" className="text-blue-600 underline">@myhandleinaminutetech</a></p>
        <p>Facebook: <a href="https://facebook.com/InAMinuteTech" className="text-blue-600 underline">In A Minute Tech</a></p>
      </section>
    </div>
  );
}
