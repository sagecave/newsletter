// const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const apikey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// const headersList = {
//   Accept: "application/json",
//   "Content-Type": "application/json",
//   apikey: apikey,
//   Prefer: "return=representation",
// };
// export async function getSub() {
//   const response = await fetch(url, {
//     method: "GET",
//     headers: headersList,
//   });

//   const data = await response.json();
//   return data;
// }
// export async function postSub(postData) {
//   const response = await fetch(url, {
//     method: "POST",
//     headers: headersList,
//     body: JSON.stringify(postData),
//   });

//   const data = await response.json();
//   return data;
// }
// // const endpoint = process.env.NEXT_PUBLIC_SUPABASE_URL;
// // const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// export async function delSub(id) {
//   console.log("del virker", id);
//   const response = await fetch(`${url}?id=eq.${id}`, {
//     method: "DELETE",
//     headers: {
//       apikey: apikey,
//       Prefer: "return=representation",
//     },
//   });
//   // eksempel på håndtering af svar
//   // if (response.ok) {
//   //   console.log("Resource deleted successfully");
//   // } else {
//   //   console.error("Failed to delete resource");
//   // }
//   const data = await response.json();
//   return data;
// }

// export async function getSubById(id) {
//   const response = await fetch(url, {
//     method: "GET",
//     headers: headersList,
//   });

//   const data = await response.json();

//   return data.find((sub) => sub.id == id);
// }

// const dataToUpdate = {
//   key1: "newValue1",
//   key2: "newValue2",
// };

// export async function patchData(id, dataToUpdate) {
//   console.log("PATCH");
//   const response = await fetch(`${url}?id=eq.${id}`, {
//     method: "PATCH",
//     headers: headersList,
//     body: JSON.stringify(dataToUpdate),
//   });
//   console.log(id);
//   const data = await response.json();
//   return data;
// }
