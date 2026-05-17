"use client";

import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white ">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Website Info */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">
            MediQueue
          </h2>

          <p className="text-slate-300 leading-relaxed">
            MediQueue is a modern tutor booking platform where students can
            easily find tutors, book sessions, and manage learning schedules
            efficiently.
          </p>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Learning Services
          </h3>

          <ul className="space-y-3 text-slate-300">
            <li>
              <Link
                href="/tutors"
                className="hover:text-primary transition"
              >
                Find Tutors
              </Link>
            </li>

            <li>
              <Link
                href="/add-tutor"
                className="hover:text-primary transition"
              >
                Become a Tutor
              </Link>
            </li>

            <li>
              <Link
                href="/booked-sessions"
                className="hover:text-primary transition"
              >
                Booked Sessions
              </Link>
            </li>

            <li>
              <Link
                href="/"
                className="hover:text-primary transition"
              >
                Online Learning
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact Info
          </h3>

          <div className="space-y-2 text-slate-300">
            <p>Email: support@mediqueue.com</p>
            <p>Phone: +880 1234-567890</p>
            <p>Location: Dhaka, Bangladesh</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-6 text-2xl">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="hover:text-blue-500 transition"
            >
              <FaFacebook />
            </Link>

            <Link
              href="https://github.com"
              target="_blank"
              className="hover:text-gray-400 transition"
            >
              <FaGithub />
            </Link>

            <Link
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </Link>

            <Link
              href="https://youtube.com"
              target="_blank"
              className="hover:text-red-500 transition"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-slate-700 py-4 text-center text-slate-400 text-sm">
        © {new Date().getFullYear()} MediQueue. All Rights Reserved.
      </div>
    </footer>
  );
}