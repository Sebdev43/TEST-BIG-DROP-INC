import { Link } from 'react-router-dom';

interface FooterSection {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
}

const footerSections: FooterSection[] = [
  {
    title: 'COMPANY',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'RESOURCES',
    links: [
      { name: 'Blog', href: '/blog' },
      { name: 'Whitepaper', href: '/whitepaper' },
      { name: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'LEGAL',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  },
  {
    title: 'CONNECT',
    links: [
      { name: 'Twitter', href: 'https://twitter.com' },
      { name: 'LinkedIn', href: 'https://linkedin.com' },
      { name: 'Telegram', href: 'https://telegram.org' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#151D2C] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col">
              <h3 className="text-sm font-semibold tracking-wider text-[#878E9B] mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-[#878E9B] hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-3 border-t border-gray-800">
          <div className="text-center">
            <p className="text-sm text-[#878E9B]">
              2024 BlockEstate. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
