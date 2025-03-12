'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X} from 'lucide-react'
import Link from 'next/link'
import clsx from 'clsx'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'Blog', href: '/' },
    { name: 'Sobre', href: '/sobre' },  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={clsx(
        'fixed w-full backdrop-blur-xl z-50 border-b'      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        {/* Logo ou Nome do Site */}
        <Link href="/" className="text-lg font-bold">
          Blog-M
        </Link>

        {/* Links de Navegação (Desktop) */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'hover:text-blue-500 transition-colors'              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Botão de Menu (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-opacity-20"
        >
          {isOpen ? (
            <X className={clsx('w-6 h-6')} />
          ) : (
            <Menu className={clsx('w-6 h-6')} />
          )}
        </button>

        {/* Menu Mobile (AnimatePresence para animação de entrada/saída) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={clsx(
                'absolute top-16 left-0 w-full md:hidden p-4'
              )}
            >
              <div className="flex flex-col space-y-4">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                      'hover:text-blue-500 transition-colors'                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
      </div>
    </motion.nav>
  )
}