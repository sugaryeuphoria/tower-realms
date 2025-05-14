import Tower from './components/Tower';
import Enemy from './components/Enemy';

// Example usage inside your component's render/return
// Assume you have these variables in your state or props:
const towerImg = "path/to/tower/image.png";
const playerHealth = 100;

const currentEnemy = {
  name: "Goblin",
  image: "path/to/goblin/image.png",
  type: "goblin" as "goblin" | "skeleton" | "wolf" | "mage",
  initialHealth: 80
};

// In JSX:
return (
  <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', margin: '2rem 0' }}>
    <Tower image={towerImg} health={playerHealth} />

    <Enemy
      name={currentEnemy.name}
      image={currentEnemy.image}
      type={currentEnemy.type}
      initialHealth={currentEnemy.initialHealth}
    />
  </div>
);
