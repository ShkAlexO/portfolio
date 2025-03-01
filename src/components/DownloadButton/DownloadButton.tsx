import {FC} from "react";
import {DownloadButtonStyled, S} from "@c/DownloadButton/DownloadButton.styles";
import {FaDownload} from "react-icons/fa6";

type DownloadButtonPropsType = {
    text: string
    file: string
}
export const DownloadButton: FC<DownloadButtonPropsType> = ({text, file}) => {
    return (
        <DownloadButtonStyled href={file} download>
            <S.Text>{text}</S.Text>
            <S.Icon as={FaDownload}/>
        </DownloadButtonStyled>
    );
};