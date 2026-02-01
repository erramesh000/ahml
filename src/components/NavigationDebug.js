"use client";

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NavigationDebug() {
    const router = useRouter();
    const pathname = usePathname();
    const [logs, setLogs] = useState([]);

    const addLog = (message) => {
        setLogs(prev => [...prev.slice(-4), `${new Date().toLocaleTimeString()}: ${message}`]);
    };

    useEffect(() => {
        addLog(`Navigated to: ${pathname}`);
    }, [pathname]);

    const testRoutes = [
        { path: '/', name: 'Home' },
        { path: '/about', name: 'About' },
        { path: '/services', name: 'Services' },
        { path: '/insight', name: 'Insights' },
        { path: '/contact', name: 'Contact' }
    ];

    const handleNavigation = (path, name) => {
        addLog(`Attempting to navigate to ${name} (${path})`);
        router.push(path);
    };

    return (
        <div style={{
            position: 'fixed',
            top: '10px',
            right: '10px',
            background: 'rgba(0,0,0,0.8)',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            fontSize: '12px',
            zIndex: 9999,
            maxWidth: '300px'
        }}>
            <div><strong>Current Route:</strong> {pathname}</div>
            <div style={{ marginTop: '10px' }}>
                <strong>Quick Navigation:</strong>
                <div style={{ display: 'flex', gap: '5px', marginTop: '5px', flexWrap: 'wrap' }}>
                    {testRoutes.map(route => (
                        <button
                            key={route.path}
                            onClick={() => handleNavigation(route.path, route.name)}
                            style={{
                                padding: '2px 6px',
                                fontSize: '10px',
                                backgroundColor: pathname === route.path ? '#22c55e' : '#555',
                                color: 'white',
                                border: 'none',
                                borderRadius: '3px',
                                cursor: 'pointer'
                            }}
                        >
                            {route.name}
                        </button>
                    ))}
                </div>
            </div>
            <div style={{ marginTop: '10px', fontSize: '10px' }}>
                <strong>Navigation Log:</strong>
                {logs.map((log, i) => (
                    <div key={i} style={{ fontSize: '9px', opacity: 0.8 }}>{log}</div>
                ))}
            </div>
        </div>
    );
}