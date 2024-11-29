"use client";
import { useFormStatus } from "react-dom";
function button() {
  const { pending } = true;

  return (
    <button type="submit" disabled={pending} className="bg-orange-300 ">
      Subcribe
    </button>
  );
}

export default button;
