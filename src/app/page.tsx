import { Search } from './components/Search'
import { QuickSearchTags } from './components/QuickSearchTags'
import RecommendadedTrips from './components/RecommendedTrips'

export default function Home() {
  return (
    <div>
      <Search />
      <QuickSearchTags />
      <RecommendadedTrips />
    </div>
  )
}
