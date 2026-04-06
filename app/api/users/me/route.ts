import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helper/getdatafromtoken";
import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);
    const user = await User.findById(userId).select("-password");
    return NextResponse.json({
      message: "User fetched successfully",
      success: true,
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
