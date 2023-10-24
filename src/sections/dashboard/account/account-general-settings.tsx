import type {FC} from 'react';
import PropTypes from 'prop-types';
import User01Icon from '@untitled-ui/icons-react/build/esm/User01';
import {alpha} from '@mui/system/colorManipulator';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

interface AccountGeneralSettingsProps {
    avatar: string
    email: string;
}

export const AccountGeneralSettings: FC<AccountGeneralSettingsProps> = (props) => {
    const {avatar, email} = props;

    return (
        <Stack
            spacing={4}
            {...props}
        >
            <Card>
                <CardContent>
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            xs={12}
                            md={4}
                        >
                            <Typography variant="h6">
                                Basic details
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            md={8}
                        >
                            <Stack spacing={3}>
                                <Stack
                                    alignItems="center"
                                    direction="row"
                                    spacing={2}
                                >
                                    <Box
                                        sx={{
                                            borderColor: 'neutral.300',
                                            borderRadius: '50%',
                                            borderStyle: 'dashed',
                                            borderWidth: 1,
                                            p: '4px'
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                borderRadius: '50%',
                                                height: '100%',
                                                width: '100%',
                                                position: 'relative'
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    alignItems: 'center',
                                                    backgroundColor: (theme) => alpha(theme.palette.neutral[700], 0.5),
                                                    borderRadius: '50%',
                                                    color: 'common.white',
                                                    display: 'flex',
                                                    height: '100%',
                                                    justifyContent: 'center',
                                                    left: 0,
                                                    opacity: 0,
                                                    position: 'absolute',
                                                    top: 0,
                                                    width: '100%',
                                                    zIndex: 1,
                                                }}
                                            >
                                            </Box>
                                            <Avatar
                                                src={avatar}
                                                sx={{
                                                    height: 100,
                                                    width: 100
                                                }}
                                            >
                                                <SvgIcon>
                                                    <User01Icon/>
                                                </SvgIcon>
                                            </Avatar>
                                        </Box>
                                    </Box>
                                </Stack>
                                <Stack
                                    alignItems="center"
                                    direction="row"
                                    spacing={2}
                                >
                                    <TextField
                                        defaultValue={email}
                                        disabled
                                        label="Email Address"
                                        sx={{
                                            flexGrow: 1,
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderStyle: 'dashed'
                                            }
                                        }}
                                    />
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Stack>
    );
};

AccountGeneralSettings.propTypes = {
    avatar: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};
