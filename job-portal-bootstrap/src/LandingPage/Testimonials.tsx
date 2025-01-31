import Grid from '@mui/material/Grid2';
import Container from '@mui/material/Container';
import { Avatar, Card, CardContent, CardHeader, Rating, Typography } from "@mui/material";
import { testimonials } from "../Data/Data";


function Testimonials() {

    return (
        <>
            <div className="px-2 my-5 text-center">

                <div className="text-center fs-1" style={{ textTransform: 'capitalize' }}>
                    what <span className="text-primary">user</span> say about us?
                </div>

            </div>

            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    {
                        testimonials.map((item, idx) => {
                            return (
                                <Grid key={idx}>
                                    <Card sx={{ maxWidth: 350, border: '1px solid lightgrey' }} key={idx}>
                                        <CardHeader key={idx} avatar={<Avatar sx={{ backgroundColor: 'blue', height: '50px', width: '50px' }}>S</Avatar>}
                                            title={<Typography sx={{ fontSize: '22px' }}>{item.name}</Typography>}
                                            subheader={<Rating name="half-rating" defaultValue={item.rating} precision={0.5} />}
                                        />
                                        <CardContent key={idx}>
                                            <Typography key={idx} variant="body2" sx={{ fontSize: '17px' }}>{item.testimonial}</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )

                        })
                    }
                </Grid>
            </Container>



        </>
    )

}

export default Testimonials;