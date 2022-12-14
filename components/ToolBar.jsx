import { useRouter } from 'next/router';
import styles from '../styles/Toolbar.module.css';

const ToolBar = () => {
	const router = useRouter();

	return (
		<div className={styles.main}>
			<div onClick={() => router.push('/')}>Home</div>
			<div onClick={() => router.push('/feed/1')}>Feed</div>
		</div>
	);
};

export default ToolBar;
