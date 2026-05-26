import { NavigationMenuItem, NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { Link, useLocation } from "react-router"
import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu"
import { cn } from "@/lib/utils";

export const CustomMenu = () => {
    const { pathname } = useLocation();
    const isActve = ( path: string) => {
        return pathname === path;
    }
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {/* Home */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={cn(isActve('/') && 'bg-slate-200', 'p-2 rounded-md')}>
                        <Link to="/">Inicio</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Search */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={cn(isActve('/search') && 'bg-slate-200', 'p-2 rounded-md')}>
                        <Link to="/search">Buscar superhéroes</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
