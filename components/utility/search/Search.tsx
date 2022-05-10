import { useState } from 'react';
import { useRouter } from 'next/router';

export interface ISearch {}

const Search: React.FC<ISearch> = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState<string>();
  return (
    <form
      className="flex flex-col items-center gap-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/results?search=${searchTerm}`);
      }}
    >
      <input
        type="text"
        value={searchTerm}
        className="rounded-full border-2 w-5/6 sm:w-128 h-12 px-3"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="px-3">
        <button type="submit" className="btn-primary">
          Google Search
        </button>
        <button type="submit" className="btn-primary">
          i am Felling Lucky
        </button>
      </div>
    </form>
  );
};

export default Search;
