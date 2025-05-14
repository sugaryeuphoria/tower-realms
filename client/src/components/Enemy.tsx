import React from 'react';

type EnemyType = "goblin" | "skeleton" | "wolf" | "mage";

interface EnemyProps {
  name: string;
  image: string;
  type: EnemyType;
  initialHealth: number;
}

const Enemy: React.FC<EnemyProps> = ({ name, image, type, initialHealth }) => {
  return (
    <div>
      <h3>{name} ({type})</h3>
      <img src={image} alt={name} style={{ width: '150px', height: '150px' }} />
      <p>Health: {initialHealth}</p>
    </div>
  );
};

export default Enemy;
