"use client";
import { useFormStatus } from "react-dom";
function subing() {
  const { pending } = true;

  return (
    <button type="submit" disabled={pending} className="bg-orange-300 ">
      Subcribe
    </button>
  );
}

export default button;
