const categories = [
  "All",
  "Boys",
  "Girls",
  "Family",
  "PG",
  "Flat",
  "Single Room",
];

type Props = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

export default function CategorySlider({
  selectedCategory,
  setSelectedCategory,
}: Props) {
  return (
    <div className="px-4 py-3 bg-white">
      <div className="flex gap-3 overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`whitespace-nowrap px-5 py-2 rounded-full font-medium transition ${
              selectedCategory === category
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}