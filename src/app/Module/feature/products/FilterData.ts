export const filters = [
    {
        id: "color",
        name: "Color",
        options: [ // Changed from Options to options
            { value: "white", label: "White" },
            { value: "blue", label: "Blue" },
            { value: "green", label: "Green" },
            { value: "yellow", label: "Yellow" },
            { value: "purple", label: "Purple" },
            { value: "brown", label: "Brown" },
            { value: "beige", label: "Beige" },
        ],
    },
    {
        id: "size",
        name: "Size",
        options: [ // Changed from Options to options
            { value: "S", label: "S" },
            { value: "M", label: "M" },
            { value: "L", label: "L" },
            { value: "XL", label: "XL" },
        ],
    },
];

export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [ // Changed from Options to options
            { value: "159-399", label: "159-399" },
            { value: "399-999", label: "399-999" },
            { value: "999-1999", label: "999-1999" },
            { value: "1999-2999", label: "1999-2999" },
            { value: "2999-3999", label: "2999-3999" },
            { value: "3999 and above", label: "3999 and above" },
        ],
    },
    {
        id: "discount",
        name: "Discount Range",
        options: [ // Changed from Options to options
            { value: "10", label: "10% and Above" },
            { value: "20", label: "20% and Above" },
            { value: "30", label: "30% and Above" },
            { value: "40", label: "40% and Above" },
            { value: "50", label: "50% and Above" },
            { value: "60", label: "60% and Above" },
            { value: "70", label: "70% and Above" },
            { value: "80", label: "80% and Above" },
        ],
    },
    {
        id: "stock",
        name: "Stock",
        options: [ // Changed from Options to options
            { value: "in_stock", label: "In Stock" },
            { value: "out_of_stock", label: "Out of Stock" },
        ],
    },
];
