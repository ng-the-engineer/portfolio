import { NextRequest, NextResponse } from "next/server";

// route /api/certificates
export const allCertificates = async (req: NextRequest) => {
  return NextResponse.json({
    success: true,
    message: "Congrats",
  });
};
