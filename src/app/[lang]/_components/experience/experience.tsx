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
import { useI18n } from '@/i18n/client';
import {
  Technology,
  TechTags,
} from '../../_shared/components/technologies';
import { Stack } from '@/components/ui/stack';

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
      <PageSection id="experience" title={t('experience.title')}>
        <Tabs>
          <Stack
            className="-mx-4 md:flex-row"
            direction="col"
            gap={10}
          >
            <TabsList className="shrink-0 gap-3 overflow-x-auto md:flex-col">
              {experience.map((job) => (
                <Tab key={job.period}>{job.period}</Tab>
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
                  <p className="text-muted-foreground mb-6">
                    {job.description}
                  </p>
                  {job.technologies && (
                    <TechTags
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
