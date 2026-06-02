import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import WhyChooseUs from "../components/WhyChooseUs";
import CustomerReviews from "../components/CustomerReviews";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import ContactSection from "../components/ContactSection";

function Home(){
    return (
        <div>
            <Navbar />
            <Hero />
            <Categories/>
        
            <ProductSection />
            <WhyChooseUs />
            
            <CustomerReviews />
            <ContactSection/>
            <Footer />
        </div>
    )
}

export default Home