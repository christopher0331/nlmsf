import { permanentRedirect } from "next/navigation";

/** Redirect /denise-f-montano-tribute-page to /denise-f-montano-tribute-fund */
export default function DeniseFMontanoTributePageRedirect() {
  permanentRedirect("/denise-f-montano-tribute-fund");
}
