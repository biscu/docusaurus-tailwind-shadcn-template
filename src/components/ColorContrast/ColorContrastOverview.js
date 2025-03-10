import { useColorMode } from '@docusaurus/theme-common';
import ColorContrast from "./ColorContrast";

const ColorContrastOverview = () => {
    const { colorMode } = useColorMode();

    return (
        <div className="flex flex-row flex-wrap gap-4 mt-8 mb-8">
            {colorMode === 'light' && (
                <>
                    <ColorContrast colorText = '#000000' colorBg = '#FFFFFF' token1="onSurface" token2="surface"/>
                    <ColorContrast colorText = '#FFFFFF' colorBg = '#005D92' token1="onPrimary" token2="primary"/>
                    <ColorContrast colorText = '#005D92' colorBg = '#FFFFFF' token1="primary" token2="surface"/>
                    <ColorContrast colorText = '#666666' colorBg = '#FFFFFF' token1="onSurfaceVariant" token2="surface"/>
                </>
            )}
            {colorMode === 'dark' && (
                <>
                    <ColorContrast colorText = '#FFFFFF' colorBg = '#000000' token1="onSurface" token2="surface"/>
                    <ColorContrast colorText = '#FFFFFF' colorBg = '#666666' token1="onPrimary" token2="primary"/>
                    <ColorContrast colorText = '#0077B6' colorBg = '#FFFFFF' token1="primary" token2="surface"/>
                    <ColorContrast colorText = '#555555' colorBg = '#FFFFFF' token1="onSurfaceVariant" token2="surface"/>
                </>
            )}
        </div>
    );
};

export default ColorContrastOverview;
