import { Link } from "react-router-dom";

export default function NotFound() {
   return (
      <div>
         <h2>Page not found!</h2>
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            autem qui veniam blanditiis fuga ad eius aliquam enim consectetur
            iure nisi culpa impedit labore amet beatae sapiente sint, ipsam sed.
         </p>
         <p>Go to the <Link to="/">Homepage</Link>.</p>
      </div>
   );
}
