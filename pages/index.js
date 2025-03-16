import Layout from '../components/Layout';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [isLoading, setLoading] = useState(true);

  const images = {
    hero: 'https://images.unsplash.com/photo-1578868837155-9f5c2a838182?auto=format&fit=crop&w=1920&q=80',
    featured: [
      {
        src: 'https://images.unsplash.com/photo-1564389668941-5a0576ba2c54?auto=format&fit=crop&w=800&q=80',
        alt: 'Table Mountain Aerial View',
        title: 'Table Mountain',
        description: 'One of the New 7 Wonders of Nature, offering panoramic views of the city and ocean.'
      },
      {
        src: 'https://images.unsplash.com/photo-1577948000111-9c970dfe3743?auto=format&fit=crop&w=800&q=80',
        alt: 'Colorful Bo-Kaap Houses',
        title: 'Bo-Kaap',
        description: 'Historic neighborhood known for its vibrant houses and Cape Malay culture.'
      },
      {
        src: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=800&q=80',
        alt: 'Camps Bay Beachfront',
        title: 'Camps Bay',
        description: 'Pristine beach with crystal clear waters and stunning mountain backdrop.'
      },
      {
        src: 'https://images.unsplash.com/photo-1591464474786-fd96882fa6f4?auto=format&fit=crop&w=800&q=80',
        alt: 'V&A Waterfront',
        title: 'V&A Waterfront',
        description: 'Vibrant harbor with shopping, dining, and entertainment options.'
      },
      {
        src: 'https://images.unsplash.com/photo-1585061528750-3baa06aba2a3?auto=format&fit=crop&w=800&q=80',
        alt: 'Lions Head Mountain',
        title: 'Lions Head',
        description: 'Popular hiking spot offering 360-degree views of Cape Town.'
      },
      {
        src: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=800&q=80',
        alt: 'Muizenberg Beach Huts',
        title: 'Muizenberg',
        description: 'Famous for its colorful beach huts and perfect surfing conditions.'
      }
    ]
  };

  return (
    <Layout>
      <div 
        className={styles.hero}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${images.hero}')`
        }}
      >
        <div className={styles.heroContent}>
          <h1>Capturing Cape Town&apos;s Beauty</h1>
          <p>Through the lens of passion and creativity</p>
        </div>
      </div>

      <section className={styles.featured}>
        <h2>Featured Locations</h2>
        <div className={styles.grid}>
          {images.featured.map((image, index) => (
            <div key={index} className={styles.imageCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  priority={index < 2}
                  quality={90}
                  className={`${styles.image} ${isLoading ? styles.loading : styles.loaded}`}
                  onLoadingComplete={() => setLoading(false)}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR4WFiMeJR4lHR0lLiQeJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              <div className={styles.imageContent}>
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.history}>
        <h2>The Mother City</h2>
        <p>
          Cape Town, South Africa's oldest city, was established in 1652 as a vital stopover for 
          Dutch East India Company ships. Today, this vibrant metropolis seamlessly blends its rich 
          history with modern culture, set against the backdrop of stunning natural beauty. From the 
          iconic Table Mountain to the historic Robben Island, from world-class beaches to award-winning 
          vineyards, Cape Town offers an unparalleled mix of adventures, culture, and natural wonders.
        </p>
      </section>
    </Layout>
  );
}