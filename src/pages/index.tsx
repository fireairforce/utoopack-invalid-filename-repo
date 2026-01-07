import yayJpg from '../assets/yay.jpg';

export async function getTMPJson() {
  const x = import('../assets/Regular Expressions (JavaScript).tmLanguage.json');

  return x;
}

export default function HomePage() {
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
