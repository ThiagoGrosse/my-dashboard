import CardHome from "@/components/cards/cards-home-page";
import TitlePage from "@/components/titlePage/title-page";

export default function Home() {
  return (
      <div>
          <TitlePage title="Dashboard"/>
          <div className="flex px-5 py-10 flex-wrap gap-6 justify-center">
              <CardHome>Item 01</CardHome>
              <CardHome>Item 02</CardHome>
              <CardHome>Item 03</CardHome>
              <CardHome>Item 04</CardHome>
          </div>
      </div>
  );
}
