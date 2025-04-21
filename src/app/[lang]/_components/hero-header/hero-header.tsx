import React from 'react';
import Link from 'next/link';

import { Container } from '@/components/ui/container';
import { Stack } from '@/components/ui/stack';
import { Button } from '@/components/ui/buttons';

export const HeroHeader = () => {
  return (
    <div className="pt-5 md:pt-15">
      <Container className="max-w-3xl">
        <Stack direction="col">
          <h1 className="mb-2 text-5xl font-bold">Mohamed Kamel</h1>

          <p className="text-muted-foreground mb-8 text-2xl font-medium md:mb-10">
            Frontend Developer
          </p>

          <p className="mb-8 max-w-162 text-xl md:mb-10">
            Building sleek, scalable, and high-performance web
            applications with great user experiences.
          </p>

          <Stack gap={2}>
            <Button
              as={Link}
              href="#projects"
              size="lg"
              className="shrink-0"
            >
              About Me
            </Button>
            <Button
              as={Link}
              href="#projects"
              size="lg"
              variant="outline"
              className="shrink-0"
            >
              View my work
            </Button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};
