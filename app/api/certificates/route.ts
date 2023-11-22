import { allCertificates } from "@/backend/controllers/certificatesController";
import { connect } from "@/backend/persistence/mongodb";
import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";

interface RequestContext {}

const router = createEdgeRouter<NextRequest, RequestContext>();

connect();

router.get(allCertificates);

export const GET = async (req: NextRequest, ctx: RequestContext) =>
  router.run(req, ctx);
