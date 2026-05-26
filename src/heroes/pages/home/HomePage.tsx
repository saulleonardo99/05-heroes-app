import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { useState } from "react"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs"

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<
    'all' |
    'favorites' |
    'heroes' |
    'villains'>('all');
  return (
    <>
      <>
        {/* Header*/}
        <CustomJumbotron
          title="Universo de superheroes"
          description="Descubre, explora y administra tus superheroes y villanos favoritos."
        />

        <CustomBreadcrumbs currentPage="Super Héroes"/>
        {/* Stats Dashboard */}
        <HeroStats />


        {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger onClick={() => setActiveTab('all')} value="all">Todos (16)</TabsTrigger>
            <TabsTrigger onClick={() => setActiveTab('favorites')} value="favorites">Favoritos (3)</TabsTrigger>
            <TabsTrigger onClick={() => setActiveTab('heroes')} value="heroes">Héroes (12)</TabsTrigger>
            <TabsTrigger onClick={() => setActiveTab('villains')} value="villains">Villanos (2)</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            {/* Mostrar todos los personajes*/}
            <h1>Todos los personajes</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value="favorites">
            {/* Mostrar personajes favoritos*/}
            <h1>Personajes favoritos</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value="heroes">
            {/* Mostrar heroes*/}
            <h1>Heroés</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value="villains">
            {/* Mostrar villanos*/}
            <h1>Villanos</h1>
            <HeroGrid />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination  totalPages={5}/>
      </>
    </>
  )
}