import mongoose from "mongoose";

const SubmissionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  problemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Problem",
    required: true
  },
  code: {
    type: String,
    required: true
  },
  language: {
    type: String, // "javascript", "python", etc.
    required: true
  },
  status: {
    type: String,
    enum: ["Accepted", "Wrong Answer", "Time Limit Exceeded", "Runtime Error", "Compilation Error"],
    required: true
  },
  // If we switch to Judge0 later, we can add memory/time usage here
}, { timestamps: true });

const Submission = mongoose.models.Submission || mongoose.model("Submission", SubmissionSchema);

export default Submission;