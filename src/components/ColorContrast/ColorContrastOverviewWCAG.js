import { useColorMode } from '@docusaurus/theme-common';
import ColorContrastWCAG from "./ColorContrastWCAG";

const ColorContrastOverviewWCAG = () => {
    const { colorMode } = useColorMode();

    return (
        <div className="flex flex-row flex-wrap gap-4 mt-8 mb-8">
            {colorMode === 'light' && (
                <>
                    <ColorContrastWCAG colorText = '#000000' colorBg = '#FFFFFF' token1="onSurface" token2="surface"/>
                    <ColorContrastWCAG colorText = '#FFFFFF' colorBg = '#005D92' token1="onPrimary" token2="primary"/>
                    <ColorContrastWCAG colorText = '#005D92' colorBg = '#FFFFFF' token1="primary" token2="surface"/>
                    <ColorContrastWCAG colorText = '#666666' colorBg = '#FFFFFF' token1="onSurfaceVariant" token2="surface"/>
                </>
            )}
            {colorMode === 'dark' && (
                <>
                    <ColorContrastWCAG colorText = '#FFFFFF' colorBg = '#000000' token1="onSurface" token2="surface"/>
                    <ColorContrastWCAG colorText = '#FFFFFF' colorBg = '#666666' token1="onPrimary" token2="primary"/>
                    <ColorContrastWCAG colorText = '#0077B6' colorBg = '#FFFFFF' token1="primary" token2="surface"/>
                    <ColorContrastWCAG colorText = '#555555' colorBg = '#FFFFFF' token1="onSurfaceVariant" token2="surface"/>
                </>
            )}
        </div>
    );
};

export default ColorContrastOverviewWCAG;
