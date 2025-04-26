import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  ChevronRight, 
  Mail, 
  MapPin, 
  Phone
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-white font-bold text-2xl mb-6 inline-block">
              <span className="text-primary-400">iChat</span>
            </Link>
            <p className="text-neutral-400 mb-6">
              Revolutionizing technology with innovative solutions for a smarter tomorrow.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-400">
                  臺大管二206
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary-400 mr-3 flex-shrink-0" />
                <span className="text-neutral-400">+886 0912345678</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-primary-400 mr-3 flex-shrink-0" />
                <span className="text-neutral-400">dontcontactus@mail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;