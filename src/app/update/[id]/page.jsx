import { getSubById, delSub, patchData } from "@/app/lib/supabse";
import { revalidatePath } from "next/cache";
import Button from "../components/Button";
import { redirect } from "next/navigation";
async function page({ params }) {
  let { id } = await params;
  let sub = await getSubById(id);

  async function patch(formData) {
    "use server";
    const dataToUpdate = {
      navn: formData.get("navn"),
      email: formData.get("email"),
    };
    await patchData(id, dataToUpdate);
    revalidatePath("/test");
    redirect("/test");
  }

  async function deleteSub() {
    "use server";

    await delSub(id);
    revalidatePath("/test");
    redirect("/test");
  }

  console.log(sub);
  return (
    <div className="bg-green-500 w-max p-5 rounded-lg">
      <p>{sub.navn}</p>
      <p>{sub.email}</p>
      <form action={deleteSub}>
        <button type="submit" className="bg-red-500 rounded-lg p-5">
          Delete
        </button>
      </form>
      <form action={patch} className="flex flex-col w-max rounded-lg border-white border-2 gap-3 p-5">
        <label htmlFor="navn">Name</label>
        <input id="navn" name="navn" type="text" defaultValue={sub.navn} />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="text" defaultValue={sub.email} />
        <Button></Button>
      </form>
    </div>
  );
}

export default page;
