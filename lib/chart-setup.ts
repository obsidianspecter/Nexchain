import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

// Register necessary scales and elements
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);
