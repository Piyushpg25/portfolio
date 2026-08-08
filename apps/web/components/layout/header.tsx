import Link from 'next/link';

import {navigation} from '@/constants/navigation';
import {HeaderActions} from '@/components/layout/header-actions';
import {MobileNav} from '@/components/layout/mobile-nav';
import {DesktopNav} from '@/components/layout/desktop-nav';
import {HeaderMotion} from '@/components/layout/header-motion';

export function Header() {
  return (
    <HeaderMotion>
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

        <DesktopNav />

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
    </HeaderMotion>
  )
}