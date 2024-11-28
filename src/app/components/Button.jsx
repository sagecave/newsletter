import { delSub } from "@/app/lib/supabse";
import { revalidatePath } from "next/cache";
const button = (id) => {
  async function deleteSub(id) {
    "use server";

    await delSub(id);

    revalidatePath("/test");
  }
  return (
    <form action={deleteSub}>
      <button onClick={() => deleteSub(id)} className="bg-red-500 rounded-lg p-5">
        Delete
      </button>
    </form>
  );
};

export default button;
