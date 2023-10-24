import * as React from 'react';
import Stack from '@mui/material/Stack';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {useSettings} from "../hooks/use-settings";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {LinearProgress} from "@mui/material";

export const DashboardLoader = () => {
    const settings = useSettings();

    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Container maxWidth={settings.stretch ? false : 'sm'}>
                <Grid
                    container
                    disableEqualOverflow
                    spacing={{
                        xs: 3,
                        lg: 4
                    }}
                >
                    <Grid xs={12}>
                        <Stack sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        </Stack>
                        <Card style={{marginTop: 20}}>
                            <CardContent>
                                <Box>
                                    <LinearProgress/>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}