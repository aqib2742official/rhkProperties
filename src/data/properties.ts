import villaHero from "@/assets/images/villa-hero.jpg";
import villaPool from "@/assets/images/villa-pool.jpg";
import penthouseHero from "@/assets/images/penthouse-hero.jpg";
import villaLiving from "@/assets/images/villa-living.jpg";
import townhouseLiving from "@/assets/images/townhouse-living.jpg";
import penthouseInterior from "@/assets/images/penthouse-interior.jpg";
import propertyElegantApartment from "@/assets/images/property-elegant-apartment.jpg";
import villaContemporary from "@/assets/images/villa-contemporary.jpg";
import villaPoolside from "@/assets/images/villa-poolside.jpg";
import villaModern from "@/assets/images/villa-modern.jpg";
import villaNight from "@/assets/images/villa-night.jpg";
import villaGarden from "@/assets/images/villa-garden.jpg";
import apartmentLuxury from "@/assets/images/apartment-luxury.jpg";
import apartmentHero from "@/assets/images/apartment-hero.jpg";
import propertyBeachfront from "@/assets/images/property-beachfront.jpg";
import propertyOfficeLobby from "@/assets/images/property-office-lobby.jpg";
import commercialHero from "@/assets/images/commercial-hero.jpg";
import propertyRetail from "@/assets/images/property-retail.jpg";
import propertyWarehouse from "@/assets/images/property-warehouse.jpg";
import apartmentModern from "@/assets/images/apartment-modern.jpg";

export interface Property {
  id: number;
  title: string;
  type: 'Villa' | 'Apartment' | 'Penthouse' | 'Townhouse';
  status: 'Available' | 'Sold' | 'Upcoming';
  price: number;
  location: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  mapCoordinates?: { lat: number; lng: number };
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Luxury Waterfront Villa",
    type: "Villa",
    status: "Available",
    price: 15500000,
    location: "Palm Jumeirah, Dubai",
    area: 8500,
    bedrooms: 6,
    bathrooms: 7,
    image: villaHero.src,
    gallery: [
      villaHero.src,
      villaPool.src,
      penthouseHero.src,
    ],
    description: "Stunning waterfront villa with private beach access, panoramic sea views, and luxurious finishes throughout. This architectural masterpiece combines contemporary design with timeless elegance.",
    features: [
      "Private beach access",
      "Infinity pool",
      "Smart home system",
      "Private cinema",
      "Gym and spa",
      "Covered parking for 4 cars",
      "Maid's room",
      "Landscaped garden"
    ],
    mapCoordinates: { lat: 25.1124, lng: 55.1390 }
  },
  {
    id: 2,
    title: "Downtown Luxury Penthouse",
    type: "Penthouse",
    status: "Available",
    price: 12000000,
    location: "Downtown Dubai",
    area: 5500,
    bedrooms: 4,
    bathrooms: 5,
    image: villaLiving.src,
    gallery: [
      villaLiving.src,
      townhouseLiving.src,
      penthouseInterior.src,
    ],
    description: "Exclusive penthouse offering breathtaking views of Burj Khalifa and Dubai Fountain. Features floor-to-ceiling windows, premium Italian finishes, and a private terrace.",
    features: [
      "Burj Khalifa views",
      "Private elevator",
      "Rooftop terrace",
      "Jacuzzi",
      "Designer kitchen",
      "Covered parking for 3 cars",
      "24/7 concierge",
      "Access to building amenities"
    ],
    mapCoordinates: { lat: 25.1972, lng: 55.2744 }
  },
  {
    id: 3,
    title: "Modern Marina Apartment",
    type: "Apartment",
    status: "Available",
    price: 3500000,
    location: "Dubai Marina",
    area: 2200,
    bedrooms: 3,
    bathrooms: 3,
    image: propertyElegantApartment.src,
    gallery: [
      propertyElegantApartment.src,
      villaContemporary.src,
      villaPoolside.src,
    ],
    description: "Elegant apartment in the heart of Dubai Marina with stunning marina views and modern amenities. Perfect for families seeking luxury waterfront living.",
    features: [
      "Marina views",
      "Balcony",
      "Modern kitchen",
      "Built-in wardrobes",
      "Parking space",
      "Gym access",
      "Swimming pool",
      "Children's play area"
    ],
    mapCoordinates: { lat: 25.0804, lng: 55.1400 }
  },
  {
    id: 4,
    title: "Dubai Hills Estate Townhouse",
    type: "Townhouse",
    status: "Available",
    price: 4800000,
    location: "Dubai Hills Estate",
    area: 3500,
    bedrooms: 4,
    bathrooms: 5,
    image: villaModern.src,
    gallery: [
      villaModern.src,
      villaNight.src,
      villaGarden.src,
    ],
    description: "Contemporary townhouse in the sought-after Dubai Hills Estate community. Features modern design, spacious living areas, and access to world-class amenities including golf course, parks, and Dubai Hills Mall.",
    features: [
      "Modern architecture",
      "Private garden",
      "Maid's room",
      "Built-in wardrobes",
      "Covered parking for 2 cars",
      "Community pool access",
      "Gym and tennis courts",
      "Parks and jogging tracks",
      "Near Dubai Hills Mall",
      "Family-friendly community"
    ],
    mapCoordinates: { lat: 25.0940, lng: 55.2453 }
  },
];

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Dubai Real Estate Market Outlook 2025",
    excerpt: "Comprehensive analysis of Dubai's property market trends, investment opportunities, and growth projections for 2025.",
    content: "Dubai's real estate market continues to demonstrate exceptional resilience and growth, positioning itself as one of the world's most dynamic property investment destinations. The emirate's strategic location, robust infrastructure, and forward-thinking policies continue to attract investors from around the globe. In 2025, we're witnessing record transactions in luxury residential segments, with particular interest in waterfront properties and sustainable developments. The introduction of long-term residency visas and business-friendly regulations has further strengthened market confidence. Key areas like Downtown Dubai, Dubai Marina, and Palm Jumeirah are experiencing unprecedented demand, while emerging neighborhoods such as Dubai South and Dubai Hills Estate offer excellent value propositions for savvy investors.",
    image: apartmentLuxury.src,
    date: "2025-01-15",
    author: "Kashif I Jillani",
    category: "Market Analysis"
  },
  {
    id: 2,
    title: "Top 5 Investment Opportunities in UAE Real Estate",
    excerpt: "Discover the most lucrative locations and property types delivering exceptional returns in the UAE property market.",
    content: "The UAE real estate market offers diverse investment opportunities across multiple segments. Dubai Marina continues to lead with consistent rental yields averaging 6-8% annually, making it ideal for buy-to-let investors. Business Bay has emerged as a hotspot for commercial and residential investments, with modern infrastructure and proximity to Downtown Dubai. Palm Jumeirah remains the epitome of luxury living, offering exclusive villas and apartments with unparalleled sea views and resort-style amenities. Dubai Hills Estate represents excellent value for families, featuring master-planned communities with golf courses, schools, and retail centers. Finally, Dubai South, near the Expo 2020 site and Al Maktoum International Airport, presents significant capital appreciation potential as the area develops into a major business and logistics hub.",
    image: apartmentHero.src,
    date: "2025-01-10",
    author: "Maroof Usmani",
    category: "Investment Tips"
  },
  {
    id: 3,
    title: "Complete Guide to Buying Property in Dubai",
    excerpt: "Step-by-step guide covering legal requirements, financing options, and essential considerations for property purchase in Dubai.",
    content: "Purchasing property in Dubai is a streamlined process designed to facilitate both local and international buyers. Foreign nationals can own property freehold in designated areas, offering complete ownership rights. The buying process begins with property selection, followed by obtaining a No Objection Certificate (NOC) from the developer. Buyers then pay a 4% Dubai Land Department fee plus registration charges. Financing options include mortgages from local and international banks, with non-residents typically accessing up to 75% loan-to-value ratios. Due diligence is crucial - verify property titles, check for any outstanding service charges, and ensure the developer has RERA approval. Consider engaging a reputable real estate agent and legal advisor to navigate the process smoothly. Key factors to evaluate include location, developer reputation, amenities, rental yield potential, and resale value.",
    image: townhouseLiving.src,
    date: "2025-01-05",
    author: "Haseeb Tanveer",
    category: "Buying Guide"
  },
  {
    id: 4,
    title: "Sustainable Living: Dubai's Eco-Friendly Developments",
    excerpt: "How green buildings and sustainable communities are reshaping Dubai's real estate landscape for environmentally conscious buyers.",
    content: "Dubai is leading the way in sustainable urban development with ambitious environmental initiatives. The Sustainable City Dubai stands as a pioneering example, featuring solar-powered villas, electric vehicle infrastructure, and zero-waste communities. Major developers are now incorporating LEED and BREEAM certifications, ensuring properties meet international sustainability standards. Features include energy-efficient cooling systems, water conservation technologies, green building materials, and smart home automation. These eco-friendly developments not only reduce environmental impact but also offer significant long-term cost savings on utilities. Areas like The Sustainable City, Dubai Hills Estate, and Jumeirah Golf Estates are incorporating extensive green spaces, urban farms, and biodiversity corridors. For investors, sustainable properties are commanding premium rents and showing stronger capital appreciation as environmental consciousness grows among tenants and buyers.",
    image: propertyBeachfront.src,
    date: "2025-01-28",
    author: "Faisal",
    category: "Sustainability"
  },
  {
    id: 5,
    title: "Luxury Penthouses: The Ultimate Dubai Living Experience",
    excerpt: "Exploring Dubai's most prestigious penthouse properties offering unparalleled luxury, panoramic views, and exclusive amenities.",
    content: "Dubai's luxury penthouse market represents the pinnacle of sophisticated urban living. These exclusive residences, typically occupying entire upper floors, offer breathtaking 360-degree views of Dubai's iconic skyline, pristine beaches, and Arabian Gulf. Premium developments like Burj Khalifa, Address Residences, and One Palm feature penthouses with private pools, rooftop terraces, private elevators, and bespoke interior designs by world-renowned architects. Modern penthouses incorporate smart home technology, wine cellars, home theaters, and spa facilities. Prices range from AED 10 million to over AED 100 million, depending on location and specifications. These properties attract high-net-worth individuals seeking privacy, exclusivity, and five-star hotel services including concierge, housekeeping, and security. Investment-wise, luxury penthouses demonstrate strong value retention and attract premium short-term rental yields, particularly in tourist hotspots.",
    image: villaLiving.src,
    date: "2025-01-22",
    author: "Imran",
    category: "Luxury Living"
  },
  {
    id: 6,
    title: "Dubai Marina vs Downtown Dubai: Which Location Suits You?",
    excerpt: "Comprehensive comparison of two of Dubai's most sought-after neighborhoods to help you make the right investment decision.",
    content: "Choosing between Dubai Marina and Downtown Dubai depends on lifestyle preferences and investment goals. Dubai Marina offers a vibrant waterfront lifestyle with its 3km promenade, yacht clubs, beach access, and energetic dining scene. It's perfect for water sports enthusiasts and those seeking a resort-like atmosphere. Properties here typically offer better rental yields (6-8%) and appeal to young professionals and tourists. Downtown Dubai, home to Burj Khalifa and Dubai Mall, provides a more cosmopolitan experience with cultural attractions, world-class shopping, and proximity to business districts. It attracts families and executives preferring urban sophistication. Properties command premium prices but offer strong capital appreciation potential. Transportation is excellent in both areas with metro access, though Downtown offers better connectivity. Amenities differ: Marina excels in outdoor leisure while Downtown leads in retail and entertainment. Consider your budget, lifestyle priorities, and investment strategy when choosing between these iconic locations.",
    image: apartmentModern.src,
    date: "2025-01-18",
    author: "Kashif I Jillani",
    category: "Area Comparison"
  },
  {
    id: 7,
    title: "First-Time Homebuyers: Essential Tips for UAE Property Market",
    excerpt: "Practical advice and insider tips to help first-time buyers navigate the UAE property market with confidence.",
    content: "First-time property buyers in the UAE should approach the market with careful planning and research. Start by determining your budget, including not just the property price but additional costs: 4% DLD registration fee, agency commission (typically 2%), mortgage arrangement fees, and property valuation charges. Get pre-approved for a mortgage to understand your borrowing capacity - UAE banks typically offer up to 80% financing for first homes under AED 5 million. Research thoroughly: visit multiple properties, compare prices in similar areas, and check developer track records on RERA's website. Consider long-term factors like proximity to schools, workplaces, public transport, and future development plans that might affect property values. Don't rush - take time to understand market cycles and timing. Engage professional help: quality real estate agents, mortgage brokers, and legal advisors can save you significant money and stress. Finally, think beyond just buying - consider ongoing costs like service charges, maintenance, and potential rental income if you plan to lease the property.",
    image: propertyOfficeLobby.src,
    date: "2025-01-12",
    author: "Maroof Usmani",
    category: "Buying Guide"
  },
  {
    id: 8,
    title: "Off-Plan vs Ready Properties: Making the Right Investment Choice",
    excerpt: "Detailed analysis of advantages, risks, and returns when choosing between off-plan and ready-to-move properties in Dubai.",
    content: "The choice between off-plan and ready properties significantly impacts your investment returns and risk profile. Off-plan properties offer attractive payment plans, typically spanning 2-4 years with 10-20% down payments, making them accessible to investors with limited upfront capital. Prices are generally 15-25% lower than ready properties, offering capital appreciation potential before completion. However, risks include construction delays, developer financial issues, and market fluctuations. Due diligence is critical - verify developer credentials, check escrow account protection, and research historical project delivery. Ready properties provide immediate possession, known rental yields, and certainty. You can physically inspect the unit, assess build quality, and start generating rental income immediately. Financing is straightforward with instant mortgage availability. Market value is transparent and established. Ready properties suit risk-averse investors, those needing immediate accommodation, or buyers preferring tangible assets. Off-plan works for patient investors with higher risk appetite seeking maximum leverage and potential appreciation. Consider your financial position, timeline, and market conditions when deciding.",
    image: commercialHero.src,
    date: "2025-01-08",
    author: "Imran",
    category: "Investment Strategy"
  },
  {
    id: 9,
    title: "Smart Home Technology Revolutionizing Dubai Properties",
    excerpt: "How cutting-edge technology and home automation are adding value and transforming modern living in Dubai's real estate.",
    content: "Smart home technology has become a standard feature in Dubai's premium residential developments, transforming how residents interact with their living spaces. Modern properties now integrate comprehensive automation systems controlling lighting, climate, security, and entertainment through smartphones or voice commands. Smart thermostats optimize energy consumption, reducing utility costs by up to 30%. Advanced security systems include facial recognition, motion sensors, and remote surveillance, providing peace of mind for frequent travelers. Automated blinds, mood lighting, and multi-room audio create personalized living environments. Smart appliances send maintenance alerts and allow remote operation. Buildings are incorporating IoT infrastructure, enabling residents to book facilities, track deliveries, and access visitor management through apps. For investors, smart-enabled properties command 10-15% premium rents and attract tech-savvy tenants. Major developers like Emaar, Damac, and Meraas are pre-installing smart systems, recognizing their impact on property desirability and value. As Dubai advances its Smart City initiative, properties with integrated technology will likely see stronger appreciation and rental demand.",
    image: propertyRetail.src,
    date: "2025-01-01",
    author: "Kashif I Jillani",
    category: "Technology"
  },
  {
    id: 10,
    title: "Dubai Hills Estate: A Complete Community Guide",
    excerpt: "Discover why Dubai Hills Estate is becoming one of Dubai's most desirable family-friendly communities with world-class amenities.",
    content: "Dubai Hills Estate has emerged as a premier master-planned community offering an exceptional balance of urban convenience and suburban tranquility. Spanning 11 million square feet, the community features the iconic Dubai Hills Mall, championship golf course, and extensive parks. Families are drawn to excellent international schools including GEMS Wellington and Kings' School Dubai. The community offers diverse housing options from contemporary apartments to spacious villas, with prices ranging from AED 1.5 million to AED 15 million. Residents enjoy 18km of cycling and jogging tracks, tennis courts, swimming pools, and children's play areas. Strategic location provides quick access to Downtown Dubai (20 minutes), Dubai Marina (25 minutes), and DXB Airport (30 minutes). The Hills Park, covering 180,000 square meters, serves as the community's green heart. Retail and dining options within the community cater to daily needs. Investment perspective shows strong rental yields of 5-7% with consistent capital appreciation. The community appeals to both end-users seeking quality family living and investors targeting stable long-term returns.",
    image: villaPool.src,
    date: "2025-01-28",
    author: "Haseeb Tanveer",
    category: "Community Guide"
  },
  {
    id: 11,
    title: "Understanding Property Closing: Your Essential Checklist",
    excerpt: "Navigate the final steps of property purchase with confidence using our comprehensive closing process checklist.",
    content: "The property closing process in Dubai involves several critical steps that require careful attention. First, ensure all payments are completed, including the final installment, 4% DLD transfer fee, and any outstanding service charges. Schedule a property inspection (snagging) to identify defects requiring developer rectification. Obtain the No Objection Certificate (NOC) from the developer confirming all payments are cleared. For properties with mortgages, coordinate with your bank to prepare loan documentation and arrange property valuation. Book an appointment at the Dubai Land Department or authorized Trustee office for title deed transfer. Required documents include original passport, Emirates ID, sales agreement, and NOC. The transfer process takes 1-2 hours, after which you receive your title deed. Immediately change utility accounts (DEWA, Internet, Cooling) into your name to avoid service interruptions. Update Ejari (tenancy contract registration) if renting out. Arrange property insurance covering structure and contents. Keep all documentation organized for future reference. Consider engaging a conveyancing lawyer for complex transactions. Finally, schedule move-in coordination with building management and arrange key collection.",
    image: propertyOfficeLobby.src,
    date: "2025-01-22",
    author: "Imran",
    category: "Closing Essentials"
  },
  {
    id: 12,
    title: "Q1 2025 Market Trends: What Buyers Need to Know",
    excerpt: "Latest market insights revealing emerging opportunities, price movements, and investment hotspots for early 2025.",
    content: "Dubai's property market enters 2025 with robust momentum, supported by strong economic fundamentals and government initiatives. Transaction volumes in Q1 are projected to increase 12% year-on-year, driven by competitive mortgage rates and sustained buyer confidence. Luxury segment (AED 10M+) continues outperforming with 18% price appreciation, particularly in Palm Jumeirah and Emirates Hills. Mid-market properties (AED 2-5M) show steady 6-8% growth, offering excellent value in areas like Dubai Sports City and Jumeirah Village Circle. Off-plan launches remain strong with major developers introducing innovative payment plans and attractive pre-launch pricing. Emerging areas to watch include Dubai South, benefiting from Expo legacy and airport expansion; Bluewaters Island, with limited supply driving premium valuations; and Dubai Creek Harbour, as infrastructure completion nears. Rental market shows healthy yields of 6-9% across most segments, with furnished properties commanding 15-20% premium. Foreign investment constitutes 65% of transactions, with buyers from India, UK, and Russia leading. Key recommendations: Focus on established developers with proven delivery records, consider emerging areas for capital appreciation, and evaluate rental yield potential for investment properties.",
    image: propertyWarehouse.src,
    date: "2025-01-18",
    author: "Aqib Ali",
    category: "Market Trends"
  },
  {
    id: 13,
    title: "Exclusive Home Tour: Palm Jumeirah Signature Villa",
    excerpt: "Step inside a stunning beachfront villa showcasing the pinnacle of luxury living on Palm Jumeirah's prestigious fronds.",
    content: "This exceptional 12,500 sq ft villa on Palm Jumeirah's Garden Homes exemplifies contemporary luxury living. The grand entrance features double-height ceilings with Italian marble flooring and custom chandelier. The open-plan living area seamlessly connects to outdoor terraces through floor-to-ceiling glass doors, creating an impressive entertainment space. The chef's kitchen boasts Miele appliances, Corian countertops, and integrated wine storage. Five spacious bedroom suites each feature ensuite bathrooms with premium Villeroy & Boch fixtures and custom walk-in wardrobes. The master suite includes a private terrace overlooking the Arabian Gulf, separate dressing area, and spa-inspired bathroom. Outdoor spaces include an infinity pool, summer kitchen with BBQ area, outdoor shower, and direct beach access. Additional features include a private cinema room, home gym, staff quarters, and smart home automation controlling lighting, climate, security, and entertainment. The property includes covered parking for four vehicles and landscaped gardens with mature palm trees. This villa represents the ultimate waterfront lifestyle, combining architectural excellence, luxurious finishes, and unparalleled location. Priced at AED 28 million, it offers exceptional value in one of Dubai's most coveted addresses.",
    image: villaHero.src,
    date: "2025-1-14",
    author: "Kashif I Jillani",
    category: "Home Tours"
  }
];
