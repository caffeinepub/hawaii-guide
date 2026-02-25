interface DiningCardProps {
  title: string;
  description: string;
  image: string;
  cuisineType: string;
  island: string;
}

export default function DiningCard({
  title,
  description,
  image,
  cuisineType,
  island,
}: DiningCardProps) {
  return (
    <article className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-sand-dark/20">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/60 via-transparent to-transparent" />
        <div className="absolute top-4 right-4">
          <span className="bg-golden text-ocean-deep text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            {cuisineType}
          </span>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-ocean-deep/70 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
            <span>📍</span>
            {island}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-ocean-deep mb-2 group-hover:text-coral transition-colors duration-300">
          {title}
        </h3>
        <p className="text-ocean-deep/65 text-sm leading-relaxed">{description}</p>
      </div>
    </article>
  );
}
