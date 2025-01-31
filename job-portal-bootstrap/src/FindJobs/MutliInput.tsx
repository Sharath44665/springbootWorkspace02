import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import { useEffect, useState } from 'react';

function MultiInput(props:any) {
  useEffect(() => {setData(props.options);}, [])
  const [data, setData ] = useState([])
  return (  
    <Autocomplete
        multiple
        id="tags-filled"
        limitTags={1}
        // options={top100Films.map((option) => option.title)}
        // defaultValue={[top100Films[13].title]}
        options={data}
        defaultValue={data[1]}
        freeSolo
        renderTags={(value: readonly string[], getTagProps) =>
          value.map((option: string, index: number) => {
            const { key, ...tagProps } = getTagProps({ index });
            return (
              <Chip variant="outlined" label={option} key={key} {...tagProps} />
            );
          })
        }
        renderInput={(params) => (
          // removed place holder
          <TextField
            {...params}
            variant="filled"
            label={`Search ${props.title}`}
           
            
          />
        )}
      />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const top100Films = [
  
// ];

export default MultiInput;