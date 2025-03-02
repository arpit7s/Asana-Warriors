import React from "react";
import MountainPose from "../assets/MountainPose.webp";
import FacingDog from "../assets/FacingDog.jpg";
import WarriorI from "../assets/WarriorI.jpg";
import WarriorII from "../assets/WarriorII.jpg";
import TreePose from "../assets/TreePose.jpg";
import ChildsPose from "../assets/Child’sPose.jpg";
import CobraPose from "../assets/CobraPose.jpg";
import BridgePose from "../assets/BridgePose.jpg";
import SeatedForwardBend from "../assets/SeatedForwardBend.jpg";
import CorpsePose from "../assets/CorpsePose.jpg";

const YogaList = () => {
    const yogaPoses = [
        { title: "Mountain Pose (Tadasana)", img: MountainPose, desc: "A foundational standing pose that promotes grounding and stability. It helps improve posture, balance, and body awareness while encouraging deep, steady breathing. Tadasana serves as the starting position for many other poses, aligning the body and mind to create a sense of calm and focus." },
        { title: "Downward Facing Dog (Adho Mukha Svanasana)", img: FacingDog, desc: "A key pose in yoga that stretches the entire body, particularly the hamstrings, calves, and shoulders. It also strengthens the arms and legs while promoting circulation. This inversion pose helps relieve stress, improve digestion, and serves as a transitional pose in many yoga sequences." },
        { title: "Warrior I (Virabhadrasana I)", img: WarriorI, desc: "Strengthens the legs, opens the hips and chest, and improves focus, balance, and stability. This powerful standing pose builds strength in the quadriceps, glutes, and core while promoting a sense of empowerment and confidence. Warrior I also enhances flexibility in the hips and shoulders." },
        { title: "Warrior II (Virabhadrasana II)", img: WarriorII, desc: "A strong stance that builds strength in the legs and core while stretching the hips and shoulders. Warrior II encourages stability and endurance, enhancing focus and balance. It is often used in sequences to transition smoothly between poses and build a sense of grounding and strength." },
        { title: "Tree Pose (Vrikshasana)", img: TreePose, desc: "A balancing pose that strengthens the legs, improves stability, and enhances focus. This pose promotes mental clarity while encouraging a connection to nature and a sense of inner peace. Tree Pose also helps develop patience, balance, and alignment through mindful engagement of the entire body." },
        { title: "Child’s Pose (Balasana)", img: ChildsPose, desc: "A gentle resting pose that stretches the back, hips, and thighs while promoting relaxation. It is often used as a break between more challenging poses. Child’s Pose calms the mind, reduces stress, and allows practitioners to reconnect with their breath, offering a soothing experience." },
        { title: "Cobra Pose (Bhujangasana)", img: CobraPose, desc: "A backbend that strengthens the spine, opens the chest, and stretches the shoulders and abdomen. Cobra Pose improves flexibility, stimulates internal organs, and promotes a sense of rejuvenation. It is often incorporated into sequences like Sun Salutations to enhance overall strength and vitality." },
        { title: "Bridge Pose (Setu Bandhasana)", img: BridgePose, desc: "A backbend that strengthens the back, glutes, and legs while stretching the chest, neck, and spine. This pose improves posture, alleviates back pain, and stimulates the lungs and thyroid gland. Bridge Pose is often used in restorative practices to calm the nervous system." },
        { title: "Seated Forward Bend (Paschimottanasana)", img: SeatedForwardBend, desc: "A deep hamstring and spine stretch that also calms the mind and relieves stress. This pose improves flexibility in the hips and back while promoting digestion and reducing anxiety. Seated Forward Bend encourages a sense of introspection and mindfulness, enhancing overall well-being." },
        { title: "Corpse Pose (Savasana)", img: CorpsePose, desc: "A relaxation pose at the end of a yoga session that allows the body and mind to fully integrate the benefits of the practice. Savasana promotes deep relaxation, reduces stress, and encourages a meditative state. It is essential for grounding and finding stillness within." },
    ];



    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", padding: "20px" }}>
            {yogaPoses.map((pose, index) => (
                <div key={index} style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "10px", textAlign: "center" }}>
                    <img src={pose.img} alt={pose.title} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }} />
                    <h3>{pose.title}</h3>
                    <p>{pose.desc}</p>
                </div>
            ))}
        </div>
    );
};

export default YogaList;
