import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "@/components/InfoCard";
import Map from "../components/Map";


function Search({ searchResults}) {

   const router = useRouter();

   console.log(searchResults);

   

   const { location, startDate, endDate, noOfGuests } = router.query;

   const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
   const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
   const range=`${formattedStartDate}-${formattedEndDate}`;




  return (

    <div className="h-screen">
    <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`}/>
    <main className="flex">
        <section className="flex-grow pt-14 px-6">
            <p className="text-xs">300+ Stays - {range}  -  for {noOfGuests} number of guests</p>

            <h1 className="text-3xl font-semibold mt-2 mb-6" >Stays in {location}</h1>

            <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                <p className="button bg-white">Cancellation Flexibility</p>

                <p className="button bg-white">Type of place</p>
                <p className="button bg-white">Price</p>
                <p className="button bg-white">Rooms and Beds</p>
                <p className="button bg-white">More filters</p>
            </div>

            <div className="flex flex-col ">

            {searchResults.map(({img, location, title, description, star, price, total }) => (
               <InfoCard
               key={img}

               img={img}
               location={location}
               title={title}
               description={description}
               star={star}
               price={price}
               total={total}
               
               />

            ))}

           </div>






        </section> 

        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map searchResults={searchResults}/>
        </section>

    </main>


    <Footer />
      
    </div>
  )
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(res => res.json());

  return {
    props: {
      searchResults,
    }
  }

}
