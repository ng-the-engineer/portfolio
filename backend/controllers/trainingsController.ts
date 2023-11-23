import { NextRequest, NextResponse } from "next/server";
import Training from "../persistence/models/trainings";

export const allTrainings = async (req: NextRequest) => {
  const trainings = await Training.find();

  console.log("trainings:", trainings);

  return NextResponse.json({
    success: true,
    trainings,
  });
};
