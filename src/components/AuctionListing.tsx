import React, { useState, useMemo } from "react";
import {
  Clock,
  MapPin,
  Users,
  Search,
  Filter,
  Calendar,
  IndianRupee,
  ArrowRight,
} from "lucide-react";

// Types for auction data
interface AuctionItem {
  id: string;
  productName: string;
  imageUrl: string;
  timeLeft: string;
  endDate: string;
  endTime: string;
  highestBid: string | null;
  grade: string | null;
  totalQuantity: number;
  unit: string;
  startPrice: number;
  warehouseName: string;
  warehouseAddress: string;
  state: string;
  aggregator: string;
  status: "LIVE" | "UPCOMING" | "CLOSED";
}

// Mock data based on the provided information
const auctionData: AuctionItem[] = [
  {
    id: "3694272025",
    productName: "Green Gram",
    imageUrl: "/green-gram.jpg",
    timeLeft: "04-Jul-2025",
    endDate: "04-Jul-2025",
    endTime: "06:00 PM",
    highestBid: null,
    grade: null,
    totalQuantity: 15,
    unit: "MT",
    startPrice: 107,
    warehouseName: "Palakkad",
    warehouseAddress: "Palakkad",
    state: "Kerala",
    aggregator: "Sodani Industries",
    status: "LIVE",
  },
  {
    id: "2578472025",
    productName: "Black Gram",
    imageUrl: "/black-gram.jpg",
    timeLeft: "04-Jul-2025",
    endDate: "04-Jul-2025",
    endTime: "06:14 PM",
    highestBid: null,
    grade: null,
    totalQuantity: 15,
    unit: "MT",
    startPrice: 120,
    warehouseName: "Palakkad",
    warehouseAddress: "Palakkad",
    state: "Kerala",
    aggregator: "BALGOVIND AGROFOOD",
    status: "LIVE",
  },
  {
    id: "2965872025",
    productName: "Bengal Gram",
    imageUrl: "/bengal-gram.jpg",
    timeLeft: "04-Jul-2025",
    endDate: "04-Jul-2025",
    endTime: "06:30 PM",
    highestBid: null,
    grade: null,
    totalQuantity: 15,
    unit: "MT",
    startPrice: 72,
    warehouseName: "Ghaziabad",
    warehouseAddress: "Ghaziabad",
    state: "Uttar Pradesh",
    aggregator: "Sodani Industries",
    status: "LIVE",
  },
  {
    id: "2874872025",
    productName: "Castor Seed",
    imageUrl: "/castor-seed.jpg",
    timeLeft: "04-Jul-2025",
    endDate: "04-Jul-2025",
    endTime: "07:30 PM",
    highestBid: null,
    grade: null,
    totalQuantity: 7,
    unit: "MT",
    startPrice: 68,
    warehouseName: "Mahesana",
    warehouseAddress: "Mahesana",
    state: "Gujarat",
    aggregator: "Mahesana Gujarat",
    status: "LIVE",
  },
  {
    id: "1162172025",
    productName: "Mozambique Pigeon peas",
    imageUrl: "/pigeon-peas.jpg",
    timeLeft: "15-Jul-2025",
    endDate: "15-Jul-2025",
    endTime: "06:30 PM",
    highestBid: null,
    grade: "White",
    totalQuantity: 1000,
    unit: "MT",
    startPrice: 102,
    warehouseName: "Pals",
    warehouseAddress: "Dahisar Mori",
    state: "Maharashtra",
    aggregator: "Agribid private limited",
    status: "UPCOMING",
  },
  {
    id: "1823872025",
    productName: "Mozambique Pigeon peas",
    imageUrl: "/pigeon-peas.jpg",
    timeLeft: "15-Jul-2025",
    endDate: "15-Jul-2025",
    endTime: "06:30 PM",
    highestBid: null,
    grade: "White",
    totalQuantity: 1000,
    unit: "MT",
    startPrice: 98,
    warehouseName: "Pals",
    warehouseAddress: "Dahisar Mori",
    state: "Maharashtra",
    aggregator: "Agribid private limited",
    status: "UPCOMING",
  },
  {
    id: "2950472025",
    productName: "Cummin Seeds",
    imageUrl: "/cumin-seeds.jpg",
    timeLeft: "04-Jul-2025",
    endDate: "04-Jul-2025",
    endTime: "07:30 PM",
    highestBid: null,
    grade: null,
    totalQuantity: 10,
    unit: "MT",
    startPrice: 203,
    warehouseName: "Gondal",
    warehouseAddress: "Gondal",
    state: "Gujarat",
    aggregator: "Gondal Gujarat",
    status: "LIVE",
  },
  {
    id: "2109772025",
    productName: "Wheat",
    imageUrl: "/wheat.jpg",
    timeLeft: "04-Jul-2025",
    endDate: "04-Jul-2025",
    endTime: "07:30 PM",
    highestBid: null,
    grade: null,
    totalQuantity: 25,
    unit: "MT",
    startPrice: 27,
    warehouseName: "Rajlam",
    warehouseAddress: "Ratlam",
    state: "Madhya Pradesh",
    aggregator: "Agribid private limited",
    status: "LIVE",
  },
  {
    id: "3820772025",
    productName: "Black Pepper",
    imageUrl: "/black-pepper.jpg",
    timeLeft: "04-Jul-2025",
    endDate: "04-Jul-2025",
    endTime: "07:30 PM",
    highestBid: null,
    grade: null,
    totalQuantity: 7,
    unit: "MT",
    startPrice: 922,
    warehouseName: "Ernakulam",
    warehouseAddress: "Ernakulam",
    state: "Kerala",
    aggregator: "Sodani Industries",
    status: "LIVE",
  },
  {
    id: "3432972025",
    productName: "Potato",
    imageUrl: "/potato.jpg",
    timeLeft: "04-Jul-2025",
    endDate: "04-Jul-2025",
    endTime: "07:30 PM",
    highestBid: null,
    grade: null,
    totalQuantity: 25,
    unit: "MT",
    startPrice: 27,
    warehouseName: "Sagar",
    warehouseAddress: "Sagar",
    state: "Madhya Pradesh",
    aggregator: "Agribid private limited",
    status: "LIVE",
  },
  {
    id: "1549272025",
    productName: "Mozambique Pigeon peas",
    imageUrl: "/pigeon-peas.jpg",
    timeLeft: "15-Jul-2025",
    endDate: "15-Jul-2025",
    endTime: "07:30 PM",
    highestBid: null,
    grade: "White",
    totalQuantity: 900,
    unit: "MT",
    startPrice: 92,
    warehouseName: "Pals",
    warehouseAddress: "Dahisar Mori",
    state: "Maharashtra",
    aggregator: "Agribid private limited",
    status: "UPCOMING",
  },
  // Add a few closed auctions for demonstration
  {
    id: "1000001001",
    productName: "Wheat",
    imageUrl: "/wheat.jpg",
    timeLeft: "01-Jan-2025",
    endDate: "01-Jan-2025",
    endTime: "06:00 PM",
    highestBid: "₹32/KG",
    grade: "Grade A",
    totalQuantity: 20,
    unit: "MT",
    startPrice: 27,
    warehouseName: "Delhi",
    warehouseAddress: "Delhi",
    state: "Delhi",
    aggregator: "Delhi Agro",
    status: "CLOSED",
  },
  {
    id: "1000001002",
    productName: "Rice",
    imageUrl: "/rice.jpg",
    timeLeft: "15-Dec-2024",
    endDate: "15-Dec-2024",
    endTime: "05:00 PM",
    highestBid: "₹45/KG",
    grade: "Basmati",
    totalQuantity: 30,
    unit: "MT",
    startPrice: 40,
    warehouseName: "Ludhiana",
    warehouseAddress: "Ludhiana",
    state: "Punjab",
    aggregator: "Punjab Agro",
    status: "CLOSED",
  },
];

type SortOrder =
  | "timeLeftAsc"
  | "timeLeftDesc"
  | "priceAsc"
  | "priceDesc"
  | "quantityAsc"
  | "quantityDesc";

const AuctionListing = () => {
  const [activeTab, setActiveTab] = useState<"LIVE" | "UPCOMING" | "CLOSED">(
    "LIVE",
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [selectedCommodities, setSelectedCommodities] = useState<string[]>([]);
  const [selectedWarehouses, setSelectedWarehouses] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<SortOrder>("timeLeftAsc");
  const [openFilter, setOpenFilter] = useState<string | null>("States"); // To manage accordion state

  // Get unique states, commodities, and warehouses for filters
  const uniqueStates = useMemo(() => {
    return [...new Set(auctionData.map((item) => item.state))].sort();
  }, []);

  const uniqueCommodities = useMemo(() => {
    return [...new Set(auctionData.map((item) => item.productName))].sort();
  }, []);

  const uniqueWarehouses = useMemo(() => {
    return [...new Set(auctionData.map((item) => item.warehouseName))].sort();
  }, []);

  // Filter and sort auctions
  const filteredAuctions = useMemo(() => {
    let filtered = auctionData.filter((auction) => {
      const matchesTab = auction.status === activeTab;
      const matchesSearch = searchQuery
        ? auction.productName
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          auction.warehouseName
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          auction.aggregator.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
      const matchesState =
        selectedStates.length === 0 || selectedStates.includes(auction.state);
      const matchesCommodity =
        selectedCommodities.length === 0 ||
        selectedCommodities.includes(auction.productName);
      const matchesWarehouse =
        selectedWarehouses.length === 0 ||
        selectedWarehouses.includes(auction.warehouseName);

      return (
        matchesTab &&
        matchesSearch &&
        matchesState &&
        matchesCommodity &&
        matchesWarehouse
      );
    });

    // Sort auctions
    if (sortOrder === "timeLeftAsc") {
      filtered.sort(
        (a, b) => new Date(a.endDate).getTime() - new Date(b.endDate).getTime(),
      );
    } else if (sortOrder === "timeLeftDesc") {
      filtered.sort(
        (a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime(),
      );
    } else if (sortOrder === "priceAsc") {
      filtered.sort((a, b) => a.startPrice - b.startPrice);
    } else if (sortOrder === "priceDesc") {
      filtered.sort((a, b) => b.startPrice - a.startPrice);
    } else if (sortOrder === "quantityAsc") {
      filtered.sort((a, b) => a.totalQuantity - b.totalQuantity);
    } else if (sortOrder === "quantityDesc") {
      filtered.sort((a, b) => b.totalQuantity - a.totalQuantity);
    }

    return filtered;
  }, [
    auctionData,
    activeTab,
    searchQuery,
    selectedStates,
    selectedCommodities,
    selectedWarehouses,
    sortOrder,
  ]);

  const handleStateChange = (state: string) => {
    setSelectedStates((prev) =>
      prev.includes(state) ? prev.filter((s) => s !== state) : [...prev, state],
    );
  };

  const handleCommodityChange = (commodity: string) => {
    setSelectedCommodities((prev) =>
      prev.includes(commodity)
        ? prev.filter((c) => c !== commodity)
        : [...prev, commodity],
    );
  };

  const handleWarehouseChange = (warehouse: string) => {
    setSelectedWarehouses((prev) =>
      prev.includes(warehouse)
        ? prev.filter((w) => w !== warehouse)
        : [...prev, warehouse],
    );
  };

  const toggleFilter = (filterName: string) => {
    setOpenFilter((prev) => (prev === filterName ? null : filterName));
  };

  const AuctionCard = ({ auction }: { auction: AuctionItem }) => (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md">
      <div className="flex p-4">
        {/* Image */}
        <div className="relative mr-6 h-32 w-32 flex-shrink-0">
          <img
            src={auction.imageUrl}
            alt={auction.productName}
            className="h-full w-full rounded-lg object-cover"
            onError={(e) => {
              e.currentTarget.src =
                "https://dummyimage.com/128x128/cccccc/000000.png&text=No+Image";
            }}
          />
          <div className="absolute bottom-0 left-0 rounded-tr-lg bg-[#f1cf69] px-2 py-1 text-xs font-medium text-[#334b35]">
            Sale - {auction.id}
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-grow flex-col md:flex-row md:justify-between">
          {/* Left Column - Product Details */}
          <div className="mr-0 min-w-0 flex-1 md:mr-6">
            <h3 className="font-agriox mb-3 truncate text-lg font-semibold text-[#334b35]">
              {auction.productName}
            </h3>

            <div className="space-y-2">
              <div className="flex items-center text-sm font-semibold text-[#c73b22]">
                <Clock className="mr-2 h-4 w-4 flex-shrink-0" />
                <span>Time Left - {auction.timeLeft}</span>
              </div>

              <div className="flex items-center text-sm">
                <IndianRupee className="mr-2 h-4 w-4 flex-shrink-0 text-[#334b35]" />
                <span className="font-semibold text-[#334b35]">
                  Highest Bid -{" "}
                </span>
                <span className="ml-1 text-[#526052]">
                  {auction.highestBid !== null &&
                  !isNaN(parseFloat(auction.highestBid)) &&
                  parseFloat(auction.highestBid) > 0
                    ? `₹${auction.highestBid}`
                    : "NA"}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-1 text-sm text-[#526052] sm:grid-cols-2">
                <div>
                  <span className="font-semibold">Grade: </span>
                  <span>{auction.grade || "NA"}</span>
                </div>
                <div>
                  <span className="font-semibold">Quantity: </span>
                  <span>
                    {auction.totalQuantity} {auction.unit}
                  </span>
                </div>
              </div>

              <div className="flex items-center text-sm text-[#526052]">
                <span className="font-semibold">Start Price: </span>
                <IndianRupee className="mr-1 ml-1 h-3 w-3" />
                <span>{auction.startPrice} / KG</span>
              </div>
            </div>

            {/* Terms & Quality Links */}
            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href="#"
                className="text-sm text-[#c73b22] transition-colors duration-200 hover:text-[#f1cf69] hover:underline"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="text-sm text-[#c73b22] transition-colors duration-200 hover:text-[#f1cf69] hover:underline"
              >
                Quality Specs
              </a>
            </div>
          </div>

          {/* Right Column - Location & Actions */}
          <div className="mt-4 flex flex-col justify-between md:mt-0 md:min-w-[280px]">
            {/* Location Details */}
            <div className="space-y-1 text-sm text-[#526052]">
              <div className="flex items-start">
                <MapPin className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                <div className="min-w-0">
                  <div>
                    <span className="font-semibold">Warehouse: </span>
                    <span>{auction.warehouseName}</span>
                  </div>
                  <div className="mt-0.5">
                    <span className="font-semibold">Address: </span>
                    <span>{auction.warehouseAddress}</span>
                  </div>
                  <div className="mt-0.5">
                    <span className="font-semibold">State: </span>
                    <span>{auction.state}</span>
                  </div>
                  <div className="mt-0.5">
                    <span className="font-semibold">Aggregator: </span>
                    <span>{auction.aggregator}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bid Now Button */}
            <div className="mt-4 flex justify-end">
              <button
                className="font-agriox rounded-lg bg-[#334b35] px-6 py-2.5 text-white transition-all duration-200 hover:bg-[#f1cf69] hover:text-[#334b35] focus:ring-2 focus:ring-[#f1cf69] focus:ring-offset-2 focus:outline-none"
                aria-label={`Place bid for ${auction.productName}`}
              >
                Bid Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="font-agriox min-h-screen bg-white py-8 pt-28 text-[#334b35]">
      {/* Main Content */}
      <div className="w-full px-4">
        <h1 className="font-agriox-bold mb-8 text-center text-4xl font-bold text-[#334b35]">
          Auctions
        </h1>
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-sm">
            <input
              type="text"
              placeholder="Search by Product or Warehouse..."
              className="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-12 text-sm transition-all duration-200 focus:border-[#334b35] focus:ring-2 focus:ring-[#334b35]/20 focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search
              className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-8">
          {/* Left Sidebar for Filters */}
          <div className="w-full lg:w-1/4 lg:pr-4">
            <h2 className="mb-6 text-xl font-bold text-[#334b35]">Filters</h2>

            {/* Filters Sections */}
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-md">
              {/* States Filter */}
              <div className="mb-4 border-b border-gray-200 pb-4 last:border-b-0">
                <button
                  className="flex w-full items-center justify-between py-2 text-left text-lg font-semibold text-[#334b35] focus:outline-none"
                  onClick={() => toggleFilter("States")}
                >
                  States
                  <svg
                    className={`h-5 w-5 text-[#334b35] transition-transform duration-200 ${
                      openFilter === "States" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                {openFilter === "States" && (
                  <div className="mt-2 space-y-2">
                    {uniqueStates.map((state) => (
                      <label
                        key={state}
                        className="flex items-center text-[#526052]"
                      >
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 rounded text-[#334b35] focus:ring-[#334b35]"
                          checked={selectedStates.includes(state)}
                          onChange={() => handleStateChange(state)}
                        />
                        <span className="ml-2 text-sm text-[#526052]">
                          {state}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Commodity Filter */}
              <div className="mb-4 border-b border-gray-200 pb-4 last:border-b-0">
                <button
                  className="flex w-full items-center justify-between py-2 text-left text-lg font-semibold text-[#334b35] focus:outline-none"
                  onClick={() => toggleFilter("Commodity")}
                >
                  Commodity
                  <svg
                    className={`h-5 w-5 text-[#334b35] transition-transform duration-200 ${
                      openFilter === "Commodity" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                {openFilter === "Commodity" && (
                  <div className="mt-2 space-y-2">
                    {uniqueCommodities.map((commodity) => (
                      <label
                        key={commodity}
                        className="flex items-center text-[#526052]"
                      >
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 rounded text-[#334b35] focus:ring-[#334b35]"
                          checked={selectedCommodities.includes(commodity)}
                          onChange={() => handleCommodityChange(commodity)}
                        />
                        <span className="ml-2 text-sm text-[#526052]">
                          {commodity}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Warehouse Filter */}
              <div className="mb-4 border-b border-gray-200 pb-4 last:border-b-0">
                <button
                  className="flex w-full items-center justify-between py-2 text-left text-lg font-semibold text-[#334b35] focus:outline-none"
                  onClick={() => toggleFilter("Warehouse")}
                >
                  Warehouse
                  <svg
                    className={`h-5 w-5 text-[#334b35] transition-transform duration-200 ${
                      openFilter === "Warehouse" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                {openFilter === "Warehouse" && (
                  <div className="mt-2 space-y-2">
                    {uniqueWarehouses.map((warehouse) => (
                      <label
                        key={warehouse}
                        className="flex items-center text-[#526052]"
                      >
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 rounded text-[#334b35] focus:ring-[#334b35]"
                          checked={selectedWarehouses.includes(warehouse)}
                          onChange={() => handleWarehouseChange(warehouse)}
                        />
                        <span className="ml-2 text-sm text-[#526052]">
                          {warehouse}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Main Content for Listings */}
          <div className="mt-8 w-full lg:mt-0 lg:w-3/4 lg:pl-4">
            {/* Sort and Tab Navigation */}
            <div className="mb-6 flex items-center justify-between">
              {/* Tab Navigation */}
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  {[
                    [
                      "LIVE",
                      auctionData.filter((a) => a.status === "LIVE").length,
                    ],
                    [
                      "UPCOMING",
                      auctionData.filter((a) => a.status === "UPCOMING").length,
                    ],
                    [
                      "CLOSED",
                      auctionData.filter((a) => a.status === "CLOSED").length,
                    ],
                  ].map(([status, count]) => (
                    <button
                      key={status as string}
                      onClick={() =>
                        setActiveTab(status as "LIVE" | "UPCOMING" | "CLOSED")
                      }
                      className={`border-b-2 px-4 pb-4 text-sm font-medium whitespace-nowrap focus:outline-none ${
                        activeTab === status
                          ? "border-[#f1cf69] text-[#f1cf69]"
                          : "border-transparent text-[#526052] hover:border-gray-300 hover:text-[#334b35]"
                      }`}
                    >
                      {status} ({count})
                    </button>
                  ))}
                </nav>
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  className="block w-full rounded-md border border-gray-300 bg-white py-2 pr-10 pl-3 text-base focus:border-[#334b35] focus:ring-[#334b35] focus:outline-none sm:text-sm"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as SortOrder)}
                >
                  <option value="timeLeftAsc">Time Left (Soonest)</option>
                  <option value="timeLeftDesc">Time Left (Latest)</option>
                  <option value="priceAsc">Price (Low to High)</option>
                  <option value="priceDesc">Price (High to Low)</option>
                  <option value="quantityAsc">Quantity (Low to High)</option>
                  <option value="quantityDesc">Quantity (High to Low)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Auction Listings */}
            <div className="space-y-4">
              {filteredAuctions.length > 0 ? (
                filteredAuctions.map((auction) => (
                  <AuctionCard key={auction.id} auction={auction} />
                ))
              ) : (
                <div className="py-12 text-center">
                  <div className="text-lg text-gray-500">No auctions found</div>
                  <div className="mt-2 text-sm text-gray-400">
                    Try adjusting your filters or search terms
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuctionListing;
