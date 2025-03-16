import Layout from '../components/Layout';
import styles from '../styles/About.module.css';

export default function About() {
  const activities = [
    {
      title: "Table Mountain Adventures",
      description: "Hike or take the cable car to the iconic flat-topped mountain for breathtaking views of the city and ocean."
    },
    {
      title: "Beach Life",
      description: "Explore the pristine beaches of Camps Bay, Clifton, and Muizenberg - perfect for sunbathing, surfing, and watching spectacular sunsets."
    },
    {
      title: "Cultural Heritage",
      description: "Visit the vibrant Bo-Kaap neighborhood with its colorful houses and rich Cape Malay culture."
    },
    {
      title: "Wildlife Encounters",
      description: "Meet the African penguins at Boulders Beach or spot whales and seals along the coast."
    },
    {
      title: "Wine Tasting",
      description: "Experience world-class wines in nearby Constantia Valley and Stellenbosch wine regions."
    },
    {
      title: "Scenic Drives",
      description: "Take the stunning Chapman's Peak Drive or explore the Cape Peninsula to Cape Point."
    }
  ];

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>About Cape Town</h1>
        
        <section className={styles.introduction}>
          <p>
            Welcome to Cape Town Lens, a visual journey through one of the world's most beautiful cities. 
            This website is dedicated to capturing and sharing the breathtaking beauty of Cape Town, 
            from its iconic Table Mountain to its pristine beaches, vibrant culture, and rich history.
          </p>
          <p>
            Cape Town, affectionately known as the Mother City, is South Africa's oldest city, 
            established in 1652 as a supply station for Dutch ships. Today, it's a vibrant 
            metropolis where nature, history, and modern culture blend seamlessly, offering 
            visitors and residents alike an unparalleled experience.
          </p>
        </section>

        <section className={styles.activities}>
          <h2>Must-Do Activities</h2>
          <div className={styles.activityGrid}>
            {activities.map((activity, index) => (
              <div key={index} className={styles.activityCard}>
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.mission}>
          <h2>Our Mission</h2>
          <p>
            Through this website, we aim to showcase the diverse beauty of Cape Town and inspire 
            visitors to explore its many wonders. From the majestic mountains to the azure oceans, 
            from historical landmarks to modern attractions, we capture the essence of what makes 
            Cape Town one of the world's most beloved destinations.
          </p>
        </section>
      </div>
    </Layout>
  );
} 