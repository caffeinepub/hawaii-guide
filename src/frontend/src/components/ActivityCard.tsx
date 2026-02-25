import { Clock, BarChart2 } from 'lucide-react';

interface ActivityCardProps {
  name: string;
  description: string;
  image: string;
  difficulty: string;
  duration: string;
}

export default function ActivityCard({
  name,
  description,
  image,
  difficulty,
  duration,
}: ActivityCardProps) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-400 hover:-translate-y-1 border border-sand-dark/20 flex flex-col">
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-ocean-pale flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 object-contain transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ocean-pale/30" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-xl font-bold text-ocean-deep mb-2">{name}</h3>
        <p className="text-ocean-deep/65 text-sm leading-relaxed mb-4 flex-1">{description}</p>

        {/* Meta */}
        <div className="flex items-center gap-4 pt-3 border-t border-sand-dark/20">
          <div className="flex items-center gap-1.5 text-ocean/70">
            <BarChart2 className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">{difficulty}</span>
          </div>
          <div className="flex items-center gap-1.5 text-ocean/70">
            <Clock className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">{duration}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
