import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-amsblue  text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* About Section */}
        <div>
  <h2 className="text-xl font-bold text-white mb-4">Our Mission</h2>
  <p className="text-gray-400 leading-relaxed">
    Providing precise land surveying and geospatial services to support 
    property development, infrastructure growth, and sustainable land management.
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
            <li><strong>Email:</strong> amslandsurveyors@gmail.com</li>
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
