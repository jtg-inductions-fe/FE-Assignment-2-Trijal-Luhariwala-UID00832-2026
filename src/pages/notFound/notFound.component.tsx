import { Link } from 'react-router-dom';

import { Button, Container } from '@mui/material';

import notFoundImage from '@assets/images/404page.webp';
import { ROUTES } from '@constant';

import {
    NotFoundContent,
    NotFoundImage,
    NotFoundWrapper,
} from './notFound.style';

export const NotFound = () => (
    <NotFoundWrapper>
        <Container maxWidth="md">
            <NotFoundContent>
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
                >
                    Back to Home
                </Button>
            </NotFoundContent>
        </Container>
    </NotFoundWrapper>
);
