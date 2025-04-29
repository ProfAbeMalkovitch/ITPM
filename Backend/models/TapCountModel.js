import mongoose from 'mongoose';

// Define a schema to track tap counts for Products and Shops
const tapCountSchema = new mongoose.Schema({
  // The ID of the object (either a Product or Shop)
  objectId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: 'objectType', // Dynamic reference to the model specified in objectType
  },

  // Specifies the type of the tapped object: 'Product' or 'Shop'
  objectType: {
    type: String,
    required: true,
    enum: ['Product', 'Shop'], // Ensures only 'Product' or 'Shop' is allowed
  },

  // Number of times the object has been tapped
  count: {
    type: Number,
    default: 1, // Starts with 1 when the first tap is recorded
  },

  // Records the date and time the object was last tapped
  lastTappedAt: {
    type: Date,
    default: Date.now, // Automatically set to current date/time on creation
  },

  // Records the date and time the first tap was recorded
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set to current date/time on creation
  },
});

// Create a Mongoose model from the schema
const TapCount = mongoose.model('TapCount', tapCountSchema);

// Export the model for use in other parts of the application
export default TapCount;
