import React from 'react';

export const StatCard = ({ 
  value, 
  label, 
  icon: Icon, 
  colorVariant = 'blue' 
}) => {
  return (
    <div className={`stat-card stat-card-${colorVariant}`}>
      <div className={`stat-icon-wrapper stat-icon-${colorVariant}`}>
        {Icon && <Icon size={22} strokeWidth={2.2} />}
      </div>
      <div>
        <div className="stat-value">{value}</div>
        <div className="stat-label">{label}</div>
      </div>
    </div>
  );
};

export default StatCard;
