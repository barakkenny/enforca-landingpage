/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
			main: '#01008a'
		},
		fontFamily: {
			sans: ['Plus Jakarta Sans', 'sans-serif'], 
			play: [ "Playfair Display", 'serif']
		  },
		  screens: {
			xxs: '320px',
			xs:  '480px'
		  }
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

