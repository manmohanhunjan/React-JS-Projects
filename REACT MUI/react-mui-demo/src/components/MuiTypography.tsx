import { Typography } from '@mui/material'

export const MuiTypography = () => {
    return (
        <div>
            <Typography variant="h1">h1 Heading</Typography>
            <Typography variant="h2">h2 Heading</Typography>
            <Typography variant="h3">h3 Heading</Typography>
            <Typography variant="h4" component="h1" gutterBottom>
                h4 Heading
            </Typography>
            <Typography variant="h5">h5 Heading</Typography>
            <Typography variant="h6">h6 Heading</Typography>

            <Typography variant="subtitle1">subtitle1</Typography>
            <Typography variant="subtitle2">subtitle2</Typography>

            <Typography variant="body1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
                voluptatibus vero illo porro quisquam assumenda deleniti fugiat
                repellendus a, laboriosam dolorem id. Aut recusandae nobis amet
                voluptatum, iste nisi quibusdam.
            </Typography>
            <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                corrupti animi dicta asperiores tempora, odio labore vitae error
                fugit totam quas incidunt quae rerum, dolorum provident vero eum
                ex mollitia?
            </Typography>
        </div>
    )
}
