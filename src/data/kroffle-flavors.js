// Types of prices for individual kroffles
const regularPrice = 4.98;
const premiumPrice = 5.98;
const luxuryPrice = 6.48;

const kroffleFlavors = [
    {
        name: 'Taro Glazed with Coconut',
        file: 'taro-coconut',
        type: 'glazed',
        price: regularPrice,
        desc: 'A kroffle topped with a sweet taro glaze and shredded coconut.',
    },
    {
        name: 'Strawberry & Pretzel',
        file: 'strawberry',
        type: 'glazed',
        price: regularPrice,
        desc: 'A kroffle topped with a strawberry milky glaze and crunchy strawberry pretzels.',
    },
    {
        name: 'Matcha Pistachio',
        file: 'matcha-pistachio',
        type: 'glazed',
        price: regularPrice,
        desc: 'A kroffle topped with a bittersweet matcha glaze and crunchy pistachios.',
    },
    {
        name: 'Dark Chocolate',
        file: 'dark-choco',
        type: 'glazed',
        price: regularPrice,
        desc: 'A kroffle topped with a dark chocolate glaze sprinkled with crunchy almonds.',
    },
    {
        name: 'Cookies & Cream',
        file: 'cookies-n-cream',
        type: 'glazed',
        price: regularPrice,
        desc: 'A kroffle topped with a cookies and cream glaze and crunchy mini Oreos®.',
    },
    {
        name: 'Blueberry Cheesecake',
        file: 'blueberry',
        type: 'premium',
        price: premiumPrice,
        desc: 'A kroffle topped with whipped blueberry cream cheese and fresh blueberries.',
    },
    {
        name: 'Strawberry & Cream',
        file: 'strawberry-cream',
        type: 'premium',
        price: premiumPrice,
        desc: 'A kroffle topped with fresh whipped cream, ripe strawberries and sugar.',
    },
    {
        name: 'Strawberry & Blueberry',
        file: 'strawberry-blueberry',
        type: 'premium',
        price: premiumPrice,
        desc: 'A kroffle topped with fresh whipped cream, ripe strawberries and blueberries sprinkled with sugar.',
    },
    {
        name: 'Nutella & Banana',
        file: 'banana-nutella',
        type: 'premium',
        price: premiumPrice,
        desc: 'A kroffle topped with Nutella® whipped cream, fresh bananas and chocolate syrup.',
    },
    {
        name: 'Mango & Cream',
        file: 'mango',
        type: 'premium',
        price: premiumPrice,
        desc: 'A kroffle topped with whipped cream and fresh mangoes.',
    },
    {
        name: 'Oreo & Cream',
        file: 'oreo-cream',
        type: 'premium',
        price: premiumPrice,
        desc: '',
    },
    {
        name: 'Biscoff & Cream',
        file: 'biscoff',
        type: 'premium',
        price: premiumPrice,
        desc: '',
    },
    {
        name: 'Matcha & Adzuki',
        file: 'matcha-adzuki',
        type: 'premium',
        price: luxuryPrice,
        desc: 'A kroffle topped with a sweet red bean paste and bittersweet green tea cream.',
    },
    {
        name: 'Mixed Fruits & Cream',
        file: 'colorful-fruits',
        type: 'premium',
        price: luxuryPrice,
        desc: 'A kroffle topped with fresh whipped cream and assorted seasonal fruits.',
    },
    {
        name: 'BBQ Bacon Melt',
        file: 'bacon-melt',
        type: 'premium',
        price: luxuryPrice,
        desc: '',
    },
    {
        name: 'BBQ Ham, Bacon, & Jalapeño',
        file: 'bacon-ham-jalapeno',
        type: 'premium',
        price: luxuryPrice,
        desc: '',
    },

    // {
    //     name: 'Matcha Pistachio',
    //     file: 'pistachio',
    //     desc: 'A kroffle layered in matcha with fresh pistachios on top.',
    // },
    // {
    //     name: 'Cream',
    //     file: 'cream',
    //     desc: "A kroffle topped with plain whipped cream. You can't get more original than this.",
    // },
    // {
    //     name: 'Biscuit',
    //     file: 'biscuit',
    //     desc: 'A kroffle layered in cookies and cream topped with Biscoff®.',
    // },
    // {
    //     name: 'Nutella',
    //     file: 'nutella',
    //     desc: 'A kroffle layered in Nutella® topped with fresh almonds.',
    // },
];

Object.freeze(kroffleFlavors);
export default kroffleFlavors;