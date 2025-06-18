import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-secondary">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-white">
              © {currentYear} Jeremy Kemp. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <Link
              href="https://github.com/jeremyjtkemp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/jeremyjtkemp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="mailto:jjtk2002@gmail.com"
              className="text-white hover:text-accent transition-colors"
            >
              Email
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 