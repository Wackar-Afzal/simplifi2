import { ProductMain } from "@/components/Product1Page/ProductMain";
import cardAsService from "@/utils/cardAsService.json";
import { API_ENDPOINTS } from "@/varConstant";

// Revalidate every 2 seconds for testing
export const revalidate = 2;

// Fetch data from Strapi
async function getData() {
  try {
    const queryParams = "?populate[hero][populate]=*&populate[clientMarquee][populate]=*&populate[whatsCookin][populate][slides][populate]=*&populate[useCases][populate][feature][populate]=*&populate[careerList][populate][careerPositions][populate]=*&populate[footer][populate]=*&sort=publishedAt:desc&pagination[limit]=1";

    const response = await fetch(`${API_ENDPOINTS.CARD_AS_SERVICE}${queryParams}`, {
      next: { revalidate: 2 },
    });

    console.log(response,"response")
    if (!response.ok) {
      console.error("Strapi API fetch failed:", response.status);
      return null;
    }

    const jsonResponse = await response.json();
    console.log(jsonResponse?.data?.[0],"jsonResponse?.data?.[0]")

    return jsonResponse?.data?.[0] || null;
  } catch (error) {
    console.error("Error fetching Strapi data:", error);
    return null;
  }
}

export default async function Page() {
  const strapiData = await getData();

  // Merge hero data with fallback
  const heroData = {
    heading: strapiData?.hero?.heading || cardAsService.cardAsService.hero.heading,
    descrip: strapiData?.hero?.descrip || cardAsService.cardAsService.hero.descrip,
    bckgroundImage: strapiData?.hero?.bckgroundImage?.url || cardAsService.cardAsService.hero.bckgroundImage,
  };

  // Merge ClientMarquee data with fallback
  const clientMarqueeData = {
    heading: strapiData?.clientMarquee?.heading || cardAsService.cardAsService.clientMarquee.heading,
    clientLogos: strapiData?.clientMarquee?.clientLogos?.map(client => ({
      name: client.name || client.alternativeText || "Client",
      logo: client.url || client.logo,
    })) || cardAsService.cardAsService.clientMarquee.clientLogos,
  };

  // Merge whatsCookin data - API doesn't have images, use fallback
  const whatsCookinData = {
    title: strapiData?.whatsCookin?.title || cardAsService.cardAsService.whatsCookin.title,
    subtitle: strapiData?.whatsCookin?.subtitle || cardAsService.cardAsService.whatsCookin.subtitle,
    slides: strapiData?.whatsCookin?.slides?.map((slide, index) => ({
      img: slide.img?.url || slide.image?.url || cardAsService.cardAsService.whatsCookin.slides[index]?.img,
      alt: slide.img?.alternativeText || slide.alt || slide.title || cardAsService.cardAsService.whatsCookin.slides[index]?.alt,
      subtitle: slide.subtitle || cardAsService.cardAsService.whatsCookin.slides[index]?.subtitle,
      title: slide.title,
      buttonText: slide.buttonText || cardAsService.cardAsService.whatsCookin.slides[index]?.buttonText,
      buttonLink: slide.buttonLink || cardAsService.cardAsService.whatsCookin.slides[index]?.buttonLink,
    })) || cardAsService.cardAsService.whatsCookin.slides,
  };

  // Merge useCases data (API uses "feature" array with "style" field)
  const useCasesData = {
    title: strapiData?.useCases?.title || cardAsService.cardAsService.useCases.title,
    descrip: strapiData?.useCases?.descrip || cardAsService.cardAsService.useCases.descrip,
    features: strapiData?.useCases?.feature?.map((feature, index) => ({
      id: feature.id,
      company: feature.company || cardAsService.cardAsService.useCases.features[index]?.company || "",
      logo: feature.logo?.url || cardAsService.cardAsService.useCases.features[index]?.logo,
      title: feature.title,
      description: feature.description,
      image: feature.image?.url || cardAsService.cardAsService.useCases.features[index]?.image,
      dark: feature.style === "dark",
      horizontal: feature.horizontal ?? cardAsService.cardAsService.useCases.features[index]?.horizontal,
    })) || cardAsService.cardAsService.useCases.features,
  };

  // Merge careerList data
  const careerListData = {
    heading: strapiData?.careerList?.heading || cardAsService.cardAsService.careerList.heading,
    descrip: strapiData?.careerList?.descrip || cardAsService.cardAsService.careerList.descrip,
    careerPositions: strapiData?.careerList?.careerPositions?.map((position, index) => ({
      title: position.title,
      href: position.href || cardAsService.cardAsService.careerList.careerPositions[index]?.href || "",
      location: position.location || cardAsService.cardAsService.careerList.careerPositions[index]?.location || "",
      descrip: position.descrip || "",
      icon: position.icon?.url || cardAsService.cardAsService.careerList.careerPositions[index]?.icon,
    })) || cardAsService.cardAsService.careerList.careerPositions,
  };

  // Merge footer data
  const footerData = {
    "bg-dark": strapiData?.footer?.["bg-dark"] ?? cardAsService.cardAsService.footer["bg-dark"],
    heading: strapiData?.footer?.heading || cardAsService.cardAsService.footer.heading,
    subheading: strapiData?.footer?.subheading || cardAsService.cardAsService.footer.subheading,
    buttonText: strapiData?.footer?.buttonText || cardAsService.cardAsService.footer.buttonText,
    buttonLink: strapiData?.footer?.buttonLink || cardAsService.cardAsService.footer.buttonLink,
  };

  const mergedData = {
    cardAsService: {
      hero: heroData,
      clientMarquee: clientMarqueeData,
      whatsCookin: whatsCookinData,
      useCases: useCasesData,
      careerList: careerListData,
      footer: footerData,
    }
  };

  return (
    <div>
      <ProductMain data={mergedData} />
    </div>
  );
}