import {FC} from "react";

import {Container} from "@c/UI/Container/Container";
import {SectionHeading, SectionHeadingPropsType} from "@c/SectionHeading/SectionHeading";
import {CareerItem} from "@c/sections/_Career/CareerItem";

import {ProfBgPropsType} from '@/data/profBgData'
import {CareerStyled, List} from "@c/sections/_Career/Career.styles"

type CareerPropsType = SectionHeadingPropsType & {
    list: ProfBgPropsType[]
    listType: 'education' | 'work'
}

export const Career: FC<CareerPropsType> = ({title, subtitle, list, listType}) => {
    return (
        <CareerStyled>
            <Container>
                <SectionHeading
                    title={title}
                    subtitle={subtitle}
                />
                <List>
                    {list.map(item => <CareerItem
                        key={item.id}
                        listType={listType}
                        content={item.content}
                        {...item}
                    />)}
                </List>
            </Container>
        </CareerStyled>
    );
};