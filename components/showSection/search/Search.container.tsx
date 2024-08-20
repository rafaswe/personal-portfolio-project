'use client';
import { OnlinePresenceList } from '@/components/constant/enum';
import ComponentLayout from '../ShowSectionComponent.layout';
import SearchCard from './SearchCard.component';

const Search = () => {
  return (
    <ComponentLayout title="Online Presence" className="w-full bg-secondary">
      <div className="w-full h-full flex items-start flex-wrap gap-8">
        {OnlinePresenceList?.map(singleSearch => (
          <SearchCard singleSearchInfo={singleSearch} key={singleSearch.id} />
        ))}
      </div>
    </ComponentLayout>
  );
};

export default Search;
