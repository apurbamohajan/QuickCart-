import connectDB from "@/config/db";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    
    // Delete all products with name "random"
    const result = await Product.deleteMany({ name: "random" });
    
    return NextResponse.json({ 
      success: true, 
      message: `Deleted ${result.deletedCount} products`,
      deletedCount: result.deletedCount 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: error.message 
    }, { status: 500 });
  }
}
