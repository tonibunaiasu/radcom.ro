import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const menuItems = [
  {
    title: "COMPANIA",
    items: [
      { title: "Despre", href: "/compania/despre" },
      { title: "Echipă", href: "/compania/echipa" },
      { title: "Certificări", href: "/compania/certificari" },
    ],
  },
  {
    title: "SERVICII",
    items: [
      { title: "iFleet", href: "/servicii/ifleet" },
      { title: "OptiFare", href: "/servicii/optifare" },
      { title: "eXact", href: "/servicii/exact" },
    ],
  },
  {
    title: "SOLUȚII",
    items: [
      { title: "Transport", href: "/solutii/transport" },
      { title: "Medical", href: "/solutii/medical" },
      { title: "Telecom", href: "/solutii/telecom" },
      { title: "Media & Mobile", href: "/solutii/media-mobile" },
      { title: "Internet", href: "/solutii/internet" },
    ],
  },
  {
    title: "CARIERE",
    href: "/cariere",
  },
  {
    title: "RESURSE",
    items: [
      { title: "Stiri", href: "/stiri" },
      { title: "Blog", href: "/blog" },
    ],
  },
  {
    title: "CONTACT",
    href: "/contact",
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary text-primary-foreground shadow-sm">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <img 
                src="/logo.svg" 
                alt="RADCOM Logo" 
                className="h-12 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent hover:bg-primary-foreground/10 text-primary-foreground data-[state=open]:bg-primary-foreground/10">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[200px] gap-1 p-2">
                            {item.items.map((subItem) => (
                              <li key={subItem.title}>
                                <Link href={subItem.href}>
                                  <NavigationMenuLink className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                    <div className="text-sm font-medium">{subItem.title}</div>
                                  </NavigationMenuLink>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={item.href!}>
                        <Button
                          variant="ghost"
                          className="bg-transparent hover:bg-primary-foreground/10 text-primary-foreground"
                        >
                          {item.title}
                        </Button>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-primary-foreground/10 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-primary-foreground/20 py-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.title}>
                  {item.items ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full px-4 py-2 text-left hover:bg-primary-foreground/10 rounded-md transition-colors"
                        onClick={() =>
                          setOpenMobileSubmenu(
                            openMobileSubmenu === item.title ? null : item.title
                          )
                        }
                      >
                        <span className="font-medium">{item.title}</span>
                        <ChevronDown
                          size={20}
                          className={`transition-transform ${
                            openMobileSubmenu === item.title ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openMobileSubmenu === item.title && (
                        <ul className="mt-2 ml-4 space-y-1">
                          {item.items.map((subItem) => (
                            <li key={subItem.title}>
                              <Link href={subItem.href}>
                                <div
                                  className="block px-4 py-2 text-sm hover:bg-primary-foreground/10 rounded-md transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {subItem.title}
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link href={item.href!}>
                      <div
                        className="block px-4 py-2 hover:bg-primary-foreground/10 rounded-md transition-colors font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </div>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
