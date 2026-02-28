interface DestinationCardProps {
  name: string;
  nickname: string;
  description: string;
  image: string;
  highlights: string[];
  bestFor: string;
}

export default function DestinationCard({
  name,
  nickname,
  description,
  image,
  highlights,
  bestFor,
}: DestinationCardProps) {
  return (
    <article className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-sand-dark/20">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={`${name} - ${nickname}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/60 via-transparent to-transparent" />
        <div className="absolute top-4 right-4">
          <span className="bg-coral text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
            {bestFor}
          </span>
        </div>
        <div className="absolute bottom-4 left-4">
          <h3 className="font-display text-3xl font-bold text-white drop-shadow-lg">
            {name}
          </h3>
          <p className="text-white/80 text-sm font-medium">{nickname}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-ocean-deep/70 text-sm leading-relaxed mb-5">
          {description}
        </p>

        {/* Highlights */}
        <div>
          <p className="text-ocean-deep/40 text-xs font-semibold uppercase tracking-widest mb-2">
            Highlights
          </p>
          <div className="flex flex-wrap gap-2">
            {highlights.map((highlight) => (
              <span
                key={highlight}
                className="bg-ocean-pale text-ocean text-xs font-medium px-3 py-1 rounded-full"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
