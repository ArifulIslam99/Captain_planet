import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";

const Base = 
{
    fontfamily: typography.primary,
    fontSize: 16,
    color: colors.white
}

const BaseBold = 
{
    fontfamily: typography.bold,
    fontSize: 16,
    color: colors.white
}

const BOld = 
{
    fontfamily: typography.secondary,
    color: colors.white
}

export const presets = 
{
    default: Base,
    bold: BOld,
    h1:
    {
        ...BOld,
        fontSize: 32
    },
    h2: 
    {
        ...BOld,
        fontSize: 28
    },
    h3:
    {
        ...BaseBold,
        fontSize: 24
    },
    h4:
    {
        ...BaseBold,
        fontSize: 14
    },
    small:
    {
        ...Base,
        fontSize: 12
    }
}