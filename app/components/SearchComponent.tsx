import { Autocomplete, AutocompleteItem } from '@nextui-org/autocomplete';
import { Termeni } from '../../public/data/DummyData';
import { useRouter } from 'next/navigation';

export const SearchComponent = () => {
  const router = useRouter();

  const onInputChange = (value) => {
    router.push(`/${value}`);
  };

  return (
    <div>
      <Autocomplete
        defaultItems={Termeni}
        label=""
        placeholder="..."
        className="max-w-xs text-black"
        variant="faded"
        color="secondary"
        onSelectionChange={onInputChange}
        popoverProps={{
          className: 'w-fit  max-h-100',
          style: {
            maxHeight: '200px !important', // Limitează înălțimea meniului la 200px (ajustabil)
            overflowY: 'auto', // Permite scroll-ul în interiorul meniului
            color: 'black',
          },
        }}
        isClearable={false}
      >
        {(item) => (
          <AutocompleteItem key={item.label} color="primary">
            {item.label}
          </AutocompleteItem>
        )}
      </Autocomplete>
    </div>
  );
};
