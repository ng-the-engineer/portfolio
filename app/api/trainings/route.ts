import { allTrainings } from "@/backend/controllers/trainingsController";
import connect from "@/backend/persistence/mongodb";
import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";

interface RequestContext {}

const router = createEdgeRouter<NextRequest, RequestContext>();

connect();

router.get(allTrainings);

export const GET = async (req: NextRequest, ctx: RequestContext) =>
  router.run(req, ctx);
