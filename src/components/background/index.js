import { useCallback } from 'react';
import { mount } from './3d';
import './index.css';

export default function Background() {
	const containerRef = useCallback(mount, []);
	return <div className="Bg-container" ref={containerRef}></div>
}