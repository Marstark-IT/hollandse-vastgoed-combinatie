import PageHero from "@/components/sections/PageHero";
import LegalBody from "@/components/sections/LegalBody";
import { t } from "@/data/content";
import { IMAGES } from "@/data/site";

export default function LegalView({ locale, page }) {
  const c = t(locale);
  return (
    <>
      <PageHero locale={locale} image={IMAGES.legal} imageAlt="" title={c.meta[page].title} trail={[{ key: page, label: c.meta[page].title }]} />
      <LegalBody locale={locale} blocks={c.legal[page]} />
    </>
  );
}
