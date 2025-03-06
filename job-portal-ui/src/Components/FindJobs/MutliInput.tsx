import { useEffect, useState } from 'react';
import { Checkbox, Combobox, Group, Pill, PillsInput, useCombobox } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../../Slices/FilterSlice';
// import { IconSearch, IconMapPin, IconBriefcase, IconRecharging } from '@tabler/icons-react';


const MultiInput = (props: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setData(props.options)
  }, [])
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });
  const MAX_DISPLAYED_VALUES = 2;
  const [search, setSearch] = useState('');
  const [data, setData] = useState<string[]>([]);
  const [value, setValue] = useState<string[]>([]);

  const exactOptionMatch = data.some((item) => item === search);



  const handleValueSelect = (val: string) => {
    setSearch('');
    if (val === '$create') {
      setData((current) => [...current, search]);
      setValue((current) => [...current, search]);
      dispatch(updateFilter({ [props.title]: [...value, search] }))
    } else {
      dispatch(updateFilter({ [props.title]: value.includes(val) ? value.filter((v) => v !== val) : [...value, val] }))
      setValue((current) =>
        current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
      );
    }
  };

  const handleValueRemove = (val: string) => {
    dispatch(updateFilter({ [props.title]: value.filter((v) => v !== val) }))
    setValue((current) => current.filter((v) => v !== val));

  }

  // const values = value.map((item) => (
  //   <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
  //     {item}
  //   </Pill>
  // ));

  const values = value
    .slice(
      0,
      MAX_DISPLAYED_VALUES === value.length ? MAX_DISPLAYED_VALUES : MAX_DISPLAYED_VALUES - 1
    )
    .map((item) => (
      <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
        {item}
      </Pill>
    ));


  const options = data
    .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
    .map((item) => (
      <Combobox.Option value={item} key={item} active={value.includes(item)}>
        <Group gap="sm">
          <Checkbox
            checked={value.includes(item)}
            onChange={() => { }}
            aria-hidden
            tabIndex={-1}
            style={{ pointerEvents: 'none' }}
          />
          {/* {value.includes(item) ? <CheckIcon size={12} /> : null} */}
          {value.includes(item)}
          <span>{item}</span>
        </Group>
      </Combobox.Option>
    ));
  // console.log(props.icons)
  return (
    <Combobox store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false} >
      <Combobox.DropdownTarget>
        <PillsInput onClick={() => combobox.openDropdown()} label={props.title} multiline={false} leftSection={<div className='bg-gray-100 text-black p-1 rounded-full bg-opacity-5'>< props.icon /> </div>} >

          <Pill.Group>
            {value.length > 0 ? (
              <>
                {values}
                {value.length > MAX_DISPLAYED_VALUES && (
                  <Pill>+{value.length - (MAX_DISPLAYED_VALUES - 1)} more</Pill>
                )}
              </>
            ) : ''}


            <Combobox.EventsTarget>
              <PillsInput.Field
                onFocus={() => combobox.openDropdown()}
                onBlur={() => combobox.closeDropdown()}
                value={search}
                placeholder="Search values"
                onChange={(event) => {
                  combobox.updateSelectedOptionIndex();
                  setSearch(event.currentTarget.value);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Backspace' && search.length === 0) {
                    event.preventDefault();
                    handleValueRemove(value[value.length - 1]);
                  }
                }}

              />
            </Combobox.EventsTarget>
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options}

          {!exactOptionMatch && search.trim().length > 0 && (
            <Combobox.Option value="$create">+ Create {search}</Combobox.Option>
          )}

          {/* {exactOptionMatch && search.trim().length > 0 && options.length === 0 && (
            <Combobox.Empty>Nothing found</Combobox.Empty>
          )} */}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}

export default MultiInput;