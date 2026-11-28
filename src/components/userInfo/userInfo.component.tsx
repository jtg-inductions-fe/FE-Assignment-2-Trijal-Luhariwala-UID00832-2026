import type { ReactNode } from 'react';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { Typography } from '@mui/material';

import type { User } from '@types';

import {
    CardHeader,
    CardRoot,
    IdentityGroup,
    MetaLink,
    MetaList,
    MetaRow,
    ProfileAvatar,
    StatItem,
    StatsRow,
} from './userInfo.styles';

export interface UserInfoCardProps {
    user: User;
    actions?: ReactNode;
}
export const UserInfoCard = ({ user, actions }: UserInfoCardProps) => {
    const blog = user.blog?.trim() ?? '';

    return (
        <CardRoot elevation={0}>
            <CardHeader>
                <IdentityGroup>
                    <ProfileAvatar
                        src={user.avatarUrl}
                        alt={user.name ?? user.login}
                    />
                    <div>
                        <Typography variant="h2">
                            {user.name ?? user.login}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            @{user.login}
                        </Typography>
                    </div>
                </IdentityGroup>
                {actions}
            </CardHeader>

            {user.bio && <Typography variant="body1">{user.bio}</Typography>}

            <StatsRow>
                <StatItem>
                    <PeopleOutlineIcon aria-hidden="true" />
                    <Typography variant="subtitle1">
                        {user.followers.toLocaleString()}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Followers
                    </Typography>
                </StatItem>

                <StatItem>
                    <Typography variant="subtitle1">
                        {user.following.toLocaleString()}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Following
                    </Typography>
                </StatItem>

                <StatItem>
                    <FolderOutlinedIcon aria-hidden="true" />
                    <Typography variant="subtitle1">
                        {user.publicRepos.toLocaleString()}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Repos
                    </Typography>
                </StatItem>
            </StatsRow>

            <MetaList>
                <MetaRow>
                    <LocationOnOutlinedIcon aria-hidden="true" />
                    <Typography
                        variant="body2"
                        color={
                            user.location ? 'text.primary' : 'text.secondary'
                        }
                    >
                        {user.location ?? 'Not specified'}
                    </Typography>
                </MetaRow>

                <MetaRow>
                    <OpenInNewOutlinedIcon aria-hidden="true" />
                    <MetaLink
                        href={user.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {user.profileUrl}
                    </MetaLink>
                </MetaRow>

                <MetaRow>
                    <LinkOutlinedIcon aria-hidden="true" />
                    {blog ? (
                        <MetaLink
                            href={blog}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {blog}
                        </MetaLink>
                    ) : (
                        <Typography variant="body2" color="text.secondary">
                            Not provided
                        </Typography>
                    )}
                </MetaRow>

                <MetaRow>
                    <EmailOutlinedIcon aria-hidden="true" />
                    {user.email ? (
                        <MetaLink href={`mailto:${user.email}`}>
                            {user.email}
                        </MetaLink>
                    ) : (
                        <Typography variant="body2" color="text.secondary">
                            Not public
                        </Typography>
                    )}
                </MetaRow>
            </MetaList>
        </CardRoot>
    );
};
