import tailwindcss from '@tailwindcss/postcss';
import postcssPresetEnv from 'postcss-preset-env';

export default {
  plugins: [
    tailwindcss(),
    postcssPresetEnv({
      features: {
        'oklab-function': true,
        'custom-properties': false, // Let Tailwind handle variables
      },
      autoprefixer: false, // Tailwind v4 handles this
      preserve: false,
    }),
  ],
};
