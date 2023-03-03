import { defineStore } from "pinia";
import { useGet } from "@/server/fetch";

interface Product {
  brand: string;
  category?: string;
  description?: string;
  discountedPrice?: number;
  id?: number;
  images?: string[];
  price?: number;
  rating?: number;
  stock?: number;
  thumbnail?: string;
  title?: string;
}

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [] as Product[],
    product: {} as Product,
    isLoading: false,
    loading: { all: true, one: true },
    total: 0,
  }),
  getters: {
    isLoadingAll: (state) => state.loading.all,
    isLoadingOne: (state) => state.loading.one,
  },
  actions: {
    getAllProducts(url: string) {
      this.loading.all = true;
      //  const {data,}= useGet(url)
      useGet(url)
        .then((data) => {
          this.products = data.products;
          this.total = data.total;
        })
        .finally(() => (this.loading.all = false));
    },
    getProduct(url: string) {
      this.loading.one = true;
      useGet(url)
        .then((data) => {
          this.product = data;
        })
        .finally(() => (this.loading.one = false));
    },
  },
});
