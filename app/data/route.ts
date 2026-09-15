import { predictions } from "@/lib/data";

export const dynamic = "force-static";

export function GET() {
  return Response.json(predictions, {
    headers: { "Cache-Control": "public, max-age=3600" },
  });
}
