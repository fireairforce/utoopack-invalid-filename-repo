import yayJpg from '../assets/yay.jpg';
import testMp4 from '../assets/oceans.mp4';

export async function getTMPJson() {
  const x = import('../assets/Regular Expressions (JavaScript).tmLanguage.json');

  return x;
}

export default function HomePage() {
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
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
