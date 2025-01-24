import {Routes, Route} from "react-router-dom";
import {ScrollBox} from "@c/ScrollBox.tsx";
import {Home} from "@/pages/Home/Home.tsx";
import {About} from "@/pages/About/About.tsx";
import {Services} from "@/pages/Services/Services.tsx";
import {Portfolio} from "@/pages/Portfolio/Portfolio.tsx";
import {Blog} from "@/pages/Blog/Blog.tsx";
import {Contact} from "@/pages/Contact/Contact.tsx";
import {NotFound} from "@/pages/NotFound/NotFound.tsx";
import {css} from "styled-components";
import {media} from "@/styles/Theme.ts";

export const Main = () => {
    return (
        <ScrollBox as="main" scrollBoxStyles={scrollBoxStyles} wrapStyles={wrapStyles} innerStyles={innerStyles}>
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="about" element={<About />}></Route>
                <Route path="services" element={<Services />}></Route>
                <Route path="portfolio" element={<Portfolio />}></Route>
                <Route path="blog" element={<Blog />}></Route>
                <Route path="contact" element={<Contact />}></Route>
                <Route path="*" element={<NotFound />}></Route>
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
            padding-right: var(--width-scrollbar);
        }
    }
`


