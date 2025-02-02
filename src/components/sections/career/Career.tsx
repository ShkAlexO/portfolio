import {Container} from "@c/UI/Container";
import {SectionHeading, SectionHeadingPropsType} from "@c/SectionHeading";
import {Item} from "@c/sections/career/Item";
import {ProfBgPropsType} from '@/data/profBgData'
import {S} from "./Career.styles.ts"

type CareerPropsType = SectionHeadingPropsType & {
    list: ProfBgPropsType[]
    listType: 'education' | 'work'
}

export const Career = ({title, subtitle, list, listType}: CareerPropsType) => {
    return (
        <S.Career>
            <Container>
                <SectionHeading
                    title={title}
                    subtitle={subtitle}
                />
                <S.List>
                    {list.map(item => <Item key={item.id} listType={listType} {...item} content={item.content}/>)}
                </S.List>
            </Container>
        </S.Career>
    );
};


