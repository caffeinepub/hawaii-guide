import { useRef } from 'react';
import { Link } from '@tanstack/react-router';
import {
  MapPin,
  Wind,
  Sun,
  Waves,
  ChevronDown,
  Star,
  UtensilsCrossed,
  Heart,
  Mountain,
  Landmark,
  Palmtree,
  Ship,
  Camera,
  Bus,
  Home,
  Cloud,
  Fish,
  Flame,
  TrendingUp,
  Soup,
} from 'lucide-react';

const attractions = [
  {
    name: 'Waikiki Beach',
    description:
      "The world's most famous beach — a two-mile stretch of golden sand with gentle waves perfect for learning to surf. Watch fire dancers at sunset and stroll the iconic beachfront strip.",
    image: '/assets/uploads/FB_IMG_1771357967442-1.jpg',
    icon: <Waves className="w-4 h-4" />,
    category: 'Beach',
    mustDo: 'Surf lesson at sunset',
  },
  {
    name: 'Diamond Head',
    description:
      "Hike to the summit of this volcanic tuff cone for panoramic 360° views of Waikiki, Honolulu, and the sparkling Pacific. The moderately challenging trail takes about 1.5–2 hours round trip.",
    image: '/assets/generated/oahu.dim_600x400.png',
    icon: <Mountain className="w-4 h-4" />,
    category: 'Hiking',
    mustDo: 'Sunrise summit hike',
  },
  {
    name: 'North Shore',
    description:
      "Home to legendary surf breaks like Pipeline and Sunset Beach. In winter, watch pro surfers tackle 30-foot waves. In summer, enjoy calm waters and explore charming surf towns.",
    image: '/assets/generated/oahu.dim_600x400.png',
    icon: <Waves className="w-4 h-4" />,
    category: 'Surf & Beach',
    mustDo: 'Shrimp trucks + sunset',
  },
  {
    name: 'Pearl Harbor',
    description:
      "A living memorial to the events of December 7, 1941. Visit the USS Arizona Memorial, Battleship Missouri, and aviation museum to honor history and those who served.",
    image: '/assets/generated/oahu.dim_600x400.png',
    icon: <Landmark className="w-4 h-4" />,
    category: 'History',
    mustDo: 'USS Arizona tour',
  },
  {
    name: 'Lanikai Beach',
    description:
      "Often ranked among the world's most beautiful beaches — powdery white sand, turquoise water, and views of the iconic Mokulua Islands. Perfect for kayaking and sunrise photos.",
    image: '/assets/generated/oahu.dim_600x400.png',
    icon: <Palmtree className="w-4 h-4" />,
    category: 'Beach',
    mustDo: 'Kayak to Mokes',
  },
  {
    name: 'Kailua Beach',
    description:
      "A locals' favorite — wide, soft sand and consistent trade winds make it ideal for windsurfing, kiteboarding, and simply soaking up the sun. Less crowded than Waikiki.",
    image: '/assets/generated/oahu.dim_600x400.png',
    icon: <Wind className="w-4 h-4" />,
    category: 'Beach & Water Sports',
    mustDo: 'Kite surfing lesson',
  },
  {
    name: 'Halona Blowhole',
    description:
      "Watch seawater shoot 30 feet into the air through a lava tube as waves crash against the rugged coastline. The adjacent cove was featured in the film From Here to Eternity.",
    image: '/assets/generated/oahu.dim_600x400.png',
    icon: <Camera className="w-4 h-4" />,
    category: 'Nature',
    mustDo: 'Time your visit with high tide',
  },
];

const activities = [
  {
    name: 'Surf Lessons at Waikiki',
    description:
      "Learn to surf where legends like Duke Kahanamoku grew up riding waves. Waikiki's gentle, rolling swells are perfect for beginners. Most students stand up on their first try!",
    icon: <Waves className="w-6 h-6" />,
    duration: '2 Hours',
    difficulty: 'Beginner',
    bestTime: 'Morning',
  },
  {
    name: 'Snorkeling at Hanauma Bay',
    description:
      "Swim with sea turtles, parrotfish, and tropical reef fish in this protected marine sanctuary. Crystal-clear water and calm conditions make it ideal for all skill levels.",
    icon: <Fish className="w-6 h-6" />,
    duration: '3–4 Hours',
    difficulty: 'Easy',
    bestTime: 'Early Morning',
  },
  {
    name: 'Hiking Diamond Head',
    description:
      "Climb to the summit of Oahu's most iconic landmark for sweeping views of Waikiki and the Pacific. The trail includes stairs, tunnels, and bunkers from WWII.",
    icon: <Mountain className="w-6 h-6" />,
    duration: '1.5–2 Hours',
    difficulty: 'Moderate',
    bestTime: 'Sunrise or Late Afternoon',
  },
  {
    name: 'Pearl Harbor Tour',
    description:
      "Pay respects at the USS Arizona Memorial, explore the Battleship Missouri, and walk through the USS Bowfin submarine. A moving, educational experience for all ages.",
    icon: <Ship className="w-6 h-6" />,
    duration: 'Half Day',
    difficulty: 'Easy',
    bestTime: 'Morning (arrive early)',
  },
  {
    name: 'North Shore Shrimp Truck Crawl',
    description:
      "Taste legendary garlic shrimp from iconic roadside trucks like Giovanni's and Fumi's. Pair it with a visit to Matsumoto's for rainbow shave ice — a quintessential Oahu experience.",
    icon: <UtensilsCrossed className="w-6 h-6" />,
    duration: 'Half Day',
    difficulty: 'Easy',
    bestTime: 'Lunch Time',
  },
  {
    name: 'Sunset at Tantalus Lookout',
    description:
      "Drive up the winding Tantalus-Round Top Drive for a panoramic sunset view of Honolulu, Diamond Head, and the Pacific — one of Oahu's most breathtaking vantage points.",
    icon: <Camera className="w-6 h-6" />,
    duration: '1 Hour',
    difficulty: 'Easy',
    bestTime: 'Sunset',
  },
];

const diningHighlights = [
  {
    title: 'Poke Bowls',
    description: 'Oahu is the birthplace of this iconic dish — fresh ahi tuna, soy, sesame, and rice.',
    icon: <Fish className="w-6 h-6" />,
  },
  {
    title: 'Shrimp Trucks',
    description: 'North Shore legends serving garlic shrimp, spicy shrimp, and buttery Hawaiian plates.',
    icon: <Flame className="w-6 h-6" />,
  },
  {
    title: 'Plate Lunch Spots',
    description: 'Two scoops rice, mac salad, and your choice of protein — the soul of local food.',
    icon: <Soup className="w-6 h-6" />,
  },
  {
    title: 'Beachfront Dining',
    description: 'Upscale Pacific Rim cuisine with sunset views over Waikiki and the Pacific.',
    icon: <TrendingUp className="w-6 h-6" />,
  },
];

const visitorTips = [
  {
    icon: <Bus className="w-6 h-6" />,
    title: 'Getting Around — TheBus',
    content:
      "Oahu's public bus system (TheBus) is affordable, reliable, and covers the entire island. Single rides are $3, or get a day pass for $7.50. Rent a car if you want flexibility for North Shore and windward beaches.",
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: 'Best Neighborhoods to Stay',
    content:
      "Waikiki for beachfront convenience, Kailua for laid-back beach vibes, North Shore for surf culture, or Honolulu for urban energy. Each offers a unique Oahu experience.",
  },
  {
    icon: <Sun className="w-6 h-6" />,
    title: 'Weather & What to Pack',
    content:
      "Oahu averages 75–85°F year-round. The North Shore and windward coast are rainier; the south and leeward sides are sunnier. Pack reef-safe sunscreen, light layers, and a rain jacket.",
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: 'Best Time to Visit',
    content:
      "April–May and September–November offer great weather and fewer crowds. December–March brings big North Shore surf and whale watching. Summer is calmest for snorkeling.",
  },
  {
    icon: <Mountain className="w-6 h-6" />,
    title: 'Hiking Tips',
    content:
      "Start early to avoid heat and crowds. Bring plenty of water, wear sturdy shoes, and respect trail closures. Some hikes (Haiku Stairs, Sacred Falls) are illegal and dangerous.",
  },
  {
    icon: <Waves className="w-6 h-6" />,
    title: 'Ocean Safety',
    content:
      "Never turn your back on the waves. Respect warning flags and posted signs. Rip currents are common — swim parallel to shore to escape. Keep distance from sea turtles (legally required).",
  },
];

export default function VisitOahu2() {
  const attractionsRef = useRef<HTMLElement>(null);
  const activitiesRef = useRef<HTMLElement>(null);
  const diningRef = useRef<HTMLElement>(null);
  const tipsRef = useRef<HTMLElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-sand font-body">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-ocean-deep/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌴</span>
              <span className="font-display text-xl font-bold text-white tracking-wide">Visit Oahu</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {[
                { label: 'Attractions', ref: attractionsRef },
                { label: 'Activities', ref: activitiesRef },
                { label: 'Dining', ref: diningRef },
                { label: 'Tips', ref: tipsRef },
              ].map(({ label, ref }) => (
                <button
                  type="button"
                  key={label}
                  onClick={() => scrollTo(ref)}
                  className="text-white/80 hover:text-golden transition-colors duration-200 text-sm font-medium tracking-wide"
                >
                  {label}
                </button>
              ))}
              <Link
                to="/"
                className="text-white/80 hover:text-golden transition-colors duration-200 text-sm font-medium tracking-wide"
              >
                All Islands
              </Link>
            </div>
            <button
              type="button"
              onClick={() => scrollTo(attractionsRef)}
              className="bg-coral hover:bg-coral-dark text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-coral/30"
            >
              Explore Oahu
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/uploads/FB_IMG_1771357967442-1.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/60 via-ocean-deep/30 to-ocean-deep/70" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-golden fill-golden" />
            <span className="text-white/90 text-sm font-medium">The Gathering Place</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 drop-shadow-2xl">
            Visit
            <span className="block text-golden">Oahu</span>
          </h1>
          <p className="text-white/85 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-10 font-light">
            Where legendary surf breaks meet iconic beaches, volcanic craters touch the sky, and the aloha spirit
            shines brightest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => scrollTo(attractionsRef)}
              className="bg-coral hover:bg-coral-dark text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:shadow-coral/40 hover:-translate-y-0.5"
            >
              Explore Attractions
            </button>
            <Link
              to="/dining"
              className="bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 text-center"
            >
              Discover Dining
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          type="button"
          onClick={() => scrollTo(attractionsRef)}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>

        {/* Stats bar */}
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-ocean-deep/80 via-ocean/80 to-ocean-deep/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 py-4 grid grid-cols-3 gap-4 text-center">
            {[
              { value: '227', label: 'Miles of Coastline' },
              { value: '70+', label: 'Beaches' },
              { value: '#1', label: 'Island in Hawaii' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="font-display text-2xl font-bold text-golden">{value}</div>
                <div className="text-white/70 text-xs font-medium tracking-wide uppercase">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section ref={attractionsRef} id="attractions" className="py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-coral font-semibold text-sm uppercase tracking-widest mb-3">
              <MapPin className="w-4 h-4" />
              <span>Must-See Spots</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-ocean-deep mb-4">
              Top Oahu Attractions
            </h2>
            <p className="text-ocean-deep/60 text-lg max-w-2xl mx-auto leading-relaxed">
              From world-famous beaches to historic landmarks, Oahu packs unforgettable experiences into one incredible
              island.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction) => (
              <div
                key={attraction.name}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-sand-dark/30"
              >
                <div className="relative h-48">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-110"
                    style={{ backgroundImage: `url('${attraction.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/60 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-2">
                    <div className="text-ocean">{attraction.icon}</div>
                    <span className="text-xs font-semibold text-ocean-deep">{attraction.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-ocean-deep mb-2">{attraction.name}</h3>
                  <p className="text-ocean-deep/65 text-sm leading-relaxed mb-4">{attraction.description}</p>
                  <div className="flex items-center gap-2 text-coral text-sm font-semibold">
                    <Star className="w-4 h-4 fill-coral" />
                    <span>Must Do: {attraction.mustDo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section ref={activitiesRef} id="activities" className="py-24 bg-ocean-pale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-coral font-semibold text-sm uppercase tracking-widest mb-3">
              <Waves className="w-4 h-4" />
              <span>Experiences</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-ocean-deep mb-4">Oahu Activities</h2>
            <p className="text-ocean-deep/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Surf legendary waves, snorkel with sea turtles, hike volcanic craters, and honor history — Oahu offers
              unforgettable adventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <div
                key={activity.name}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-sand-dark/30"
              >
                <div className="w-14 h-14 bg-ocean-pale rounded-xl flex items-center justify-center text-ocean mb-4">
                  {activity.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-ocean-deep mb-2">{activity.name}</h3>
                <p className="text-ocean-deep/65 text-sm leading-relaxed mb-4">{activity.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-ocean-deep/50 font-medium">Duration:</span>
                    <span className="text-ocean-deep font-semibold">{activity.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-ocean-deep/50 font-medium">Difficulty:</span>
                    <span className="text-ocean-deep font-semibold">{activity.difficulty}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-ocean-deep/50 font-medium">Best Time:</span>
                    <span className="text-ocean-deep font-semibold">{activity.bestTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Highlights Section */}
      <section ref={diningRef} id="dining" className="py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-coral font-semibold text-sm uppercase tracking-widest mb-3">
              <UtensilsCrossed className="w-4 h-4" />
              <span>Food & Flavors</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-ocean-deep mb-4">
              Oahu Dining Highlights
            </h2>
            <p className="text-ocean-deep/60 text-lg max-w-2xl mx-auto leading-relaxed">
              From legendary poke bowls to North Shore shrimp trucks — Oahu's food scene is as diverse and delicious as
              its landscapes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {diningHighlights.map((highlight) => (
              <div
                key={highlight.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-sand-dark/30 text-center"
              >
                <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center text-coral mx-auto mb-4">
                  {highlight.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-ocean-deep mb-2">{highlight.title}</h3>
                <p className="text-ocean-deep/65 text-sm leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/dining"
              className="inline-flex items-center gap-2 bg-ocean-deep hover:bg-ocean text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:shadow-ocean-deep/30 hover:-translate-y-0.5"
            >
              <UtensilsCrossed className="w-5 h-5" />
              Explore Full Dining Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Visitor Tips Section */}
      <section ref={tipsRef} id="tips" className="py-24 bg-ocean-pale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-coral font-semibold text-sm uppercase tracking-widest mb-3">
              <Sun className="w-4 h-4" />
              <span>Practical Info</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-ocean-deep mb-4">
              Oahu Visitor Tips
            </h2>
            <p className="text-ocean-deep/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Everything you need to know to navigate Oahu like a local — transportation, neighborhoods, weather, and
              insider tips.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visitorTips.map((tip) => (
              <div
                key={tip.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-sand-dark/30"
              >
                <div className="w-12 h-12 bg-ocean-pale rounded-xl flex items-center justify-center text-ocean mb-4">
                  {tip.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-ocean-deep mb-2">{tip.title}</h3>
                <p className="text-ocean-deep/65 text-sm leading-relaxed">{tip.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 overflow-hidden bg-ocean-deep">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-golden rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-coral rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <span className="text-5xl mb-6 block">🌴</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Your Oahu Adventure Starts Here
          </h2>
          <p className="text-white/75 text-lg mb-10 leading-relaxed">
            From sunrise on Diamond Head to sunset at Waikiki — Oahu is calling. Experience the perfect blend of urban
            energy, beach paradise, and island aloha.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => scrollTo(attractionsRef)}
              className="bg-coral hover:bg-coral-dark text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:shadow-coral/40 hover:-translate-y-0.5"
            >
              Explore Attractions
            </button>
            <Link
              to="/"
              className="bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 text-center"
            >
              Discover All Islands
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ocean-deep border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌴</span>
              <span className="font-display text-lg font-bold text-white">Visit Oahu</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-white/50 text-sm">
              <button type="button" onClick={() => scrollTo(attractionsRef)} className="hover:text-golden transition-colors">
                Attractions
              </button>
              <button type="button" onClick={() => scrollTo(activitiesRef)} className="hover:text-golden transition-colors">
                Activities
              </button>
              <button type="button" onClick={() => scrollTo(diningRef)} className="hover:text-golden transition-colors">
                Dining
              </button>
              <button type="button" onClick={() => scrollTo(tipsRef)} className="hover:text-golden transition-colors">
                Tips
              </button>
              <Link to="/" className="hover:text-golden transition-colors">
                All Islands
              </Link>
            </div>
            <p className="text-white/50 text-sm text-center">
              © {new Date().getFullYear()} Visit Oahu. Built with{' '}
              <Heart className="w-3.5 h-3.5 inline text-coral fill-coral" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname || 'visit-oahu')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-golden hover:text-golden/80 transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
