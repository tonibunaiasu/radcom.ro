import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  const menuItems = [
    {
      id: 'company',
      title: t('nav.company'),
      items: [
        { title: t('nav.about'), href: "/compania/despre", description: "Istoria și valorile RADCOM" },
        { title: t('nav.team'), href: "/compania/echipa", description: "Echipa noastră de experți" },
        { title: t('nav.certifications'), href: "/compania/certificari", description: "Certificări ISO și parteneriate" },
      ],
    },
    {
      id: 'services',
      title: t('nav.services'),
      items: [
        { title: "iFleet", href: "/servicii/ifleet", description: "Management complet flotă transport public" },
        { title: "OptiFare", href: "/servicii/optifare", description: "Sistem e-ticketing contactless" },
        { title: "eXact", href: "/servicii/exact", description: "Informații pasageri timp real" },
      ],
    },
    {
      id: 'solutions',
      title: t('nav.solutions'),
      items: [
        { title: t('solutions.transport'), href: "/solutii/transport", description: "Soluții complete pentru transport public" },
        { title: t('solutions.medical'), href: "/solutii/medical", description: "Dosar medical electronic end-to-end" },
        { title: t('solutions.telecom'), href: "/solutii/telecom", description: "Platforme voce și comunicații" },
        { title: t('solutions.mediaMobile'), href: "/solutii/media-mobile", description: "Aplicații mobile și multimedia" },
        { title: t('solutions.internet'), href: "/solutii/internet", description: "E-commerce și gestiune identitate" },
      ],
    },
    {
      id: 'careers',
      title: t('nav.careers'),
      href: "/cariere",
    },
    {
      id: 'resources',
      title: t('nav.resources'),
      href: "/articole",
    },
    {
      id: 'contact',
      title: t('nav.contact'),
      href: "/contact",
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-primary text-primary-foreground shadow-sm">
        <div className="container">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                <img 
                  src="/logo-white.png" 
                  alt="RADCOM Logo" 
                  className="h-10 w-auto"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => item.items && setActiveMegaMenu(item.id)}
                  onMouseLeave={() => setActiveMegaMenu(null)}
                >
                  {item.href ? (
                    <Link href={item.href}>
                      <Button
                        variant="ghost"
                        className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium px-4"
                      >
                        {item.title}
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      variant="ghost"
                      className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium px-4"
                    >
                      {item.title}
                    </Button>
                  )}
                </div>
              ))}
              <LanguageSwitcher />
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-primary-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mega Menu */}
      {activeMegaMenu && (
        <div
          className="fixed left-0 right-0 top-16 z-40 bg-background/98 backdrop-blur-lg border-b border-border shadow-2xl"
          onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
          onMouseLeave={() => setActiveMegaMenu(null)}
        >
          <div className="container py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems
                .find((item) => item.id === activeMegaMenu)
                ?.items?.map((subItem) => (
                  <Link key={subItem.href} href={subItem.href}>
                    <div className="group p-4 rounded-lg hover:bg-accent/10 transition-all duration-200 cursor-pointer border border-transparent hover:border-accent/20">
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-accent transition-colors">
                        {subItem.title}
                      </h3>
                      {subItem.description && (
                        <p className="text-sm text-muted-foreground">
                          {subItem.description}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-background lg:hidden overflow-y-auto">
          <div className="container py-6">
            <nav className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <div key={item.id} className="border-b border-border pb-4 mb-2">
                  {item.href ? (
                    <Link href={item.href}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-lg font-semibold"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Button>
                    </Link>
                  ) : (
                    <>
                      <div className="text-lg font-semibold px-4 py-2 text-foreground">
                        {item.title}
                      </div>
                      {item.items && (
                        <div className="ml-4 mt-2 flex flex-col gap-1">
                          {item.items.map((subItem) => (
                            <Link key={subItem.href} href={subItem.href}>
                              <Button
                                variant="ghost"
                                className="w-full justify-start text-left"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <div>
                                  <div className="font-medium">{subItem.title}</div>
                                  {subItem.description && (
                                    <div className="text-xs text-muted-foreground mt-0.5">
                                      {subItem.description}
                                    </div>
                                  )}
                                </div>
                              </Button>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
              <div className="mt-4 px-4">
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
