import React from 'react';
import { 
  FaCalculator, 
  FaGlobeAsia, 
  FaAppleAlt, 
  FaRunning, 
  FaPuzzlePiece, 
  FaBrain,
  FaPlus,
  FaMinus,
  FaShapes,
  FaMapMarkedAlt,
  FaMapPin,
  FaSeedling,
  FaSoap,
  FaHeartbeat
} from 'react-icons/fa';

const GameIcon = ({ type }) => {
  const icons = {
    // Matematik ikonları
    math: <FaCalculator size={48} color="#FF9800" />,
    addition: <FaPlus size={48} color="#FF9800" />,
    subtraction: <FaMinus size={48} color="#FF9800" />,
    geometry: <FaShapes size={48} color="#FF9800" />,
    
    // Coğrafya ikonları
    geography: <FaGlobeAsia size={48} color="#4CAF50" />,
    countries: <FaMapMarkedAlt size={48} color="#4CAF50" />,
    capitals: <FaMapPin size={48} color="#4CAF50" />,
    
    // Sağlık ikonları
    health: <FaAppleAlt size={48} color="#FF5722" />,
    nutrition: <FaSeedling size={48} color="#FF5722" />,
    hygiene: <FaSoap size={48} color="#FF5722" />,
    exercise: <FaHeartbeat size={48} color="#FF5722" />,
    
    // Genel ikonlar
    puzzle: <FaPuzzlePiece size={48} color="#9C27B0" />,
    brain: <FaBrain size={48} color="#3F51B5" />
  };

  return icons[type] || <FaPuzzlePiece size={48} />;
};

export default GameIcon;