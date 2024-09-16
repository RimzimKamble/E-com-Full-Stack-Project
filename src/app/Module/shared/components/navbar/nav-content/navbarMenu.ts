export const navigation = {
    women: {
      id: 'women',
      name: 'Women',
      featured: [
        { name: 'New Arrivals', id: 'new_arrivals', href: 'women/new_arrivals' },
        { name: 'Best Sellers', id: 'best_sellers', href: 'women/best_sellers' },
        { name: '50% Off Sale', id: 'sale_50', href: 'women/clothing/sale' },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', id: 'tops', href: 'women/clothing/tops' },
            { name: 'Dresses', id: 'women_dress', href: 'women/clothing/dresses' },
            { name: 'Pants', id: 'women_jeans', href: 'women/clothing/jeans' },
            { name: 'Lehenga Choli', id: 'lehenga_choli', href: 'women/clothing/lehenga_choli' },
            { name: 'Sweaters', id: 'women_sweaters', href: 'women/clothing/sweaters' },
            { name: 'T-Shirts', id: 'tshirt', href: 'women/clothing/tshirts' },
            { name: 'Jackets', id: 'jacket', href: 'women/clothing/jackets' },
            { name: 'Gowns', id: 'women_gowns', href: 'women/clothing/gowns' },
            { name: 'Sarees', id: 'women_saree', href: 'women/clothing/sarees' },
            { name: 'Kurtas', id: 'women_kurtas', href: 'women/clothing/kurtas' },
          ]
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', id: 'watch', href: 'women/accessories/watches' },
            { name: 'Wallets', id: 'wallet', href: 'women/accessories/wallets' },
            { name: 'Bags', id: 'bag', href: 'women/accessories/bags' },
            { name: 'Sunglasses', id: 'sunglasses', href: 'women/accessories/sunglasses' },
            { name: 'Hats', id: 'hat', href: 'women/accessories/hats' },
            { name: 'Belts', id: 'belt', href: 'women/accessories/belts' },
          ]
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', id: 'full_nelson', href: 'women/brands/full_nelson' },
            { name: 'My Way', id: 'my_way', href: 'women/brands/my_way' },
            { name: 'Re-Arranged', id: 're_arranged', href: 'women/brands/re_arranged' },
            { name: 'Counterfeit', id: 'counterfeit', href: 'women/brands/counterfeit' },
            { name: 'Significant Other', id: 'significant_other', href: 'women/brands/significant_other' },
          ]
        }
      ]
    },
  
    men: {
      id: 'men',
      name: 'Men',
      featured: [],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Shirts', id: 'shirts', href: 'men/clothing/shirts' },
            { name: 'Jeans', id: 'men_jeans', href: 'men/clothing/jeans' },
            { name: 'Kurtas', id: 'men_kurtas', href: 'men/clothing/kurtas' },
            { name: 'Shoes', id: 'men_shoes', href: 'men/clothing/shoes' },
            { name: 'Sweaters', id: 'men_sweaters', href: 'men/clothing/sweaters' },
            { name: 'T-Shirts', id: 'tshirt', href: 'men/clothing/tshirts' },
            { name: 'Jackets', id: 'jacket', href: 'men/clothing/jackets' },
          ]
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', id: 'watch', href: 'men/accessories/watches' },
            { name: 'Wallets', id: 'wallet', href: 'men/accessories/wallets' },
            { name: 'Bags', id: 'bag', href: 'men/accessories/bags' },
            { name: 'Sunglasses', id: 'sunglasses', href: 'men/accessories/sunglasses' },
            { name: 'Hats', id: 'hat', href: 'men/accessories/hats' },
            { name: 'Belts', id: 'belt', href: 'men/accessories/belts' },
          ]
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', id: 'full_nelson', href: 'men/brands/full_nelson' },
            { name: 'My Way', id: 'my_way', href: 'men/brands/my_way' },
            { name: 'Re-Arranged', id: 're_arranged', href: 'men/brands/re_arranged' },
            { name: 'Counterfeit', id: 'counterfeit', href: 'men/brands/counterfeit' },
            { name: 'Significant Other', id: 'significant_other', href: 'men/brands/significant_other' },
          ]
        }
      ]
    }
  };
  