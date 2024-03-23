/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            jost: ['Jost', 'sans-serif'],
        },
        extend: {
            colors: {
                primaryColor: '#FF868E',
                'primaryColor-light': '#FBE0DC',
                bgColor: '#F8F8F7',
                textColor: '#1D1D1D',
                'textColor-light': '#8C8C8C',
                likeColor: '#97EAB9',
                favoriteColor: '#FF868E',
                dislikeColor: '#FFD280',
                votingCardColor: '#B4B7FF',
                breedsCardColor: '#97EAB9',
                galleryCardColor: '#FFD280',
            },
        },
    },
    plugins: [],
}
