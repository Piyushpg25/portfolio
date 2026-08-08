import Link from 'next/link';

import {navigation} from '@/constants/navigation';
import {HeaderActions} from '@/components/layout/header-actions';
import {MobileNav} from '@/components/layout/mobile-nav';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <Link
        href="/"
        className='text-lg font-bold tracking-tight'
        aria-label='Piyush Home'>
          PX
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden md:block" aria-label='Main navigation'>
          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                href={item.href}
                className='text-sm text-muted-foreground transition-colors hover:text-foreground'>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}

        <div className="hidden items-center gap-2 md:flex">
          <HeaderActions />
        </div>

        {/* Mobile navigation */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}