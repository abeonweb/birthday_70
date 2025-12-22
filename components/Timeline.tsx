
import React from 'react';
import { ProgramEvent } from '@/types';
import { ICON_MAP } from '@/constants';

interface TimelineProps {
  events: ProgramEvent[];
}

export const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-stone-300 before:to-transparent">
      {events.map((event, index) => (
        <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          {/* Dot */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-stone-200 bg-stone-50 text-stone-600 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            {ICON_MAP[event.icon]}
          </div>
          {/* Content */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-stone-100 bg-white shadow-sm">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <span className="font-bold text-[#C5A059] uppercase tracking-wider text-sm">{event.time}</span>
            </div>
            <h3 className="text-xl font-bold text-stone-800">{event.title}</h3>
            {event.description && (
              <p className="text-stone-600 mt-1 leading-relaxed">{event.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
