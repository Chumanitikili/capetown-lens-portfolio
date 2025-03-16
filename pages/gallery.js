import Layout from '../components/Layout';
import Image from 'next/image';
import styles from '../styles/Gallery.module.css';

export default function Gallery() {
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1564389668941-5a0576ba2c54',
      alt: 'Table Mountain Aerial View',
      title: 'Table Mountain'
    },
    {
      src: 'https://images.unsplash.com/photo-1577948000111-9c970dfe3743',
      alt: 'Colorful Bo-Kaap Houses',
      title: 'Bo-Kaap'
    },
    {
      src: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99',
      alt: 'Camps Bay Beachfront',
      title: 'Camps Bay'
    },
    {
      src: 'https://images.unsplash.com/photo-1578868837155-9f5c2a838182',
      alt: 'Table Mountain Sunset',
      title: 'Mountain Sunset'
    },
    {
      src: 'https://images.unsplash.com/photo-1591464474786-fd96882fa6f4',
      alt: 'V&A Waterfront',
      title: 'V&A Waterfront'
    },
    {
      src: 'https://images.unsplash.com/photo-1585061528750-3baa06aba2a3',
      alt: 'Lions Head Mountain',
      title: 'Lions Head'
    },
    {
      src: 'https://images.unsplash.com/photo-1589802829985-817e51171b92',
      alt: 'Muizenberg Beach Huts',
      title: 'Muizenberg'
    },
    {
      src: 'https://images.unsplash.com/photo-1596368336624-5483fb837e11',
      alt: 'Cape Point Lighthouse',
      title: 'Cape Point'
    },
    {
      src: 'https://images.unsplash.com/photo-1595880238904-ee0d8f585c52',
      alt: 'Kirstenbosch Gardens',
      title: 'Kirstenbosch'
    },
    {
      src: 'https://images.unsplash.com/photo-1584644740411-d67e4550a57a',
      alt: 'Chapman\'s Peak Drive',
      title: 'Chapman\'s Peak'
    },
    {
      src: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e',
      alt: 'Boulders Beach Penguins',
      title: 'Boulders Beach'
    },
    {
      src: 'https://images.unsplash.com/photo-1597224688071-9fec0e49f5fc',
      alt: 'Signal Hill Sunset',
      title: 'Signal Hill'
    }
  ];

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Gallery</h1>
        <p className={styles.description}>Explore the beauty of Cape Town through our lens</p>
        
        <div className={styles.gallery}>
          {galleryImages.map((image, index) => (
            <div key={index} className={styles.imageWrapper}>
              <Image
                src={`${image.src}?w=800&q=90`}
                alt={image.alt}
                width={800}
                height={600}
                quality={90}
                className={styles.image}
                priority={index < 4}
              />
              <div className={styles.imageOverlay}>
                <h3>{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
} 