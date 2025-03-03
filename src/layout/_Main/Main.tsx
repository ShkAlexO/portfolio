import {Routes, Route} from "react-router-dom";

import {ScrollBox} from "@c/ScrollBox/ScrollBox";

import {Home} from "@/pages/Home/Home";
import {Portfolio} from "@/pages/Portfolio/Portfolio";
import {Blog} from "@/pages/Blog/Blog";
import {NotFound} from "@/pages/NotFound/NotFound";
import {Post} from "@/pages/Post/Post";
import {Category} from "@/pages/Category/Category";

import {ROUTES} from "@/constants/routes";

import {innerStyles, scrollBoxStyles, wrapStyles} from "@/layout/_Main/Main.styles";

export const Main = () => {
    return (
        <ScrollBox
            as="main"
            $scrollBoxStyles={scrollBoxStyles}
            $wrapStyles={wrapStyles}
            $innerStyles={innerStyles}>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path={ROUTES.PORTFOLIO} element={<Portfolio/>}/>
                <Route path={ROUTES.BLOG} element={<Blog/>}/>
                <Route path={ROUTES.CATEGORY} element={<Category/>}/>
                <Route path={ROUTES.POST} element={<Post/>}/>
                <Route path={ROUTES.NOT_FOUND} element={<NotFound/>}/>
            </Routes>
        </ScrollBox>
    );
};