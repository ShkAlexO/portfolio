import styled from "styled-components";
import {Heading, HeadingPropsType} from "../../../../components/SectionHeading.tsx";
import {ProfessionalBackgroundPropsType} from '../../../../data/professionalBackgroundData.ts'
import {BoxWrapStyles} from "../../../../components/BoxWrapStyles.ts";

type CareerPropsType = HeadingPropsType & { list: ProfessionalBackgroundPropsType[] }

const Item = ({ title, subtitle, course, mode, start, end}: ProfessionalBackgroundPropsType) => {
    return (
        <StyledItem>
            <div>
                <h5>{title}</h5>
                <div>
                    <div>{course && 'Course: '} {subtitle}</div>
                    <div>{!course && mode}</div>
                </div>
                <div>
                    <div>{start}</div>
                    <div>{end}</div>
                </div>
            </div>
            <div>

            </div>
        </StyledItem>
    )
}

export const Career = ({title, subtitle, list}: CareerPropsType) => {
    return (
        <StyledWorkHistory>
            <Heading
                title={title}
                subtitle={subtitle}
            />
            <List>
                {list.map(item => <Item key={item.id} {...item}/>)}
            </List>
        </StyledWorkHistory>
    );
};

const StyledWorkHistory = styled.section`
`

const List = styled.div`
    ${BoxWrapStyles};
    padding: 50px;
`

const StyledItem = styled.div`
    padding: 35px 10px;
    border-bottom: 1px solid #23ACD8;
`
