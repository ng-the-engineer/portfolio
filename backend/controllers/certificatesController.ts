import { NextRequest, NextResponse } from "next/server";
import Certificate from "../persistence/models/certificates";

// route /api/certificates
export const allCertificates = async (req: NextRequest) => {
  const certificates = await Certificate.find();

  console.log("certs:", certificates);

  return NextResponse.json({
    success: true,
    certificates,
  });
};
