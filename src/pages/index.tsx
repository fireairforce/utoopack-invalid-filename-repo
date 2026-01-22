import yayJpg from '../assets/yay.jpg';
import testMp4 from '../assets/oceans.mp4';
import styles from './index.less';
import styles2 from '@/layouts/index.less';

export async function getTMPJson() {
  const x = import('../assets/Regular Expressions (JavaScript).tmLanguage.json');

  return x;
}

export default function HomePage() {
  return (
    <div>
      <h2 className={styles.displayName}>Yay! Welcome to umi!</h2>
      <p className={styles2.navs}>
        <video 
          width="640" 
          height="360"  
          src={testMp4}>
          </video>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
