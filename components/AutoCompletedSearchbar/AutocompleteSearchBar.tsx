import { useState, useEffect, useRef } from "react";

import ProductList from "./ProductList";
import SearchInput from "./SearchInput";
import { useRouter } from "next/navigation";
import { CourseLists } from "@/types/course-type";
import useAutoCompleteSearchBar from "@/app/hooks/useAutoCompleteSearchBar";

type CourseListResponse = {
  courseLists: CourseLists[];
};

const AutocompleteSearchBar = () => {
  const router = useRouter();

  const [query, setQuery] = useState("");

  const [selectedProductIndex, setSelectedProductIndex] = useState<number>(-1);
  const [searchResults, setSearchResults] = useState<CourseLists[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);


  const { data: autoCompleteSearchBar } = useAutoCompleteSearchBar();


  const courseLists = autoCompleteSearchBar?.courseLists;

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setSelectedProductIndex(-1);
    setSearchResults(
      courseLists?.filter((product) =>
        product.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowUp") {
      setSelectedProductIndex((prevIndex) =>
        prevIndex === -1 ? searchResults.length - 1 : prevIndex - 1
      );
    } else if (event.key === "ArrowDown") {
      setSelectedProductIndex((prevIndex) =>
        prevIndex === searchResults.length - 1 ? -1 : prevIndex + 1
      );
    } else if (event.key === "Enter") {
      if (selectedProductIndex !== -1) {
        const selectedProduct = searchResults[selectedProductIndex];
        router.push("/course-preview/" + selectedProduct?.slug);
        setQuery("");
        setSelectedProductIndex(-1);
        setSearchResults([]);
      }
    }
  };

  const handleProductClick = (product: CourseLists) => {
    setQuery("");
    setSelectedProductIndex(-1);
    router.push("/course-preview/" + product?.slug);
  };

  const scrollActiveProductIntoView = (index: number) => {
    const activeProduct = document.getElementById(`product-${index}`);
    if (activeProduct) {
      activeProduct.scrollIntoView({
        block: "nearest",
        inline: "start",
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (selectedProductIndex !== -1) {
      scrollActiveProductIntoView(selectedProductIndex);
    }
  }, [selectedProductIndex]);

  return (
    <div className="flex flex-col max-w-lg mx-auto font-FiraCode ">
      <SearchInput
        value={query}
        onChange={handleQueryChange}
        onKeyDown={handleKeyDown}
        inputRef={inputRef}
        placeholder="Search your passion.."
      />

      {query !== "" && searchResults?.length > 0 && (
        <ProductList
          products={searchResults}
          selectedProductIndex={selectedProductIndex}
          handleProductClick={handleProductClick}
        />
      )}
    </div>
  );
};

export default AutocompleteSearchBar;
