"use client";

import { useRouter } from 'next/navigation';

export default function NavTest() {
    const router = useRouter();

    const testNavigation = () => {
        console.log('Testing navigation...');
        router.push('/about');
    };

    return (
        <div style={{ padding: '20px', background: '#f0f0f0', margin: '20px' }}>
            <h3>Navigation Test</h3>
            <button onClick={testNavigation} style={{ padding: '10px 20px', background: '#22c55e', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Test Navigate to About
            </button>
        </div>
    );
}