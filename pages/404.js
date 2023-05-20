import Image from "next/image";
import styles from '../components/layout.module.css';

export default function Custom404() {
	return (
		<div className={styles.container}>
			<Image src="/images/sad-kitty.jpg" height={0} width={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}/>
			<h1> Error 404 : Article Not Found </h1>
		</div>
		
	)
}