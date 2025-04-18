import { useState } from 'react';
import './styles/index.css';
import styles from './App.module.css';
import CardNumberSection from './components/CardNumberSection/CardNumberSection';
import CardExpirationSection from './components/CardExpirationSection/CardExpirationSection';
import Card from './components/Card/Card';
import CvcSection from './components/CvcSection/CvcSection';

export default function App() {
  const [cardNumbers, setCardNumbers] = useState<string[]>(['', '', '', '']);
  const [cardLogo, setCardLogo] = useState<'visa' | 'master' | ''>('');
  const [expiration, setExpiration] = useState<string[]>(['', '']);
  const [cvc, setCvc] = useState<string>('');

  return (
    <div className={styles.appContainer}>
      <Card numbers={cardNumbers} cardLogo={cardLogo} expiration={expiration} />
      <CardNumberSection cardNumbers={cardNumbers} setCardNumbers={setCardNumbers} setCardLogo={setCardLogo} />
      <CardExpirationSection expiration={expiration} setExpiration={setExpiration} />
      <CvcSection cvc={cvc} setCvc={setCvc} />
    </div>
  );
}
