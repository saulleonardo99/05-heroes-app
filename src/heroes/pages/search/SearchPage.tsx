import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Búsqueda de superheroes"
        description="Descubre, explora y administra tus superheroes y villanos favoritos."
      />
      
      <CustomBreadcrumbs currentPage="Buscador de héroes"/>

      {/* Stats Dahsboard */}
      <HeroStats />

      {/* Filter and search */}
      <SearchControls />
    </>
  )
}

export default SearchPage;