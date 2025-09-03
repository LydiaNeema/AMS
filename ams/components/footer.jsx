import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">About Us</h2>
          <p className="text-gray-400 leading-relaxed">
            We specialize in professional land surveying, mapping, and geospatial
            services to support property development, infrastructure projects,
            and land management across Kenya.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
          <ul className="space-y-3">
            <li><Link href="/#home" className="hover:text-green-400">Home</Link></li>
            <li><Link href="/#about" className="hover:text-green-400">About</Link></li>
            <li><Link href="/#services" className="hover:text-green-400">Services</Link></li>
            <li><Link href="/contact-us" className="hover:text-green-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Contact</h2>
          <ul className="space-y-2 text-gray-400">
            <li><strong>Email:</strong> abednegoamani@gmail.com</li>
            <li><strong>Phone:</strong> +25495979586</li>
            <li><strong>Location:</strong> Mombasa, Kenya</li>
            <li><strong>Hours:</strong> Mon–Fri, 9am–5pm</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} AMS Surveyors. All Rights Reserved.
      </div>
    </footer>
  );
}
