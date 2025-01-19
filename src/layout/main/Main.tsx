import {Routes, Route} from "react-router-dom";
// import {Container} from "@c/Container.tsx";
import {ScrollBox} from "@c/ScrollBox.tsx";

import {Home} from "@/pages/Home/Home.tsx";
import {About} from "@/pages/About/About.tsx";
import {Services} from "@/pages/Services/Services.tsx";
import {Portfolio} from "@/pages/Portfolio/Portfolio.tsx";
import {Blog} from "@/pages/Blog/Blog.tsx";
import {Contact} from "@/pages/Contact/Contact.tsx";
import {NotFound} from "@/pages/NotFound/NotFound.tsx";



export const Main = () => {
    return (
        <ScrollBox as="main">
            {/*<Container>*/}
                <Routes>
                    <Route index element={<Home />}></Route>
                    <Route path="about" element={<About />}></Route>
                    <Route path="services" element={<Services />}></Route>
                    <Route path="portfolio" element={<Portfolio />}></Route>
                    <Route path="blog" element={<Blog />}></Route>
                    <Route path="contact" element={<Contact />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            {/*</Container>*/}
        </ScrollBox>
    );
};



