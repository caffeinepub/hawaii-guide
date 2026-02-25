import { useRef } from 'react';
import { Link } from '@tanstack/react-router';
import { MapPin, Wind, Sun, Waves, ChevronDown, Star, Calendar, Thermometer, Heart, UtensilsCrossed } from 'lucide-react';
import DestinationCard from '../components/DestinationCard';
import ActivityCard from '../components/ActivityCard';
import DiningCard from '../components/DiningCard';

const destinations = [
  {
    name: 'Oahu',
    nickname: 'The Gathering Place',
    description:
      "Hawaii's most visited island blends vibrant city life with iconic beaches. Explore the legendary Waikiki strip, hike Diamond Head crater, and pay respects at Pearl Harbor — all in one unforgettable day.",
    image: '/assets/generated/oahu.dim_600x400.png',
    highlights: ['Waikiki Beach', 'Diamond Head', 'North Shore'],
    bestFor: 'City & Culture',
  },
  {
    name: 'Maui',
    nickname: 'The Valley Isle',
    description:
      'Maui enchants with its lush Road to Hana, the dormant Haleakalā volcano, and world-class whale watching. Whether you seek adventure or pure relaxation, Maui delivers paradise in every direction.',
    image: '/assets/generated/maui.dim_600x400.png',
    highlights: ['Road to Hana', 'Haleakalā', 'Kaanapali Beach'],
    bestFor: 'Romance & Adventure',
  },
  {
    name: 'Big Island',
    nickname: 'The Orchid Isle',
    description:
      "The youngest and largest island in the chain, the Big Island is home to active volcanoes, black sand beaches, and stargazing atop Mauna Kea. Witness lava meeting the ocean — nature's most dramatic show.",
    image: '/assets/generated/big-island.dim_600x400.png',
    highlights: ['Volcanoes NP', 'Mauna Kea', 'Green Sand Beach'],
    bestFor: 'Nature & Science',
  },
  {
    name: 'Kauai',
    nickname: 'The Garden Isle',
    description:
      "Kauai's dramatic Na Pali Coast, emerald valleys, and Waimea Canyon — the Grand Canyon of the Pacific — make it the most visually stunning of all the islands. A paradise for hikers and photographers alike.",
    image: '/assets/generated/kauai.dim_600x400.png',
    highlights: ['Na Pali Coast', 'Waimea Canyon', 'Napali Trail'],
    bestFor: 'Hiking & Scenery',
  },
];

const activities = [
  {
    name: 'Surfing',
    description:
      "Ride the legendary waves that gave birth to surfing itself. From gentle beginner breaks at Waikiki to the massive swells of the North Shore's Pipeline, Hawaii has a wave for every skill level.",
    image: '/assets/generated/activity-surf.dim_256x256.png',
    difficulty: 'All Levels',
    duration: 'Half Day',
  },
  {
    name: 'Snorkeling',
    description:
      "Dive into crystal-clear waters teeming with sea turtles, colorful reef fish, and vibrant coral gardens. Molokini Crater and Hanauma Bay are bucket-list snorkeling destinations you won't soon forget.",
    image: '/assets/generated/activity-snorkel.dim_256x256.png',
    difficulty: 'Beginner',
    duration: '2–3 Hours',
  },
  {
    name: 'Hiking',
    description:
      "Trek through ancient rainforests, along volcanic ridgelines, and past cascading waterfalls. The Kalalau Trail, Pipiwai Trail, and Diamond Head Summit offer some of the most breathtaking views on Earth.",
    image: '/assets/generated/activity-hike.dim_256x256.png',
    difficulty: 'Moderate',
    duration: 'Full Day',
  },
  {
    name: 'Luau',
    description:
      "Immerse yourself in Hawaiian culture at a traditional luau feast. Watch fire dancers, learn the hula, taste kalua pig and poi, and celebrate the aloha spirit under a canopy of stars.",
    image: '/assets/generated/activity-luau.dim_256x256.png',
    difficulty: 'Easy',
    duration: 'Evening',
  },
];

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

const tips = [
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Best Time to Visit',
    content:
      'April–June and September–November offer the best weather with fewer crowds and lower prices. December–March brings humpback whales but also peak tourist season.',
  },
  {
    icon: <Thermometer className="w-6 h-6" />,
    title: 'Weather & Climate',
    content:
      "Hawaii enjoys year-round temperatures of 75–85°F (24–29°C). The windward (northeast) sides are lush and rainy; leeward (southwest) sides are sunny and dry. Pack a light layer for evenings.",
  },
  {
    icon: <Wind className="w-6 h-6" />,
    title: 'Getting Around',
    content:
      'Renting a car is highly recommended on most islands. Oahu has a decent bus system (TheBus). Inter-island flights are quick (30–60 min) and affordable when booked in advance.',
  },
  {
    icon: <Sun className="w-6 h-6" />,
    title: 'Sun & Safety',
    content:
      'The Hawaiian sun is intense — apply reef-safe SPF 50+ sunscreen every 2 hours. Stay hydrated, respect ocean warning flags, and never turn your back on the waves.',
  },
  {
    icon: <Waves className="w-6 h-6" />,
    title: 'Ocean Etiquette',
    content:
      'Never touch or stand on coral reefs. Keep a respectful distance from sea turtles and monk seals (required by law). Use reef-safe sunscreen to protect marine ecosystems.',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Cultural Respect',
    content:
      "Hawaii has a rich indigenous culture — learn a few Hawaiian words, respect sacred sites (heiau), and embrace the aloha spirit. Ask permission before photographing locals or ceremonies.",
  },
];

export default function HawaiiGuide() {
  const destinationsRef = useRef<HTMLElement>(null);
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
              <span className="text-2xl">🌺</span>
              <span className="font-display text-xl font-bold text-white tracking-wide">Aloha Hawaii</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {[
                { label: 'Destinations', ref: destinationsRef },
                { label: 'Activities', ref: activitiesRef },
                { label: 'Travel Tips', ref: tipsRef },
              ].map(({ label, ref }) => (
                <button
                  key={label}
                  onClick={() => scrollTo(ref)}
                  className="text-white/80 hover:text-golden transition-colors duration-200 text-sm font-medium tracking-wide"
                >
                  {label}
                </button>
              ))}
              <Link
                to="/dining"
                className="text-white/80 hover:text-golden transition-colors duration-200 text-sm font-medium tracking-wide flex items-center gap-1.5"
              >
                <UtensilsCrossed className="w-4 h-4" />
                Dining
              </Link>
            </div>
            <button
              onClick={() => scrollTo(destinationsRef)}
              className="bg-coral hover:bg-coral-dark text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-coral/30"
            >
              Explore Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/generated/hawaii-hero.dim_1440x600.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/60 via-ocean-deep/30 to-ocean-deep/70" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-golden fill-golden" />
            <span className="text-white/90 text-sm font-medium">The Ultimate Island Experience</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 drop-shadow-2xl">
            Discover
            <span className="block text-golden">Hawai'i</span>
          </h1>
          <p className="text-white/85 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-10 font-light">
            Eight islands of volcanic wonder, turquoise waters, and aloha spirit — your paradise awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo(destinationsRef)}
              className="bg-coral hover:bg-coral-dark text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:shadow-coral/40 hover:-translate-y-0.5"
            >
              Explore Islands
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
          onClick={() => scrollTo(destinationsRef)}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-ocean-deep/80 via-ocean/80 to-ocean-deep/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 py-4 grid grid-cols-3 gap-4 text-center">
            {[
              { value: '8', label: 'Main Islands' },
              { value: '60+', label: 'Beaches' },
              { value: '365', label: 'Days of Sun' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="font-display text-2xl font-bold text-golden">{value}</div>
                <div className="text-white/70 text-xs font-medium tracking-wide uppercase">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section ref={destinationsRef} id="destinations" className="py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-coral font-semibold text-sm uppercase tracking-widest mb-3">
              <MapPin className="w-4 h-4" />
              <span>The Islands</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-ocean-deep mb-4">
              Top Destinations
            </h2>
            <p className="text-ocean-deep/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Each island has its own personality, landscape, and magic. Find the one that calls to your soul.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destinations.map((dest) => (
              <DestinationCard key={dest.name} {...dest} />
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
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-ocean-deep mb-4">
              Featured Activities
            </h2>
            <p className="text-ocean-deep/60 text-lg max-w-2xl mx-auto leading-relaxed">
              From riding world-class waves to dancing under the stars, Hawaii offers adventures for every spirit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity) => (
              <ActivityCard key={activity.name} {...activity} />
            ))}
          </div>
        </div>
      </section>

      {/* Dining Teaser Section */}
      <section ref={diningRef} id="dining" className="py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-coral font-semibold text-sm uppercase tracking-widest mb-3">
              <UtensilsCrossed className="w-4 h-4" />
              <span>Food & Culture</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-ocean-deep mb-4">
              Dining in Hawai'i
            </h2>
            <p className="text-ocean-deep/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Hawaii's culinary scene is as diverse as its landscapes — from roadside poke stands to oceanfront fine dining, every bite tells a story of the islands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {diningPosts.slice(0, 3).map((post) => (
              <DiningCard key={post.title} {...post} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/dining"
              className="inline-flex items-center gap-2 bg-ocean-deep hover:bg-ocean text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:shadow-ocean-deep/30 hover:-translate-y-0.5"
            >
              <UtensilsCrossed className="w-5 h-5" />
              Explore All Dining Experiences
            </Link>
          </div>
        </div>
      </section>

      {/* Travel Tips Section */}
      <section ref={tipsRef} id="tips" className="py-24 bg-ocean-pale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-coral font-semibold text-sm uppercase tracking-widest mb-3">
              <Sun className="w-4 h-4" />
              <span>Insider Knowledge</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-ocean-deep mb-4">
              Travel Tips
            </h2>
            <p className="text-ocean-deep/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Everything you need to know for a seamless, respectful, and unforgettable Hawaiian adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip) => (
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
          <span className="text-5xl mb-6 block">🌺</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Your Hawaiian Adventure Awaits
          </h2>
          <p className="text-white/75 text-lg mb-10 leading-relaxed">
            From the volcanic peaks of the Big Island to the emerald valleys of Kauai — paradise is calling. Start planning your dream trip today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo(destinationsRef)}
              className="bg-coral hover:bg-coral-dark text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:shadow-coral/40 hover:-translate-y-0.5"
            >
              Explore Islands
            </button>
            <Link
              to="/dining"
              className="bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 text-center"
            >
              Discover Dining
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ocean-deep border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌺</span>
              <span className="font-display text-lg font-bold text-white">Aloha Hawaii</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-white/50 text-sm">
              <button onClick={() => scrollTo(destinationsRef)} className="hover:text-golden transition-colors">Destinations</button>
              <button onClick={() => scrollTo(activitiesRef)} className="hover:text-golden transition-colors">Activities</button>
              <Link to="/dining" className="hover:text-golden transition-colors">Dining</Link>
              <button onClick={() => scrollTo(tipsRef)} className="hover:text-golden transition-colors">Travel Tips</button>
            </div>
            <p className="text-white/50 text-sm text-center">
              © {new Date().getFullYear()} Aloha Hawaii. Built with{' '}
              <Heart className="w-3.5 h-3.5 inline text-coral fill-coral" />{' '}using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname || 'aloha-hawaii')}`}
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
