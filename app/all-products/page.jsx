'use client'
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppContext } from "@/context/AppContext";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const AllProductsContent = () => {
    const { products } = useAppContext();
    const searchParams = useSearchParams();
    const category = searchParams.get("category");

    const filtered = category
        ? products.filter((p) => p.category === category)
        : products;

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-start px-6 md:px-16 lg:px-32">
                <div className="flex flex-col items-end pt-12">
                    <p className="text-2xl font-medium">{category ? category : "All products"}</p>
                    <div className="w-16 h-0.5 bg-orange-600 rounded-full"></div>
                </div>
                {filtered.length === 0 ? (
                    <p className="text-gray-500 mt-12">No products found in this category.</p>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col items-center gap-6 mt-12 pb-14 w-full">
                        {filtered.map((product, index) => <ProductCard key={index} product={product} />)}
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

const AllProducts = () => (
    <Suspense>
        <AllProductsContent />
    </Suspense>
);

export default AllProducts;
