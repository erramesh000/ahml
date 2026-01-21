"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SimpleHeader() {
    const pathname = usePathname();

    const menuItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/insight", label: "Insights" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header style={{
            background: '#f8f9fa',
            padding: '1rem',
            borderBottom: '1px solid #dee2e6',
            position: 'sticky',
            top: 0,
            zIndex: 1000
        }}>
            <nav style={{
                display: 'flex',
                gap: '2rem',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {menuItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        style={{
                            textDecoration: 'none',
                            padding: '0.5rem 1rem',
                            borderRadius: '4px',
                            backgroundColor: pathname === item.href ? '#22c55e' : 'transparent',
                            color: pathname === item.href ? 'white' : '#333',
                            fontWeight: '500',
                            transition: 'all 0.2s'
                        }}
                        onClick={() => console.log(`Clicked: ${item.label} -> ${item.href}`)}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </header>
    );
}