# Ayurvedic Prakriti Analysis Web Application

A modern web application built with React and Vite that helps users discover their Ayurvedic body constitution (Prakriti) through an interactive quiz and provides personalized wellness recommendations.

## Features

- **Interactive Prakriti Quiz**: Comprehensive questionnaire to determine your unique body constitution
- **Dosha Analysis**: Detailed breakdown of Vata, Pitta, and Kapha percentages
- **Personalized Results**: Custom recommendations based on your dominant dosha
- **PDF Download**: Generate and download your analysis results
- **Modern UI/UX**: Responsive design with smooth animations using Framer Motion
- **Educational Resources**: Access to Ayurvedic wellness tips and resources

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/AVII-VERSE/ayurvedic-prakriti
cd ayurvedic-prakriti
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5174
```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Previews the production build locally
- `npm run lint` - Runs ESLint to check code quality

## Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **PDF Generation**: pdf-lib
- **Form Handling**: React Hook Form
- **Charts**: Recharts
- **Icons**: React Icons, Heroicons

## Project Structure

```
src/
├── assets/         # Static assets
├── components/     # Reusable components
├── context/        # React context providers
├── pages/          # Page components
├── styles/         # CSS styles
├── utils/          # Utility functions
└── App.jsx         # Main application component
```

## Features in Detail

### 1. Prakriti Quiz
- Multi-step questionnaire
- Progress tracking
- Real-time validation

### 2. Results Analysis
- Detailed dosha breakdown
- Personalized recommendations
- Downloadable PDF report

### 3. Educational Resources
- Ayurvedic e-books
- Video series
- Wellness podcasts

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Ayurvedic principles and knowledge sources
- React and Vite communities
- All contributors and supporters
