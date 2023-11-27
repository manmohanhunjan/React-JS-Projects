import { Stack, TextField } from '@mui/material'

export const MuiTextField = () => {
    return (
        <div>
            <Stack spacing={4}>
                <Stack direction={'row'} spacing={2}>
                    <TextField variant="outlined" label="name" />
                    <TextField variant="filled" label="name" />
                    <TextField variant="standard" label="name" />
                </Stack>
                <Stack spacing={2} direction={'row'}>
                    <TextField
                        label="Small secondary"
                        color="secondary"
                        size="small"
                    />
                </Stack>
                <Stack spacing={2} direction={'row'}>
                    <TextField label="Form Input" required />
                    <TextField
                        label="Password"
                        type="password"
                        required
                        helperText="Do not show your password to anyone."
                        disabled
                    />
                    <TextField
                        label="Read Only"
                        InputProps={{ readOnly: true }}
                    />
                </Stack>
            </Stack>
        </div>
    )
}
