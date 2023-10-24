'use client';

import type { ChangeEvent } from 'react';
import { useCallback, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

import { Seo } from 'src/components/seo';
import { AccountGeneralSettings } from 'src/sections/dashboard/account/account-general-settings';
import {useAuth} from "../../../hooks/use-auth";

const tabs = [
  { label: 'General', value: 'general' },
];

const Page = () => {
    const {user} = useAuth()

  const [currentTab, setCurrentTab] = useState<string>('general');

  const handleTabsChange = useCallback(
    (event: ChangeEvent<any>, value: string): void => {
      setCurrentTab(value);
    },
    []
  );

  return (
    <>
      <Seo title="Dashboard: Account" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack
            spacing={3}
            sx={{ mb: 3 }}
          >
            <Typography variant="h4">
              Account
            </Typography>
            <div>
              <Tabs
                indicatorColor="primary"
                onChange={handleTabsChange}
                scrollButtons="auto"
                textColor="primary"
                value={currentTab}
                variant="scrollable"
              >
                {tabs.map((tab) => (
                  <Tab
                    key={tab.value}
                    label={tab.label}
                    value={tab.value}
                  />
                ))}
              </Tabs>
              <Divider />
            </div>
          </Stack>
          {currentTab === 'general' && (
            <AccountGeneralSettings
              avatar={user.avatar || ''}
              email={user.email || ''}
            />
          )}
        </Container>
      </Box>
    </>
  );
};

export default Page;
