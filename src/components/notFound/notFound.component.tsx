import { Link } from 'react-router-dom';

import { Button, Container } from '@mui/material';

import notFoundImage from '@assets/images/404page.webp';
import { ROUTES } from '@constant';

import {
    HiddenHeading,
    NotFoundContent,
    NotFoundImage,
    NotFoundWrapper,
} from './notFound.style';

export const NotFound = () => (
    <NotFoundWrapper>
        <Container maxWidth="md">
            <NotFoundContent>
                <HiddenHeading id="not-found-heading" variant="h1">
                    404 - Page Not Found
                </HiddenHeading>

                <NotFoundImage
                    src={notFoundImage}
                    alt="This page does not exist in GitHub Explorer."
                />

                <Button
                    component={Link}
                    to={ROUTES.HOME}
                    variant="contained"
                    color="primary"
                    size="large"
                    aria-label="Navigate back to GitHub Explorer home page"
                >
                    Back to Home
                </Button>
            </NotFoundContent>
        </Container>
    </NotFoundWrapper>
);
