import React from 'react';

interface JobCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
  position: 'left' | 'right';
}

export const JobCard: React.FC<JobCardProps> = ({ title, description, icon, index, position }) => (
  <div 
    className="bg-card text-card-foreground rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-200 transform hover:rotate-0" 
    style={{
      transform: `rotate(${position === 'left' ? 
        (index % 2 === 0 ? '-' : '') : 
        (index % 2 === 0 ? '' : '-')}2deg)`
    }}
  >
    <div className="flex items-start gap-3 mb-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <h3 className="font-medium text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  </div>
);