// filepath: d:\Projects\Commit2Team\server\models\User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Portfolio information
  portfolio: {
    year: {
      type: String,
      default: ''
    },
    college: {
      type: String,
      default: ''
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other', 'prefer-not-to-say'],
      default: 'prefer-not-to-say'   // ✅ safe default
    },
    skillCategory: {
      type: String,
      enum: ['frontend', 'backend', 'fullstack', 'ai-ml', 'mobile', 'ui-ux'],
      default: 'frontend'            // ✅ safe default (pick one)
    },
    profilePic: {
      type: String, // Store file path or base64
      default: ''
    },
    resumeFile: {
      type: String, // Store file path or base64
      default: ''
    },
    isPortfolioComplete: {
      type: Boolean,
      default: false
    }
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update the updatedAt field before saving
userSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.model('User', userSchema);
