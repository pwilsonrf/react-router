import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails() {
   const { id } = useParams();
   const career = useLoaderData();

   return (
      <div className="career-details">
         <h2>Career Details from {career.title}</h2>
         <p>Starting salary: {career.salary}</p>
         <p>Location: {career.location}</p>
         <div className="details">
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
               aperiam velit veniam ipsum itaque laudantium totam, aliquam nam
               dolorum minus id, obcaecati delectus ut ab saepe quidem. Labore,
               illum fugiat.
            </p>
         </div>
      </div>
   )
}

// loader function
export const careerDetailsLoader = async ({ params }) => {
   const { id } = params
   const res = await fetch("http://localhost:4000/careers/" + id)

   if (!res.ok){
    throw Error('Could not find that career')
   }
   return res.json()
}
