// src/components/common/Header/Header.tsx
"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Header.module.scss' // Si usas SCSS
// O puedes usar className directamente con Tailwind

interface HeaderProps {
  title?: string
  showNavigation?: boolean
  className?: string
}

export function Header({ 
  title = "Asamblea Regional", 
  showNavigation = true,
  className = ""
}: HeaderProps) {
  const pathname = usePathname()
  const [navOpen, setNavOpen] = useState(false)

  // Controlar el overflow del body cuando se abre/cierra el menú
  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup al desmontar el componente
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [navOpen])

  return (
    <header className={`${styles.header} ${className} bg-secundaryColor-06`}>
      <div className={styles.container}>
        {/* Botón hamburguesa y título */}
        <div className={styles.mobileHeader}>
          <button
            className={`${styles.hamburgerButton} ${navOpen ? styles.active : ''}`}
            data-site-nav-burger=""
            aria-label="Toggle mobile menu"
            onClick={() => setNavOpen((open) => !open)}
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
          <Link href="/" className={`${styles.logo} w-max`}>
            <h1>{title}</h1>
          </Link>
        </div>

        {/* Navegación desktop */}
        {showNavigation && (
          <nav className={styles.nav}>
            <Link href="/" className={pathname === '/' ? styles.active : ''}>Inicio</Link>
            <Link href="/mapa-interno" className={pathname === '/mapa-interno' ? styles.active : ''}>Mapa Interno</Link>
            <Link href="/servicios" className={pathname === '/servicios' ? styles.active : ''}>Servicios</Link>
            <Link href="/consultas" className={pathname === '/consultas' ? styles.active : ''}>Consultas</Link>
            <Link href="/transporte" className={pathname === '/transporte' ? styles.active : ''}>Transporte</Link>
          </nav>
        )}
      </div>

      {/* Navegación móvil (overlay) */}
      {showNavigation && navOpen && (
        <div className={styles.mobileNavOverlay} onClick={() => setNavOpen(false)}>
          <nav className={styles.mobileNav} onClick={e => e.stopPropagation()}>
            <Link href="/" className={pathname === '/' ? styles.active : ''} onClick={() => setNavOpen(false)}>Inicio</Link>
            <Link href="/mapa-interno" className={pathname === '/mapa-interno' ? styles.active : ''} onClick={() => setNavOpen(false)}>Mapa Interno</Link>
            <Link href="/servicios" className={pathname === '/servicios' ? styles.active : ''} onClick={() => setNavOpen(false)}>Servicios</Link>
            <Link href="/transporte" className={pathname === '/transporte' ? styles.active : ''} onClick={() => setNavOpen(false)}>Transporte</Link>
            <Link href="/consultas" className={pathname === '/consultas' ? styles.active : ''} onClick={() => setNavOpen(false)}>Consultas</Link>
          </nav>
        </div>
      )}
    </header>
  )
}