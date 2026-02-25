import { useState, useMemo } from 'react';
import { Link } from '@tanstack/react-router';
import { UtensilsCrossed, ArrowLeft, Star, MapPin, Flame, Leaf, Fish, Search, X } from 'lucide-react';
import DiningCard from '../components/DiningCard';

const diningPosts = [
  {
    title: 'The Art of the Poke Bowl',
    description:
      "Hawaii's most iconic dish — fresh ahi tuna marinated in soy sauce, sesame oil, and sea salt, served over steamed rice with creamy avocado and crunchy furikake. Every island has its own spin on this beloved classic.",
    image: '/assets/generated/dining-poke-bowl.dim_800x600.png',
    cuisineType: 'Hawaiian',
    island: 'Oahu',
  },
  {
    title: 'Shave Ice: A Local Obsession',
    description:
      "Far more than a snow cone, Hawaiian shave ice is a finely shaved cloud of ice drenched in tropical syrups — lilikoi, mango, coconut — often topped with azuki beans or a scoop of macadamia nut ice cream.",
    image: '/assets/generated/dining-shave-ice.dim_800x600.png',
    cuisineType: 'Dessert',
    island: 'Maui',
  },
  {
    title: 'Plate Lunch: The Soul of Local Food',
    description:
      "The quintessential Hawaiian comfort meal: two scoops of white rice, a scoop of macaroni salad, and your choice of protein — kalua pork, chicken katsu, or loco moco. Filling, affordable, and deeply local.",
    image: '/assets/generated/dining-plate-lunch.dim_800x600.png',
    cuisineType: 'Local Cuisine',
    island: 'Big Island',
  },
  {
    title: 'Luau Feast: A Cultural Celebration',
    description:
      "A traditional Hawaiian luau is a feast for all the senses. Slow-roasted kalua pig from an underground imu oven, poi, lomi salmon, haupia coconut pudding, and fresh pineapple — all enjoyed under the stars.",
    image: '/assets/generated/dining-luau-feast.dim_800x600.png',
    cuisineType: 'Traditional',
    island: 'Kauai',
  },
  {
    title: 'Fine Dining with an Ocean View',
    description:
      "Hawaii's upscale dining scene blends Pacific Rim flavors with farm-to-table freshness. Think seared mahi-mahi with mango salsa, lobster bisque infused with coconut milk, and sunset views over the Pacific.",
    image: '/assets/generated/dining-fine-dining.dim_800x600.png',
    cuisineType: 'Fine Dining',
    island: 'Maui',
  },
  {
    title: 'Tropical Fruit Markets',
    description:
      "Discover Hawaii's extraordinary bounty at roadside fruit stands and farmers markets. Sample rambutan, starfruit, dragon fruit, and the sweetest pineapple you've ever tasted — all grown in volcanic soil.",
    image: '/assets/generated/dining-fruit-market.dim_800x600.png',
    cuisineType: 'Fresh & Local',
    island: 'Big Island',
  },
];

const highlights = [
  {
    icon: <Fish className="w-6 h-6" />,
    label: 'Fresh Seafood',
    description: 'Ocean-to-table daily catches',
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    label: 'Farm-to-Table',
    description: 'Volcanic soil grown produce',
  },
  {
    icon: <Flame className="w-6 h-6" />,
    label: 'Cultural Flavors',
    description: 'Polynesian & Pacific Rim fusion',
  },
  {
    icon: <Star className="w-6 h-6" />,
    label: 'World-Class Chefs',
    description: 'Award-winning island cuisine',
  },
];

const ALL_CUISINES = 'All';
const ALL_ISLANDS = 'All Islands';

const cuisineTypes = [ALL_CUISINES, ...Array.from(new Set(diningPosts.map((p) => p.cuisineType)))];
const islands = [ALL_ISLANDS, ...Array.from(new Set(diningPosts.map((p) => p.island)))];

export default function DiningHawaii() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState(ALL_CUISINES);
  const [selectedIsland, setSelectedIsland] = useState(ALL_ISLANDS);

  const filteredPosts = useMemo(() => {
    return diningPosts.filter((post) => {
      const matchesCuisine =
        selectedCuisine === ALL_CUISINES ||
        post.cuisineType.toLowerCase() === selectedCuisine.toLowerCase();
      const matchesIsland =
        selectedIsland === ALL_ISLANDS ||
        post.island.toLowerCase() === selectedIsland.toLowerCase();
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query);
      return matchesCuisine && matchesIsland && matchesSearch;
    });
  }, [searchQuery, selectedCuisine, selectedIsland]);

  const hasActiveFilters =
    selectedCuisine !== ALL_CUISINES || selectedIsland !== ALL_ISLANDS || searchQuery.trim() !== '';

  function clearAllFilters() {
    setSearchQuery('');
    setSelectedCuisine(ALL_CUISINES);
    setSelectedIsland(ALL_ISLANDS);
  }

  return (
    <div className="min-h-screen bg-sand font-body">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-ocean-deep/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌺</span>
              <span className="font-display text-xl font-bold text-white tracking-wide">Aloha Hawaii</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className="text-white/80 hover:text-golden transition-colors duration-200 text-sm font-medium tracking-wide flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Guide
              </Link>
              <div className="flex items-center gap-2 text-golden font-semibold text-sm">
                <UtensilsCrossed className="w-4 h-4" />
                <span>Dining in Hawai'i</span>
              </div>
            </div>
            <Link
              to="/"
              className="bg-coral hover:bg-coral-dark text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-coral/30 flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              Full Guide
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/generated/dining-fruit-market.dim_800x600.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/40 via-ocean-deep/30 to-ocean-deep/85" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-5">
            <UtensilsCrossed className="w-4 h-4 text-golden" />
            <span className="text-white/90 text-sm font-medium">Food & Culture</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-4 drop-shadow-2xl">
            Dining in
            <span className="block text-golden">Hawai'i</span>
          </h1>
          <p className="text-white/85 text-lg sm:text-xl max-w-2xl leading-relaxed font-light">
            From roadside poke stands to oceanfront fine dining — every bite tells a story of the islands.
          </p>

          {/* Highlight pills */}
          <div className="flex flex-wrap gap-3 mt-8">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
              >
                <span className="text-golden">{h.icon}</span>
                <div>
                  <span className="text-white text-sm font-semibold">{h.label}</span>
                  <span className="text-white/60 text-xs ml-2 hidden sm:inline">{h.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-ocean-deep border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-5 grid grid-cols-3 gap-4 text-center">
          {[
            { value: '6', label: 'Culinary Stories' },
            { value: '4', label: 'Islands Featured' },
            { value: '∞', label: 'Flavors to Discover' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="font-display text-2xl font-bold text-golden">{value}</div>
              <div className="text-white/70 text-xs font-medium tracking-wide uppercase">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Dining Cards Grid */}
      <section className="py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-coral font-semibold text-sm uppercase tracking-widest mb-3">
              <MapPin className="w-4 h-4" />
              <span>Island Flavors</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-ocean-deep mb-4">
              Culinary Experiences
            </h2>
            <p className="text-ocean-deep/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Hawaii's culinary scene is as diverse as its landscapes — a melting pot of Polynesian, Asian, and American flavors shaped by the islands' unique culture and bounty.
            </p>
          </div>

          {/* Search & Filter Controls */}
          <div className="mb-10 space-y-5">
            {/* Search Input */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ocean/60 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dining posts..."
                className="w-full pl-12 pr-10 py-3 rounded-2xl border-2 border-ocean/20 bg-white text-ocean-deep placeholder-ocean-deep/40 font-body text-sm focus:outline-none focus:border-golden focus:ring-2 focus:ring-golden/20 transition-all duration-200 shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-ocean-deep/40 hover:text-coral transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Cuisine Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-ocean-deep/50 text-xs font-semibold uppercase tracking-widest self-center mr-1">
                Cuisine:
              </span>
              {cuisineTypes.map((cuisine) => {
                const isActive = selectedCuisine === cuisine;
                return (
                  <button
                    key={cuisine}
                    onClick={() => setSelectedCuisine(isActive && cuisine !== ALL_CUISINES ? ALL_CUISINES : cuisine)}
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold border-2 transition-all duration-200 ${
                      isActive
                        ? 'bg-golden border-golden text-ocean-deep shadow-md shadow-golden/30'
                        : 'bg-white border-golden/30 text-ocean-deep/70 hover:border-golden hover:text-ocean-deep hover:bg-golden/10'
                    }`}
                  >
                    {cuisine}
                  </button>
                );
              })}
            </div>

            {/* Island Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-ocean-deep/50 text-xs font-semibold uppercase tracking-widest self-center mr-1">
                Island:
              </span>
              {islands.map((island) => {
                const isActive = selectedIsland === island;
                return (
                  <button
                    key={island}
                    onClick={() => setSelectedIsland(isActive && island !== ALL_ISLANDS ? ALL_ISLANDS : island)}
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold border-2 transition-all duration-200 ${
                      isActive
                        ? 'bg-ocean border-ocean text-white shadow-md shadow-ocean/30'
                        : 'bg-white border-ocean/30 text-ocean-deep/70 hover:border-ocean hover:text-ocean-deep hover:bg-ocean/10'
                    }`}
                  >
                    {island}
                  </button>
                );
              })}
            </div>

            {/* Active filter summary + clear */}
            {hasActiveFilters && (
              <div className="flex items-center justify-center gap-3">
                <span className="text-ocean-deep/60 text-sm">
                  Showing <span className="font-bold text-coral">{filteredPosts.length}</span> of {diningPosts.length} posts
                </span>
                <button
                  onClick={clearAllFilters}
                  className="flex items-center gap-1.5 text-xs font-semibold text-coral hover:text-coral-dark border border-coral/30 hover:border-coral px-3 py-1 rounded-full transition-all duration-200"
                >
                  <X className="w-3 h-3" />
                  Clear all
                </button>
              </div>
            )}
          </div>

          {/* Cards Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <DiningCard key={post.title} {...post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <span className="text-5xl mb-4 block">🍽️</span>
              <h3 className="font-display text-2xl font-bold text-ocean-deep mb-2">No results found</h3>
              <p className="text-ocean-deep/55 text-base mb-6">
                Try adjusting your search or filters to discover more island flavors.
              </p>
              <button
                onClick={clearAllFilters}
                className="inline-flex items-center gap-2 bg-coral text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-all duration-200 hover:shadow-lg hover:shadow-coral/30"
              >
                <X className="w-4 h-4" />
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 overflow-hidden bg-ocean-deep">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-golden rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-coral rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <span className="text-5xl mb-6 block">🍽️</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Ready to Taste Paradise?
          </h2>
          <p className="text-white/75 text-lg mb-10 leading-relaxed">
            Explore the full Hawaii travel guide — discover islands, activities, and everything you need for the perfect trip.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-coral hover:bg-coral-dark text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:shadow-coral/40 hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-5 h-5" />
            Explore Full Guide
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ocean-deep border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌺</span>
              <span className="font-display text-lg font-bold text-white">Aloha Hawaii</span>
            </div>
            <p className="text-white/50 text-sm text-center">
              © {new Date().getFullYear()} Aloha Hawaii. Built with{' '}
              <span className="text-coral">♥</span> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname || 'aloha-hawaii')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-golden hover:text-golden/80 transition-colors"
              >
                caffeine.ai
              </a>
            </p>
            <Link
              to="/"
              className="text-white/60 hover:text-golden transition-colors text-sm flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Full Guide
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
