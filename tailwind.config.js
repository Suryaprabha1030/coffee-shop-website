/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{jsx,js,tsx,ts}"
  ],
  theme: {
    screens:{
      'xs':"576px",
      'sm' :"640px",
      'md' :"768px",
      'mmd':"900px",
      'lg' :"1024px",
      'xl': "1280px",
      "xxl":"1400px"
    },
    extend: {
      width:{
        img:"320px",
        imgmd:"290px",
        imgsm:"260px",
        imgxs:"230px",
        abt:"200px",
        abt2:"250px",
        pow:"480px",
        pow2:"280px",
        pow3:"400px"
      },
      colors:{
        primary:"#241508",
        sub:"#714423",
        secondary:"#91672c",
        logo:"#c19d67",
      card:"#ECB159",
    // out:"#B67352",
    card3:"#301f17",
  card2:"#F9E8D9"},
      fontFamily:{
        logo:["Style Script", "cursive"],
        default:["Roboto", "sans-serif"],
        // curs:["Italianno", "cursive"]
      },
      backgroundImage:{
        bgimg: "url(/src/asset/reb.jpg)",
      }
    },
  },
  plugins: [],
}

