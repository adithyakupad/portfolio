import { permanentRedirect } from "next/navigation";

export default function LegacyLabRoute() {
  permanentRedirect("/#projects");
}
