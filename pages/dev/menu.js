import TopNavigationDropdown from "../../components/NewMockupComponents/TopNavigation/TopNavigationDropdown";
import TopHeaderNavigationMenu from "../../components/NewMockupComponents/TopHeader/TopHeaderNavigationMenu";
import { homePageContent } from "../../graphql/queries/content/queries";
import { useQuery } from "@apollo/client";
const MenuPage = () => {

  const { data: contentData } = useQuery(homePageContent);

  if (!contentData) return <></>;

  return (
    <div>
      <div className="h-[550px]">
        <TopHeaderNavigationMenu 
          data={contentData}
          requestHide={() => {
            setTimeout(() => {
              setShowMegaMenu(false);
            }, 250);
          }} 
          />
      </div>
      <div className="mt-[30px]">
        <h1>Menu Page</h1>
        <TopNavigationDropdown />
      </div>
    </div>
  );
};

export default MenuPage;
