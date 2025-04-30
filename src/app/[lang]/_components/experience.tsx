'use client';

import { Container } from '@/components/ui/containers';
import { PageSection } from '@/components/ui/containers/page-section';
import {
  Tab,
  TabPanel,
  Tabs,
  TabsList,
  TabsPanels,
} from '@/components/ui/tabs';
import { Stack } from '@/components/ui/stack';
import { Technologies, Technology } from '@/components/technologies';

import { useI18n } from '@/i18n/client';

import { cn } from '@/utils/cn';

type Experience = {
  period: string;
  position: string;
  company: string;
  location: string;
  description: string;
  technologies?: Technology[];
};

export const Experience = () => {
  const { t } = useI18n('home');

  const experience = t('experience.timeline', {
    returnObjects: true,
  }) as Experience[];

  return (
    <Container className="max-w-3xl">
      <PageSection
        id="experience"
        title={t('experience.title')}
        contentClassName="min-h-78"
      >
        <Tabs>
          <Stack
            className="-mx-4 md:flex-row"
            direction="col"
            gap={10}
          >
            <TabsList
              className={cn(
                'shrink-0 md:flex-col',
                'overflow-x-auto',
              )}
            >
              {experience.map((job) => (
                <Tab key={job.period} className="w-37">
                  {job.period}
                </Tab>
              ))}
            </TabsList>
            <TabsPanels>
              {experience.map((job) => (
                <TabPanel key={job.period}>
                  <h3 className="mb-1 text-xl font-medium">
                    {job.company}
                  </h3>
                  <p className="mb-1">{job.position}</p>
                  <p className="mb-6">{job.location}</p>
                  <p className="text-muted-foreground">
                    {job.description}
                  </p>
                  {job.technologies && (
                    <Technologies
                      className="mt-6"
                      tags={job.technologies}
                      tagSize="icon-md"
                    />
                  )}
                </TabPanel>
              ))}
            </TabsPanels>
          </Stack>
        </Tabs>
      </PageSection>
    </Container>
  );
};
