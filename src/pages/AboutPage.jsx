import React from "react";
import "../styles/AboutPage.css";

const AboutPage = () => {
  const imageLinks = [
    {
      src: "https://cdn.yogajournal.com/wp-content/uploads/2021/11/Handstand_Andrew-Clark.jpg?crop=1:1&width=700",
      alt: "Balancing Yoga Poses",
      description:
        "Handstand poses help build strength, balance, and focus. This posture challenges your core and upper body strength, while also cultivating mental clarity and concentration.",
    },
    {
      src: "https://cdn.yogajournal.com/wp-content/uploads/2021/11/Extended-Side-Angle_Andrew-Clark.jpg?crop=1:1&width=700",
      alt: "Standing Yoga Poses",
      description:
        "Extended Side Angle is a foundational standing pose that stretches the legs, hips, and shoulders. It helps improve flexibility and balance while engaging your core and opening up the chest.",
    },
    {
      src: "https://cdn.yogajournal.com/wp-content/uploads/2021/12/Bound-Angle-Pose-Mod-1_Andrew-Clark_1.jpg?crop=1:1&width=700",
      alt: "Seated Yoga Poses",
      description:
        "Bound Angle Pose is a seated stretch that opens up the hips, groin, and inner thighs. It promotes flexibility and helps release tension in the lower body while fostering relaxation.",
    },
    {
      src: "https://cdn.yogajournal.com/wp-content/uploads/2021/12/Eagle-Pose_Andrew-Clark.jpg?crop=1:1&width=700",
      alt: "Hip-Opening Yoga Poses",
      description:
        "Eagle Pose is a balance pose that deeply stretches the legs, shoulders, and upper back. It helps improve concentration and flexibility, especially in the hips and thighs.",
    },
    {
      src: "https://cdn.yogajournal.com/wp-content/uploads/2021/10/Camel-Pose_Andrew-Clark_1.jpg?crop=1:1&width=700",
      alt: "Backbend Yoga Poses",
      description:
        "Camel Pose is a backbend that opens up the chest, stretches the front of the body, and strengthens the spine. It can help improve posture and flexibility, especially in the back and hips.",
    },
    {
      src: "https://cdn.yogajournal.com/wp-content/uploads/2022/01/Tree-Pose_Andrew-Clark.jpg?crop=1:1&width=250&enable=upscale",
      alt: "Standing Yoga Poses",
      description:
        "Tree Pose is a balancing pose that strengthens the legs and core. It promotes focus and stability, while also opening up the hips and chest. It is often used to find grounding and balance.",
    },
    {
      src: "https://cdn.yogajournal.com/wp-content/uploads/2021/12/Crow-Pose-Crane-Pose_Andrew-Clark_1.jpg?crop=1:1&width=250&enable=upscale",
      alt: "Arm Balance Yoga Poses",
      description:
        "Crow Pose is an arm balance that challenges your strength and coordination. It helps develop core strength, balance, and wrist flexibility while teaching focus and control.",
    },
    {
      src: "https://cdn.yogajournal.com/wp-content/uploads/2022/01/Sq-3-Poses-copy.jpg?crop=1:1&width=250&enable=upscale",
      alt: "Chest-Opening Yoga Poses",
      description:
        "This sequence focuses on opening up the chest and shoulders, relieving tension and improving posture. It enhances flexibility and promotes deep breathing by expanding the chest.",
    },
  ];

  return (
    <div className="about-container">
      <section className="intro-section">
        <h1>Welcome to Our Yoga Journey</h1>
        <p className="intro-text">
          At our Yoga Studio, we believe in the transformative power of yoga.
          Whether you're just starting your journey or deepening your practice,
          our mission is to provide a peaceful space where your body and mind
          can connect.
        </p>
      </section>

      <section className="image-gallery">
        <h2>Our Practice</h2>
        <div className="image-container">
          {imageLinks.map((image, index) => (
            <div key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className="gallery-image"
              />
              <h3>{image.alt}</h3>
              <p>{image.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="philosophy-section">
        <h2>Our Philosophy</h2>
        <p>
          Yoga is not just a physical practice, it’s a way of life. Our
          philosophy revolves around mindfulness, self-care, and connection to
          nature.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
