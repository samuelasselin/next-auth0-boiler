import type {FC, ReactNode} from 'react';
import PropTypes from 'prop-types';

import {withAuthGuard} from 'src/hocs/with-auth-guard';
import {useSettings} from 'src/hooks/use-settings';
import {useSections} from './config';
import {VerticalLayout} from './vertical-layout';
import {LoaderProvider} from "../../contexts/loader";

interface LayoutProps {
    children?: ReactNode;
}

export const Layout: FC<LayoutProps> = withAuthGuard((props) => {
    const settings = useSettings();
    const sections = useSections();

    return (
        <LoaderProvider>
                <VerticalLayout
                    sections={sections}
                    navColor={settings.navColor}
                    {...props}
                />
        </LoaderProvider>

    );
});

Layout.propTypes = {
    children: PropTypes.node
};
