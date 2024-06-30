// import { CourseLists } from "@/interfaces/course-type";

import { CourseLists } from "@/types/course-type";
import Image from "next/image";

type ProductListProps = {
  products: CourseLists[];
  selectedProductIndex: number;
  handleProductClick: (product: CourseLists) => void;
};

const ProductList: React.FC<ProductListProps> = ({
  products,
  selectedProductIndex,
  handleProductClick,
}) => {

  
  return (
    <div className="bg-white dark:border-strokedark dark:bg-boxdark max-h-48 w-[400px] mt-5 ml-[-16px] overflow-y-scroll resultProductContainer absolute">
      {products.map((product, index) => (
        <div
          key={product.id}
          id={`product-${index}`}
          className={`py-2 px-4 flex items-center justify-between gap-8 hover:bg-gray-200 cursor-pointer ${
            selectedProductIndex === index ? "bg-gray-200 " : ""
          }`}
          onClick={() => handleProductClick(product)}
        >
          <p className="font-medium">{product.name}</p>
          <Image src={product.banner.url} alt={product?.name} height={80} width={80} className=" w-8" />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
