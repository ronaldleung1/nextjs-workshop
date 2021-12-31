import Image from 'next/image';
import Link from 'next/link'
import styles from '../styles/Main.module.css'

function getYesterday(firstDate) {
  let yesterday = new Date(firstDate);
  yesterday.setDate(yesterday.getDate() - 1);
  return yesterday.toISOString().split("T")[0];
}

function getTomorrow(firstDate) {
  let tomorrow = new Date(firstDate);
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split("T")[0];
}

export default function Main({url, title, date, latest}) {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Mars Rover Cam
        </h1>
        <p className={styles.description}>
          Pictures from the Perseverance Rover
        </p>
        {/*data.map((image, id) => (
          <img key={id} src={image.img_src} alt={image.camera.full_name} />
        ))*/}
        <Image
          layout="fill"
          priority={true}
          quality={100}
          src={url} 
          alt={title} 
        />
        
      </main>

      <footer className={styles.footer}>
        <Link href={`/${getYesterday(date)}`}>&larr;</Link>
        {date}
        <Link href={`/${getTomorrow(date)}`}>&rarr;</Link>
      </footer>
    </div>
  )
}