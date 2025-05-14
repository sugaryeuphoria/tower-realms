import React from 'react';

interface TowerProps {
  image: string;
  health: number;
}

const Tower: React.FC<TowerProps> = ({ image, health }) => {
  return (
    <div>
      <img src={image} alt="Tower" style={{ width: '150px', height: '150px' }} />
      <p>Health: {health}</p>
    </div>
  );
};

export default Tower;
