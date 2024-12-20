module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Inclure vos fichiers Angular
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // Ajouter DaisyUI comme plugin
  // Votre configuration Tailwind
  daisyui: {
    themes: ["light", "dark", "cupcake"], // Ajouter les thèmes souhaités
  },
};
