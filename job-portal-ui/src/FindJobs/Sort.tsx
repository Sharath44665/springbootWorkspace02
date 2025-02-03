import { useState } from 'react';
import { Button, Combobox, useCombobox } from '@mantine/core';
import { IconAdjustmentsAlt } from '@tabler/icons-react';

const groceries = ['relevance', 'most recent', 'salary (low-high)', 'salary (high-low)'];

const Sort = () => {
  const [selectedItem, setSelectedItem] = useState("relevance");
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      

      <Combobox
        store={combobox}
        width={250}
        position="bottom-start"
        withArrow
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
        classNames={{option:'capitalize'}}
      >
        <Combobox.Target >
          <Button classNames={{label:'capitalize'}} onClick={() => combobox.toggleDropdown()} rightSection={<IconAdjustmentsAlt/>}>{selectedItem }</Button>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}

export default Sort;