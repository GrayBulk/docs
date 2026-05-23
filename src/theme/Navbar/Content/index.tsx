import { type JSX, useMemo, useRef } from 'react';
import { useDimensions } from '@coinbase/cds-web/hooks/useDimensions';
import { HStack } from '@coinbase/cds-web/layout/HStack';
import { Text } from '@coinbase/cds-web/typography/Text';
import { useThemeConfig } from '@docusaurus/theme-common';
import NavbarThemeToggle from '@site/src/components/nav/NavbarThemeToggle';
import { useWindowSizeWithBreakpointOverride } from '@site/src/utils/useWindowSizeWithBreakpointOverride';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarItem, { type Props as NavbarItemConfig } from '@theme/NavbarItem';
import SearchBar from '@theme/SearchBar';

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

export default function NavbarContent(): JSX.Element {
  const windowSize = useWindowSizeWithBreakpointOverride();

  const items = useNavbarItems();
  const linkItems = useMemo(
    () => items.filter((item) => item.type === 'default' || !item.type),
    [items],
  );
  const searchBarItem = useMemo(() => items.find((item) => item.type === 'search'), [items]);
  const navbarRef = useRef(null);

  useDimensions({
    ref: navbarRef,
    useBorderBoxSize: true,
    onResize: ({ height }) => {
      document.documentElement.style.setProperty('--ifm-navbar-height', `${height}px`);
    },
  });

  return (
    <HStack
      ref={navbarRef}
      flexGrow={1}
      justifyContent="space-between"
      paddingEnd={{ base: 4, phone: 3 }}
      paddingStart={{ base: 4, phone: 2 }}
      paddingY={2}
    >
      <HStack alignItems="center" gap={1.5}>
        {windowSize === 'mobile' && <NavbarMobileSidebarToggle />}
        <NavbarLogo />
        <Text
          background="bgSecondary"
          borderRadius={700}
          font="label1"
          paddingX={1}
          paddingY={0.5}
        >
          By Gray Cup
        </Text>
      </HStack>
      <HStack alignItems="center" gap={1.5}>
        {searchBarItem && <SearchBar />}
        {windowSize === 'desktop' && (
          <HStack background="bgSecondary" borderRadius={1000} gap={1} padding={0.5}>
            {linkItems.map((item) => (
              <NavbarItem key={item.href} {...item} />
            ))}
          </HStack>
        )}
        <NavbarThemeToggle />
        <NavbarColorModeToggle />
      </HStack>
    </HStack>
  );
}
