'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import {Seo} from 'src/components/seo';
import {useSettings} from 'src/hooks/use-settings';
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Page = () => {
    const settings = useSettings();

    return (
        <>
            <Seo title="Dashboard: Dashboard"/>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
            >
                <Container maxWidth={settings.stretch ? false : 'xl'}>
                    <Grid
                        container
                        disableEqualOverflow
                        spacing={{
                            xs: 3,
                            lg: 4
                        }}
                    >
                        <Grid xs={12}>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                spacing={4}
                            >
                                <div>
                                    <Typography variant="h4">
                                        Dashboard
                                    </Typography>
                                </div>
                            </Stack>
                        </Grid>
                        <Grid xs={12}>
                            <Card>
                                <CardContent>
                                    <Box>
                                        <h4>Welcome to devias boilerplate with auth0</h4>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
        ;
};

export default Page;
