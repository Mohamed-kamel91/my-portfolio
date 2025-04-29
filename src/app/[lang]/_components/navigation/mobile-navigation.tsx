import {
  AlignJustify as HamburgerIcon,
  X as XIcon,
} from 'lucide-react';

import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerTrigger,
  DrawerCloseButton,
  DrawerHeader,
} from '@/components/ui/drawer';
import { Container } from '@/components/ui/containers';
import { Stack } from '@/components/ui/stack';
import { IconButton } from '@/components/ui/buttons';
import { ReactPortal } from '@/components/ui/portal/portal';
import { Seperator } from '@/components/ui/seperator';
import { MainNavigation } from './main-navigation';
import { NavActions } from './nav-actions';

export const MobileNavigation = () => {
  return (
    <div className="ms-auto">
      <Drawer id="nav-menu" size="lg" position="top">
        <DrawerTrigger asChild>
          <IconButton variant="ghost" aria-label="Mobile navigation">
            <HamburgerIcon />
          </IconButton>
        </DrawerTrigger>

        <ReactPortal id="modal">
          <DrawerContent>
            <DrawerHeader className="h-20">
              <DrawerCloseButton asChild>
                <IconButton
                  className="absolute end-6 top-6"
                  variant="ghost"
                  size="sm"
                >
                  <XIcon size={20} />
                </IconButton>
              </DrawerCloseButton>
            </DrawerHeader>

            <DrawerBody>
              <Container className="max-w-sm">
                <Stack direction="col" gap={8}>
                  <MainNavigation variant="vertical" />
                  <Seperator />
                  <NavActions />
                </Stack>
              </Container>
            </DrawerBody>
          </DrawerContent>
        </ReactPortal>
      </Drawer>
    </div>
  );
};
