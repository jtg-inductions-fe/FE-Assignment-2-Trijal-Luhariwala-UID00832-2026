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
                    alt="Ooops... page not found. The route you're looking for drifted out of orbit or doesn't exist in GitHub Explorer."
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
