import connectDB from "@/lib/db";
import Problem from "@/models/Problem";
import { dummyProblems } from "@/utils/problems";

/**
 * Utility function to seed the database with problem data.
 * Can be called from any server-side context (e.g. server actions, admin API).
 */
export async function seedDatabase() {
    try {
        await connectDB();

        // Clear old data to avoid duplicates
        await Problem.deleteMany({});

        // Insert new data
        const result = await Problem.insertMany(dummyProblems);

        console.log(`Database seeded successfully with ${result.length} problems!`);
        return { success: true, count: result.length };
    } catch (error) {
        console.error("Seeding Error:", error);
        return { success: false, error: error.message };
    }
}
