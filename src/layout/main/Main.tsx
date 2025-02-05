import {Routes, Route} from "react-router-dom";

import {ScrollBox} from "@c/ScrollBox/ScrollBox";

import {Home} from "@/pages/Home/Home";
import {About} from "@/pages/About/About";
import {Portfolio} from "@/pages/Portfolio/Portfolio";
import {Blog} from "@/pages/Blog/Blog";
import {NotFound} from "@/pages/NotFound/NotFound";
import {Post} from "@/pages/Post/Post";
import {Category} from "@/pages/Category/Category";

import {innerStyles, scrollBoxStyles, wrapStyles} from "@/layout/main/Main.styles";

export const Main = () => {
    return (
        <ScrollBox as="main" $scrollBoxStyles={scrollBoxStyles} $wrapStyles={wrapStyles}
                   $innerStyles={innerStyles}>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="portfolio" element={<Portfolio/>}/>
                <Route path="blog" element={<Blog/>}/>
                <Route path="blog/:categoryId" element={<Category/>}/>
                <Route path="blog/:categoryId/:postId" element={<Post/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </ScrollBox>
    );
};