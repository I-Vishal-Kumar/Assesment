import { Paper, Typography, Divider } from '@mui/material';

export const MainSection = () => (
    <Paper elevation={4} sx={{ height: "-webkit-fill-available", maxWidth: 'xs', p: 3 }}>
        <Typography variant="overline" fontWeight={600} letterSpacing={1.2} fontSize={18}>Vishal Kumar</Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body1" component={'article'} >
            Hi! I&apos;m Vishal Kumar, a passionate developer with expertise in building scalable and user-friendly applications. I thrive on solving challenges and creating impactful digital experiences.
        </Typography>
        <Typography variant="body1" mt={3}>
            <strong>Email:</strong> vishal2983kumar@gmail.com
        </Typography>
        <Typography variant="body1">
            <strong>Phone:</strong> +91 9162871357
        </Typography>
    </Paper>
);
