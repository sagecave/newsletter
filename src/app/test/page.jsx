import { getSub } from "@/app/lib/supabse";
import { postSub } from "@/app/lib/supabse";
import { revalidatePath } from "next/cache";
import { delSub } from "@/app/lib/supabse";

async function page() {
  const subscribers = await getSub();

  async function postingSub(formData) {
    "use server";
    const data = {
      navn: formData.get("navn"),
      email: formData.get("email"),
    };
    await postSub(data);

    revalidatePath("/");
  }

  // async function deleteSub(id) {
  //   await delSub(id);

  //   revalidatePath("/test");
  // }
  return (
    <div className="bg-green-500">
      <h1 className="text-9xl">All subscribes</h1>
      <div className=" flex flex-col justify-center items-center">
        <form action={postingSub} className="flex flex-col w-max rounded-lg border-white border-2 gap-3 p-5">
          <label htmlFor="navn">Name</label>
          <input id="navn" name="navn" type="text" />
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="text" />
          <button className="bg-orange-300 ">Subcribe</button>
        </form>
        <ul className="flex flex-row flex-wrap gap-3 mt-4 mb-4">
          {subscribers.map((sub) => (
            <li className="bg-green-800 p-3 rounded-lg " key={sub.id}>
              <a href={`/update/${sub.id}`}>
                <div>
                  <p> {sub.navn}</p>

                  <p> {sub.email}</p>
                </div>
              </a>
              {/* <form action={deleteSub(sub.id)}>
                <button className="bg-red-500 rounded-lg p-5">Delete</button>
              </form> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default page;