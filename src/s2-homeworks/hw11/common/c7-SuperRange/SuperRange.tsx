import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                margin: `0 22px 0 22px`,
                width: '147px',
                height: '4px',
                '& .MuiSlider-rail': {
                    color: `rgba(139, 139, 139, 1)`,
                },
                '& .MuiSlider-track': {
                    color: `rgba(0, 204, 34, 1)`,
                },
                '& .MuiSlider-thumb': {
                    backgroundColor: 'white',
                    border: '1px solid rgba(0, 204, 34, 1)',
                    boxSizing: 'border-box',
                    width: '18px',
                    height: '18px',
                    '&:before': {
                        content: '""',
                        display: 'block',
                        width: '6px',
                        height: '6px',
                        backgroundColor: 'rgba(0, 204, 34, 1)',
                        borderRadius: '50%',
                        margin: '6px auto',
                    },
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
