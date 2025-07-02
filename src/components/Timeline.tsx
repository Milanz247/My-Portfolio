"use client";

import React from "react";

// TypeScript interface for a single timeline item
interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  details: string | string[];
  icon?: React.ReactNode;
}

// Props for the main Timeline component
interface TimelineProps {
  items: TimelineItemProps[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative">
      {/* Modern Gradient Timeline Line */}
      <div className="timeline-gradient-line"></div>
      
      {/* Timeline Items */}
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative flex items-start">
            {/* Enhanced Timeline Marker with Pulse Animation */}
            <div className="timeline-marker-pulse absolute left-2 w-4 h-4 bg-primary rounded-full border-2 border-background shadow-sm z-10 flex items-center justify-center">
              {item.icon ? (
                <div className="text-primary-foreground text-xs">
                  {item.icon}
                </div>
              ) : (
                <span className="text-primary-foreground text-xs font-semibold">
                  {index + 1}
                </span>
              )}
            </div>
            
            {/* Content Box with Enhanced Hover Effects */}
            <div className="ml-10 flex-1">
              <div className="transition-transform duration-300 hover:-translate-y-1">
                <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                  {/* Enhanced Date Badge */}
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4 transition-colors duration-300 hover:bg-primary/20">
                    {item.date}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight transition-colors duration-300 hover:text-primary">
                    {item.title}
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="text-primary font-medium mb-4 transition-colors duration-300">
                    {item.subtitle}
                  </p>
                  
                  {/* Details */}
                  <div>
                    {Array.isArray(item.details) ? (
                      <ul className="space-y-2">
                        {item.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start group">
                            <span className="text-primary mr-3 mt-1.5 text-xs transition-transform duration-300 group-hover:scale-125">●</span>
                            <span className="text-muted-foreground text-sm leading-relaxed transition-colors duration-300 group-hover:text-foreground">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground text-sm leading-relaxed transition-colors duration-300 hover:text-foreground">
                        {item.details}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
export type { TimelineItemProps, TimelineProps };
