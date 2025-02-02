import {Routes, Route} from "react-router-dom";
import {ScrollBox} from "@c/ScrollBox";
import {Home} from "@/pages/Home/Home";
import {About} from "@/pages/About/About";
import {Portfolio} from "@/pages/Portfolio/Portfolio";
import {Blog} from "@/pages/Blog/Blog";
import {NotFound} from "@/pages/NotFound/NotFound";
import {css} from "styled-components";
import {media} from "@/styles/Theme";
import {Post} from "@/pages/Post/Post";
import {Category} from "@/pages/Category/Category";

export const Main = () => {
    return (
        <ScrollBox as="main" $scrollBoxStyles={scrollBoxStyles} $wrapStyles={wrapStyles} $innerStyles={innerStyles}>
            <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="portfolio" element={<Portfolio />}/>
                <Route path="blog" element={<Blog />}/>
                <Route path="blog/:categoryId" element={<Category />}/>
                <Route path="blog/:categoryId/:postId" element={<Post />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </ScrollBox>
    );
};

const scrollBoxStyles = css`
    ${media.max('xl')} {
        height: 100%;
        border: none;
    }
`

const wrapStyles = css`
    ${media.max('xl')} {
        border: none;
    }
`

const innerStyles = css`
    ${media.max('xl')} {
        .js-open-sidebar & {
            overflow-y: hidden;
        }
    }
`


