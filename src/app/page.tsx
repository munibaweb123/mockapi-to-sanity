import Mockapi from "./components/mockapi"

// interface quoteData{
//   _id:string,
//   content:string,
//   author:string,
//   tags:string[],
//   authorSlug:string,
//   length:number,
//   dateAdded:string
// }

// const getData = async() => {
//   const res = await fetch("https://api.quotable.io/random?tags=technology")
//   console.log(res)
//   if(!res.ok) {
//     throw new Error("Failed to fetch data")
//   }
//   return res.json()
// }

export default async function Home() {
  // const quoteData:quoteData = await getData();
  // console.log(quoteData)
  return (
    <div>
<Mockapi/>
    </div>
  );
}