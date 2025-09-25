import { motion } from 'framer-motion';

interface TagChipProps {
  name: string;
  badge?: string;
  className?: string;
}

const TagChip = ({ name, badge, className = '' }: TagChipProps) => {
  return (
    <motion.div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span>{name}</span>
      {badge && (
        <span className="px-2 py-0.5 text-xs font-semibold bg-white/20 text-white rounded-full">
          {badge}
        </span>
      )}
    </motion.div>
  );
};

export default TagChip;
