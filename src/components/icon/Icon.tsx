import iconsSprite from '../../assets/images/icons-sprite.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    className?: string
}

export const Icon = ({iconId, width = '50', height = '50', className}: IconPropsType) => {
    return (
        <svg className={className} width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${iconId}`}/>
        </svg>
    )
}
