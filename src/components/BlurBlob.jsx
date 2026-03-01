// components/BlurBlob.jsx
import PropTypes from 'prop-types';

const BlurBlob = ({ position, size, color = 'purple' }) => {
  const { top, left } = position;
  const { width, height } = size;

  const colorMap = {
    purple: 'bg-purple-500',
    blue: 'bg-blue-500',
    pink: 'bg-pink-500',
    indigo: 'bg-indigo-500',
    violet: 'bg-violet-600',
  };

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top,
        left,
        width,
        height,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className={`w-full h-full ${colorMap[color] || colorMap.purple} rounded-full opacity-15 blur-3xl animate-blob`}
      />
    </div>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  color: PropTypes.string,
};

export default BlurBlob;
