import { Suspense } from "react";
import VerifyOtpPage from "./verify";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <VerifyOtpPage />
    </Suspense>
  );
}
