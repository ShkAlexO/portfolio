import styled from "styled-components";
import {Container} from "@c/UI/Container.tsx";
import {SectionHeading, SectionHeadingPropsType} from "@c/SectionHeading.tsx";
import {Item} from "@c/sections/career/Item.tsx";
import {BoxWrapStyles} from "@c/ComponentStyles.ts";
import {ProfBgPropsType} from '@/data/profBgData.ts'
import {media} from "@/styles/Theme.ts";

type CareerPropsType = SectionHeadingPropsType & {
    list: ProfBgPropsType[]
    listType: 'education' | 'work'
}

export const Career = ({title, subtitle, list, listType}: CareerPropsType) => {
    return (
        <StyledWorkHistory>
            <Container>
                <SectionHeading
                    title={title}
                    subtitle={subtitle}
                />
                <List>
                    {list.map(item => <Item key={item.id} listType={listType} {...item} content={item.content}/>)}
                </List>
            </Container>
        </StyledWorkHistory>
    );
};

const StyledWorkHistory = styled.section`
`

const List = styled.div`
    ${BoxWrapStyles};
    padding: 40px 20px;
    ${media.min('full')} {
        padding: 50px;
    }
`


