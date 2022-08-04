import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css'

const Chat = dynamic(() => import("./Chat2"), {
  ssr: false
});

// import Chat from './Chat2';

export default function Home() {
  return (
    <div className={styles.container}>
      <Chat />
    </div>
  )
}
