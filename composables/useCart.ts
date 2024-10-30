import { defineStore } from 'pinia';

interface Product {
  id: number;
  name: string;
  slug: string;
  price: string;
  unit: string;
  picture_url: string;
  pivot: {
    quantity: number;
  };
  totalPrice: number;
}

export const useCartStore = defineStore('carts', {
  state: () => ({
    products: [] as Product[],
  }),
  getters: {
    totalPrice(state) {
      return state.products.reduce((acc, p) => acc + p.totalPrice, 0);
    },
  },
  actions: {
    async load() {
      const { data: cart } = await useMyFetch<{
        products: Product[];
      }>('/cart/products', {
        default: () => ({
          products: [] as any[],
        }),

        transform: data => ({
          products: data.products.map((p: any) => ({
            ...p,
            totalPrice: parseInt(p.price) * p.pivot.quantity,
          })),
        }),
      });

      this.products = cart.value.products;
    },

    async update(productId: number, quantity: number) {
      await useMyFetch('/cart/products', {
        method: 'PATCH',
        body: {
          product_id: productId,
          quantity,
        },
      });

      await this.load();
    },
  },
});
