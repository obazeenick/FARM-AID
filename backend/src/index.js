import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import bodyParser from 'body-parser';
import { specs } from './config/swagger.js';
import { connectDB } from './config/database.js';
import authRoutes from './routes/authRoutes.js';
//import countriesApiRoutes from './routes/countriesApiRoutes.js';
import languageApiRoutes from './routes/languageApiRoutes.js';
import externalweatherApiRoutes from './routes/externalweatherApiRoutes.js';
import externalAiApiRoutes from './routes/externalAiApiRoutes.js';
import externalTechApiRoutes from './routes/externalTechApiRoutes.js';
import errorHandler from './middleware/errorHandler.js';


// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from uploads directory
app.use('/uploads', express.static('uploads'));

// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

// Routes

app.use('/api/auth', authRoutes);
//app.use('/api/country', countriesApiRoutes);
app.use('/api/lang', languageApiRoutes);
app.use('/api/externalTech', externalTechApiRoutes);
app.use('/api/externalWeather', externalweatherApiRoutes);
app.use('/api/externalAi', externalAiApiRoutes);


// Error handling
app.use(errorHandler);

// Handle 404
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Route not found'
  });
});

// Start server
const PORT = process.env.PORT || 3001;

const startServer = async () => {
  try {
    // Connect to database
    await connectDB();

    // Start listening
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Swagger documentation available at http://localhost:${PORT}/api-docs`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
