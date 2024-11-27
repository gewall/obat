// components/Footer.js
import Link from "next/link";
type Props = {};
const Footer = (props: Props) => {
  return (
    <footer className="bg-slate-800 text-white py-6">
      <div className="container mx-auto px-8">
        {/* Grid Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section 1: About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Me</h3>
            <p className="text-sm text-gray-300">
              We are committed to providing the best services and solutions for
              your needs. Let's grow together!
            </p>
          </div>

          {/* Section 2: Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                className="hover:text-blue-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .732.592 1.324 1.325 1.324h11.495v-9.294h-3.125v-3.622h3.125v-2.671c0-3.1 1.894-4.788 4.658-4.788 1.325 0 2.464.099 2.794.143v3.242l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.622h-3.12v9.293h6.105c.732 0 1.324-.592 1.324-1.324v-21.35c0-.733-.592-1.325-1.324-1.325z" />
                </svg>
              </Link>
              <Link
                href="https://twitter.com"
                aria-label="Twitter"
                className="hover:text-blue-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.611 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.956-2.178-1.555-3.594-1.555-2.723 0-4.928 2.206-4.928 4.927 0 .386.044.762.127 1.122-4.096-.205-7.725-2.169-10.148-5.144-.425.729-.666 1.575-.666 2.475 0 1.708.869 3.215 2.188 4.099-.807-.026-1.566-.247-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.112-.849.172-1.296.172-.317 0-.626-.031-.928-.089.627 1.956 2.445 3.379 4.604 3.418-1.684 1.319-3.808 2.105-6.115 2.105-.397 0-.788-.023-1.175-.069 2.179 1.398 4.768 2.211 7.548 2.211 9.054 0 14.002-7.503 14.002-14.002 0-.213-.005-.425-.014-.636.961-.695 1.796-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                className="hover:text-blue-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.057 1.97.248 2.417.415a4.92 4.92 0 0 1 1.675 1.006 4.92 4.92 0 0 1 1.006 1.675c.167.447.358 1.247.415 2.417.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.057 1.17-.248 1.97-.415 2.417a4.92 4.92 0 0 1-1.006 1.675 4.92 4.92 0 0 1-1.675 1.006c-.447.167-1.247.358-2.417.415-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.057-1.97-.248-2.417-.415a4.92 4.92 0 0 1-1.675-1.006 4.92 4.92 0 0 1-1.006-1.675c-.167-.447-.358-1.247-.415-2.417-.058-1.266-.07-1.645-.07-4.85s.012-3.584.07-4.85c.057-1.17.248-1.97.415-2.417a4.92 4.92 0 0 1 1.006-1.675 4.92 4.92 0 0 1 1.675-1.006c.447-.167 1.247-.358 2.417-.415 1.266-.058 1.645-.07 4.85-.07m0-2.163c-3.259 0-3.667.012-4.947.071-1.252.057-2.102.25-2.836.533a6.974 6.974 0 0 0-2.488 1.651 6.974 6.974 0 0 0-1.651 2.488c-.283.734-.476 1.584-.533 2.836-.059 1.28-.071 1.688-.071 4.947s.012 3.667.071 4.947c.057 1.252.25 2.102.533 2.836a6.974 6.974 0 0 0 1.651 2.488 6.974 6.974 0 0 0 2.488 1.651c.734.283 1.584.476 2.836.533 1.28.059 1.688.071 4.947.071s3.667-.012 4.947-.071c1.252-.057 2.102-.25 2.836-.533a6.974 6.974 0 0 0 2.488-1.651 6.974 6.974 0 0 0 1.651-2.488c.283-.734.476-1.584.533-2.836.059-1.28.071-1.688.071-4.947s-.012-3.667-.071-4.947c-.057-1.252-.25-2.102-.533-2.836a6.974 6.974 0 0 0-1.651-2.488 6.974 6.974 0 0 0-2.488-1.651c-.734-.283-1.584-.476-2.836-.533-1.28-.059-1.688-.071-4.947-.071z" />
                  <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zm0 10.162a3.838 3.838 0 1 1 0-7.676 3.838 3.838 0 1 1 0 7.676zm6.406-10.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 text-center text-sm text-gray-400">
          &copy; 2024 Gewall. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
