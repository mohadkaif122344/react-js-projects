import { useLocation } from "react-router-dom";

export default function Search() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q"); 

  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <h1 className="text-3xl font-bold  mb-4">Search Results</h1>
      {query ? (
        <p className="text-lg  ">You searched for: <b>{query}</b></p>
      ) : (
        <p className="text-lg text-gray-500">No search term entered.</p>
      )}
    </div>
  );
}
